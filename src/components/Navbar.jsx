import React, { useEffect, useState } from 'react';

const Navbar = ({ menuOpen, onToggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-brand">⚔ KB</div>
      <ul className="nav-links">
        <li><a href="#about">The Scroll</a></li>
        <li><a href="#skills">Arsenal</a></li>
        <li><a href="#projects">Conquests</a></li>
        <li><a href="#timeline">Chronicle</a></li>
        <li><a href="#achievements">Glory</a></li>
        <li><a href="#resume-section">Parchment</a></li>
        <li><a href="#contact">Ravens</a></li>
      </ul>
      <div className={`nav-hamburger ${menuOpen ? 'open' : ''}`} id="hamburger" onClick={onToggleMenu}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
