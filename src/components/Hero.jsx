import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="hero-bg" />
      
      {/* Left Social Bar */}
      <div className="side-socials">
        <a href="https://github.com/kiruthik13" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/kiruthikbairavan" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:kiruthikbairavan@gmail.com"><i className="fas fa-envelope"></i></a>
        <a href="tel:+91XXXXXXXXXX"><i className="fas fa-phone"></i></a>
      </div>

      {/* Right Pagination Dots */}
      <div className="side-pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-eyebrow">
          HOUSE OF KONGU  ·  MSC SOFTWARE SYSTEMS  ·  FIRST OF HIS NAME
        </div>
        
        <h1 className="hero-name">KIRUTHIKBAIRAVAN C</h1>
        
        <div className="hero-divider">
          <span className="hero-div-line"></span>
          <span className="hero-div-gem"></span>
          <span className="hero-div-line r"></span>
        </div>

        <div className="hero-subtitle">
          FULL STACK DEVELOPER  ·  FLUTTER DEVELOPER  ·  AI ENTHUSIAST
        </div>

        <div className="hero-actions">
          <a href="#about" className="explore-btn">
            EXPLORE MY REALM
            <span className="btn-arrow">↓</span>
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-hint-line"></div>
      </div>
    </div>
  );
};

export default Hero;
