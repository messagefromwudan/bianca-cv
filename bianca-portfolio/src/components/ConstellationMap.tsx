  "use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  section: string;
  constellation: number[][];
}

const constellations: Record<string, { label: string; section: string; shape: number[][] }> = {
  tuto: {
    label: "Tuto",
    section: "#projects",
    shape: [
      [0, 0], [40, 0], [40, 60], [0, 60], [0, 0],
      [10, 15], [30, 15], [30, 25], [10, 25], [10, 15]
    ]
  },
  exelion: {
    label: "Exelion AI",
    section: "#projects",
    shape: [
      [20, 0], [0, 30], [10, 50], [30, 50], [40, 30], [20, 0],
      [20, 15], [20, 35]
    ]
  },
  about: {
    label: "About",
    section: "#about",
    shape: [
      [20, 0], [40, 20], [40, 40], [20, 60], [0, 40], [0, 20], [20, 0],
      [20, 30]
    ]
  },
  ideas: {
    label: "Ideas",
    section: "#ideas",
    shape: [
      [20, 0], [10, 20], [0, 20], [5, 35], [0, 50], [20, 60], [40, 50], [35, 35], [40, 20], [30, 20], [20, 0],
      [20, 20], [20, 40]
    ]
  },
  skills: {
    label: "Skills",
    section: "#skills",
    shape: [
      [20, 0], [0, 15], [10, 40], [0, 60], [20, 50], [40, 60], [30, 40], [40, 15], [20, 0]
    ]
  },
  contact: {
    label: "Contact",
    section: "#contact",
    shape: [
      [10, 0], [30, 0], [40, 10], [40, 30], [30, 40], [10, 40], [0, 30], [0, 10], [10, 0]
    ]
  }
};

export default function ConstellationMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: Node[] = Object.entries(constellations).map(([key, data], i) => ({
      x: (window.innerWidth / (Object.keys(constellations).length + 1)) * (i + 1),
      y: window.innerHeight / 2 + (Math.random() - 0.5) * 200,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      label: data.label,
      section: data.section,
      constellation: data.shape
    }));
    nodesRef.current = nodes;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      let found = false;
      nodes.forEach(node => {
        const dx = e.clientX - node.x;
        const dy = e.clientY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 50) {
          setHoveredNode(node.label);
          found = true;
        }
      });
      if (!found) setHoveredNode(null);
    };

    const handleClick = (e: MouseEvent) => {
      nodes.forEach(node => {
        const dx = e.clientX - node.x;
        const dy = e.clientY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 50) {
          window.location.href = node.section;
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 100 || node.x > canvas.width - 100) node.vx *= -1;
        if (node.y < 100 || node.y > canvas.height - 100) node.vy *= -1;

        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          node.x -= dx * 0.002;
          node.y -= dy * 0.002;
        }
      });

      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(other => {
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 300) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 300)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      nodes.forEach(node => {
        const isHovered = hoveredNode === node.label;
        const scale = isHovered ? 1.2 : 1;
        
        ctx.save();
        ctx.translate(node.x, node.y);
        ctx.scale(scale, scale);

        ctx.beginPath();
        node.constellation.forEach((point, i) => {
          const px = point[0] - 20;
          const py = point[1] - 30;
          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        });
        ctx.strokeStyle = isHovered ? "rgba(99, 102, 241, 0.8)" : "rgba(99, 102, 241, 0.4)";
        ctx.lineWidth = 2;
        ctx.stroke();

        node.constellation.forEach(point => {
          const px = point[0] - 20;
          const py = point[1] - 30;
          ctx.beginPath();
          ctx.arc(px, py, isHovered ? 4 : 3, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? "rgba(99, 102, 241, 1)" : "rgba(99, 102, 241, 0.6)";
          ctx.fill();
        });

        ctx.font = isHovered ? "bold 14px Inter" : "600 12px Inter";
        ctx.fillStyle = isHovered ? "#4f46e5" : "#6366f1";
        ctx.textAlign = "center";
        ctx.fillText(node.label, 0, 50);

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hoveredNode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ cursor: hoveredNode ? "pointer" : "default" }}
    />
  );
}
