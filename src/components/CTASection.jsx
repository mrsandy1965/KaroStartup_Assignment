import React from 'react';
import './CTASection.css';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="apply" className="section cta-section">
      <div className="cta-bg-glow"></div>
      <div className="container">
        <div className="cta-content text-center glass-card">
          <div className="cta-icon">
            <Rocket size={48} />
          </div>
          <h2 className="cta-title">Ready to Pitch Your <span className="text-gradient">Startup</span>?</h2>
          <p className="cta-subtitle">
            Take the leap. Apply now to get in front of India's top investors and take your startup to the next level.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary btn-lg">Apply Now</a>
            <a href="#partner" className="btn btn-outline btn-lg">Partner With Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
