"use client";

import { MotionConfig } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig
      // Optimize for 60fps performance
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: prefersReducedMotion ? 0.01 : 0.4,
      }}
      // Reduce motion when user prefers it
      reducedMotion={prefersReducedMotion ? "always" : "never"}
    >
      {children}
    </MotionConfig>
  );
}