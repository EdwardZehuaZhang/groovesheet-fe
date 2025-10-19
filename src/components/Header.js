import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <svg width="176" height="34" viewBox="0 0 176 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="25" fill="white" fontSize="24" fontWeight="600">DrumScore</text>
            </svg>
          </div>
          <nav className="nav-menu">
            <div className="nav-item dropdown">
              <span>Pricing</span>
              <svg width="16" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.10986 9.49994L0.609863 1.99994L1.65986 0.949938L8.10986 7.39994L14.5599 0.949938L15.6099 1.99994L8.10986 9.49994Z" fill="white"/>
              </svg>
            </div>
            <a href="#help" className="nav-item">Help</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#blog" className="nav-item">Blog</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="language-selector">
            <span>En</span>
            <svg width="16" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.60986 9.49994L1.10986 1.99994L2.15986 0.949938L8.60986 7.39994L15.0599 0.949938L16.1099 1.99994L8.60986 9.49994Z" fill="white"/>
            </svg>
          </div>
          <a href="#login" className="login-btn">Log in</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
