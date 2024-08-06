import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container maintext">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-text">
              <span>FITNESS ELEMENTS</span>
              <h1>BMI CALCULATOR</h1>
              <p>
                Gutim comes packed with the user-friendly BMI Calculator
                <br /> shortcode which lets
              </p>
              <a href="#" className="primary-btn">Read More</a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
