export const en = {
  // Common & Branding
  brandName: "DOCUMIND AI",
  tagline: "Understand your documents faster.",
  supportingMessage: "Upload a document, extract important information, explore contents, and turn complex documents into clear, actionable insights.",
  demoTagline: "Interactive Portfolio Demo",
  demoNotice: "Demo Mode Active — Sample AI Analysis & Data",
  demoNoticeSub: "This application demonstrates enterprise document intelligence UX with simulated AI processing.",
  
  // Navigation & General UI
  nav: {
    landing: "Overview / Product",
    overview: "Dashboard Overview",
    documents: "My Documents",
    upload: "Upload Document",
    workspace: "Document Workspace",
    aiInsights: "AI Insights",
    askAi: "Ask AI",
    search: "Global Search",
    history: "Analysis History",
    analytics: "Analytics & Activity",
    settings: "Settings",
    tryDemo: "Try Demo App",
    backToLanding: "Product Home",
    backToDashboard: "Back to Dashboard",
  },
  
  // Header / Greeting
  header: {
    greeting: "Good morning, Alex",
    subtitle: "Here's what's happening with your document intelligence ecosystem.",
    quickUpload: "Upload Document",
    searchPlaceholder: "Search documents, insights, Q&A (Cmd + K)...",
  },

  // Overview / Dashboard KPIs
  kpi: {
    documents: "Documents",
    documentsSub: "128 active files",
    pagesProcessed: "Pages Processed",
    pagesProcessedSub: "4,820 total pages",
    insightsGenerated: "Insights Generated",
    insightsGeneratedSub: "1,936 key extraction items",
    questionsAnswered: "Questions Answered",
    questionsAnsweredSub: "3,421 document Q&A queries",
    fictionalDataNotice: "Sample portfolio values for demonstration purposes.",
    trendUp: "vs last month",
  },

  // Document List & Status
  documents: {
    title: "Document Repository",
    subtitle: "Manage, analyze, and query your enterprise documents.",
    searchPlaceholder: "Filter documents by name, category, or content...",
    allCategories: "All Categories",
    allStatuses: "All Statuses",
    columns: {
      fileName: "File Name",
      category: "Category",
      type: "Type",
      pages: "Pages",
      status: "Status",
      uploadedAt: "Uploaded",
      lastAnalyzed: "Last Analyzed",
      actions: "Actions",
    },
    status: {
      ready: "Ready",
      processing: "Processing",
      analyzing: "Analyzing",
      failed: "Failed",
    },
    actions: {
      openWorkspace: "Open Workspace",
      reanalyze: "Re-analyze",
      rename: "Rename",
      delete: "Delete",
    },
    emptyTitle: "No documents found",
    emptySub: "Upload your first PDF, DOCX, or TXT file to generate AI insights.",
  },

  // Upload Experience
  upload: {
    title: "Upload Document",
    dragDropText: "Drag and drop your file here, or click to browse",
    supportedFormats: "Supported formats: PDF, DOCX, TXT (Max 25MB)",
    steps: {
      uploading: "Uploading",
      reading: "Reading document",
      analyzing: "Analyzing content",
      extracting: "Extracting insights",
      ready: "Ready",
    },
    validation: {
      unsupportedType: "Unsupported file type. Please upload PDF, DOCX, or TXT.",
      emptyFile: "File is empty. Please select a valid document.",
      fileTooLarge: "File exceeds 25MB limit.",
      duplicateFile: "A document with this name already exists.",
    },
    demoNotice: "Demo Processing: Files are parsed locally in browser. No remote AI servers are called.",
    cancel: "Cancel",
    done: "Open Workspace",
  },

  // Document Workspace
  workspace: {
    title: "Document Intelligence Workspace",
    tabs: {
      document: "Document Preview",
      insights: "AI Insights",
      askAi: "Ask AI",
    },
    toc: "Table of Contents",
    page: "Page",
    of: "of",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    resetZoom: "Reset Zoom",
    searchInDoc: "Search in document...",
    matches: "matches",
    noMatches: "No matches found",
    prevMatch: "Previous match",
    nextMatch: "Next match",
    sampleNotice: "Sample AI Analysis — Generated for demonstration",
  },

  // AI Insights Panel
  insights: {
    summary: "Summary",
    keyPoints: "Key Points",
    actionItems: "Action Items",
    dates: "Important Dates",
    entities: "Entities",
    topics: "Topics",
    risks: "Risks & Considerations",
    
    executiveSummary: "Executive Summary",
    keyTakeaways: "Key Takeaways",
    mainTopics: "Main Topics Covered",
    recommendedActions: "Recommended Follow-up Actions",
    
    export: {
      copy: "Copy to Clipboard",
      copied: "Copied!",
      exportTxt: "Export as TXT",
      exportJson: "Export JSON",
      printReport: "Print Report",
    },
    regenerate: "Regenerate Analysis (Demo)",
  },

  // Ask AI
  askAi: {
    title: "Ask about this document",
    subtitle: "Scoped strictly to the current document context.",
    placeholder: "Ask a question about key dates, risks, objectives...",
    send: "Ask Question",
    suggestedTitle: "Suggested Questions",
    citationLabel: "Source",
    jumpToSource: "Jump to section",
    demoTag: "Demo AI Response",
    empty: "No questions asked yet",
    emptySub: "Select a suggested question above or type your inquiry.",
  },

  // History & Analytics
  history: {
    title: "Analysis Audit History",
    subtitle: "Chronological log of document processing, extraction, and Q&A interactions.",
    filterDoc: "All Documents",
    filterAction: "All Actions",
    columns: {
      document: "Document",
      action: "Action",
      date: "Timestamp",
      type: "Analysis Type",
      status: "Status",
    }
  },

  analytics: {
    title: "Document Intelligence Analytics",
    subtitle: "Insights volume, page processing metrics, and category distribution.",
    chartTimeline: "Documents Analyzed Over Time",
    chartCategories: "Category Distribution",
    chartActivity: "Weekly Q&A & Analysis Activity",
  },

  // Settings
  settings: {
    title: "Settings & Preferences",
    subtitle: "Manage your profile, theme, language, and AI workspace preferences.",
    tabs: {
      profile: "Profile",
      preferences: "Preferences",
      workspace: "Workspace",
      aiSettings: "AI Settings",
      security: "Security UI",
    },
    profile: {
      name: "Full Name",
      email: "Email Address",
      role: "User Role",
      save: "Save Changes",
    },
    preferences: {
      theme: "Interface Theme",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
      themeSystem: "System Default",
      language: "Display Language",
      languageEn: "English (LTR)",
      languageAr: "العربية (Arabic RTL)",
    },
    workspace: {
      name: "Workspace Name",
      defaultCategory: "Default Document Category",
    },
    aiSettings: {
      detailLevel: "Analysis Detail Level",
      detailConcise: "Concise",
      detailBalanced: "Balanced",
      detailComprehensive: "Comprehensive",
      suggestedQuestions: "Show Suggested Questions",
      demoBadgeToggle: "Display Demo Mode Badges",
    },
    security: {
      notice: "Demo Security UI — Fictional Session Management",
      activeSessions: "Active Sessions",
      twoFactor: "Two-Factor Authentication (2FA)",
      enabled: "Configured (Demo)",
    }
  },

  // Global Search Modal (Cmd+K)
  globalSearch: {
    placeholder: "Search documents, extracted insights, key points, Q&A...",
    noResults: "No matching documents or insights found.",
    groupDocs: "Documents",
    groupInsights: "Extracted Insights",
    groupHistory: "History & Q&A",
    shortcutHint: "Use ↑ ↓ to navigate, Enter to select, Esc to close",
  },

  // Public Landing Page
  landing: {
    badge: "Portfolio Project Demo",
    heroTitle: "Understand your documents faster.",
    heroSubtitle: "DocuMind AI turns complex PDFs, contracts, and reports into structured executive insights, actionable tasks, and precise answer citations.",
    ctaTry: "Explore Live Demo",
    ctaFeatures: "View Workspace Features",
    
    howItWorksTitle: "How It Works",
    howItWorksSub: "Three steps from raw files to clear, actionable document intelligence.",
    step1Title: "1. Upload",
    step1Desc: "Drop your PDF, DOCX, or TXT files securely into the workspace.",
    step2Title: "2. Analyze",
    step2Desc: "Multi-stage parsing extracts summaries, key points, entities, and risks.",
    step3Title: "3. Explore",
    step3Desc: "Read with citation highlights, ask document-scoped questions, and export reports.",

    featuresTitle: "Enterprise Workspace Features",
    featuresSub: "Designed for business teams who work with dense documentation daily.",
    
    feat1Title: "Structured AI Summaries",
    feat1Desc: "Instant executive overviews, key takeaways, and recommended follow-up actions.",
    feat2Title: "Document-Scoped Q&A",
    feat2Desc: "Ask precise questions with exact page and section source references.",
    feat3Title: "Entity & Risk Extraction",
    feat3Desc: "Automatically highlight key dates, organizations, individuals, and risk considerations.",
    feat4Title: "Command Palette & Search",
    feat4Desc: "Cmd+K search across documents, extracted insights, and past conversation logs.",

    useCasesTitle: "Tailored for Key Business Functions",
    useCases: [
      { name: "Business Strategy", desc: "Review quarterly business strategy PDFs and market reports in minutes." },
      { name: "Finance & Audit", desc: "Extract key metrics, financial summaries, and compliance risks." },
      { name: "Legal & Contracts", desc: "Highlight important contract dates, clauses, and entities quickly." },
      { name: "Human Resources", desc: "Parse employee handbooks, policies, and internal documentation." },
    ],

    footerNotice: "DocuMind AI is a fictional portfolio project demonstrating frontend architecture, AI service abstraction, accessibility, and modern SaaS UI/UX design."
  }
};
