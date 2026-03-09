import React from 'react';
import './SuccessStories.css';
import { TrendingUp, Award, ExternalLink } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'GreenCart',
      category: 'AgriTech',
      description: 'Raised ₹2Cr after pitching at early-stage events and connecting with top investors.',
      achievement: 'Raised ₹2Cr Funding',
      icon: <TrendingUp size={24} />,
      color: '#4CAF50'
    },
    {
      id: 2,
      name: 'UrbanThread',
      category: 'D2C Fashion',
      description: 'Scaled from an Instagram store to a national brand with mentorship from industry leaders.',
      achievement: 'National Expansion',
      icon: <Award size={24} />,
      color: '#FF9800'
    },
    {
      id: 3,
      name: 'FinAI',
      category: 'FinTech SaaS',
      description: 'Built AI analytics for SMEs and secured angel funding through the Karo Pitch ecosystem.',
      achievement: 'Secured Angel Round',
      icon: <ExternalLink size={24} />,
      color: '#2196F3'
    }
  ];

  return (
    <section className="success-stories section section-alt bg-dot-pattern">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Startups That Got Discovered</h2>
          <p className="section-subtitle">Real outcomes for real founders. Join the next batch of success stories.</p>
        </div>

        <div className="stories-grid">
          {stories.map(story => (
            <div key={story.id} className="story-card shadow-hover">
              <div className="story-icon" style={{ backgroundColor: `${story.color}15`, color: story.color }}>
                {story.icon}
              </div>
              <div className="story-badge">{story.category}</div>
              <h3 className="story-name">{story.name}</h3>
              <p className="story-desc">{story.description}</p>
              <div className="story-achievement">
                <span className="achievement-label">Result:</span>
                <span className="achievement-value">{story.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
