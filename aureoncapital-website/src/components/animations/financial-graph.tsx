"use client";

import { useEffect, useRef } from "react";

export function FinancialGraph() {
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

    // Graph data points
    const generateDataPoints = (width: number, height: number) => {
      const points = [];
      const numPoints = 50;
      
      for (let i = 0; i < numPoints; i++) {
        const x = (i / (numPoints - 1)) * width;
        const baseY = height * 0.7; // Start from 70% down
        const amplitude = height * 0.3; // Use 30% of height for variation
        const frequency = 0.02;
        const noise = Math.sin(i * frequency + time * 0.001) * amplitude * 0.5;
        const trend = -i * 2; // Slight upward trend
        const y = baseY + noise + trend;
        
        points.push({ x, y });
      }
      
      return points;
    };

    // Draw animated graph
    const drawGraph = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      const points = generateDataPoints(width, height);
      
      // Create gradient for the line
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(212, 175, 55, 0.8)"); // Gold
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.6)"); // Blue
      gradient.addColorStop(1, "rgba(212, 175, 55, 0.4)"); // Gold fade
      
      // Draw the main line
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      
      points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      
      ctx.stroke();
      
      // Draw glow effect
      ctx.shadowColor = "rgba(212, 175, 55, 0.5)";
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Draw data points
      points.forEach((point, index) => {
        if (index % 5 === 0) { // Only draw every 5th point
          const opacity = 0.6 + 0.4 * Math.sin(time * 0.003 + index * 0.5);
          ctx.beginPath();
          ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow to points
          ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
      
      time += 16; // Roughly 60fps
      animationId = requestAnimationFrame(drawGraph);
    };

    drawGraph();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ width: "100%", height: "100%" }}
    />
  );
}