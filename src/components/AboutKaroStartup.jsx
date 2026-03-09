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
              KaroPitch is brought to you by <strong>KaroStartup</strong>, India's leading startup media platform. We have published thousands of startup stories, highlighting founder journeys across the nation.
            </p>
            <p className="karo-desc">
              We have cultivated a large founder community aimed at empowering entrepreneurs with the visibility and connection they need to succeed in the startup ecosystem.
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
