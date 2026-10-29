import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  pulsePhase: number;
}

export const GoldenParticles: React.FC<{
  count?: number;
  className?: string;
  intensity?: 'subtle' | 'vibrant';
}> = ({ count = 35, className = '', intensity = 'subtle' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      speedY: -Math.random() * 0.4 - 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      fadeSpeed: Math.random() * 0.008 + 0.003,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulsePhase += 0.03;

        // Current glowing opacity
        const currentOpacity =
          (Math.sin(p.pulsePhase) * 0.3 + 0.6) *
          p.opacity *
          (intensity === 'subtle' ? 0.75 : 1.0);

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw radial glowing particle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.2);
        gradient.addColorStop(0, `rgba(245, 222, 165, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(197, 164, 109, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(197, 164, 109, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Core bright spark
        ctx.fillStyle = `rgba(255, 250, 230, ${currentOpacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    />
  );
};
