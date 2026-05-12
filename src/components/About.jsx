import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const revEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Count-up animation
          e.target.querySelectorAll('[data-target]').forEach((el) => {
            const target = +el.dataset.target;
            const suffix = el.dataset.suffix || '';
            const divisor = +(el.dataset.divisor || 1);
            const duration = 1800;
            const start = performance.now();
            function anim(now) {
              const t = Math.min((now - start) / duration, 1);
              const ease = t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
              const val = Math.round(target * ease);
              el.textContent = (divisor > 1 ? (val / divisor).toFixed(1) : val) + suffix;
              if (t < 1) requestAnimationFrame(anim);
            }
            requestAnimationFrame(anim);
          });
        }
      });
    }, { threshold: 0.12 });
    revEls.forEach((el) => io.observe(el));
    return () => revEls.forEach((el) => io.unobserve(el));
  }, []);

  return (
    <>
      <div className="section-head reveal">
        <div className="section-label">— The Scroll —</div>
        <h2 className="section-title">Who I Am</h2>
        <div className="divider"><div className="div-line"></div><div className="div-gem"></div><div className="div-line r"></div></div>
      </div>
      <div className="about-parchment reveal">
        <p className="about-text">
          A warrior of the digital realm, forged in the hallowed halls of Kongu Engineering College,
          I seek to conquer every challenge with wit, relentless skill, and the fire of ambition.
          I wield Java, Flutter, and React as my weapons — building kingdoms of code
          where others see only empty fields. My quest: to grow, to innovate, and to leave
          marks upon the realm that endure long after the battles are won.
        </p>
        <div className="stats-row">
          <div className="stat-box">
            <div className="stat-num" data-target="3" data-suffix="">0</div>
            <div className="stat-label">Competition Victories</div>
          </div>
          <div className="stat-box">
            <div className="stat-num" data-target="4" data-suffix="+">0</div>
            <div className="stat-label">Conquered Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-num" data-target="74" data-suffix="" data-decimal="1" data-divisor="10">0</div>
            <div className="stat-label">Academic Standing (CGPA)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
