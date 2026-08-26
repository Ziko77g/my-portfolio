export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  status: string;
  statusDetail?: string;
  image: string;
  route: string;
  demoUrl: string | null;
  githubUrl: string | null;
  translationKey: string;
}

export const projects: Project[] = [
  {
    id: 'luna',
    name: 'Luna Restaurant',
    category: 'Premium Restaurant Website',
    description: 'A bilingual luxury restaurant experience designed around atmosphere, menu discovery, reservations, and elegant visual storytelling.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    features: [
      'Cinematic hero',
      'Bilingual EN/AR',
      'RTL support',
      'Menu filtering',
      'Gallery lightbox',
      'Reservation UX',
      'Responsive design',
      'Accessibility',
      'SEO foundations',
    ],
    status: 'Demo Project',
    image: '/luna-preview.jpg',
    route: '/work/luna',
    demoUrl: null,
    githubUrl: null,
    translationKey: 'luna',
  },
  {
    id: 'nexora',
    name: 'NEXORA',
    category: 'Business Management SaaS',
    description: 'A modern business management dashboard designed to centralize orders, customers, products, analytics, tasks, and team activity.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    features: [
      'Business dashboard',
      'KPI analytics',
      'Interactive charts',
      'Orders management',
      'Customer management',
      'Product management',
      'Task management',
      'Notifications',
      'Dark/Light mode',
      'English/Arabic RTL',
      'Command palette',
      'Responsive design',
    ],
    status: 'Demo Project',
    image: '/nexora-preview.jpg',
    route: '/work/nexora',
    demoUrl: null,
    githubUrl: null,
    translationKey: 'nexora',
  },
  {
    id: 'documind',
    name: 'DocuMind AI',
    category: 'AI Document Intelligence SaaS',
    description: 'An AI-focused document workspace designed to help users upload, explore, analyze, and question documents through a structured product experience.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    features: [
      'Document upload workflow',
      'Multi-stage processing UX',
      'Document workspace',
      'AI insights',
      'Document-scoped Q&A',
      'Source references',
      'Search',
      'History',
      'Export',
      'English/Arabic RTL',
      'Dark/Light mode',
      'AIService abstraction',
    ],
    status: 'AI SaaS Prototype',
    statusDetail: 'Demo AI / Mock AI',
    image: '/documind-preview.jpg',
    route: '/work/documind',
    demoUrl: null,
    githubUrl: null,
    translationKey: 'documind',
  },
];
