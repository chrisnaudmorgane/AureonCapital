// Design tokens and constants for AureonCapital website

export const designTokens = {
    colors: {
        primary: '#d4af37',      // Gold
        secondary: '#38bdf8',    // Sky Blue
        background: '#0b0b0d',   // Deep Black
        text: '#ffffff',         // White
        accent: '#1a1a1f',       // Dark Gray
        glass: 'rgba(255, 255, 255, 0.1)'
    },
    fonts: {
        primary: 'Satoshi',
        secondary: 'Inter'
    },
    animations: {
        duration: {
            fast: '0.2s',
            normal: '0.4s',
            slow: '0.8s'
        },
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
} as const;

export const websiteContent = {
    hero: {
        title: "Investir dans l'intelligence du futur",
        subtitle: "AureonCapital, filiale d'investissement d'Aureon AI Group, investit dans l'avenir de l'intelligence artificielle et des technologies innovantes.",
        ctaButtons: ["Découvrir nos investissements", "Rejoindre le portefeuille"]
    },
    vision: {
        title: "Notre Vision",
        content: "Nous investissons dans les entreprises qui façonnent l'avenir de l'intelligence artificielle et transforment les industries grâce à l'innovation technologique."
    },
    investmentDomains: [
        "IA",
        "FinTech",
        "Automatisation",
        "SaaS",
        "Data Intelligence"
    ],
    portfolio: [
        {
            id: "aureonstudio",
            name: "AureonStudio",
            description: "Plateforme de création de contenu IA",
            category: "IA"
        },
        {
            id: "aureonlabs",
            name: "AureonLabs",
            description: "Recherche et développement en IA",
            category: "IA"
        },
        {
            id: "aureondigital",
            name: "AureonDigital",
            description: "Solutions digitales intelligentes",
            category: "SaaS"
        },
        {
            id: "aureonverse",
            name: "AureonVerse",
            description: "Écosystème métaverse et réalité virtuelle",
            category: "IA"
        }
    ],
    contact: {
        title: "Travaillons ensemble sur la prochaine réussite",
        cta: "Contactez-nous pour discuter de votre projet",
        socialLinks: [
            { platform: "LinkedIn", url: "https://linkedin.com/company/aureon-ai" },
            { platform: "Aureon AI", url: "https://aureon.ai" }
        ]
    }
} as const;