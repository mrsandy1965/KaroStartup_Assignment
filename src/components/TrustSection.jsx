import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  const investors = [
    { name: 'Sequoia', logo: 'https://logo.clearbit.com/sequoiacap.com' },
    { name: 'Blume', logo: 'https://logo.clearbit.com/blume.vc' },
    { name: '100X.VC', logo: 'https://logo.clearbit.com/100x.vc' },
    { name: 'AngelList', logo: 'https://logo.clearbit.com/angellist.com' },
    { name: 'LetsVenture', logo: 'https://logo.clearbit.com/letsventure.com' },
    { name: 'Accel', logo: 'https://logo.clearbit.com/accel.com' }
  ];

  return (
    <section className="trust-section section section-light bg-dot-pattern">
      <div className="container">
        <h3 className="trust-title">Trusted by Investors & Startup Ecosystem Leaders</h3>
        <div className="investor-grid">
          {investors.map((investor, index) => (
            <div key={index} className="investor-logo-wrapper">
              <div className="investor-logo-container">
                <img 
                  src={investor.logo} 
                  alt={investor.name} 
                  className="investor-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="investor-name-fallback" style={{ display: 'none' }}>{investor.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
