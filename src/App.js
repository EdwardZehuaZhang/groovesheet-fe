import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ComparePlans from './components/ComparePlans';
import FAQ from './components/FAQ';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="dot-grid"></div>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Hero_Background.png)` }}
      ></div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <ComparePlans />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
