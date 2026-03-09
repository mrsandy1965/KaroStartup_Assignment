import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
          Karo<span className="text-gradient">Pitch</span>
        </Link>

        {/* Search Bar - Center */}
        <div className="navbar-search desktop-only">
          <input type="text" placeholder="Search for stories, news, and insights..." />
          <button className="search-btn">
            <Search size={16} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Mobile Search - Only shows in mobile menu */}
          <div className="navbar-search mobile-only">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">
              <Search size={16} />
            </button>
          </div>
          
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/partner" onClick={() => setIsMobileMenuOpen(false)}>Partner With Us</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Apply to Pitch</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
