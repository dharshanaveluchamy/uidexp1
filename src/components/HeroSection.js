import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to the Seminar Hall Booking </h1>
        <p>Book your seminar halls with ease and efficiency.</p>
        <a href="#book-now" className="hero-btn">Book Now</a>
      </div>
    </div>
  );
}

export default HeroSection;
