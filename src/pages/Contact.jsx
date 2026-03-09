import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section section">
        <div className="container text-center">
          <span className="badge">Contact Us</span>
          <h1 className="about-hero-title">Get In <span style={{color: 'var(--color-primary)'}}>Touch</span></h1>
          <p className="about-hero-subtitle">
            Have a question, feedback, or a story to pitch? We'd love to hear from you. Drop us a message and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="contact-content-section section section-light">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Contact Information */}
            <div className="contact-info-container">
              <h2 className="section-title">Let's Talk</h2>
              <p className="contact-intro">
                Whether you're a startup founder, an investor, or just someone passionate about the startup ecosystem, we're here to connect.
              </p>
              
              <div className="contact-info-list mt-8">
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email Address</h4>
                    <p>hello@karostartup.com</p>
                    <p>business@karostartup.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={24} /></div>
                  <div>
                    <h4>Phone Number</h4>
                    <p>+91 9315194393</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Office Location</h4>
                    <p>
                      C, 58, Sector 63 Rd, C Block,<br/>
                      Sector 63, Noida, Hazratpur Wajidpur,<br/>
                      Uttar Pradesh 201309
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form light-card">
                <h3 className="form-title">Send us a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="form-group">
                  <label>Subject *</label>
                  <select className="form-select" required>
                    <option value="">Select a topic</option>
                    <option value="pitch">Pitch a Story</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="feedback">General Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '16px', display: 'flex', gap: '8px' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
