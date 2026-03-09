import React from 'react';
import './AboutUs.css';
import CTASection from '../components/CTASection';
import { Target, TrendingUp, ShieldCheck, Users, Zap, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section section">
        <div className="container text-center">
          <h1 className="about-hero-title">Empowering Entrepreneurs Through Stories</h1>
          <p className="about-hero-subtitle">
            Since 2020, we've been covering the startup ecosystem—from early-stage ideas to unicorn success stories.
          </p>
          
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="about-stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Stories</div>
            </div>
            <div className="about-stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Contributors</div>
            </div>
            <div className="about-stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section section section-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in 2020, we started with a simple belief: every startup has a story worth telling. What began as a small blog has grown into a leading platform for startup news, insights, and inspiration.
              </p>
              <p>
                Our journey mirrors the startups we cover — we've faced challenges, celebrated wins, and learned valuable lessons along the way. Today, we're proud to serve a global community of entrepreneurs, investors, and innovators.
              </p>
              <p>
                From breaking news about funding rounds to in-depth features on emerging technologies, we're committed to providing the stories and insights that help our readers succeed in their own entrepreneurial journeys.
              </p>
            </div>
            <div className="story-image">
              <img src="/story.png" alt="KaroStartup Team" className="team-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Mission & Vision</h2>
            <p className="section-subtitle">We exist to empower entrepreneurs and celebrate innovation</p>
          </div>
          
          <div className="grid grid-2">
            <div className="light-card mission-card">
              <div className="card-icon">
                <Target size={24} />
              </div>
              <h3>Our Mission</h3>
              <p>To provide high-quality, timely, and insightful coverage of the startup ecosystem, helping entrepreneurs make informed decisions and inspiring the next generation of innovators.</p>
            </div>
            
            <div className="light-card mission-card">
              <div className="card-icon">
                <TrendingUp size={24} />
              </div>
              <h3>Our Vision</h3>
              <p>To become the world's most trusted source for startup news and insights, fostering a global community where entrepreneurship thrives and innovation knows no bounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section section section-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-4">
            <div className="light-card value-card">
              <div className="card-icon">
                <ShieldCheck size={24} />
              </div>
              <h4>Truth & Accuracy</h4>
              <p>We prioritize factual reporting and thorough research in every story we publish.</p>
            </div>
            
            <div className="light-card value-card">
              <div className="card-icon">
                <Users size={24} />
              </div>
              <h4>Community First</h4>
              <p>Building a supportive ecosystem for entrepreneurs, innovators, and startup enthusiasts.</p>
            </div>
            
            <div className="light-card value-card">
              <div className="card-icon">
                <Zap size={24} />
              </div>
              <h4>Innovation Focus</h4>
              <p>Highlighting breakthrough ideas and technologies that shape the future of business.</p>
            </div>
            
            <div className="light-card value-card">
              <div className="card-icon">
                <Heart size={24} />
              </div>
              <h4>Passion Driven</h4>
              <p>We love what we do and believe in the power of entrepreneurship to change the world.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default AboutUs;
