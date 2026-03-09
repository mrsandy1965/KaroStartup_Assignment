import React from 'react';
import './Investors.css';

const logoPlaceholders = [
  'Venture Capital', 'Angel Network', 'Family Office', 
  'Seed Fund', 'Growth Equity', 'Micro VC'
];

const Investors = () => {
  return (
    <section id="investors" className="section">
      <div className="container">
        <div className="investors-wrapper">
          <div className="investors-content">
            <h2 className="section-title">Meet Investors Looking for the <span className="text-gradient">Next Big Startup</span></h2>
            <p className="section-subtitle" style={{ margin: '0 0 2rem 0', textAlign: 'left' }}>
              Investors from across India attend Karo Pitch events to discover promising startups and invest in the next generation of founders. 
              Join a network of leading funds, active angels, and strategic partners.
            </p>
            <a href="#partner" className="btn btn-outline">Become an Investor Partner</a>
          </div>
          
          <div className="investors-logos">
            {logoPlaceholders.map((name, idx) => (
              <div className="logo-placeholder glass-card" key={idx}>
                <div className="logo-placeholder-text">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
