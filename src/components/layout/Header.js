import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <img src="/images/Logo_White.png" alt="DrumScore Logo" className="logo-image" />
          </div>
          <nav className="nav-menu">
            <div className="nav-item dropdown">
              <span>Pricing</span>
              <svg
                width="16"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10986 9.49994L0.609863 1.99994L1.65986 0.949938L8.10986 7.39994L14.5599 0.949938L15.6099 1.99994L8.10986 9.49994Z"
                  fill="white"
                />
              </svg>
            </div>
            <a href="#help" className="nav-item">
              Help
            </a>
            <a href="#about" className="nav-item">
              About
            </a>
            <a href="#blog" className="nav-item">
              Blog
            </a>
          </nav>
        </div>
        <div className="header-right">
          <div className="language-selector desktop-only">
            <span>En</span>
            <svg
              width="16"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.60986 9.49994L1.10986 1.99994L2.15986 0.949938L8.60986 7.39994L15.0599 0.949938L16.1099 1.99994L8.60986 9.49994Z"
                fill="white"
              />
            </svg>
          </div>
          <a href="#login" className="login-btn desktop-only">
            Log in
          </a>
          
          {/* Mobile Hamburger Menu */}
          <button 
            className="hamburger-menu" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <div className="mobile-menu-content">
            <div className="mobile-nav-item">
              <span>Pricing</span>
            </div>
            <a href="#help" className="mobile-nav-item">
              Help
            </a>
            <a href="#about" className="mobile-nav-item">
              About
            </a>
            <a href="#blog" className="mobile-nav-item">
              Blog
            </a>
            <div className="mobile-menu-divider"></div>
            <div className="mobile-nav-item">
              <span>En</span>
              <svg
                width="16"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.60986 9.49994L1.10986 1.99994L2.15986 0.949938L8.60986 7.39994L15.0599 0.949938L16.1099 1.99994L8.60986 9.49994Z"
                  fill="white"
                />
              </svg>
            </div>
            <a href="#login" className="mobile-nav-item">
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
