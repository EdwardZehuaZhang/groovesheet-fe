import React, { useState, useEffect } from 'react';
import './Header.css';
import { LoginModal } from '../LoginModal';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openLoginModal = (e) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

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
          <button onClick={openLoginModal} className="login-btn desktop-only">
            Log in
          </button>

          {/* Mobile Hamburger Menu */}
          <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
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
            <button onClick={openLoginModal} className="mobile-nav-item">
              Log in
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
}

export default Header;
