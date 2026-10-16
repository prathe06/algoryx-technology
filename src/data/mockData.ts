import { Project, Service, Testimonial, PricingPlan, ProcessStep } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_algoryx_digital_1792166742409.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'cloudnexus',
    title: 'CloudNexus Enterprise Command',
    category: 'Web Architecture',
    description: 'Autonomous cloud analytics architecture delivering real-time telemetry processing across 42 global availability zones.',
    fullDescription: 'CloudNexus required an overhaul of their flagship enterprise operations dashboard. We engineered a reactive, low-latency web architecture handling 120,000 live event streams per second with sub-50ms visual updates and zero rendering drops.',
    image: '/src/assets/images/project_saas_analytics_1792166743526.jpg',
    metrics: [
      { label: 'Latency Reduction', value: '-68%' },
      { label: 'Event Throughput', value: '1.2M/s' },
      { label: 'User Retention', value: '+42%' }
    ],
    technologies: ['React 19', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'Framer Motion'],
    deliverables: ['Real-time Telemetry Dashboard', 'Design Token Pipeline', 'Modular Widget System'],
    client: 'CloudNexus Inc.',
    year: '2026'
  },
  {
    id: 'prism-spatial',
    title: 'Prism Spatial 3D Experience',
    category: 'Spatial & 3D',
    description: 'Immersive WebGL spatial environment showcasing architectural light refraction and volumetric user interactions.',
    fullDescription: 'Designed for an international creative technology exhibition, Prism Spatial explores non-linear spatial navigation, procedural geometric prism shaders, and gesture-driven UI manipulation within the web browser without external plugins.',
    image: '/src/assets/images/project_spatial_experience_1792166743344.jpg',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Dwell Time', value: '4m 32s' },
      { label: 'Global Reach', value: '380K+' }
    ],
    technologies: ['Three.js', 'GLSL Shaders', 'React', 'Motion', 'Web Audio API'],
    deliverables: ['Interactive 3D Virtual Gallery', 'Spatial Sound Engine', 'Touch & Mouse Gestures'],
    client: 'Lumina Creative Arts',
    year: '2026'
  },
  {
    id: 'aura-system',
    title: 'Aura Luxury Design System',
    category: 'Design Systems',
    description: 'Rigorous multi-brand component library and tokens system crafted for high-end digital commerce ecosystems.',
    fullDescription: 'Aura harmonized design and engineering teams across 8 international business units. We built a unified design tokens architecture, accessible glassmorphism components, and an automated Figma-to-code synchronizer.',
    image: '/src/assets/images/project_brand_design_1792166743593.jpg',
    metrics: [
      { label: 'Dev Velocity', value: '+140%' },
      { label: 'Accessible Contrast', value: '100% AA' },
      { label: 'Component Library', value: '85+ UI Nodes' }
    ],
    technologies: ['Tailwind CSS', 'Radix UI', 'TypeScript', 'Figma Tokens', 'Storybook'],
    deliverables: ['Atomic Component Architecture', 'WCAG AA Design Guideline', 'Interactive Documentation'],
    client: 'Aura Global Group',
    year: '2025'
  },
  {
    id: 'vortex-terminal',
    title: 'Vortex Quantum Terminal',
    category: 'Creative Tech',
    description: 'Algorithmic market visualizer turning dense financial order books into dynamic spatial particle streams.',
    fullDescription: 'An experimental trading interface for algorithmic arbitrageurs. Vortex renders massive order book depths as interactive flow fields, enabling quantitative traders to detect liquidity imbalances 300ms faster than traditional tabular views.',
    image: '/src/assets/images/hero_algoryx_digital_1792166742409.jpg',
    metrics: [
      { label: 'Visual Rendering Speed', value: '16ms' },
      { label: 'Arbitrage Detection', value: '+34%' },
      { label: 'Trade Volume Monitored', value: '$840M' }
    ],
    technologies: ['HTML5 Canvas', 'React', 'Web Workers', 'CSS3 Grid', 'TypeScript'],
    deliverables: ['Particle Flow Canvas Engine', 'High-Density Charting Suite', 'Auditory Alert System'],
    client: 'Vortex Capital Labs',
    year: '2025'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    description: 'Modern, high-performance web applications built on resilient, scalable architectures with lightning-fast load times and clean codebases.',
    details: [
      'Single Page & Multi-Page Web Applications',
      'High-throughput API & Backend Integrations',
      'Performance Optimization & Sub-second LCP',
      'Production-grade TypeScript Architecture'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    iconName: 'Code'
  },
  {
    id: 'ui-ux',
    number: '02',
    title: 'UI/UX Design',
    description: 'Ergonomic digital product design combining intuitive user journeys, scientific hierarchy, and refined aesthetic polish.',
    details: [
      'Comprehensive Design Systems & Tokens',
      'Interactive Micro-interactions & Motion Studies',
      'User Research & Wireframe Prototyping',
      'WCAG AA Compliance & Inclusive Design'
    ],
    technologies: ['Figma', 'Prototyping', 'Design Tokens', 'User Journey Mapping'],
    iconName: 'Layout'
  },
  {
    id: 'digital-exp',
    number: '03',
    title: 'Digital Experiences',
    description: 'Engaging, story-driven web destinations that captivate audiences with scroll-orchestrated animations and fluid transitions.',
    details: [
      'Scroll-based Visual Storytelling',
      'WebGL & Spatial Canvas Graphics',
      'Dynamic Micro-animations & Interactive Hotspots',
      'Cinematic Brand Product Launches'
    ],
    technologies: ['Motion', 'Canvas API', 'SVG Animation', 'CSS Shaders'],
    iconName: 'Layers'
  },
  {
    id: 'creative-tech',
    number: '04',
    title: 'Creative Technology',
    description: 'Pushing boundaries where code meets artistic expression, generative computing, and unconventional hardware-web bridges.',
    details: [
      'Algorithmic & Generative Art Systems',
      'Real-time Audio-visual Reactivity',
      'Autonomous Micro-services & Integrations',
      'Experimental Prototyping & R&D'
    ],
    technologies: ['Web Audio API', 'Custom Physics Engines', 'Headless CMS', 'Node.js'],
    iconName: 'Cpu'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Strategic Architecture & Discovery',
    tagline: 'Laying the scientific foundation',
    description: 'We dissect your product vision, target market behaviors, and engineering constraints. Before writing a line of code, we define information hierarchy, performance benchmarks, and user conversion funnels.',
    deliverables: ['System Architecture Blueprint', 'User Journey Maps', 'Core Technical Specifications']
  },
  {
    step: '02',
    title: 'High-Fidelity Interface & Motion Design',
    tagline: 'Sculpting tangible elegance',
    description: 'Translating concepts into responsive UI components, tactile micro-interactions, and harmonic typographic scales. Every button state, modal entrance, and hover response is meticulously choreographed.',
    deliverables: ['Interactive Motion Prototypes', 'Production Design System', 'Accessibility Audit']
  },
  {
    step: '03',
    title: 'Precision Frontend Engineering',
    tagline: 'Translating pixels into high-speed code',
    description: 'Building clean, modular, and type-safe React components powered by modern state management, responsive Tailwind layouts, and hardware-accelerated motion orchestrations.',
    deliverables: ['Modular React Architecture', 'Lighthouse 95+ Score', 'Cross-browser Verification']
  },
  {
    step: '04',
    title: 'Production Hardening & Global Scale',
    tagline: 'Deploying with unstoppable confidence',
    description: 'Rigorous end-to-end testing, bundle splitting, CDN edge deployment, and real-time observability telemetry to ensure seamless operation under peak global traffic.',
    deliverables: ['CI/CD Automated Deployment', 'Telemetry & Performance Logs', 'Final Source Code Handover']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'VP of Product',
    company: 'CloudNexus Inc.',
    avatarText: 'ER',
    quote: 'ALGORYX transformed our complex data platform into an intuitive, visually stunning command center. The scroll interactions and sub-50ms responsiveness helped us close our largest enterprise deal within 30 days of launch.',
    metric: '+42% Platform Engagement'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Lumina Creative Arts',
    avatarText: 'MV',
    quote: 'Finding engineers who treat code as an artistic medium is rare. ALGORYX delivered our spatial 3D experience on time and exceeded our frame-rate targets across both desktop and mobile devices.',
    metric: '380K+ Global Visitors'
  },
  {
    id: 'test-3',
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    company: 'Vortex Capital Labs',
    avatarText: 'SC',
    quote: 'The level of craftsmanship in their motion choreography and component isolation is phenomenal. Their team integrated flawlessly with our backend data streams without compromising security or speed.',
    metric: '99.98% Uptime at Scale'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal for early-stage startups and rapid MVP launches seeking high aesthetic standards.',
    monthlyPrice: 3200,
    annualPrice: 2560,
    features: [
      'Single-page bespoke responsive landing',
      'Smooth scroll animations & micro-interactions',
      'Mobile-first responsive architecture',
      'Client-side contact form with validation',
      'Lighthouse 95+ performance optimization',
      '2 rounds of comprehensive design review'
    ],
    ctaText: 'Select Starter Plan'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Our marquee service for growing companies demanding signature brand authority and rich interactivity.',
    monthlyPrice: 6800,
    annualPrice: 5440,
    isPopular: true,
    features: [
      'Multi-section responsive web application',
      'Complex scroll orchestrations & parallax layers',
      'Interactive product showcases & modal inspectors',
      'Bespoke icon set & custom motion graphics',
      'Complete modular component library',
      'SEO & OpenGraph social card optimization',
      'Priority ongoing engineering support (30 days)'
    ],
    ctaText: 'Select Professional Plan'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-spectrum creative technology partnership for market leaders and high-volume operations.',
    monthlyPrice: 14500,
    annualPrice: 11600,
    features: [
      'Complete digital ecosystem & custom web apps',
      'Advanced 3D WebGL / Canvas interactive canvases',
      'Custom design system with automated tokens',
      'High-throughput API & backend integration',
      'Dedicated lead engineer & senior designer',
      'Quarterly code reviews & performance audits',
      'SLA guarantee with 24/7 emergency response'
    ],
    ctaText: 'Contact Enterprise Team'
  }
];

export const COMPANY_STATS = [
  { value: 99.2, suffix: '%', label: 'Client Satisfaction', description: 'Based on post-launch audits' },
  { value: 240, suffix: '+', label: 'Projects Shipped', description: 'Across 16 countries' },
  { value: 14, suffix: '', label: 'Global Awards', description: 'Awwwards, FWA & CSSDA' },
  { value: 4.6, suffix: 'x', label: 'Average ROI', description: 'Client conversion lift' }
];
