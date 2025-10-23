"use client";

import { useEffect, useRef } from "react";

interface CircuitNode {
  x: number;
  y: number;
  connections: CircuitNode[];
  pulse: number;
  pulseSpeed: number;
}

export function GoldenCircuits() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation variables
    let animationId: number;
    let time = 0;

    // Create circuit nodes
    const createNodes = (width: number, height: number): CircuitNode[] => {
      const nodes: CircuitNode[] = [];
      const gridSize = 120;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      // Create grid of nodes
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize + (Math.random() - 0.5) * 40;
          const y = j * gridSize + (Math.random() - 0.5) * 40;
          
          nodes.push({
            x,
            y,
            connections: [],
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03,
          });
        }
      }

      // Connect nearby nodes
      nodes.forEach((node, index) => {
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            
            if (distance < gridSize * 1.5 && Math.random() > 0.7) {
              node.connections.push(otherNode);
            }
          }
        });
      });

      return nodes;
    };

    let nodes: CircuitNode[] = [];

    const initializeNodes = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      nodes = createNodes(width, height);
    };

    initializeNodes();

    // Draw circuit animation
    const drawCircuits = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);

      // Update pulse values
      nodes.forEach(node => {
        node.pulse += node.pulseSpeed;
      });

      // Draw connections
      nodes.forEach(node => {
        node.connections.forEach(connection => {
          const pulseIntensity = (Math.sin(node.pulse) + 1) * 0.5;
          const opacity = 0.1 + pulseIntensity * 0.3;
          
          // Create gradient for the connection
          const gradient = ctx.createLinearGradient(
            node.x, node.y, connection.x, connection.y
          );
          gradient.addColorStop(0, `rgba(212, 175, 55, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(56, 189, 248, ${opacity * 0.7})`);
          gradient.addColorStop(1, `rgba(212, 175, 55, ${opacity * 0.5})`);

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connection.x, connection.y);
          ctx.stroke();

          // Add glow effect for active connections
          if (pulseIntensity > 0.7) {
            ctx.shadowColor = "rgba(212, 175, 55, 0.5)";
            ctx.shadowBlur = 5;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulseIntensity = (Math.sin(node.pulse) + 1) * 0.5;
        const nodeSize = 2 + pulseIntensity * 2;
        const opacity = 0.3 + pulseIntensity * 0.5;

        ctx.beginPath();
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();

        // Add glow to active nodes
        if (pulseIntensity > 0.8) {
          ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      time += 16;
      animationId = requestAnimationFrame(drawCircuits);
    };

    drawCircuits();

    // Reinitialize nodes on resize
    const handleResize = () => {
      resizeCanvas();
      initializeNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
      style={{ width: "100%", height: "100%" }}
    />
  );
}