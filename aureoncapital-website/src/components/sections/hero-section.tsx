"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { createTypography } from "@/lib/glass-effects";
import { AnimatedBackground } from "@/components/animations/animated-background";

export function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden"
    >
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div 
          className="text-center space-y-8 max-w-5xl mx-auto"
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
          
          {/* Subtitle with responsive scaling */}
          <motion.p 
            className={createTypography("bodyLarge", "text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed")}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            AureonCapital, filiale d&apos;investissement d&apos;Aureon AI Group, investit dans l&apos;avenir de l&apos;intelligence artificielle et des technologies innovantes.
          </motion.p>
          
          {/* Call-to-action buttons with responsive layout */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Button 
                size="lg" 
                variant="gold"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-4 h-auto transition-all duration-300 hover:shadow-glow"
              >
                Découvrir nos investissements
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Button 
                size="lg" 
                variant="outline-blue"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-4 h-auto transition-all duration-300 hover:shadow-glow-blue"
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