import React, { useState, useRef, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { CheckCircle } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';
import './Hero.css';

// Base URL for the new Orchestrator backend
// In development, we use /api which is proxied to the actual backend
// In production, this will be the full URL
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? (process.env.REACT_APP_API_URL || 'https://api-orchestrator-test-700212390421.asia-southeast1.run.app')
  : '/api';

function Hero({ onLoginRequired }) {
  const { isSignedIn, isLoaded } = useUser();
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [jobId, setJobId] = useState(null);
  const [status, setStatus] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [downloadFilename, setDownloadFilename] = useState(null);
  const fileInputRef = useRef(null);

  // Trigger confetti when download completes
  useEffect(() => {
    if ((status === 'completed' || status === 'succeeded' || status === 'success') && downloadFilename) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [status, downloadFilename]);

  // Handle file selection
  const handleFileChange = (selectedFile) => {
    if (!selectedFile) return;

    // Validate file type
    const validTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav'];
    if (!validTypes.includes(selectedFile.type)) {
      setError('Please upload an MP3 or WAV file');
      return;
    }

    // Validate file size (100MB limit)
    const maxSize = 100 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      setError('File size must be less than 100MB');
      return;
    }

    setFile(selectedFile);
    setError(null);
    
    // Auto-upload after file selection
    handleUpload(selectedFile);
  };

  // Handle upload -> start demucs_separate workflow
  const handleUpload = async (fileToUpload) => {
    // Check if user is logged in
    if (!isLoaded) {
      setError('Loading user data...');
      return;
    }

    if (!isSignedIn) {
      // Trigger login modal
      if (onLoginRequired) {
        onLoginRequired();
      }
      return;
    }

    const formData = new FormData();
    formData.append('file', fileToUpload);  // Changed from 'audio_file' to 'file'

    setError(null);
    setStatus('uploading');
    setProgress(0);

    try {
      const response = await fetch(`${API_BASE_URL}/workflow/demucs_separate`, {
        method: 'POST',
        body: formData
      });

      console.log('Upload response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Upload failed:', errorData);
        throw new Error(errorData.detail || `Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Workflow started:', data);
      const workflowId = data.workflow_id || data.job_id; // fallback if backend returns job_id
      if (!workflowId) {
        throw new Error('No workflow_id returned from server');
      }
      setJobId(workflowId);
      setStatus(data.status || 'pending');
      
      // Give backend a moment to save job data before polling
      // This helps avoid race conditions with Cloud Run scaling
      setTimeout(() => {
        pollStatus(workflowId);
      }, 1000);
    } catch (err) {
      console.error('Upload error:', err);
      
      // Check if it's a CORS error
      if (err.message.includes('fetch') || err.name === 'TypeError') {
        setError('Unable to connect to server. This may be a CORS issue. Please check the console for details.');
      } else {
        setError(err.message || 'Failed to upload file. Please try again.');
      }
      setStatus(null);
    }
  };

  // Poll workflow status
  const pollStatus = async (id) => {
    console.log('Starting resilient polling for job:', id);
    let attempts = 0;
    let consecutive404s = 0;
    let intervalMs = 3000; // start at 3s
    const max404s = 8; // tolerate more 404s (cold starts & eventual consistency)
    let stopped = false;

    const poll = async () => {
      if (stopped) return;
      attempts++;
      console.log(`Poll attempt ${attempts} (interval=${intervalMs}ms)`);
      try {
        const response = await fetch(`${API_BASE_URL}/workflow/status/${id}`, { mode: 'cors', credentials: 'omit', cache: 'no-store' });
        if (response.status === 404) {
          consecutive404s++;
          console.warn(`404 (job not yet visible) ${consecutive404s}/${max404s}`);
          if (consecutive404s >= max404s) {
            setError('Job not found after repeated attempts. Please re-upload.');
            stopped = true;
            return;
          }
          setStatus('pending');
          setProgress(0);
        } else if (!response.ok) {
          const txt = await response.text();
            throw new Error(`Status check failed ${response.status}: ${txt}`);
        } else {
          consecutive404s = 0;
          const data = await response.json();
          console.log('Status data:', data);
          const newStatus = data.status || data.state || 'processing';
          setStatus(newStatus);
          setProgress(data.progress || 0);
          // Optional granular message from backend
          if (data.last_progress_message) {
            console.log('Progress message:', data.last_progress_message);
          }
          if (newStatus === 'completed' || newStatus === 'succeeded' || newStatus === 'success') {
            console.log('Workflow completed, downloading drums output');
            setStatus('completed'); // Ensure status is set
            stopped = true;
            try {
              await downloadDrumFile(id);
            } catch (err) {
              console.error('Download error:', err);
              setError(`Download failed: ${err.message}`);
            }
            return;
          } else if (newStatus === 'failed' || newStatus === 'error') {
            setError(data.message || 'Processing failed.');
            stopped = true;
            return;
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
        if (err.name === 'TypeError') {
          // Network glitch; continue
          console.warn('Network issue, will retry');
        } else {
          setError(`Status error: ${err.message}`);
        }
      } finally {
        // Exponential backoff up to 20s once progress > 60 to reduce load
        if (!stopped) {
          if (progress >= 60 && intervalMs < 20000) intervalMs = Math.min(intervalMs * 2, 20000);
          setTimeout(poll, intervalMs);
        }
      }
    };
    poll();
  };

  // Download drums file from the workflow outputs
  const downloadDrumFile = async (id) => {
    const url = `${API_BASE_URL}/workflow/download/${id}/drums`;
    console.log('Fetching from:', url);
    const res = await fetch(url);
    console.log('Download response:', res.status, res.statusText);
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      console.error('Download failed response:', txt);
      throw new Error(`Download failed ${res.status}: ${txt}`);
    }
    const blob = await res.blob();
    console.log('Blob received:', blob.size, 'bytes');
    // Try to get filename from Content-Disposition header
    const cd = res.headers.get('content-disposition') || '';
    let filename = file?.name ? file.name.replace(/\.[^.]+$/, '_drums.wav') : `drums_${id}.wav`;
    const match = cd.match(/filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i);
    if (match) {
      filename = decodeURIComponent(match[1] || match[2]);
    }
    console.log('Download filename:', filename);
    
    // Store for manual download
    const objectUrl = URL.createObjectURL(blob);
    setDownloadUrl(objectUrl);
    setDownloadFilename(filename);
    
    // Auto-download
    const a = document.createElement('a');
    a.href = objectUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Reset upload state
  const resetUpload = () => {
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }
    setFile(null);
    setJobId(null);
    setStatus(null);
    setProgress(0);
    setError(null);
    setDownloadUrl(null);
    setDownloadFilename(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Manual download handler
  const handleManualDownload = () => {
    if (downloadUrl && downloadFilename) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = downloadFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // Handle browse button click
  const handleBrowseClick = () => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      // Trigger login modal
      if (onLoginRequired) {
        onLoginRequired();
      }
      return;
    }

    fileInputRef.current?.click();
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileChange(droppedFile);
    }
  };

  // Get status message
  const getStatusMessage = () => {
    if (error) return error;
    
    switch (status) {
      case 'uploading':
        return 'Uploading file...';
      case 'pending':
        return 'Job queued...';
      case 'queued':
        return 'Job queued...';
      case 'running':
        return `Processing... ${progress}%`;
      case 'separating':
        return 'Separating drum track...';
      case 'transcribing':
        return 'Transcribing drums to notation...';
      case 'generating_sheet':
        return 'Generating sheet music...';
      case 'processing':
        return `Processing... ${progress}%`;
      case 'completed':
      case 'succeeded':
      case 'success':
        return '✓ Download started! Processing complete.';
      case 'failed':
        return 'Processing failed. Please try again.';
      default:
        return '';
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Audio In. Drum Score Out.</h1>
            <p className="hero-subtitle">
              High-quality drum notation generation with the world's #1 AI-powered technology.
            </p>
          </div>
          <div className="hero-disclaimer">
            <span>By uploading a file, you agree to our </span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
        <div 
          className={`upload-area ${isDragging ? 'dragging' : ''} ${status ? 'processing' : ''} ${status === 'completed' || status === 'succeeded' || status === 'success' ? 'completed' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/mp3,audio/mpeg,audio/wav"
            onChange={(e) => handleFileChange(e.target.files[0])}
            style={{ display: 'none' }}
          />

          {/* Success State */}
          {(status === 'completed' || status === 'succeeded' || status === 'success') && downloadFilename ? (
            <>
              <button className="close-btn" onClick={resetUpload} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="upload-content">
                <div className="upload-icon">
                  <CheckCircle size={64} weight="fill" color="#22c55e" />
                </div>
                <div className="upload-text">
                  <h3>Processing Complete!</h3>
                  <p>{file?.name}</p>
                </div>
              </div>
              <button className="browse-btn" onClick={handleManualDownload}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V16M12 16L16 12M12 16L8 12M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Download Drums Track</span>
              </button>
            </>
          ) : (
          <>
          <div className="upload-content">
            <div className="upload-icon">
              <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_38_12089)">
                  <path d="M52 8.5H12C10.9391 8.5 9.92172 8.92143 9.17157 9.67157C8.42143 10.4217 8 11.4391 8 12.5V52.5C8 53.5609 8.42143 54.5783 9.17157 55.3284C9.92172 56.0786 10.9391 56.5 12 56.5H52C53.0609 56.5 54.0783 56.0786 54.8284 55.3284C55.5786 54.5783 56 53.5609 56 52.5V12.5C56 11.4391 55.5786 10.4217 54.8284 9.67157C54.0783 8.92143 53.0609 8.5 52 8.5ZM22.585 25.085L30.585 17.085C30.7707 16.899 30.9913 16.7515 31.2341 16.6509C31.4769 16.5502 31.7372 16.4984 32 16.4984C32.2628 16.4984 32.5231 16.5502 32.7659 16.6509C33.0087 16.7515 33.2293 16.899 33.415 17.085L41.415 25.085C41.6008 25.2708 41.7482 25.4914 41.8488 25.7342C41.9494 25.977 42.0011 26.2372 42.0011 26.5C42.0011 26.7628 41.9494 27.023 41.8488 27.2658C41.7482 27.5086 41.6008 27.7292 41.415 27.915C41.2292 28.1008 41.0086 28.2482 40.7658 28.3488C40.523 28.4494 40.2628 28.5011 40 28.5011C39.7372 28.5011 39.477 28.4494 39.2342 28.3488C38.9914 28.2482 38.7708 28.1008 38.585 27.915L34 23.3275V38.5C34 39.0304 33.7893 39.5391 33.4142 39.9142C33.0391 40.2893 32.5304 40.5 32 40.5C31.4696 40.5 30.9609 40.2893 30.5858 39.9142C30.2107 39.5391 30 39.0304 30 38.5V23.3275L25.415 27.915C25.0397 28.2903 24.5307 28.5011 24 28.5011C23.4693 28.5011 22.9603 28.2903 22.585 27.915C22.2097 27.5397 21.9989 27.0307 21.9989 26.5C21.9989 25.9693 22.2097 25.4603 22.585 25.085ZM52 52.5H12V42.5H19.1725L24 47.3275C24.3701 47.7006 24.8106 47.9963 25.296 48.1976C25.7814 48.3989 26.302 48.5017 26.8275 48.5H37.1725C37.698 48.5017 38.2186 48.3989 38.704 48.1976C39.1894 47.9963 39.6299 47.7006 40 47.3275L44.8275 42.5H52V52.5Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_38_12089">
                    <rect width="64" height="64" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="upload-text">
              <h3>Drop your tracks here</h3>
              <p>Upload up to 20 files to turn into notation</p>
            </div>
          </div>

          {/* Status and Progress */}
          {(status || error) && status !== 'completed' && status !== 'succeeded' && status !== 'success' && (
            <div className="upload-status">
              <p className={error ? 'error' : 'status-message'}>
                {getStatusMessage()}
              </p>
              {status && status !== 'completed' && !error && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          )}

          <button 
            className="browse-btn" 
            onClick={handleBrowseClick}
            disabled={status && status !== 'completed' && status !== 'failed'}
          >
            {status && status !== 'completed' && status !== 'failed' 
              ? 'Processing...' 
              : 'Browse Files'}
          </button>
          </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
