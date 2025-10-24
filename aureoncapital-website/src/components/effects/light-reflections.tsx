"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LightReflectionProps {
  color?: "gold" | "blue";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function LightReflection({ 
  color = "gold", 
  intensity = "medium",
  className = "" 
}: LightReflectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const colorClasses = {
    gold: "from-aureon-gold/30 via-aureon-gold/10 to-transparent",
    blue: "from-aureon-blue/30 via-aureon-blue/10 to-transparent"
  };

  const intensityClasses = {
    low: "opacity-20",
    medium: "opacity-40",
    high: "opacity-60"
  };

  return (
    <motion.div
      className={`fixed pointer-events-none z-0 ${className}`}
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--tw-gradient-stops))`,
      }}
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--tw-gradient-stops))`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    >
      <div 
        className={`w-full h-full bg-gradient-radial ${colorClasses[color]} ${intensityClasses[intensity]}`}
      />
    </motion.div>
  );
}

export function GoldenLightReflection({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Static golden reflections */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-aureon-gold/20 via-aureon-gold/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-aureon-gold/15 via-aureon-gold/3 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

export function BlueLightReflection({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Static blue reflections */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-radial from-aureon-blue/25 via-aureon-blue/8 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-radial from-aureon-blue/20 via-aureon-blue/5 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}