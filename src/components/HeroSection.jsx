// HeroSection.jsx
import React, { useEffect, useState } from 'react';
import "./HeroSection.css";
import Navbar from "./Navbar";
import ImageGrid from "./ImageGrid";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Navbar */}

      {/* Main Content */}
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-left">
          {/* Decorative Dots */}
          <div className="dot-row">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Smarter Travel Decisions, Powered by{" "}
            <span className="highlighted-text">
              AI
              <span className="highlight-bar"></span>
              <span className="highlight-shadow"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            An <strong>AI-powered hub</strong> for <strong>real-time travel updates</strong>,{" "}
            <strong>visa rules</strong>, <strong>study-abroad insights</strong>, and{" "}
            <strong>global advisories</strong> — designed to guide both students and travelers
            toward smarter journeys.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary">Unlock Travel Insights</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* Right Column (Image Grid) */}
        <div className="hero-right">
          <ImageGrid />
        </div>
      </div>

      {/* Background Glow */}
      <div className="hero-glow"></div>

      {/* Background Mountains */}
      <div className="hero-footer-bg">
        <div className="hero-mountains"></div>
        <div className="hero-gradient"></div>
      </div>
    </div>
  );
};

export default HeroSection;
