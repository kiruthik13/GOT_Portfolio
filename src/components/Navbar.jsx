import React, { useEffect, useState } from 'react';

const Navbar = ({ menuOpen, onToggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/k-logo.png" alt="House Sigil" className="sigil-logo" />
        </div>
        
        <ul className="nav-links">
          <li><a href="#hero">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#achievements">ACHIEVEMENTS</a></li>
          <li><a href="#timeline">TIMELINE</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="summon-btn">SUMMON ME</a>
          <div className={`nav-hamburger ${menuOpen ? 'open' : ''}`} id="hamburger" onClick={onToggleMenu}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
