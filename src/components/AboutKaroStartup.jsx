import React from 'react';
import './AboutKaroStartup.css';

const AboutKaroStartup = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="karo-startup-wrapper glass-card">
          <div className="karo-startup-content text-center">
            <h2 className="section-title">Built by <span className="text-gradient">KaroStartup</span></h2>
            <p className="karo-desc">
              KaroPitch is brought to you by <strong>KaroStartup</strong>, one of India's fastest-growing startup storytelling platforms. We share founder journeys and startup insights with a thriving community of entrepreneurs and startup enthusiasts.
            </p>
            <p className="karo-desc">
              Our platform aims to empower founders by giving them visibility, mentorship, and access to the opportunities they need to build the next big thing from India.
            </p>
            <div className="karo-actions">
              <a href="https://instagram.com/karostartup" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Join our Community</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKaroStartup;
