import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="apply" className="section cta-section">
      <div className="container">
        <div className="cta-content text-center">
          <h2 className="cta-title">Want to Join Our Journey?</h2>
          <p className="cta-subtitle">
            Whether you're a startup founder with a story to share or looking to pitch, we’re here to help you take the next step.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn cta-btn">Contact Us →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CTASection;

