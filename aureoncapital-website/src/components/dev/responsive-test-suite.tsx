"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Tablet, Laptop, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createGlassEffect, createTypography } from '@/lib/glass-effects';

interface TestViewport {
  name: string;
  width: number;
  height: number;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const testViewports: TestViewport[] = [
  {
    name: 'iPhone SE',
    width: 375,
    height: 667,
    icon: Smartphone,
    description: 'Small mobile device'
  },
  {
    name: 'iPhone 12',
    width: 390,
    height: 844,
    icon: Smartphone,
    description: 'Modern mobile device'
  },
  {
    name: 'iPad',
    width: 768,
    height: 1024,
    icon: Tablet,
    description: 'Tablet portrait'
  },
  {
    name: 'iPad Landscape',
    width: 1024,
    height: 768,
    icon: Tablet,
    description: 'Tablet landscape'
  },
  {
    name: 'Laptop',
    width: 1366,
    height: 768,
    icon: Laptop,
    description: 'Small laptop'
  },
  {
    name: 'Desktop',
    width: 1920,
    height: 1080,
    icon: Monitor,
    description: 'Full HD desktop'
  }
];

interface ResponsiveTestResult {
  viewport: string;
  issues: string[];
  passed: boolean;
}

export function ResponsiveTestSuite() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentViewport, setCurrentViewport] = useState<TestViewport | null>(null);
  const [testResults, setTestResults] = useState<ResponsiveTestResult[]>([]);
  const [isRunningTests, setIsRunningTests] = useState(false);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        setIsVisible(prev => !prev);
      }
    };

    if (process.env.NODE_ENV === 'development') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const simulateViewport = (viewport: TestViewport) => {
    setCurrentViewport(viewport);
    
    // Create a new window or iframe for testing
    const testWindow = window.open(
      window.location.href,
      'responsive-test',
      `width=${viewport.width},height=${viewport.height},scrollbars=yes,resizable=yes`
    );
    
    if (testWindow) {
      testWindow.focus();
    }
  };

  const runAutomatedTests = async () => {
    setIsRunningTests(true);
    const results: ResponsiveTestResult[] = [];

    for (const viewport of testViewports) {
      const issues: string[] = [];
      
      // Simulate viewport testing
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock test results (in real implementation, these would be actual tests)
      const mockIssues = [];
      
      // Check for common responsive issues
      if (viewport.width < 400) {
        mockIssues.push('Text might be too small on very small screens');
      }
      
      if (viewport.width > 1600) {
        mockIssues.push('Content might be too spread out on large screens');
      }
      
      results.push({
        viewport: viewport.name,
        issues: mockIssues,
        passed: mockIssues.length === 0
      });
    }
    
    setTestResults(results);
    setIsRunningTests(false);
  };

  const resetTests = () => {
    setTestResults([]);
    setCurrentViewport(null);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 z-[9998] w-80 max-h-[80vh] overflow-y-auto"
      >
        <div className={createGlassEffect('glassCard', 'p-4')}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className={createTypography('h6', 'text-aureon-gold')}>
              Responsive Test Suite
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-white/60 hover:text-white"
            >
              <EyeOff className="h-4 w-4" />
            </Button>
          </div>

          {/* Controls */}
          <div className="space-y-3 mb-4">
            <Button
              onClick={runAutomatedTests}
              disabled={isRunningTests}
              className="w-full"
              variant="outline"
            >
              {isRunningTests ? 'Running Tests...' : 'Run Automated Tests'}
            </Button>
            
            <Button
              onClick={resetTests}
              className="w-full"
              variant="ghost"
            >
              Reset Tests
            </Button>
          </div>

          {/* Viewport Simulators */}
          <div className="space-y-2 mb-4">
            <h4 className={createTypography('bodySmall', 'text-white/80 font-medium')}>
              Test Viewports
            </h4>
            {testViewports.map((viewport) => (
              <button
                key={viewport.name}
                onClick={() => simulateViewport(viewport)}
                className="w-full p-2 rounded-lg border border-white/20 hover:border-aureon-gold/50 hover:bg-white/5 transition-all duration-200 text-left"
              >
                <div className="flex items-center space-x-2">
                  <viewport.icon className="h-4 w-4 text-aureon-blue" />
                  <div className="flex-1">
                    <div className={createTypography('bodySmall', 'text-white font-medium')}>
                      {viewport.name}
                    </div>
                    <div className="text-xs text-white/60">
                      {viewport.width}×{viewport.height}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="space-y-2">
              <h4 className={createTypography('bodySmall', 'text-white/80 font-medium')}>
                Test Results
              </h4>
              {testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg border ${
                    result.passed 
                      ? 'border-green-500/30 bg-green-500/10' 
                      : 'border-yellow-500/30 bg-yellow-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={createTypography('bodySmall', 'text-white font-medium')}>
                      {result.viewport}
                    </span>
                    <span className={`text-xs ${result.passed ? 'text-green-400' : 'text-yellow-400'}`}>
                      {result.passed ? 'PASS' : 'WARN'}
                    </span>
                  </div>
                  {result.issues.length > 0 && (
                    <div className="mt-1 space-y-1">
                      {result.issues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="text-xs text-white/70">
                          • {issue}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Instructions */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="text-xs text-white/60 space-y-1">
              <div>Ctrl+Shift+T: Toggle panel</div>
              <div>Click viewport to test in new window</div>
              <div>Run tests to check for issues</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}