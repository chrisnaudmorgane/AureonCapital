'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Linkedin, Mail, MessageSquare, Users } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';
import { createTypography, createGlassEffect } from '@/lib/glass-effects';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/aureon-ai',
    icon: Linkedin,
    description: 'Suivez nos actualités et notre réseau professionnel',
  },
  {
    name: 'Aureon AI',
    href: 'https://aureon.ai',
    icon: ExternalLink,
    description: 'Découvrez notre écosystème technologique',
  },
];

const contactStats = [
  {
    icon: Users,
    label: 'Startups accompagnées',
    value: '50+',
  },
  {
    icon: MessageSquare,
    label: 'Projets évalués',
    value: '200+',
  },
  {
    icon: Mail,
    label: 'Réponse moyenne',
    value: '24h',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen py-20 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-aureon-dark via-aureon-dark to-aureon-accent/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-aureon-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aureon-blue/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={createTypography('h2', 'aureon-text-gradient mb-6')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Travaillons ensemble sur la prochaine réussite
          </motion.h2>
          
          <motion.p
            className={createTypography('bodyLarge', 'text-white/80 max-w-3xl mx-auto leading-relaxed')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Vous avez un projet innovant dans l&apos;IA, la FinTech ou les technologies émergentes ? 
            Partagez votre vision avec nous et explorons ensemble les possibilités d&apos;investissement 
            et de partenariat stratégique.
          </motion.p>
        </motion.div>

        {/* Contact Stats - Enhanced mobile layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {contactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={createGlassEffect('glassCard', 'p-4 sm:p-6 text-center touch-manipulation')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-aureon-gold/20 border border-aureon-gold/30">
                  <stat.icon className="h-6 w-6 text-aureon-gold" />
                </div>
              </div>
              <div className={createTypography('h4', 'text-aureon-gold mb-2')}>
                {stat.value}
              </div>
              <p className={createTypography('bodySmall', 'text-white/70')}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Why Contact Us */}
            <div className={createGlassEffect('glassCard', 'p-8')}>
              <h3 className={createTypography('h4', 'text-aureon-gold mb-6')}>
                Pourquoi nous contacter ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-aureon-gold mt-2 flex-shrink-0" />
                  <p className={createTypography('body', 'text-white/80')}>
                    <strong className="text-white">Expertise sectorielle :</strong> Nous comprenons 
                    les enjeux spécifiques de l&apos;IA et des technologies émergentes
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-aureon-gold mt-2 flex-shrink-0" />
                  <p className={createTypography('body', 'text-white/80')}>
                    <strong className="text-white">Accompagnement personnalisé :</strong> Chaque projet 
                    bénéficie d&apos;un suivi sur mesure adapté à ses besoins
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-aureon-gold mt-2 flex-shrink-0" />
                  <p className={createTypography('body', 'text-white/80')}>
                    <strong className="text-white">Réseau étendu :</strong> Accès à notre écosystème 
                    de partenaires et d&apos;experts technologiques
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={createGlassEffect('glassCard', 'p-8')}>
              <h3 className={createTypography('h4', 'text-aureon-blue mb-6')}>
                Suivez-nous
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 rounded-lg border border-white/10 hover:border-aureon-blue/50 transition-all duration-300 hover:bg-white/5"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 rounded-lg bg-aureon-blue/20 border border-aureon-blue/30 group-hover:bg-aureon-blue/30 transition-colors">
                      <link.icon className="h-5 w-5 text-aureon-blue" />
                    </div>
                    <div className="flex-1">
                      <div className={createTypography('bodySmall', 'text-white font-medium mb-1')}>
                        {link.name}
                      </div>
                      <p className={createTypography('bodySmall', 'text-white/60 text-xs')}>
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-aureon-blue transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className={createGlassEffect('glassCard', 'p-8')}>
              <h3 className={createTypography('h4', 'text-white mb-4')}>
                Contact direct
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-aureon-gold" />
                  <a 
                    href="mailto:contact@aureoncapital.com"
                    className={createTypography('body', 'text-white/80 hover:text-aureon-gold transition-colors')}
                  >
                    contact@aureoncapital.com
                  </a>
                </div>
                <p className={createTypography('bodySmall', 'text-white/60 ml-8')}>
                  Réponse garantie sous 24h ouvrées
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <p className={createTypography('bodyLarge', 'text-white/70 mb-4')}>
            Prêt à transformer votre vision en réalité ?
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-aureon-gold/50" />
            <div className="w-2 h-2 rounded-full bg-aureon-gold/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-aureon-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}