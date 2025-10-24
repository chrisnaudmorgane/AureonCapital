"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { GoldenLightReflection, BlueLightReflection } from "./light-reflections";

interface PerformanceOptimizedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  enableLightEffects?: boolean;
  enableParticles?: boolean;
}

export function PerformanceOptimizedBackground({
  children,
  className = "",
  enableLightEffects = true,
  enableParticles = false,
}: PerformanceOptimizedBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      {/* Light reflection effects - disabled for reduced motion */}
      {enableLightEffects && !prefersReducedMotion && (
        <>
          <GoldenLightReflection className="opacity-60" />
          <BlueLightReflection className="opacity-40" />
        </>
      )}

      {/* Animated background particles - disabled for reduced motion */}
      {enableParticles && !prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Golden particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`gold-${i}`}
              className="absolute w-1 h-1 bg-aureon-gold/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Blue particles */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`blue-${i}`}
              className="absolute w-1 h-1 bg-aureon-blue/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Optimized hero background with financial graph animation
export function HeroBackground({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated financial graph - simplified for reduced motion */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="graph-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Main graph line */}
        <motion.path
          d="M0,400 Q200,300 400,350 T800,250 Q1000,200 1200,300"
          stroke="url(#graph-gradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            strokeDasharray: prefersReducedMotion ? "none" : "10,5"
          }}
          transition={{ 
            duration: prefersReducedMotion ? 0.01 : 2,
            ease: "easeInOut",
            strokeDasharray: {
              duration: prefersReducedMotion ? 0 : 3,
              repeat: prefersReducedMotion ? 0 : Infinity,
            }
          }}
        />
        
        {/* Supporting graph lines */}
        <motion.path
          d="M0,500 Q300,400 600,450 T1200,400"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: prefersReducedMotion ? 0.01 : 2.5,
            delay: prefersReducedMotion ? 0 : 0.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Data points */}
        {!prefersReducedMotion && (
          <>
            <motion.circle
              cx="400"
              cy="350"
              r="4"
              fill="#d4af37"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            />
            <motion.circle
              cx="800"
              cy="250"
              r="4"
              fill="#38bdf8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.3 }}
            />
          </>
        )}
      </svg>

      {/* Circuit pattern overlay */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M0,10 L10,10 L10,0 M10,10 L20,10 M10,10 L10,20"
                  stroke="#d4af37"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      )}
    </div>
  );
}