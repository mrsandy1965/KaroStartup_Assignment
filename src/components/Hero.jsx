import React from 'react';
import './Hero.css';
import { ArrowRight, Compass, Rocket, Users, Building, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero bg-mesh-gradient">
      <div className="particles-overlay">
        <div className="particle" style={{ width: '400px', height: '400px', top: '-100px', left: '-100px', animationDelay: '0s' }}></div>
        <div className="particle" style={{ width: '300px', height: '300px', bottom: '0', right: '0', animationDelay: '2s' }}></div>
        <div className="particle" style={{ width: '200px', height: '200px', top: '20%', right: '10%', animationDelay: '4s' }}></div>
      </div>
      <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
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
              <Rocket size={20} style={{ marginRight: '8px' }} />
              Apply to Pitch <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#startups" className="btn btn-outline btn-lg">
              Explore Startups <Compass size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>
          
          <div className="hero-stats-new fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="stat-item-new">
              <div className="stat-icon-new">
                <Users size={20} />
              </div>
              <div className="stat-info-new">
                <span className="stat-value-new">500+</span>
                <span className="stat-label-new">Startups Applied</span>
              </div>
            </div>
            <div className="stat-item-new">
              <div className="stat-icon-new">
                <Building size={20} />
              </div>
              <div className="stat-info-new">
                <span className="stat-value-new">50+</span>
                <span className="stat-label-new">Active Investors</span>
              </div>
            </div>
            <div className="stat-item-new">
              <div className="stat-icon-new">
                <MapPin size={20} />
              </div>
              <div className="stat-info-new">
                <span className="stat-value-new">20+</span>
                <span className="stat-label-new">Cities Represented</span>
              </div>
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
