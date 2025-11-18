import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ComparePlans from './components/ComparePlans';
import FAQ from './components/FAQ';
import Footer from './components/layout/Footer';
import { LoginModal } from './components/LoginModal';
import TranscriptionHistory from './components/TranscriptionHistory';
import SSOCallback from './components/SSOCallback';

function LandingPage({ onLoginClick }) {
  return (
    <div className="app-container">
      <div className="dot-grid"></div>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Hero_Background.png)` }}
      ></div>
      <Header onLoginClick={onLoginClick} />
      <Hero onLoginRequired={onLoginClick} />
      <Features />
      <Pricing />
      <Testimonials />
      <ComparePlans />
      <FAQ />
      <Footer />
    </div>
  );
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage onLoginClick={openLoginModal} />} />
        <Route path="/history" element={<TranscriptionHistory />} />
        <Route path="/sso-callback" element={<SSOCallback />} />
      </Routes>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </Router>
  );
}

export default App;
