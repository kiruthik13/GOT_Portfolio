import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      }
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      requestAnimationFrame(animRing);
    };

    const handleTrail = (e) => {
      if (Math.random() > 0.6) return;
      const t = document.createElement('div');
      t.className = 'cursor-trail-dot';
      const sz = Math.random() * 5 + 2;
      const trailColors = ['rgba(201,168,76,0.6)', 'rgba(201,168,76,0.4)', 'rgba(139,26,26,0.5)'];
      t.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX}px;top:${e.clientY}px;background:${trailColors[Math.floor(Math.random() * 3)]};transition:all 0.6s;position:fixed;border-radius:50%;pointer-events:none;z-index:9997;transform:translate(-50%,-50%);`;
      document.body.appendChild(t);
      requestAnimationFrame(() => {
        t.style.opacity = '0';
        t.style.transform = 'translate(-50%,-50%) scale(0)';
      });
      setTimeout(() => t.remove(), 600);
    };

    const handleHover = () => {
      if (ring) {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.opacity = '0.8';
      }
    };

    const handleUnhover = () => {
      if (ring) {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    // Only add cursor trail on non-touch (desktop) devices
    const isTouch = 'ontouchstart' in window;
    if (!isTouch) {
      document.addEventListener('mousemove', handleTrail);
    }
    animRing();

    const hoverables = document.querySelectorAll('a, button, .proj-card, .skill-card, .ach-item');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    if ('ontouchstart' in window) {
      if (dot) dot.style.display = 'none';
      if (ring) ring.style.display = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleTrail);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" id="cursor-dot"></div>
      <div className="cursor-ring" id="cursor-ring"></div>
    </>
  );
};

export default Cursor;
