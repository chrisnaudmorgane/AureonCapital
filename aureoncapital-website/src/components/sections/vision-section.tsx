"use client";

import { motion } from "framer-motion";
import { createTypography, createGlassEffect } from "@/lib/glass-effects";
import { sectionFadeIn, staggeredGrid, gridItemVariants } from "@/lib/animations";
import { ScrollReveal, StaggeredReveal } from "@/components/animations/scroll-reveal";
import { Lightbulb, TrendingUp } from "lucide-react";
import { mobileOptimizedHover, getAnimationDuration } from "@/lib/mobile-animations";

export function VisionSection() {
  return (
    <section id="vision" className="min-h-screen flex items-center justify-center bg-background/50 py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="max-w-4xl mx-auto text-center" amount={0.3}>
          {/* Section Title */}
          <ScrollReveal delay={0.2}>
            <h2 className={createTypography("h2", "aureon-text-gradient mb-8")}>
              Notre Vision
            </h2>
          </ScrollReveal>

          {/* Vision Content */}
          <ScrollReveal delay={0.4}>
            <div className={createGlassEffect("glassCard", "p-8 md:p-12 mb-12")}>
              <p className={createTypography("bodyLarge", "text-white/90 mb-8 leading-relaxed")}>
                Chez AureonCapital, nous croyons que l&apos;intelligence artificielle représente la prochaine 
                révolution technologique qui transformera fondamentalement la façon dont nous travaillons, 
                créons et innovons. Notre mission est d&apos;identifier et de soutenir les entreprises 
                visionnaires qui façonnent l&apos;avenir de l&apos;IA.
              </p>
              
              <p className={createTypography("bodyLarge", "text-white/80 leading-relaxed")}>
                Nous investissons dans des solutions qui allient innovation technologique et impact réel, 
                en nous concentrant sur des domaines où l&apos;IA peut créer une valeur durable et 
                transformer les industries traditionnelles.
              </p>
            </div>
          </ScrollReveal>

          {/* Innovation and Growth Icons */}
          <StaggeredReveal 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
            staggerDelay={0.2}
            childDelay={0.6}
          >
            {/* Innovation Icon */}
            <motion.div 
              className={createGlassEffect("glassCard", "p-4 sm:p-6 group hover:bg-white/15 transition-all duration-300 touch-manipulation")}
              {...mobileOptimizedHover}
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-full bg-aureon-gold/20 group-hover:bg-aureon-gold/30 transition-colors duration-300">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-aureon-gold" />
                </div>
                <h3 className={createTypography("h5", "text-aureon-gold")}>
                  Innovation
                </h3>
                <p className={createTypography("body", "text-white/80 text-center")}>
                  Nous soutenons les idées révolutionnaires qui repoussent les limites de la technologie
                </p>
              </div>
            </motion.div>

            {/* Growth Icon */}
            <motion.div 
              className={createGlassEffect("glassCard", "p-4 sm:p-6 group hover:bg-white/15 transition-all duration-300 touch-manipulation")}
              {...mobileOptimizedHover}
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-full bg-aureon-blue/20 group-hover:bg-aureon-blue/30 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-aureon-blue" />
                </div>
                <h3 className={createTypography("h5", "text-aureon-blue")}>
                  Croissance
                </h3>
                <p className={createTypography("body", "text-white/80 text-center")}>
                  Nous accompagnons nos partenaires vers une croissance durable et profitable
                </p>
              </div>
            </motion.div>
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}