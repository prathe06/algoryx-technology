export interface Project {
  id: string;
  title: string;
  category: 'Web Architecture' | 'Spatial & 3D' | 'Design Systems' | 'Creative Tech';
  description: string;
  fullDescription: string;
  image: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  deliverables: string[];
  client: string;
  year: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  iconName: 'Code' | 'Layout' | 'Layers' | 'Cpu';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  quote: string;
  metric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}
