import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="dot-grid"></div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
