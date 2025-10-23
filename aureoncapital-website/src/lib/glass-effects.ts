/**
 * AureonCapital Glass Morphism Effects and Utilities
 */

import { cn } from "./utils";

// Glass morphism effect classes
export const glassEffects = {
  // Basic glass effect
  glass: "bg-aureon-glass backdrop-blur-glass border border-white/20",
  
  // Glass card with hover effects
  glassCard: "bg-aureon-glass backdrop-blur-glass border border-white/20 rounded-xl shadow-glass transition-all duration-300 hover:bg-white/15 hover:shadow-glass",
  
  // Glass button effects
  glassButton: "bg-aureon-glass backdrop-blur-glass border border-white/20 hover:bg-white/20 hover:shadow-glass transition-all duration-300",
  
  // Glass input effects
  glassInput: "bg-aureon-glass backdrop-blur-glass border border-white/20 focus:border-aureon-gold focus:ring-aureon-gold/30 focus:bg-white/10 transition-all duration-300",
  
  // Glass navigation
  glassNav: "bg-aureon-glass/80 backdrop-blur-glass border-b border-white/10 shadow-glass",
  
  // Glass modal/overlay
  glassModal: "bg-aureon-glass backdrop-blur-glass border border-white/20 shadow-glass rounded-2xl",
} as const;

// Animation classes
export const animations = {
  // Fade animations
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  slideDown: "animate-slide-down",
  slideLeft: "animate-slide-left",
  slideRight: "animate-slide-right",
  scaleIn: "animate-scale-in",
  
  // Glow effects
  glow: "animate-glow",
  float: "animate-float",
  
  // Hover effects
  hoverGlow: "hover:shadow-glow transition-all duration-300",
  hoverGlowBlue: "hover:shadow-glow-blue transition-all duration-300",
  hoverScale: "hover:scale-105 transition-transform duration-300",
  hoverLift: "hover:-translate-y-1 transition-transform duration-300",
} as const;

// Typography classes using Satoshi font with enhanced mobile scaling
export const typography = {
  // Headings with Satoshi - Enhanced mobile scaling
  h1: "font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight",
  h2: "font-satoshi font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight",
  h3: "font-satoshi font-medium text-xl sm:text-2xl md:text-3xl leading-tight",
  h4: "font-satoshi font-medium text-lg sm:text-xl md:text-2xl leading-tight",
  h5: "font-satoshi font-medium text-base sm:text-lg md:text-xl leading-tight",
  h6: "font-satoshi font-medium text-sm sm:text-base md:text-lg leading-tight",
  
  // Body text with Inter - Enhanced mobile readability
  body: "font-inter text-sm sm:text-base leading-relaxed",
  bodyLarge: "font-inter text-base sm:text-lg md:text-xl leading-relaxed",
  bodySmall: "font-inter text-xs sm:text-sm leading-relaxed",
  
  // Special text effects
  gradient: "aureon-text-gradient",
  gold: "text-aureon-gold",
  blue: "text-aureon-blue",
} as const;

// Utility function to combine glass effects with custom classes
export function createGlassEffect(variant: keyof typeof glassEffects, customClasses?: string) {
  return cn(glassEffects[variant], customClasses);
}

// Utility function to combine animations
export function createAnimation(animation: keyof typeof animations, customClasses?: string) {
  return cn(animations[animation], customClasses);
}

// Utility function for typography
export function createTypography(variant: keyof typeof typography, customClasses?: string) {
  return cn(typography[variant], customClasses);
}