import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Ember {
      constructor() {
        this.init();
      }
      init() {
        this.x = Math.random() * W;
        this.y = H + Math.random() * 50;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = -(Math.random() * 1.2 + 0.3);
        this.r = Math.random() * 1.8 + 0.4;
        this.life = 1;
        this.decay = Math.random() * 0.004 + 0.0015;
        const rr = 180 + Math.floor(Math.random() * 75);
        const gg = 60 + Math.floor(Math.random() * 90);
        this.clr = `${rr},${gg},10`;
      }
      tick() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx += (Math.random() - 0.5) * 0.04;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < -10) this.init();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.life * 0.65;
        ctx.fillStyle = `rgb(${this.clr})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${this.clr},0.8)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 6.28);
        ctx.fill();
        ctx.restore();
      }
    }

    const embers = [];
    for (let i = 0; i < 90; i++) {
      const e = new Ember();
      e.y = Math.random() * H;
      embers.push(e);
    }

    let animationId;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      embers.forEach((e) => {
        e.tick();
        e.draw();
      });
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="ember-canvas" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}></canvas>;
};

export default Particles;
