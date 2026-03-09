import React from 'react';
import './FeaturedStartups.css';
import { ChevronUp } from 'lucide-react';

const startups = [
  {
    name: 'SnackCraft',
    category: 'D2C Food Brand',
    description: 'Healthy snacks made for India’s growing fitness community.',
    votes: 482
  },
  {
    name: 'FarmLink',
    category: 'AgriTech',
    description: 'Connecting farmers directly with urban retailers.',
    votes: 356
  },
  {
    name: 'FinAI',
    category: 'Fintech SaaS',
    description: 'AI-powered financial analytics for SMEs.',
    votes: 289
  }
];

const FeaturedStartups = () => {
  return (
    <section className="section section-light" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Featured <span style={{ color: '#E51919' }}>Startups</span></h2>
          <p className="section-subtitle" style={{ fontSize: '1rem', color: '#555555', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Example startup cards showcasing the incredible founders in the Karo Pitch ecosystem.
          </p>
        </div>

        <div className="startups-grid">
          {startups.map((startup, idx) => (
            <div className="startup-grid-card" key={idx}>
              <div className="startup-card-top">
                <div className="startup-avatar-box">
                  {startup.name.charAt(0)}
                </div>
                <div className="startup-vote-small">
                  <ChevronUp size={16} strokeWidth={2.5} />
                  <span>{startup.votes}</span>
                </div>
              </div>
              <div className="startup-card-body">
                <span className="startup-category-tag">{startup.category}</span>
                <h3 className="startup-name-bold">{startup.name}</h3>
                <p className="startup-desc-text">{startup.description}</p>
              </div>
              <div className="startup-card-footer">
                <a href="#" className="view-details-link">View Details →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <a href="#" className="btn explore-btn">Explore All Startups</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
