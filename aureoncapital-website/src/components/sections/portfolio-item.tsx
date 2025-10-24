"use client";

import { motion } from "framer-motion";
import { PortfolioItem } from "@/lib/portfolio-data";
import { GlassCard } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { createTypography } from "@/lib/glass-effects";
import { ExternalLink } from "lucide-react";

interface PortfolioItemProps {
  item: PortfolioItem;
  isActive?: boolean;
  onClick?: () => void;
}

export function PortfolioItemComponent({ item, isActive = false, onClick }: PortfolioItemProps) {
  return (
    <motion.div
      className="w-full max-w-md mx-auto cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard
        className={`p-6 h-full transition-all duration-300 ${isActive
            ? 'ring-2 ring-aureon-gold/50 bg-white/15'
            : 'hover:bg-white/10'
          }`}
      >
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-aureon-gold/20 to-aureon-blue/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              {item.logo ? (
                <OptimizedImage
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                  priority={isActive}
                  quality={90}
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-aureon-gold to-aureon-blue flex items-center justify-center">
                  <span className={createTypography("h5", "text-white font-bold")}>
                    {item.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <h3 className={createTypography("h4", "text-white font-semibold")}>
              {item.name}
            </h3>
            {item.website && (
              <ExternalLink className="w-4 h-4 text-aureon-gold/70" />
            )}
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-aureon-blue/20 border border-aureon-blue/30">
            <span className={createTypography("bodySmall", "text-aureon-blue font-medium")}>
              {item.category}
            </span>
          </div>

          <p className={createTypography("body", "text-gray-300 leading-relaxed")}>
            {item.description}
          </p>

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {item.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className={createTypography("bodySmall", "px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10")}
                >
                  {tech}
                </span>
              ))}
              {item.technologies.length > 3 && (
                <span className={createTypography("bodySmall", "px-2 py-1 rounded-md bg-aureon-gold/10 text-aureon-gold border border-aureon-gold/20")}>
                  +{item.technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-aureon-gold/5 to-aureon-blue/5 opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </GlassCard>
    </motion.div>
  );
}