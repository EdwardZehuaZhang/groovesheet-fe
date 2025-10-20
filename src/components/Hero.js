import React from 'react';
import './Hero.css';

function Hero() {
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
        <div className="upload-area">
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
          <button className="browse-btn">Browse Files</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
