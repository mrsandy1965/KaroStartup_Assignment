import React from 'react';
import './About.css';
import { Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <div className="about-header text-center">
          <h2 className="section-title">Bridging the Gap Between <span className="text-gradient">Bharat & VCs</span></h2>
          <p className="section-subtitle">
            Thousands of founders across India are building incredible businesses — from D2C brands to manufacturing startups — but many struggle to access investors.
          </p>
        </div>

        <div className="about-content grid grid-2">
          <div className="about-text glass-card light-card">
            <h3>Our Mission</h3>
            <p>
              Karo Pitch is designed to bridge this gap by creating a platform where founders can present their startups directly to investors and gain the visibility they deserve.
            </p>
            <p>
              We believe that great ideas come from everywhere, not just Tier-1 cities. Our goal is to democratize fund-raising for early-stage entrepreneurs in Tier-2 and Tier-3 cities.
            </p>
          </div>
          
          <div className="about-features grid">
            <div className="feature-item">
              <div className="feature-icon"><Target className="icon-svg" /></div>
              <div className="feature-text">
                <h4>Direct Access</h4>
                <p>Skip the cold emails. Pitch directly to a curated panel of active investors and VCs.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><TrendingUp className="icon-svg" /></div>
              <div className="feature-text">
                <h4>Build Credibility</h4>
                <p>Gain massive visibility through KaroStartup's reach and media platform.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Users className="icon-svg" /></div>
              <div className="feature-text">
                <h4>Mentorship</h4>
                <p>Get valuable feedback and guidance from ecosystem veterans to scale your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
