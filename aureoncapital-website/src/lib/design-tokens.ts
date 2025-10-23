/**
 * AureonCapital Design Tokens
 * Centralized design system configuration
 */

export const designTokens = {
  colors: {
    // Primary brand colors
    primary: '#d4af37',      // Gold
    secondary: '#38bdf8',    // Sky Blue
    background: '#0b0b0d',   // Deep Black
    text: '#ffffff',         // White
    accent: '#1a1a1f',       // Dark Gray
    glass: 'rgba(255, 255, 255, 0.1)',
    
    // Extended palette
    gold: {
      50: '#fefdf7',
      100: '#fdf9e7',
      200: '#faf0c4',
      300: '#f5e196',
      400: '#eecf66',
      500: '#d4af37', // Primary gold
      600: '#c19b2e',
      700: '#a18025',
      800: '#846724',
      900: '#6e5524',
    },
    blue: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8', // Primary blue
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#0b0b0d', // Primary background
    }
  },
  
  fonts: {
    primary: 'var(--font-satoshi)',
    secondary: 'var(--font-inter)',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },
  
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  animations: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '0.8s',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  
  shadows: {
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    glow: '0 0 20px rgba(212, 175, 55, 0.3)',
    'glow-blue': '0 0 20px rgba(56, 189, 248, 0.3)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
} as const;

export type DesignTokens = typeof designTokens;