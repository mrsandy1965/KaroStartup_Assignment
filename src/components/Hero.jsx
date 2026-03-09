import React from 'react';
import './Hero.css';
import { ArrowRight, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge fade-in">Introducing Karo Pitch v1.0</div>
          <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
            Pitch Your Startup to India's <span className="text-gradient">Top Investors</span>
          </h1>
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Karo Pitch helps early-stage founders from across India pitch their startups directly to investors and raise funding. Build visibility, get mentorship, and scale.
          </p>
          
          <div className="hero-actions fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#apply" className="btn btn-primary btn-lg">
              Apply to Pitch <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#startups" className="btn btn-outline btn-lg">
              Explore Startups <Compass size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>
          
          <div className="hero-stats fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="stat">
              <span className="stat-value">500+</span>
              <span className="stat-label">Startups Applied</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Active Investors</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-glow"></div>
          <img 
            src="/hero-illustration.png" 
            alt="Startup founder pitching to investors" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
