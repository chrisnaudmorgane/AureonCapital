'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Linkedin } from 'lucide-react';
import { createTypography } from '@/lib/glass-effects';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/aureon-ai',
    icon: Linkedin,
  },
  {
    name: 'Aureon AI',
    href: 'https://aureon.ai',
    icon: ExternalLink,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-aureon-dark border-t border-aureon-gold/30">
      {/* Golden accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aureon-gold to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={createTypography('h5', 'aureon-text-gradient font-bold mb-3')}>
              AureonCapital
            </h3>
            <p className={createTypography('body', 'text-white/70 max-w-md')}>
              Investir dans l&apos;intelligence du futur avec Aureon AI Group
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={createTypography('bodySmall', 'text-white/60')}>
              Copyright © {currentYear} Aureon AI, LLC.
            </p>
            <p className={createTypography('bodySmall', 'text-white/60 mt-1')}>
              All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-end space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white/70 hover:text-aureon-gold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <link.icon className="h-5 w-5 group-hover:text-aureon-gold transition-colors" />
                <span className={createTypography('bodySmall', 'group-hover:text-aureon-gold transition-colors')}>
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Border with Golden Accent */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-aureon-gold/50" />
            <div className="w-2 h-2 rounded-full bg-aureon-gold/50" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-aureon-gold/50" />
          </div>
        </motion.div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-aureon-gold/10 via-transparent to-transparent" />
      </div>
    </footer>
  );
}