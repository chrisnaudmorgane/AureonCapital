/**
 * Form submission utilities for AureonCapital contact form
 */

export interface ContactFormData {
  nom: string;
  email: string;
  message: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Simulates form submission to a backend API
 * In a real implementation, this would make an actual API call
 */
export async function submitContactForm(data: ContactFormData): Promise<FormSubmissionResult> {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Basic validation (server-side simulation)
    if (!data.nom.trim() || !data.email.trim() || !data.message.trim()) {
      throw new Error('Tous les champs sont requis');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Format d\'email invalide');
    }

    // Simulate occasional server errors for testing
    if (Math.random() < 0.1) {
      throw new Error('Erreur serveur temporaire');
    }

    // Log the submission (in real app, this would be sent to your backend)
    console.log('Contact form submitted:', {
      ...data,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
    });

    return {
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre message.',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    };
  }
}

/**
 * Validates form data on the client side
 */
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.nom.trim()) {
    errors.nom = 'Le nom est requis';
  } else if (data.nom.trim().length < 2) {
    errors.nom = 'Le nom doit contenir au moins 2 caractères';
  } else if (data.nom.trim().length > 50) {
    errors.nom = 'Le nom ne peut pas dépasser 50 caractères';
  } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.nom.trim())) {
    errors.nom = 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'L\'email est requis';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Veuillez entrer une adresse email valide';
  } else if (data.email.trim().length > 100) {
    errors.email = 'L\'email ne peut pas dépasser 100 caractères';
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = 'Le message est requis';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  } else if (data.message.trim().length > 1000) {
    errors.message = 'Le message ne peut pas dépasser 1000 caractères';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sanitizes form data before submission
 */
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    nom: data.nom.trim(),
    email: data.email.trim().toLowerCase(),
    message: data.message.trim(),
  };
}