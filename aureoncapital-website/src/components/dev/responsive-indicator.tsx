"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BreakpointInfo {
  name: string;
  minWidth: number;
  maxWidth?: number;
  color: string;
}

const breakpoints: BreakpointInfo[] = [
  { name: 'XS', minWidth: 0, maxWidth: 374, color: 'bg-red-500' },
  { name: 'SM', minWidth: 375, maxWidth: 639, color: 'bg-orange-500' },
  { name: 'MD', minWidth: 640, maxWidth: 767, color: 'bg-yellow-500' },
  { name: 'LG', minWidth: 768, maxWidth: 1023, color: 'bg-green-500' },
  { name: 'XL', minWidth: 1024, maxWidth: 1279, color: 'bg-blue-500' },
  { name: '2XL', minWidth: 1280, color: 'bg-purple-500' },
];

export function ResponsiveIndicator() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });

      // Find current breakpoint
      const breakpoint = breakpoints.find(bp => {
        if (bp.maxWidth) {
          return width >= bp.minWidth && width <= bp.maxWidth;
        }
        return width >= bp.minWidth;
      });
      setCurrentBreakpoint(breakpoint || null);
    };

    // Show indicator on development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible || !currentBreakpoint) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed top-4 right-4 z-[9999] pointer-events-none"
      >
        <div className={`${currentBreakpoint.color} text-white px-3 py-2 rounded-lg shadow-lg font-mono text-sm`}>
          <div className="flex items-center space-x-2">
            <span className="font-bold">{currentBreakpoint.name}</span>
            <span className="opacity-75">|</span>
            <span>{windowSize.width}×{windowSize.height}</span>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-2 bg-black/80 text-white text-xs px-2 py-1 rounded text-center">
          Ctrl+Shift+R to toggle
        </div>
      </motion.div>
    </AnimatePresence>
  );
}