import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';
import { Rocket, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="apply" className="section cta-section">
      <div className="container">
        <div className="cta-content text-center">
          <h2 className="cta-title">Ready to Pitch Your Startup?</h2>
          <p className="cta-subtitle">
            Join the Karo Pitch ecosystem. Get your story heard and connect with top-tier investors today.
          </p>
          <div className="cta-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-white btn-lg" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', color: 'var(--primary-red)' }}>
              <Rocket size={20} style={{ marginRight: '10px', color: 'var(--primary-red)' }} />
              Apply Now <ArrowRight size={20} style={{ marginLeft: '10px' }} />
            </Link>
            <Link to="/partner" className="btn btn-outline-white btn-lg" style={{ 
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              color: '#fff',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              padding: '0.8rem 2.5rem',
              borderRadius: '12px',
              fontWeight: '700'
            }}>
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CTASection;

