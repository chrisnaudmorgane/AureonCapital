"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

// Animation variants that respect reduced motion preferences
export const createMotionVariants = (prefersReducedMotion: boolean) => ({
  // Fade animations
  fadeIn: {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    transition: { 
      duration: prefersReducedMotion ? 0.01 : 0.6,
      ease: "easeOut"
    }
  },

  // Slide animations
  slideUp: {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: prefersReducedMotion ? 0.01 : 0.8,
      ease: "easeOut"
    }
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { 
      duration: prefersReducedMotion ? 0.01 : 0.5,
      ease: "easeOut"
    }
  },

  // Stagger animations
  stagger: {
    animate: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  },

  // Hover animations
  hover: {
    scale: prefersReducedMotion ? 1 : 1.05,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.2,
      ease: "easeOut"
    }
  },

  // Continuous animations (completely disabled for reduced motion)
  float: prefersReducedMotion ? {} : {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },

  pulse: prefersReducedMotion ? {} : {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
});

// Hook for getting motion-safe animation variants
export function useMotionVariants() {
  const prefersReducedMotion = useReducedMotion();
  return createMotionVariants(prefersReducedMotion);
}