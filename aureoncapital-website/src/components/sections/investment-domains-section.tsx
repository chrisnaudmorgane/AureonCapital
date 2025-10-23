"use client";

import { motion } from "framer-motion";
import { createTypography, createGlassEffect } from "@/lib/glass-effects";
import { staggeredGrid, gridItemVariants } from "@/lib/animations";
import { ScrollReveal, StaggeredReveal } from "@/components/animations/scroll-reveal";
import { 
  Brain, 
  CreditCard, 
  Cog, 
  Cloud, 
  BarChart3 
} from "lucide-react";

interface InvestmentDomain {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

const investmentDomains: InvestmentDomain[] = [
  {
    id: "ia",
    name: "IA",
    description: "Intelligence Artificielle et Machine Learning",
    icon: Brain,
    color: "text-aureon-gold",
    bgColor: "bg-aureon-gold/20 group-hover:bg-aureon-gold/30"
  },
  {
    id: "fintech",
    name: "FinTech",
    description: "Technologies Financières Innovantes",
    icon: CreditCard,
    color: "text-aureon-blue",
    bgColor: "bg-aureon-blue/20 group-hover:bg-aureon-blue/30"
  },
  {
    id: "automatisation",
    name: "Automatisation",
    description: "Solutions d'Automatisation Intelligente",
    icon: Cog,
    color: "text-purple-400",
    bgColor: "bg-purple-400/20 group-hover:bg-purple-400/30"
  },
  {
    id: "saas",
    name: "SaaS",
    description: "Software as a Service et Plateformes Cloud",
    icon: Cloud,
    color: "text-green-400",
    bgColor: "bg-green-400/20 group-hover:bg-green-400/30"
  },
  {
    id: "data-intelligence",
    name: "Data Intelligence",
    description: "Analytics et Business Intelligence",
    icon: BarChart3,
    color: "text-orange-400",
    bgColor: "bg-orange-400/20 group-hover:bg-orange-400/30"
  }
];

const itemVariants = {
  initial: { opacity: 0, y: 60, scale: 0.8 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const hoverVariants = {
  whileHover: { 
    scale: 1.05,
    y: -8,
    transition: { 
      type: "spring" as const, 
      stiffness: 300, 
      damping: 20 
    }
  },
  whileTap: { 
    scale: 0.95 
  }
};

export function InvestmentDomainsSection() {
  return (
    <section id="investments" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <ScrollReveal className="text-center mb-16" amount={0.3}>
            <h2 className={createTypography("h2", "aureon-text-gradient mb-6")}>
              Domaines d&apos;Investissement
            </h2>
            <p className={createTypography("bodyLarge", "text-white/80 max-w-3xl mx-auto")}>
              Nous nous concentrons sur cinq secteurs clés où l&apos;intelligence artificielle 
              et l&apos;innovation technologique créent le plus de valeur et d&apos;impact.
            </p>
          </ScrollReveal>

          {/* Investment Domains Grid */}
          <StaggeredReveal 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            staggerDelay={0.15}
            childDelay={0.3}
            amount={0.2}
          >
            {investmentDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              
              return (
                <motion.div
                  key={domain.id}
                  {...hoverVariants}
                  className={createGlassEffect("glassCard", "p-6 group cursor-pointer")}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className={`p-4 rounded-full transition-all duration-300 ${domain.bgColor}`}>
                      <IconComponent className={`w-8 h-8 ${domain.color}`} />
                    </div>
                    
                    {/* Domain Name */}
                    <h3 className={createTypography("h5", `${domain.color} group-hover:scale-105 transition-transform duration-300`)}>
                      {domain.name}
                    </h3>
                    
                    {/* Description */}
                    <p className={createTypography("bodySmall", "text-white/70 group-hover:text-white/90 transition-colors duration-300")}>
                      {domain.description}
                    </p>
                    
                    {/* Hover Effect Indicator */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-aureon-gold to-aureon-blue group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </motion.div>
              );
            })}
          </StaggeredReveal>

          {/* Call to Action */}
          <ScrollReveal className="text-center mt-16" delay={0.8}>
            <div className={createGlassEffect("glassCard", "p-8 max-w-2xl mx-auto")}>
              <p className={createTypography("bodyLarge", "text-white/90 mb-4")}>
                Votre projet s&apos;inscrit dans l&apos;un de ces domaines ?
              </p>
              <p className={createTypography("body", "text-white/70")}>
                Découvrez comment AureonCapital peut vous accompagner dans votre croissance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}