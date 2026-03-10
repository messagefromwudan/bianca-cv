"use client";

import { useRef, useEffect, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  brightness: number;
  brightnessCycle: number;
  brightnessSpeed: number;
  driftAngle: number;
  driftSpeed: number;
  driftRadius: number;
}

interface Connection {
  from: number;
  to: number;
  pulseOffset: number;
  pulseSpeed: number;
  isHighlight: boolean;
}

const PRIMARY = "#022B1C";
const SECONDARY_R = 14;
const SECONDARY_G = 74;
const SECONDARY_B = 58;
const ACCENT_R = 61;
const ACCENT_G = 220;
const ACCENT_B = 151;

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const timeRef = useRef(0);
  const dprRef = useRef(1);

  const initNetwork = useCallback((width: number, height: number) => {
    const nodeCount = Math.floor((width * height) / 18000);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        radius: 1.5 + Math.random() * 2,
        brightness: 0,
        brightnessCycle: Math.random() * Math.PI * 2,
        brightnessSpeed: 0.3 + Math.random() * 0.5,
        driftAngle: Math.random() * Math.PI * 2,
        driftSpeed: 0.0003 + Math.random() * 0.0005,
        driftRadius: 8 + Math.random() * 15,
      });
    }

    const maxDist = Math.min(width, height) * 0.18;
    const connections: Connection[] = [];

    for (let i = 0; i < nodes.length; i++) {
      let connectionCount = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist && connectionCount < 4 && Math.random() > 0.3) {
          connections.push({
            from: i,
            to: j,
            pulseOffset: Math.random() * Math.PI * 2,
            pulseSpeed: 0.4 + Math.random() * 0.4,
            isHighlight: Math.random() < 0.12,
          });
          connectionCount++;
        }
      }
    }

    nodesRef.current = nodes;
    connectionsRef.current = connections;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initNetwork(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (timestamp: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Solid deep green background
      ctx.fillStyle = PRIMARY;
      ctx.fillRect(0, 0, w, h);

      const time = timestamp * 0.001;
      timeRef.current = time;

      const nodes = nodesRef.current;
      const connections = connectionsRef.current;

      // Update node positions (gentle drift)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.driftAngle += n.driftSpeed;
        n.x = n.baseX + Math.cos(n.driftAngle) * n.driftRadius;
        n.y = n.baseY + Math.sin(n.driftAngle * 0.7) * n.driftRadius;

        // Brightness pulsing
        n.brightnessCycle += n.brightnessSpeed * 0.016;
        n.brightness = 0.15 + Math.sin(n.brightnessCycle) * 0.1;

        // Occasional brighter "processing" nodes
        if (Math.sin(n.brightnessCycle * 0.3 + i) > 0.92) {
          n.brightness = 0.4 + Math.sin(time * 2 + i) * 0.15;
        }
      }

      // Radial gradient glow behind center (for headline area)
      const centerX = w * 0.5;
      const centerY = h * 0.4;
      const glowRadius = Math.min(w, h) * 0.5;
      const radialGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        glowRadius
      );
      radialGlow.addColorStop(0, `rgba(${SECONDARY_R}, ${SECONDARY_G}, ${SECONDARY_B}, 0.12)`);
      radialGlow.addColorStop(0.5, `rgba(${SECONDARY_R}, ${SECONDARY_G}, ${SECONDARY_B}, 0.05)`);
      radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, w, h);

      // Draw connections with traveling pulse
      for (let i = 0; i < connections.length; i++) {
        const c = connections[i];
        const nFrom = nodes[c.from];
        const nTo = nodes[c.to];

        // Base line
        const baseAlpha = 0.06;
        const r = c.isHighlight ? ACCENT_R : SECONDARY_R;
        const g = c.isHighlight ? ACCENT_G : SECONDARY_G;
        const b = c.isHighlight ? ACCENT_B : SECONDARY_B;

        ctx.beginPath();
        ctx.moveTo(nFrom.x, nFrom.y);
        ctx.lineTo(nTo.x, nTo.y);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Traveling pulse along connection
        const pulse = (Math.sin(time * c.pulseSpeed + c.pulseOffset) + 1) * 0.5;
        const pulseX = nFrom.x + (nTo.x - nFrom.x) * pulse;
        const pulseY = nFrom.y + (nTo.y - nFrom.y) * pulse;
        const pulseAlpha = c.isHighlight ? 0.25 : 0.15;
        const pulseSize = c.isHighlight ? 4 : 3;

        const pulseGrad = ctx.createRadialGradient(
          pulseX,
          pulseY,
          0,
          pulseX,
          pulseY,
          pulseSize
        );
        pulseGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulseAlpha})`);
        pulseGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = pulseGrad;
        ctx.fillRect(pulseX - pulseSize, pulseY - pulseSize, pulseSize * 2, pulseSize * 2);

        // Glow along line segment near pulse
        const segStart = Math.max(0, pulse - 0.15);
        const segEnd = Math.min(1, pulse + 0.15);
        const sx = nFrom.x + (nTo.x - nFrom.x) * segStart;
        const sy = nFrom.y + (nTo.y - nFrom.y) * segStart;
        const ex = nFrom.x + (nTo.x - nFrom.x) * segEnd;
        const ey = nFrom.y + (nTo.y - nFrom.y) * segEnd;

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${pulseAlpha * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isAccent = i % 8 === 0;
        const r = isAccent ? ACCENT_R : SECONDARY_R;
        const g = isAccent ? ACCENT_G : SECONDARY_G;
        const b = isAccent ? ACCENT_B : SECONDARY_B;

        // Outer glow
        if (n.brightness > 0.25) {
          const glowSize = n.radius * 4;
          const nodeGlow = ctx.createRadialGradient(
            n.x,
            n.y,
            0,
            n.x,
            n.y,
            glowSize
          );
          nodeGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${n.brightness * 0.4})`);
          nodeGlow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = nodeGlow;
          ctx.beginPath();
          ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${n.brightness})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initNetwork]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}
