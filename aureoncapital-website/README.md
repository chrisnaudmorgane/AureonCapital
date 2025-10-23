# AureonCapital Website

A premium, technology-focused financial website for AureonCapital, the investment subsidiary of Aureon AI Group. Built with Next.js 14+, TailwindCSS, and Framer Motion.

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: TailwindCSS v4 with custom AureonCapital color palette
- **UI Components**: ShadCN UI component library
- **Animations**: Framer Motion for complex animations and transitions
- **Typography**: Inter font (with Satoshi planned for future implementation)
- **Language**: TypeScript with ESLint configuration

## Features

- ✅ Next.js 14+ with App Router
- ✅ TailwindCSS v4 with custom AureonCapital color palette
- ✅ ShadCN UI components (Button, Card, Input, Form)
- ✅ Framer Motion for animations
- ✅ TypeScript configuration
- ✅ ESLint configuration
- ✅ Glass morphism effects and custom utilities
- ✅ Responsive design system
- ✅ Dark theme optimized for AureonCapital branding

## Color Palette

- **Primary Gold**: #d4af37 - Call-to-action buttons, accents, and highlights
- **Secondary Blue**: #38bdf8 - Interactive elements and secondary accents
- **Background**: #0b0b0d - Main background with subtle texture
- **Text**: #ffffff - Primary text with opacity variations for hierarchy
- **Accent**: #1a1a1f - Dark gray for cards and secondary elements

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
aureoncapital-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and providers
│   │   ├── page.tsx            # Main homepage
│   │   └── globals.css         # Global styles and custom CSS
│   ├── components/
│   │   ├── ui/                 # ShadCN UI components
│   │   ├── sections/           # Page sections (Hero, Vision, etc.)
│   │   ├── animations/         # Reusable animation components
│   │   └── forms/              # Contact form components
│   └── lib/
│       ├── utils.ts            # Utility functions
│       ├── animations.ts       # Animation configurations
│       └── constants.ts        # Design tokens and constants
├── public/                     # Static assets
└── components.json             # ShadCN configuration
```

## Custom Utilities

The project includes custom TailwindCSS utilities:

- `glass-effect` - Glass morphism background effect
- `glass-card` - Glass morphism card with rounded corners
- `aureon-gradient` - AureonCapital brand gradient
- `aureon-text-gradient` - Text gradient with brand colors

## Next Steps

This is the foundation setup. The next tasks in the implementation plan will build upon this structure to create:

1. Design system and typography setup
2. Layout structure and navigation
3. Hero section with animations
4. Vision and investment domains sections
5. Portfolio showcase section
6. Contact section and form
7. Responsive design optimization
8. Performance optimization and final polish
