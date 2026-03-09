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
    <section className="section section-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Featured <span className="text-gradient">Startups</span></h2>
          <p className="section-subtitle">
            A sneak peek at some of the incredible startups from the Karo Pitch community.
          </p>
        </div>

        <div className="startups-list">
          {startups.map((startup, idx) => (
            <div className="startup-card light-card" key={idx}>
              <div className="startup-avatar">
                {startup.name.charAt(0)}
              </div>
              <div className="startup-info">
                <div className="startup-header">
                  <h3 className="startup-name">{startup.name}</h3>
                  <span className="startup-category">{startup.category}</span>
                </div>
                <p className="startup-desc">{startup.description}</p>
              </div>
              <div className="startup-vote">
                <ChevronUp size={20} />
                <span>{startup.votes}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#" className="btn btn-outline">Explore All Startups</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
