import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="apply" className="section cta-section">
      <div className="container">
        <div className="cta-content text-center">
          <h2 className="cta-title">Ready to Pitch Your Startup?</h2>
          <p className="cta-subtitle">
            Join the Karo Pitch ecosystem. Get your story heard and connect with top-tier investors today.
          </p>
          <div className="cta-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn cta-btn">Apply Now</Link>
            <Link to="/partner" className="btn" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff' }}>Partner With Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CTASection;

