# AureonCapital Website Design Document

## Overview

The AureonCapital website is a premium, single-page application (SPA) built with Next.js that showcases the investment capabilities and portfolio of AureonCapital, the investment arm of Aureon AI. The design emphasizes luxury, technological sophistication, and financial precision through carefully crafted animations, premium typography, and a sophisticated color palette.

The website serves as both a marketing tool and a lead generation platform, targeting AI startups, technology companies, and potential investors who value innovation and cutting-edge technology.

## Architecture

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: TailwindCSS with custom configuration
- **UI Components**: ShadCN UI component library
- **Animations**: Framer Motion for complex animations and transitions
- **Typography**: Satoshi (primary) and Inter (secondary) fonts
- **Deployment**: Vercel (recommended) or similar platform

### Application Structure
```
aureoncapital-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles and custom CSS
│   └── components/
│       ├── ui/             # ShadCN UI components
│       ├── sections/       # Page sections (Hero, Vision, etc.)
│       ├── animations/     # Reusable animation components
│       └── forms/          # Contact form components
├── public/
│   ├── fonts/              # Satoshi and Inter font files
│   ├── images/             # Logos, icons, and graphics
│   └── animations/         # Lottie or SVG animation assets
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── animations.ts       # Animation configurations
│   └── constants.ts        # Design tokens and constants
└── styles/
    └── components.css      # Component-specific styles
```

## Components and Interfaces

### Core Components

#### 1. Layout Components
- **Header**: Fixed navigation with glass morphism effect
- **Footer**: Premium footer with golden accents and legal information
- **PageWrapper**: Main container with scroll-triggered animations

#### 2. Section Components
- **HeroSection**: Primary landing area with animated background
- **VisionSection**: Company philosophy with centered content
- **InvestmentDomainsSection**: Animated grid of investment focus areas
- **PortfolioSection**: Carousel showcasing supported companies
- **ContactSection**: Contact form with validation and submission handling

#### 3. Animation Components
- **AnimatedBackground**: Financial graph with golden circuits
- **GlassMorphismCard**: Reusable card with glass effect
- **ScrollReveal**: Wrapper for scroll-triggered animations
- **HoverEffect**: Interactive hover animations for buttons and cards

#### 4. UI Components (ShadCN)
- **Button**: Custom styled buttons with golden accents
- **Card**: Glass morphism cards for content sections
- **Form**: Contact form with validation
- **Input**: Styled form inputs with focus states

### Component Interfaces

```typescript
// Core component props
interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

interface ContactFormData {
  nom: string;
  email: string;
  message: string;
}

interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
}
```

## Data Models

### Design Tokens
```typescript
const designTokens = {
  colors: {
    primary: '#d4af37',      // Gold
    secondary: '#38bdf8',    // Sky Blue
    background: '#0b0b0d',   // Deep Black
    text: '#ffffff',         // White
    accent: '#1a1a1f',       // Dark Gray
    glass: 'rgba(255, 255, 255, 0.1)'
  },
  fonts: {
    primary: 'Satoshi',
    secondary: 'Inter'
  },
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.4s',
      slow: '0.8s'
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};
```

### Content Structure
```typescript
interface WebsiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaButtons: string[];
  };
  vision: {
    title: string;
    content: string;
  };
  investmentDomains: string[];
  portfolio: PortfolioItem[];
  contact: {
    title: string;
    cta: string;
    socialLinks: { platform: string; url: string; }[];
  };
}
```

## Visual Design System

### Color Palette Implementation
- **Primary Gold (#d4af37)**: Call-to-action buttons, accents, and highlights
- **Secondary Blue (#38bdf8)**: Interactive elements and secondary accents
- **Background (#0b0b0d)**: Main background with subtle texture
- **Text (#ffffff)**: Primary text with opacity variations for hierarchy

### Typography Hierarchy
- **H1**: Satoshi Bold, 4rem (desktop) / 2.5rem (mobile)
- **H2**: Satoshi SemiBold, 3rem (desktop) / 2rem (mobile)
- **H3**: Satoshi Medium, 2rem (desktop) / 1.5rem (mobile)
- **Body**: Inter Regular, 1.125rem with 1.6 line height
- **Caption**: Inter Medium, 0.875rem for labels and metadata

### Glass Morphism Effects
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
```

## Animation Strategy

### Scroll-Triggered Animations
- **Hero Section**: Fade in with upward motion
- **Content Sections**: Staggered reveal as user scrolls
- **Investment Domains**: Grid items animate in sequence
- **Portfolio Carousel**: Smooth horizontal transitions

### Interactive Animations
- **Button Hover**: Scale and glow effects with golden accent
- **Card Hover**: Subtle lift and enhanced glass effect
- **Form Focus**: Input field highlighting with blue accent
- **Navigation**: Smooth transitions between sections

### Background Animations
- **Financial Graph**: Continuous subtle movement with golden particles
- **Circuit Patterns**: Animated pathways with light trails
- **Gradient Shifts**: Subtle color transitions on scroll

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Mobile Adaptations
- **Navigation**: Hamburger menu with slide-out panel
- **Hero Section**: Stacked layout with adjusted typography
- **Investment Domains**: Single column grid
- **Portfolio**: Touch-friendly carousel with swipe gestures
- **Contact Form**: Full-width inputs with improved touch targets

## Performance Considerations

### Optimization Strategies
- **Image Optimization**: Next.js Image component with WebP format
- **Font Loading**: Preload critical fonts with font-display: swap
- **Animation Performance**: Use transform and opacity for 60fps animations
- **Code Splitting**: Lazy load non-critical components
- **Bundle Size**: Tree-shake unused dependencies and optimize imports

### Loading Strategy
- **Critical Path**: Inline critical CSS for above-the-fold content
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Lazy Loading**: Images and animations load as they enter viewport
- **Caching**: Implement proper cache headers for static assets

## Error Handling

### Form Validation
- **Client-side**: Real-time validation with visual feedback
- **Server-side**: Backend validation for security
- **Error States**: Clear error messages with recovery suggestions
- **Success States**: Confirmation messages and next steps

### Graceful Degradation
- **Animation Fallbacks**: Static versions for reduced motion preferences
- **Font Fallbacks**: System fonts if custom fonts fail to load
- **Image Fallbacks**: Alt text and placeholder colors
- **JavaScript Disabled**: Core content remains accessible

## Testing Strategy

### Component Testing
- **Unit Tests**: Individual component functionality
- **Integration Tests**: Component interactions and data flow
- **Visual Regression**: Screenshot comparisons for UI consistency
- **Accessibility Tests**: WCAG compliance and screen reader compatibility

### Performance Testing
- **Lighthouse Audits**: Regular performance, accessibility, and SEO checks
- **Core Web Vitals**: Monitor LCP, FID, and CLS metrics
- **Cross-browser Testing**: Ensure compatibility across major browsers
- **Device Testing**: Validate responsive behavior on real devices

### User Experience Testing
- **Usability Testing**: Task completion and user flow validation
- **A/B Testing**: Optimize conversion rates for contact form
- **Analytics Integration**: Track user behavior and engagement metrics
- **Heat Mapping**: Understand user interaction patterns