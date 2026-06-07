import React, { useEffect, useRef } from 'react';

export const VectorParticleField = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000 });

  const COLORS = ['#1B2A4A', '#3B82F6', '#F43F5E', '#F59E0B'];

  class Particle {
    constructor(canvasWidth, canvasHeight) {
      this.x = Math.random() * canvasWidth;
      this.y = Math.random() * canvasHeight;
      this.originX = this.x;
      this.originY = this.y;
      this.vx = 0;
      this.vy = 0;
      this.size = Math.random() * 15 + 5;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.angle = Math.random() * Math.PI * 2;
      this.friction = 0.95;
      this.springK = 0.01;
    }

    update(mouseX, mouseY) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceRadius = 150;

      if (distance < forceRadius) {
        const force = (forceRadius - distance) / forceRadius;
        const angle = Math.atan2(dy, dx);
        this.vx -= Math.cos(angle) * force * 5;
        this.vy -= Math.sin(angle) * force * 5;
      }

      const dxOrigin = this.originX - this.x;
      const dyOrigin = this.originY - this.y;
      this.vx += dxOrigin * this.springK;
      this.vy += dyOrigin * this.springK;

      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y += this.vy;
      this.angle += 0.01;
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-this.size / 2, 0);
      ctx.lineTo(this.size / 2, 0);
      ctx.stroke();
      ctx.restore();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const initParticles = () => {
      particles.current = [];
      const particleCount = 150;
      for (let i = 0; i < particleCount; i++) {
        particles.current.push(new Particle(canvas.width, canvas.height));
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach(p => {
        p.update(mouse.current.x, mouse.current.y);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run once on mount

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
