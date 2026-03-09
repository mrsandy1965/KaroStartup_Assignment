import React from 'react';
import './Partner.css';
import { Code, TrendingUp, Handshake, Users, Mail, Phone, MapPin } from 'lucide-react';

const Partner = () => {
  return (
    <main className="partner-page">
      {/* Hero Section */}
      <section className="partner-hero-section section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="partner-hero-text">
              <h1 className="about-hero-title">Partner with <span style={{color: 'var(--color-primary)'}}>Karo Startup</span></h1>
              <p className="about-hero-subtitle" style={{ margin: '0 0 2.5rem', textAlign: 'left' }}>
                Join our ecosystem of innovative partners and unlock new opportunities for growth. Together, we can create exceptional value for customers worldwide.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'flex-start', marginBottom: 0 }}>
                <a href="#apply-partner" className="btn btn-primary btn-lg">Become a Partner</a>
                <a href="#partner-types" className="btn btn-outline btn-lg" style={{ color: '#111', borderColor: '#EBEBEB', backgroundColor: '#F8F9FA' }}>Learn More</a>
              </div>
            </div>
            <div className="partner-hero-image">
              <img src="/about_team_photo.png" alt="Karo Startup Partners" className="team-photo" />
            </div>
          </div>

          <div className="about-stats-grid" style={{ marginTop: '4rem' }}>
            <div className="about-stat-item">
              <div className="stat-number text-gradient">500+</div>
              <div className="stat-label">Active Partners</div>
            </div>
            <div className="about-stat-item">
              <div className="stat-number text-gradient">$50M+</div>
              <div className="stat-label">Partner Revenue</div>
            </div>
            <div className="about-stat-item">
              <div className="stat-number text-gradient">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="about-stat-item">
              <div className="stat-number text-gradient">98%</div>
              <div className="stat-label">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partner-types" className="partner-types-section section section-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge">Partnership Types</span>
            <h2 className="section-title">Find Your Perfect Partnership</h2>
            <p className="section-subtitle">We offer flexible partnership models tailored to your business needs and goals.</p>
          </div>

          <div className="grid grid-2">
            <div className="light-card type-card">
              <div className="card-icon">
                <Code size={24} />
              </div>
              <div className="type-content">
                <h3>Technology Partners</h3>
                <p>Integrate your solutions with our platform to create seamless experiences for mutual customers.</p>
                <ul className="partner-benefits">
                  <li><ShieldCheck size={16} /> API access</li>
                  <li><ShieldCheck size={16} /> Technical support</li>
                  <li><ShieldCheck size={16} /> Co-development opportunities</li>
                </ul>
              </div>
            </div>

            <div className="light-card type-card">
              <div className="card-icon">
                <TrendingUp size={24} />
              </div>
              <div className="type-content">
                <h3>Reseller Partners</h3>
                <p>Expand your portfolio by offering our products and services to your existing customer base.</p>
                <ul className="partner-benefits">
                  <li><ShieldCheck size={16} /> Competitive margins</li>
                  <li><ShieldCheck size={16} /> Sales enablement</li>
                  <li><ShieldCheck size={16} /> Marketing materials</li>
                </ul>
              </div>
            </div>

            <div className="light-card type-card">
              <div className="card-icon">
                <Handshake size={24} />
              </div>
              <div className="type-content">
                <h3>Strategic Partners</h3>
                <p>Collaborate on joint ventures, market expansion, and innovative product development.</p>
                <ul className="partner-benefits">
                  <li><ShieldCheck size={16} /> Revenue sharing</li>
                  <li><ShieldCheck size={16} /> Joint marketing</li>
                  <li><ShieldCheck size={16} /> Executive sponsorship</li>
                </ul>
              </div>
            </div>

            <div className="light-card type-card">
              <div className="card-icon">
                <Users size={24} />
              </div>
              <div className="type-content">
                <h3>Affiliate Partners</h3>
                <p>Earn commissions by referring new customers to Karo Startup through your network.</p>
                <ul className="partner-benefits">
                  <li><ShieldCheck size={16} /> Generous commissions</li>
                  <li><ShieldCheck size={16} /> Real-time tracking</li>
                  <li><ShieldCheck size={16} /> Monthly payouts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge">Partner Success Stories</span>
            <h2 className="section-title">What Our Partners Say</h2>
          </div>

          <div className="grid grid-2">
            <div className="light-card testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">"Partnering with Karo Startup has been transformative for our business. We've seen a 300% increase in qualified leads within the first year."</p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <h4>Sarah Mitchell</h4>
                  <p>CEO, TechVenture Inc.</p>
                </div>
              </div>
            </div>

            <div className="light-card testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">"The support and resources provided by Karo Startup partnership team are unmatched. They truly invest in our mutual success."</p>
              <div className="testimonial-author">
                <div className="author-avatar">DC</div>
                <div className="author-info">
                  <h4>David Chen</h4>
                  <p>Director of Partnerships, CloudScale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply-partner" className="apply-section section section-light">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div className="apply-info">
              <span className="badge">Get Started</span>
              <h2 className="section-title">Apply to Become a Partner</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 3rem' }}>
                Fill out the form and our partnership team will get back to you within 24-48 hours to discuss how we can work together.
              </p>

              <div className="contact-info-list">
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={20} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>business@karostartup.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={20} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 9315194393</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>C, 58, Sector 63 Rd, C Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201309</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="apply-form-container">
              <form className="partner-form light-card">
                <div className="form-row">
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input type="text" placeholder="Your company name" required />
                  </div>
                  <div className="form-group">
                    <label>Contact Name *</label>
                    <input type="text" placeholder="Your full name" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 9876543210" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Tell Us About Your Partnership Goals</label>
                  <textarea rows="4" placeholder="Describe your business, target market, and what you hope to achieve through this partnership..."></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

// Simple inline component replacing ShieldCheck to avoid missing imports
const ShieldCheck = ({size}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#22c55e'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Partner;
