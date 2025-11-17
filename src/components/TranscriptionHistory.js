import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import TranscriptionCard from './TranscriptionCard';
import './TranscriptionHistory.css';

export const TranscriptionHistory = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Split filename into name and extension
  const getFileNameParts = (fullName) => {
    const lastDotIndex = fullName.lastIndexOf('.');
    if (lastDotIndex === -1) {
      return { name: fullName, extension: '' };
    }
    return {
      name: fullName.substring(0, lastDotIndex),
      extension: fullName.substring(lastDotIndex)
    };
  };

  // Mock data - replace with actual API call
  const processingItems = [
    {
      id: 1,
      date: 'September 6, 2025',
      time: '4:45',
      fileName: 'ASIAN KUNG-FU GENERATION - Rock band.mp3',
      progress: 7,
      status: 'processing'
    }
  ];

  const transcriptions2025 = [
    {
      id: 2,
      date: 'September 6, 2025',
      time: '4:45',
      fileName: 'ASIAN KUNG-FU GENERATION - Rock bannnnnnnn....mp3',
    },
    {
      id: 3,
      date: 'September 6, 2025',
      time: '4:45',
      fileName: 'ASIAN KUNG-FU GENERATION - Rock bannnnnnnn....mp3',
    },
    {
      id: 4,
      date: 'September 6, 2025',
      time: '4:45',
      fileName: 'ASIAN KUNG-FU GENERATION - Rock bannnnnnnn....mp3',
    },
    {
      id: 5,
      date: 'September 6, 2025',
      time: '4:45',
      fileName: 'ASIAN KUNG-FU GENERATION - Rock bannnnnnnn....mp3',
    },
  ];

  const transcriptions2024 = [
    {
      id: 6,
      date: 'September 6, 2025',
      time: '4:45',
      fileName: 'ASIAN KUNG-FU GENERATION - Rock bannnnnnnn....mp3',
    },
    {
      id: 7,
      date: 'September 6, 2025',
      time: '4:45',
      fileName: 'ASIAN KUNG-FU GENERATION - Rock bannnnnnnn....mp3',
    },
  ];

  const handleDownloadDrums = (id) => {
    console.log('Download drums track:', id);
    // Implement download logic
  };

  const handleDownloadTranscription = (id) => {
    console.log('Download transcription:', id);
    // Implement download logic
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="transcription-history-page">
      <Header />
      
      <div className="history-container">
        <div className="history-content">
          {/* Back button */}
          <button className="back-button" onClick={handleBack}>
            <ArrowLeft size={35} weight="regular" />
            <span>Back</span>
          </button>

          <div className="history-main">
            {/* Header section */}
            <div className="history-header">
              <div className="history-title-section">
                <h1 className="history-title">Transcription History</h1>
              </div>
              <div className="history-info">
                <p>We store your files for 1 year, after which they're automatically deleted.</p>
              </div>
            </div>

            {/* Content section */}
            <div className="history-sections">
              {/* Search bar */}
              <div className="search-bar">
                <MagnifyingGlass size={32} weight="regular" />
                <input
                  type="text"
                  placeholder="Search by audio name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Processing section */}
              {processingItems.length > 0 && (
                <div className="history-section">
                  <h2 className="section-title">Processing</h2>
                  {processingItems.map((item) => {
                    const { name, extension } = getFileNameParts(item.fileName);
                    return (
                      <div key={item.id} className="processing-card">
                        <div className="processing-header">
                          <div className="card-metadata">
                            <span className="card-date">{item.date}</span>
                            <div className="metadata-divider" />
                            <span className="card-time">{item.time}</span>
                          </div>
                          <div className="processing-filename">
                            <span className="filename-name">{name}</span>
                            <span className="filename-extension">{extension}</span>
                          </div>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${item.progress}%` }}
                          >
                            <span className="progress-text">{item.progress}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 2025 section */}
              <div className="history-section">
                <h2 className="section-title">2025</h2>
                <div className="cards-grid">
                  {transcriptions2025.map((item) => (
                    <TranscriptionCard
                      key={item.id}
                      date={item.date}
                      time={item.time}
                      fileName={item.fileName}
                      onDownloadDrums={() => handleDownloadDrums(item.id)}
                      onDownloadTranscription={() => handleDownloadTranscription(item.id)}
                    />
                  ))}
                </div>
              </div>

              {/* 2024 section */}
              <div className="history-section">
                <h2 className="section-title">2024</h2>
                <div className="cards-grid">
                  {transcriptions2024.map((item) => (
                    <TranscriptionCard
                      key={item.id}
                      date={item.date}
                      time={item.time}
                      fileName={item.fileName}
                      onDownloadDrums={() => handleDownloadDrums(item.id)}
                      onDownloadTranscription={() => handleDownloadTranscription(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TranscriptionHistory;
