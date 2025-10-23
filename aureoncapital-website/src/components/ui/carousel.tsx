"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  className?: string;
}

export function Carousel({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showIndicators = true,
  showNavigation = true,
  className = ""
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = children.length;

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered || totalItems <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, totalItems]);

  // Update drag constraints when component mounts
  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const itemWidth = containerWidth;
      const maxDrag = (totalItems - 1) * itemWidth;
      
      setDragConstraints({
        left: -maxDrag,
        right: 0
      });
    }
  }, [totalItems]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, totalItems - 1)));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      if (offset > 0 || velocity > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={carouselRef}
    >
      {/* Main Carousel Container */}
      <div className="relative h-full">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ width: `${totalItems * 100}%` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center"
              style={{ width: `${100 / totalItems}%` }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {showNavigation && totalItems > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 border border-white/20 text-white hover:text-aureon-gold transition-all duration-300"
            onClick={goToPrevious}
            disabled={currentIndex === 0 && !autoPlay}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 border border-white/20 text-white hover:text-aureon-gold transition-all duration-300"
            onClick={goToNext}
            disabled={currentIndex === totalItems - 1 && !autoPlay}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && totalItems > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-aureon-gold scale-110"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar (optional) */}
      {autoPlay && !isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-aureon-gold to-aureon-blue"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: autoPlayInterval / 1000,
              ease: "linear",
              repeat: Infinity
            }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
}