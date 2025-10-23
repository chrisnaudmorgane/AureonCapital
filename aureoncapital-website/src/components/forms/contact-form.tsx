'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { GlassInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { createGlassEffect, createTypography } from '@/lib/glass-effects';
import { cn } from '@/lib/utils';
import { submitContactForm, sanitizeContactForm, type ContactFormData as FormData } from '@/lib/form-submission';

// Form validation schema
const contactFormSchema = z.object({
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets'),
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(5, 'L\'email doit contenir au moins 5 caractères')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export type FormSubmissionState = 'idle' | 'loading' | 'success' | 'error';

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<{ success: boolean; message: string; error?: string }>;
  className?: string;
}

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const [submissionState, setSubmissionState] = useState<FormSubmissionState>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [retryCount, setRetryCount] = useState<number>(0);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nom: '',
      email: '',
      message: '',
    },
    mode: 'onChange', // Enable real-time validation
  });

  const handleSubmit = async (data: ContactFormData) => {
    setSubmissionState('loading');
    setSubmitMessage('');

    try {
      // Sanitize the form data
      const sanitizedData = sanitizeContactForm(data);
      
      let result;
      if (onSubmit) {
        // Use custom submission handler if provided
        result = await onSubmit(sanitizedData);
      } else {
        // Use default submission handler
        result = await submitContactForm(sanitizedData);
      }
      
      if (result.success) {
        setSubmissionState('success');
        setSubmitMessage(result.message);
        form.reset();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          if (submissionState === 'success') {
            setSubmissionState('idle');
            setSubmitMessage('');
          }
        }, 5000);
      } else {
        setSubmissionState('error');
        setSubmitMessage(result.error || result.message);
        setRetryCount(prev => prev + 1);
      }
    } catch (error) {
      setSubmissionState('error');
      setSubmitMessage('Une erreur inattendue est survenue. Veuillez réessayer.');
      setRetryCount(prev => prev + 1);
      console.error('Form submission error:', error);
    }
  };

  const handleRetry = () => {
    setSubmissionState('idle');
    setSubmitMessage('');
  };

  const isLoading = submissionState === 'loading';
  const isSuccess = submissionState === 'success';
  const isError = submissionState === 'error';

  return (
    <motion.div
      className={cn(
        createGlassEffect('glassCard', 'p-8 max-w-2xl mx-auto'),
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h3 className={createTypography('h4', 'aureon-text-gradient mb-2')}>
              Contactez-nous
            </h3>
            <p className={createTypography('body', 'text-white/70')}>
              Partagez votre projet avec nous et découvrons ensemble les possibilités
            </p>
          </div>

          {/* Name Field */}
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={createTypography('bodySmall', 'text-white/90 font-medium')}>
                  Nom *
                </FormLabel>
                <FormControl>
                  <GlassInput
                    placeholder="Votre nom complet"
                    {...field}
                    disabled={isLoading}
                    className={cn(
                      'transition-all duration-300',
                      form.formState.errors.nom && 'border-red-400 focus:border-red-400 focus:ring-red-400/30'
                    )}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={createTypography('bodySmall', 'text-white/90 font-medium')}>
                  Email *
                </FormLabel>
                <FormControl>
                  <GlassInput
                    type="email"
                    placeholder="votre.email@exemple.com"
                    {...field}
                    disabled={isLoading}
                    className={cn(
                      'transition-all duration-300',
                      form.formState.errors.email && 'border-red-400 focus:border-red-400 focus:ring-red-400/30'
                    )}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={createTypography('bodySmall', 'text-white/90 font-medium')}>
                  Message *
                </FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                    rows={5}
                    {...field}
                    disabled={isLoading}
                    className={cn(
                      'bg-aureon-glass backdrop-blur-glass border border-white/20 h-32 w-full min-w-0 rounded-lg px-4 py-3 text-base text-aureon-white shadow-glass transition-all duration-300 outline-none font-inter resize-none',
                      'placeholder:text-white/60 selection:bg-aureon-gold selection:text-aureon-dark',
                      'focus-visible:border-aureon-gold focus-visible:ring-aureon-gold/30 focus-visible:ring-[3px] focus-visible:bg-white/10',
                      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                      form.formState.errors.message && 'border-red-400 focus:border-red-400 focus:ring-red-400/30'
                    )}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <motion.div
            className="pt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              variant="gold"
              size="lg"
              disabled={isLoading || !form.formState.isValid}
              className="w-full h-12 text-base font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Envoyer le message
                </>
              )}
            </Button>
          </motion.div>

          {/* Submission Status Messages */}
          {(isSuccess || isError) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'p-4 rounded-lg border',
                isSuccess && 'bg-green-500/10 border-green-500/30 text-green-400',
                isError && 'bg-red-500/10 border-red-500/30 text-red-400'
              )}
            >
              <div className="flex items-center space-x-3">
                {isSuccess && <CheckCircle className="h-5 w-5 flex-shrink-0" />}
                {isError && <AlertCircle className="h-5 w-5 flex-shrink-0" />}
                <p className={createTypography('bodySmall', 'flex-1')}>{submitMessage}</p>
              </div>
              
              {/* Retry Button for Error State */}
              {isError && retryCount < 3 && (
                <div className="mt-3 pt-3 border-t border-red-500/20">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleRetry}
                    className="text-red-400 border-red-400/50 hover:bg-red-500/10"
                  >
                    Réessayer
                  </Button>
                </div>
              )}
              
              {/* Max Retry Message */}
              {isError && retryCount >= 3 && (
                <div className="mt-3 pt-3 border-t border-red-500/20">
                  <p className={createTypography('bodySmall', 'text-red-300')}>
                    Si le problème persiste, contactez-nous directement à{' '}
                    <a 
                      href="mailto:contact@aureoncapital.com" 
                      className="underline hover:text-red-200 transition-colors"
                    >
                      contact@aureoncapital.com
                    </a>
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Form Footer */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className={createTypography('bodySmall', 'text-white/60')}>
              Nous respectons votre vie privée. Vos informations ne seront jamais partagées.
            </p>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}