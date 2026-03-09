import React from 'react';
import './Footer.css';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              Karo<span className="text-gradient">Pitch</span>
            </a>
            <p className="footer-desc">
              India's premier startup discovery platform connecting Bharat founders directly with top-tier investors.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Platform</h4>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#startups" className="footer-link">For Startups</a>
            <a href="#investors" className="footer-link">For Investors</a>
            <a href="#apply" className="footer-link">Apply to Pitch</a>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Resources</h4>
            <a href="#" className="footer-link">Pitch Deck Guide</a>
            <a href="#" className="footer-link">Fundraising Tips</a>
            <a href="#" className="footer-link">Success Stories</a>
            <a href="#" className="footer-link">Events</a>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Legal</h4>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KaroStartup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
