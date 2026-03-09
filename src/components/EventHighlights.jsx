import React from 'react';
import './EventHighlights.css';
import { Camera, Users, GraduationCap, Presentation } from 'lucide-react';

const EventHighlights = () => {
  const highlights = [
    {
      title: 'Live Startup Pitching',
      desc: 'Watch innovative startups pitch their ideas to a panel of seasoned investors.',
      icon: <Presentation size={24} />
    },
    {
      title: 'Investor Networking',
      desc: 'Direct access to institutional investors and influential angel networks.',
      icon: <Users size={24} />
    },
    {
      title: 'Founder Mentorship',
      desc: 'Get personalized feedback and strategies to scale your business.',
      icon: <GraduationCap size={24} />
    },
    {
      title: 'Demo Day Presentations',
      desc: 'Highlighting the best of the best in high-stakes presentation rounds.',
      icon: <Camera size={24} />
    }
  ];

  return (
    <section className="event-highlights section section-alt bg-dot-pattern">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Inside Karo Pitch Events</h2>
          <p className="section-subtitle">A glimpse into the energy, networking, and opportunities at our flagship events.</p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                {item.icon}
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
