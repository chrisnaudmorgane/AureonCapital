"use client";

import { FinancialGraph } from "./financial-graph";
import { GoldenCircuits } from "./golden-circuits";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-aureon-dark/50" />
      
      {/* Golden circuits layer */}
      <GoldenCircuits />
      
      {/* Financial graph layer */}
      <FinancialGraph />
      
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
}