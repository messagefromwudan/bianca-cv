"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  life: number;
}

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.pageX, y: e.pageY };
      points.current.push({ x: e.pageX, y: e.pageY, life: 1 });
      if (points.current.length > 20) {
        points.current.shift();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current = points.current
        .map((p) => ({ ...p, life: p.life - 0.015 }))
        .filter((p) => p.life > 0);

      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123, 92, 192, ${p.life * 0.4})`;
        ctx.fill();

        for (let j = i + 1; j < points.current.length; j++) {
          const p2 = points.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(123, 92, 192, ${Math.min(p.life, p2.life) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
