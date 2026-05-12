import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const fireCanvasRef = useRef(null);
  const [typedText, setTypedText] = useState('');

  // Typing animation
  useEffect(() => {
    const roles = [
      'Software Engineer',
      'Flutter Developer',
      'React & Node.js Full Stack',
      'AI Enthusiast',
      'Hackathon Champion ⚔',
      'Oracle Java SE17 Certified'
    ];
    let rIdx = 0, cIdx = 0, deleting = false;
    let timeout;

    const type = () => {
      const role = roles[rIdx];
      if (!deleting) {
        setTypedText(role.slice(0, ++cIdx));
        if (cIdx === role.length) {
          deleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        setTypedText(role.slice(0, --cIdx));
        if (cIdx === 0) {
          deleting = false;
          rIdx = (rIdx + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 80);
    };

    const startTimeout = setTimeout(type, 2800);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, []);

  // Sword Energy Waves Canvas
  useEffect(() => {
    const canvas = fireCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w, h;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 300; // Increased height for more aura depth
    };
    resize();
    window.addEventListener('resize', resize);

    const waves = [
      { amplitude: 40, frequency: 0.005, speed: 0.02, offset: 0, color: 'rgba(201, 168, 76, 0.15)' },
      { amplitude: 30, frequency: 0.008, speed: -0.015, offset: Math.PI / 2, color: 'rgba(201, 168, 76, 0.12)' },
      { amplitude: 50, frequency: 0.003, speed: 0.01, offset: Math.PI, color: 'rgba(201, 168, 76, 0.08)' }
    ];

    const particles = [];
    const sparkCount = 40;
    for (let i = 0; i < sparkCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: h + Math.random() * 100,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2 - 0.5,
        size: Math.random() * 1.8 + 0.5,
        life: Math.random() * 0.8 + 0.2,
        decay: Math.random() * 0.01 + 0.005,
        color: Math.random() > 0.5 ? 'rgba(201, 168, 76, 0.8)' : 'rgba(184, 176, 160, 0.6)'
      });
    }

    let time = 0;

    const drawWaves = () => {
      ctx.globalCompositeOperation = 'lighter';
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x < w; x += 5) {
          const y = h - 60 - Math.sin(x * wave.frequency + wave.offset + time * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      // Pulse lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(201, 168, 76, 0.1)';
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yBase = h - 70 - i * 15;
        ctx.moveTo(0, yBase);
        for (let x = 0; x < w; x += 10) {
          const pulse = Math.sin(x * 0.01 - time * 0.05 + i) * 10;
          ctx.lineTo(x, yBase + pulse);
        }
        ctx.stroke();
      }
    };

    const drawAura = () => {
      const grad = ctx.createLinearGradient(0, h - 220, 0, h);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(0.5, 'rgba(201, 168, 76, 0.05)');
      grad.addColorStop(1, 'rgba(139, 26, 26, 0.1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, h - 220, w, 220);
    };

    const drawParticles = () => {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0 || p.y < -20) {
          p.x = Math.random() * w;
          p.y = h + Math.random() * 50;
          p.life = Math.random() * 0.8 + 0.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.life})`);
        ctx.fill();
        
        // Soft glow for particles
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
      });
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.5;
      
      drawAura();
      drawWaves();
      drawParticles();
      
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      const sigil = document.querySelector('.hero-sigil');
      const bg = document.querySelector('.hero-bg');
      if (sigil) sigil.style.transform = `translateY(${sy * 0.12}px)`;
      if (bg) bg.style.transform = `translateY(${sy * 0.08}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="hero-bg"></div>
      <div className="hero-border-h top"></div>
      <div className="hero-border-h bot"></div>
      <div className="hero-border-v left"></div>
      <div className="hero-border-v right"></div>

      <svg className="hero-sigil" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="55" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
        <circle cx="60" cy="60" r="45" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25" />
        <line x1="60" y1="15" x2="60" y2="105" stroke="#C9A84C" strokeWidth="1.5" />
        <line x1="38" y1="38" x2="82" y2="38" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="60" cy="104" r="5" fill="#C9A84C" opacity="0.8" />
        <rect x="57" y="45" width="6" height="2" fill="#C9A84C" opacity="0.5" rx="1" />
        <rect x="57" y="52" width="6" height="2" fill="#C9A84C" opacity="0.5" rx="1" />
        <rect x="57" y="59" width="6" height="2" fill="#C9A84C" opacity="0.5" rx="1" />
        <rect x="34" y="34" width="7" height="7" fill="#C9A84C" opacity="0.6" transform="rotate(45 37.5 37.5)" />
        <rect x="79" y="34" width="7" height="7" fill="#C9A84C" opacity="0.6" transform="rotate(45 82.5 37.5)" />
        <path d="M60 5 L63 12 L60 10 L57 12 Z" fill="#C9A84C" opacity="0.6" />
        <path d="M60 115 L63 108 L60 110 L57 108 Z" fill="#C9A84C" opacity="0.6" />
        <text x="60" y="28" fontFamily="serif" fontSize="6" fill="#C9A84C" opacity="0.5" textAnchor="middle">✦ ✦ ✦</text>
        <g opacity="0.2">
          <path d="M10 60 Q30 50 45 60 Q30 70 10 60Z" fill="#C9A84C" />
          <path d="M110 60 Q90 50 75 60 Q90 70 110 60Z" fill="#C9A84C" />
        </g>
      </svg>

      <div className="hero-eyebrow">— Portfolio of the Realm —</div>
      <h1 className="hero-name">Kiruthikbairavan C</h1>

      <div className="hero-divider">
        <div className="hero-div-line"></div>
        <div className="hero-div-gem"></div>
        <div className="hero-div-line r"></div>
      </div>

      <div className="hero-typing-wrap">
        <span id="typed-text">{typedText}</span><span className="typed-cursor"></span>
      </div>
      <p className="hero-house">House of Kongu &nbsp;·&nbsp; MSc Software Systems &nbsp;·&nbsp; First of His Name</p>

      <div className="hero-cta">
        <a href="#resume-section" className="hero-btn hero-btn-primary">⚔ View Resume</a>
        <a href="#projects" className="hero-btn hero-btn-secondary">🐉 Enter the Realm</a>
      </div>

      <canvas id="energy-canvas" ref={fireCanvasRef}></canvas>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-hint-line"></div>
      </div>
    </>
  );
};

export default Hero;
