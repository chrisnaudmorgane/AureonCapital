import { Variants, Transition } from "framer-motion";

// Performance-optimized transition configurations
export const transitions = {
  // Fast transitions for immediate feedback
  fast: {
    type: "tween" as const,
    duration: 0.15,
    ease: "easeOut",
  },
  
  // Standard transitions for most animations
  standard: {
    type: "tween" as const,
    duration: 0.3,
    ease: "easeOut",
  },
  
  // Smooth transitions for complex animations
  smooth: {
    type: "tween" as const,
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },
  
  // Bouncy transitions for playful elements
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
  },
  
  // Gentle spring for natural movement
  gentle: {
    type: "spring" as const,
    stiffness: 200,
    damping: 20,
  },
} as const;

// Common animation variants optimized for 60fps
export const variants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  } as Variants,

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  } as Variants,

  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  } as Variants,

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  } as Variants,

  // Slide animations
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  } as Variants,

  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  } as Variants,

  // Stagger container
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  // Stagger items
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  } as Variants,
} as const;

// Hover effects optimized for performance
export const hoverEffects = {
  // Subtle lift effect
  lift: {
    whileHover: { 
      y: -2,
      transition: transitions.fast,
    },
    whileTap: { 
      y: 0,
      transition: transitions.fast,
    },
  },

  // Scale effect
  scale: {
    whileHover: { 
      scale: 1.05,
      transition: transitions.fast,
    },
    whileTap: { 
      scale: 0.95,
      transition: transitions.fast,
    },
  },

  // Glow effect (using transform for performance)
  glow: {
    whileHover: { 
      boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
      transition: transitions.standard,
    },
  },

  // Button press effect
  press: {
    whileTap: { 
      scale: 0.98,
      transition: transitions.fast,
    },
  },
} as const;

// Utility function to create performance-optimized animations
export function createOptimizedAnimation(
  variant: keyof typeof variants,
  transition: keyof typeof transitions = "standard"
) {
  return {
    ...variants[variant],
    transition: transitions[transition],
  };
}

// Utility function to create staggered animations
export function createStaggeredAnimation(
  itemCount: number,
  staggerDelay: number = 0.1,
  initialDelay: number = 0
) {
  return {
    container: {
      animate: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: initialDelay,
        },
      },
    },
    item: variants.staggerItem,
  };
}

// Performance monitoring utilities
export const performanceConfig = {
  // Use will-change CSS property for animations
  willChange: "transform, opacity",
  
  // Prefer transform and opacity for 60fps animations
  optimizedProperties: ["transform", "opacity"],
  
  // Avoid animating these properties for performance
  avoidProperties: ["width", "height", "top", "left", "margin", "padding"],
} as const;

// Reduced motion utilities
export function getReducedMotionVariants(variants: Variants): Variants {
  const reducedVariants: Variants = {};
  
  Object.keys(variants).forEach((key) => {
    const variant = variants[key];
    if (typeof variant === "object" && variant !== null) {
      reducedVariants[key] = {
        ...variant,
        transition: { duration: 0.01 },
      };
    }
  });
  
  return reducedVariants;
}