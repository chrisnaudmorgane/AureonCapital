"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { createTypography } from "@/lib/glass-effects";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { 
  mobileOptimizedFadeIn, 
  mobileOptimizedStagger, 
  mobileOptimizedHover,
  getAnimationDuration 
} from "@/lib/mobile-animations";

export function HeroSection() {
  // Mobile-optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: getAnimationDuration(0.8, 0.5),
        staggerChildren: getAnimationDuration(0.3, 0.2),
      },
    },
  };

  const itemVariants = mobileOptimizedFadeIn;

  const buttonVariants = {
    ...mobileOptimizedFadeIn,
    ...mobileOptimizedHover,
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden"
    >
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Content container - Enhanced mobile spacing */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <motion.div 
          className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main title with responsive typography */}
          <motion.h1 
            className={createTypography("h1", "aureon-text-gradient leading-tight")}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Investir dans l&apos;intelligence du futur
          </motion.h1>
          
          {/* Subtitle with enhanced mobile readability */}
          <motion.p 
            className={createTypography("bodyLarge", "text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0")}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            AureonCapital, filiale d&apos;investissement d&apos;Aureon AI Group, investit dans l&apos;avenir de l&apos;intelligence artificielle et des technologies innovantes.
          </motion.p>
          
          {/* Call-to-action buttons with enhanced mobile layout */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4 sm:px-0"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="gold"
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto min-h-[48px] transition-all duration-300 hover:shadow-glow touch-manipulation"
              >
                Découvrir nos investissements
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="outline-blue"
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto min-h-[48px] transition-all duration-300 hover:shadow-glow-blue touch-manipulation"
              >
                Rejoindre le portefeuille
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}