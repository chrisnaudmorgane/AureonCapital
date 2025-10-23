/**
 * Mobile-optimized animation utilities
 * Provides reduced animations for mobile devices to improve performance
 */

import { Variants } from 'framer-motion';

// Detect if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Detect mobile device
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Get optimized animation duration based on device
export const getAnimationDuration = (desktop: number, mobile?: number) => {
  if (prefersReducedMotion()) return 0.01;
  if (isMobileDevice()) return mobile || desktop * 0.7; // 30% faster on mobile
  return desktop;
};

// Mobile-optimized fade in animation
export const mobileOptimizedFadeIn: Variants = {
  hidden: { 
    opacity: 0,
    y: isMobileDevice() ? 10 : 20, // Reduced movement on mobile
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: getAnimationDuration(0.6, 0.4),
      ease: "easeOut"
    }
  }
};

// Mobile-optimized slide up animation
export const mobileOptimizedSlideUp: Variants = {
  hidden: { 
    opacity: 0,
    y: isMobileDevice() ? 15 : 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: getAnimationDuration(0.8, 0.5),
      ease: "easeOut"
    }
  }
};

// Mobile-optimized stagger animation
export const mobileOptimizedStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: getAnimationDuration(0.2, 0.1),
      delayChildren: getAnimationDuration(0.1, 0.05)
    }
  }
};

// Mobile-optimized hover animation (disabled on touch devices)
export const mobileOptimizedHover = {
  whileHover: isMobileDevice() ? {} : { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Mobile-optimized scroll reveal
export const mobileOptimizedScrollReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: isMobileDevice() ? 20 : 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: getAnimationDuration(0.6, 0.4),
      ease: "easeOut"
    }
  }
};

// Performance-optimized animation props
export const performanceAnimationProps = {
  // Use transform and opacity for better performance
  style: { willChange: 'transform, opacity' },
  // Reduce animation complexity on mobile
  animate: isMobileDevice() ? { opacity: 1 } : undefined,
  // Disable animations if user prefers reduced motion
  ...(prefersReducedMotion() && {
    initial: false,
    animate: false,
    exit: false,
    transition: { duration: 0 }
  })
};

// Utility to create responsive animation variants
export const createResponsiveVariants = (
  desktopVariants: Variants,
  mobileVariants?: Variants
): Variants => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 }
    };
  }
  
  return isMobileDevice() && mobileVariants ? mobileVariants : desktopVariants;
};

// Animation configuration for different screen sizes
export const responsiveAnimationConfig = {
  mobile: {
    duration: 0.3,
    stagger: 0.1,
    distance: 15,
    scale: 1.02
  },
  tablet: {
    duration: 0.5,
    stagger: 0.15,
    distance: 25,
    scale: 1.03
  },
  desktop: {
    duration: 0.6,
    stagger: 0.2,
    distance: 30,
    scale: 1.05
  }
};

// Get current animation config based on screen size
export const getCurrentAnimationConfig = () => {
  if (typeof window === 'undefined') return responsiveAnimationConfig.desktop;
  
  const width = window.innerWidth;
  if (width < 768) return responsiveAnimationConfig.mobile;
  if (width < 1024) return responsiveAnimationConfig.tablet;
  return responsiveAnimationConfig.desktop;
};