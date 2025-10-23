// Portfolio data structure and interface definitions

export interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  website?: string;
  technologies?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "aureonlabs",
    name: "AureonLabs",
    description: "Laboratoire de recherche et développement en intelligence artificielle, pionnier dans l'innovation technologique et les solutions d'IA avancées.",
    logo: "/images/portfolio/aureonlabs-logo.svg",
    category: "AI Research",
    website: "https://aureonlabs.ai",
    technologies: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"]
  },
  {
    id: "aureonstudio",
    name: "AureonStudio",
    description: "Studio créatif spécialisé dans le design d'expériences utilisateur et l'interface homme-machine pour les applications d'intelligence artificielle.",
    logo: "/images/portfolio/aureonstudio-logo.svg",
    category: "Design & UX",
    website: "https://aureonstudio.com",
    technologies: ["UI/UX Design", "Prototyping", "Design Systems", "User Research"]
  },
  {
    id: "aureondigital",
    name: "AureonDigital",
    description: "Agence de transformation digitale qui accompagne les entreprises dans leur adoption de l'intelligence artificielle et des technologies émergentes.",
    logo: "/images/portfolio/aureondigital-logo.svg",
    category: "Digital Transformation",
    website: "https://aureondigital.com",
    technologies: ["Digital Strategy", "AI Integration", "Process Automation", "Cloud Solutions"]
  },
  {
    id: "aureonverse",
    name: "AureonVerse",
    description: "Plateforme immersive combinant réalité virtuelle et intelligence artificielle pour créer des expériences interactives révolutionnaires.",
    logo: "/images/portfolio/aureonverse-logo.svg",
    category: "Immersive Technology",
    website: "https://aureonverse.com",
    technologies: ["Virtual Reality", "Augmented Reality", "3D Graphics", "Spatial Computing"]
  }
];

// Helper function to get portfolio item by id
export const getPortfolioItemById = (id: string): PortfolioItem | undefined => {
  return portfolioData.find(item => item.id === id);
};

// Helper function to get portfolio items by category
export const getPortfolioItemsByCategory = (category: string): PortfolioItem[] => {
  return portfolioData.filter(item => item.category === category);
};

// Get all unique categories
export const getPortfolioCategories = (): string[] => {
  return Array.from(new Set(portfolioData.map(item => item.category)));
};