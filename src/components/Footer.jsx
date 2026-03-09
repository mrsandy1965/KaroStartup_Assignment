import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Twitter, Linkedin, Instagram, Mail, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              Karo<span className="text-gradient">Pitch</span>
            </Link>
            <p className="footer-desc">
              India's premier startup discovery platform connecting Bharat founders directly with top-tier investors.
              <br/><br/>
              Reach out to us for any queries: <span style={{color: '#fff'}}>9315194393</span>.
            </p>
            <div className="social-links">
              <a href="https://x.com/karo_startup" target="_blank" rel="noreferrer" className="social-link"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/company/karo-startup/" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/karo_startup_/" target="_blank" rel="noreferrer" className="social-link"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/karostartup" target="_blank" rel="noreferrer" className="social-link"><Facebook size={20} /></a>
              <a href="https://www.youtube.com/@karostartup/videos" target="_blank" rel="noreferrer" className="social-link"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Platform</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/partner" className="footer-link">Partner With Us</Link>
            <a href="https://karostartup.com" target="_blank" rel="noreferrer" className="footer-link">karostartup.com</a>
            <Link to="/" className="footer-link">Apply to Pitch</Link>
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
            <Link to="/contact" className="footer-link">Contact Us</Link>
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
