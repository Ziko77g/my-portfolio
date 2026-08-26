export const en = {
  // Navigation
  nav: {
    home: 'Home',
    work: 'Work',
    services: 'Services',
    process: 'Process',
    about: 'About',
    contact: 'Contact',
    startProject: 'Start a Project',
  },

  // Hero
  hero: {
    eyebrow: 'WEB DEVELOPMENT • AI • DIGITAL PRODUCTS',
    headline: 'I build digital experiences that businesses can actually use.',
    subline: 'Modern websites, business applications, and AI-powered tools designed around real problems.',
    description: 'I design and develop polished digital products with a focus on usability, performance, and practical business value.',
    viewWork: 'View My Work',
    startProject: 'Start a Project',
    available: 'Available for selected projects',
  },

  // Capability Strip
  capabilities: {
    items: [
      'Web Development',
      'SaaS Applications',
      'AI Product Interfaces',
      'Responsive Design',
      'Arabic & RTL',
      'Performance',
    ],
  },

  // Featured Work
  work: {
    eyebrow: 'SELECTED WORK',
    title: 'Selected Work',
    description: 'A small selection of products built to demonstrate different sides of modern web development.',
    exploreProject: 'Explore Project',
    backToWork: 'Back to Work',
    viewLive: 'View Live Demo',
    viewSource: 'View Source',
  },

  // Project: Luna
  luna: {
    name: 'Luna Restaurant',
    label: 'Premium Restaurant Website',
    status: 'Demo Project',
    shortDesc: 'A bilingual luxury restaurant experience designed around atmosphere, menu discovery, reservations, and elegant visual storytelling.',
    challenge: 'Create a premium restaurant experience that feels atmospheric while remaining easy to navigate.',
    approach: 'Build an editorial visual system with strong typography, immersive imagery, bilingual content, and responsive interactions.',
    overview: 'Luna Restaurant is a demo project showcasing a premium, bilingual restaurant website. The design centers on cinematic visuals, refined typography, and an intuitive user experience for menu browsing and reservations.',
    features: [
      'Cinematic hero with atmospheric imagery',
      'Bilingual support (English / Arabic)',
      'Full RTL layout mirroring',
      'Menu browsing with category filtering',
      'Gallery lightbox experience',
      'Reservation interface',
      'Responsive across all devices',
      'Accessibility foundations',
      'SEO-optimized structure',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    designDecisions: 'The design prioritizes atmosphere — using dark tones, warm lighting in imagery, and generous whitespace to create a sense of luxury. Typography follows an editorial approach with large serif-style headlines balanced by clean sans-serif body text.',
    responsive: 'The layout adapts from a full-width immersive desktop experience to a focused mobile layout that maintains the atmospheric quality while keeping navigation and menu discovery accessible.',
    challenges: 'Implementing seamless RTL support for Arabic required careful attention to layout mirroring, text alignment, and bidirectional content flow. The gallery lightbox needed custom keyboard navigation and touch gesture support.',
  },

  // Project: NEXORA
  nexora: {
    name: 'NEXORA',
    label: 'Business Management SaaS',
    status: 'Demo Project',
    shortDesc: 'A modern business management dashboard designed to centralize orders, customers, products, analytics, tasks, and team activity.',
    challenge: 'Design a business dashboard that makes operational data easy to understand and interact with.',
    approach: 'Create a structured SaaS interface with clear information hierarchy and reusable components.',
    overview: 'NEXORA is a demo SaaS dashboard that showcases a comprehensive business management interface. It demonstrates how to organize complex operational data into an intuitive, interactive experience.',
    features: [
      'Business dashboard with KPI overview',
      'Interactive data visualizations',
      'Orders management system',
      'Customer management',
      'Product catalog management',
      'Task management',
      'Notification system',
      'Dark / Light theme',
      'English / Arabic RTL support',
      'Command palette for quick navigation',
      'Fully responsive design',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    designDecisions: 'The dashboard uses a structured grid system with KPI cards at the top for immediate status overview, followed by charts for trend analysis, and data tables for detailed operations. The sidebar navigation keeps all sections accessible.',
    responsive: 'The dashboard transforms from a multi-column layout on desktop to a stacked, swipeable layout on mobile. The sidebar collapses into a slide-out menu, and data tables become scrollable cards.',
    challenges: 'Building a command palette that searches across all data types (orders, customers, products, tasks) required careful state management. The theme system needed to maintain chart colors and data visualization contrast in both dark and light modes.',
    dataNote: 'All numbers, orders, customers, and analytics displayed in NEXORA are demo data generated for demonstration purposes.',
  },

  // Project: DocuMind
  documind: {
    name: 'DocuMind AI',
    label: 'AI Document Intelligence SaaS',
    status: 'AI SaaS Prototype',
    statusDetail: 'Demo AI / Mock AI',
    shortDesc: 'An AI-focused document workspace designed to help users upload, explore, analyze, and question documents through a structured product experience.',
    challenge: 'Create a useful AI document experience without turning it into a generic chatbot.',
    approach: 'Design the product around the document itself — making AI a tool within the document workflow rather than a standalone chat.',
    overview: 'DocuMind AI is a prototype demonstrating an AI-powered document intelligence platform. The design focuses on practical document workflows: uploading, processing, reading, extracting insights, and asking document-specific questions.',
    features: [
      'Document upload workflow',
      'Multi-stage processing UX',
      'Document reader workspace',
      'AI-generated insights panel',
      'Document-scoped Q&A interface',
      'Source reference linking',
      'Document search',
      'Analysis history',
      'Export capabilities',
      'English / Arabic RTL support',
      'Dark / Light theme',
      'AIService abstraction layer',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    designDecisions: 'The split-panel layout keeps the document always visible while AI tools operate alongside it. This approach ensures that AI insights are always connected to their source material, improving trust and usability.',
    responsive: 'On mobile, the split panel transforms into a tabbed interface where users can switch between the document view and the AI insights panel. This preserves the focused workflow while adapting to smaller screens.',
    challenges: 'Creating a convincing document processing UX that communicates progress and status through multiple stages. The Q&A interface needed to display source references that link back to specific document sections.',
    aiDisclaimer: 'The current portfolio version uses a mock AI service to demonstrate the complete product experience. The architecture is separated so a real AI backend can be connected later.',
    aiArchitecture: 'The application uses an AIService abstraction layer that separates the UI from the AI backend. This means the mock service can be replaced with a real AI API (like OpenAI, Anthropic, or a custom model) without changing any frontend code.',
  },

  // Services
  services: {
    eyebrow: 'SERVICES',
    title: 'What I Build',
    cta: "Tell me what you're trying to build.",
    service1: {
      title: 'Premium Business Websites',
      description: 'Modern websites that give businesses a strong digital presence and make it easy for customers to understand what they offer.',
      features: [
        'Responsive design',
        'Modern UI',
        'SEO foundation',
        'Performance optimization',
        'Accessibility',
        'Arabic / RTL when needed',
      ],
    },
    service2: {
      title: 'Business Web Applications',
      description: 'Custom dashboards and web applications built around specific workflows, data, and operational needs.',
      features: [
        'Dashboards',
        'Management systems',
        'Analytics interfaces',
        'Customer workflows',
        'Internal tools',
        'Responsive interfaces',
      ],
    },
    service3: {
      title: 'AI-Powered Products',
      description: 'AI-enabled interfaces and tools designed around practical use cases rather than AI for the sake of AI.',
      features: [
        'Document intelligence',
        'AI-assisted workflows',
        'AI product interfaces',
        'Structured AI experiences',
        'Backend-ready AI architecture',
      ],
    },
  },

  // Process
  process: {
    eyebrow: 'PROCESS',
    title: 'How I Work',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: 'Understand the business, users, goals, and problem.',
      },
      {
        number: '02',
        title: 'Plan',
        description: 'Define the structure, experience, and technical approach.',
      },
      {
        number: '03',
        title: 'Build',
        description: 'Design, develop, test, and refine the product.',
      },
      {
        number: '04',
        title: 'Launch',
        description: 'Prepare the final experience and make sure everything works as intended.',
      },
    ],
  },

  // Why Work With Me
  whyMe: {
    eyebrow: 'WHY WORK WITH ME',
    title: 'Why Work With Me',
    items: [
      {
        title: 'Clear Communication',
        description: 'I keep the process understandable and transparent.',
      },
      {
        title: 'Modern Implementation',
        description: 'I build with current web technologies and reusable architecture.',
      },
      {
        title: 'Responsive by Default',
        description: 'Experiences are designed to work across phones, tablets, and desktops.',
      },
      {
        title: 'AI When Useful',
        description: 'I focus on practical AI applications instead of adding AI just because it is trending.',
      },
      {
        title: 'Attention to Detail',
        description: 'Small interaction and usability details matter.',
      },
    ],
  },

  // About
  about: {
    eyebrow: 'ABOUT',
    title: 'About Me',
    description: "I'm a web developer focused on building polished digital products — from premium websites to business applications and AI-powered tools. My work centers on clean design, practical functionality, and thoughtful user experiences.",
    focusTitle: 'Focus Areas',
    focus: [
      'Web Development',
      'AI Product Interfaces',
      'Product Thinking',
      'UI / UX',
      'Problem Solving',
    ],
  },

  // Technology
  tech: {
    eyebrow: 'TECHNOLOGY',
    title: 'Technologies used across selected projects.',
  },

  // Contact
  contact: {
    eyebrow: 'CONTACT',
    headline: 'Have something worth building?',
    description: "Tell me what you're trying to create, improve, or automate.",
    cta: 'Start a Project',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      projectType: 'Project Type',
      projectTypePlaceholder: 'Select a project type',
      budget: 'Budget Range',
      budgetPlaceholder: 'Select a budget range',
      message: 'Message',
      messagePlaceholder: "Tell me about your project — what you're building, the problem you're solving, and any details that help me understand the scope.",
      submit: 'Send Project Brief',
      sending: 'Sending...',
    },
    projectTypes: [
      'Business Website',
      'Web Application',
      'AI Product',
      'Dashboard',
      'Other',
    ],
    budgetRanges: [
      'Not sure yet',
      'Under $500',
      '$500 – $1,000',
      '$1,000 – $2,500',
      '$2,500+',
    ],
    validation: {
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email',
      messageRequired: 'Please describe your project',
    },
    success: {
      title: 'Project Brief Prepared',
      liveTitle: 'Inquiry Sent Successfully',
      message: 'Thank you for sharing your project details. The inquiry form architecture is ready to connect with any production email service or API endpoint.',
      liveMessage: 'Thank you for reaching out. I have received your message and will review your project brief shortly.',
      note: 'Preview Mode: No live endpoint is configured in this environment.',
      sendAnother: 'Send Another Brief',
    },
  },

  // Footer
  footer: {
    brand: 'Zakar',
    tagline: 'Web Developer & AI Solutions Builder',
    services: 'Services',
    work: 'Work',
    contact: 'Contact',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    copyright: '© {year} Zakar. All rights reserved.',
    builtWith: 'Built with React, TypeScript & attention to detail.',
  },

  // 404
  notFound: {
    title: '404',
    message: 'Looks like this page took a wrong turn.',
    cta: 'Back Home',
    goBack: 'Go Back',
  },

  // Shared
  shared: {
    demoProject: 'Demo Project',
    aiPrototype: 'AI SaaS Prototype',
    demoAI: 'Demo AI',
  },

  // Case Study
  caseStudy: {
    overview: 'Overview',
    challenge: 'Challenge',
    approach: 'Approach',
    keyFeatures: 'Key Features',
    technology: 'Technology',
    designDecisions: 'Design Decisions',
    responsiveExperience: 'Responsive Experience',
    challenges: 'Implementation Highlights',
    dataNote: 'Data Note',
    aiDisclaimer: 'AI Implementation',
    aiArchitecture: 'AI Architecture',
    backToWork: 'Back to Work',
    startProject: 'Start a Project',
    projectLimitations: 'Project Scope',
    viewLiveDemo: 'View Live Demo',
    interactivePreview: 'Interactive Preview',
    viewSource: 'Source Code',
    nextProject: 'Next Project',
    prevProject: 'Previous Project',
  },
};
