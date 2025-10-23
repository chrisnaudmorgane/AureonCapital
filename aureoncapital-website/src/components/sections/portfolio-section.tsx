"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { PortfolioItemComponent } from "./portfolio-item";
import { Carousel } from "@/components/ui/carousel";
import { createTypography } from "@/lib/glass-effects";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function PortfolioSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background/50 to-background py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-16"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className={createTypography("h2", "aureon-text-gradient")}>
                Projets Soutenus
              </h2>
              <p className={createTypography("bodyLarge", "text-gray-300 max-w-3xl mx-auto leading-relaxed")}>
                Découvrez notre écosystème d'entreprises innovantes qui façonnent l'avenir de l'intelligence artificielle 
                et transforment les industries grâce à des technologies de pointe.
              </p>
            </motion.div>

            {/* Portfolio Carousel */}
            <motion.div variants={itemVariants} className="relative">
              <div className="max-w-6xl mx-auto">
                <Carousel
                  autoPlay={true}
                  autoPlayInterval={6000}
                  showIndicators={true}
                  showNavigation={true}
                  className="h-[500px] md:h-[400px]"
                >
                  {portfolioData.map((item, index) => (
                    <div key={item.id} className="px-4 h-full flex items-center">
                      <PortfolioItemComponent 
                        item={item}
                        isActive={true}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </motion.div>

            {/* Portfolio Grid for Desktop (Alternative View) */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {portfolioData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut" as const
                        }
                      }
                    }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <PortfolioItemComponent 
                      item={item}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-aureon-gold to-transparent mx-auto" />
              <p className={createTypography("body", "text-gray-400 max-w-2xl mx-auto")}>
                Rejoignez notre écosystème d'innovation et bénéficiez de notre expertise en intelligence artificielle 
                pour accélérer la croissance de votre entreprise.
              </p>
              
              <motion.button
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-aureon-gold/20 to-aureon-blue/20 border border-aureon-gold/30 text-aureon-gold hover:from-aureon-gold/30 hover:to-aureon-blue/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={createTypography("body", "font-medium")}>
                  Découvrir nos opportunités
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-aureon-gold/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-aureon-blue/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-aureon-gold/20 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  );
}