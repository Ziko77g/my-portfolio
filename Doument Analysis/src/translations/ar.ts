import { en } from './en';

export const ar: typeof en = {
  // Common & Branding
  brandName: "دوكيوميند الذكي",
  tagline: "افهم مستنداتك وسنداتك بسرعة فائقة.",
  supportingMessage: "ارفع المستندات، واستخرج المعلومات الهامة، واستكشف المحتوى، وحوّل المستندات المعقدة إلى رؤى واضحة وقابلة للتنفيذ.",
  demoTagline: "عرض تجريبي للمحفظة التفاعلية",
  demoNotice: "وضع العرض التجريبي نشط — تحليل ومحاكاة بيانات الذكاء الاصطناعي",
  demoNoticeSub: "يعرض هذا التطبيق واجهة مستخدم متقدمة لتحليل المستندات مع معالجة محاكاة.",

  // Navigation & General UI
  nav: {
    landing: "النظرة العامة / المنتج",
    overview: "لوحة التحكم الرئيسية",
    documents: "مستنداتي",
    upload: "رفع مستند",
    workspace: "مساحة عمل المستندات",
    aiInsights: "رؤى الذكاء الاصطناعي",
    askAi: "اسأل الذكاء الاصطناعي",
    search: "البحث الشامل",
    history: "سجل التحليلات",
    analytics: "التحليلات والأنشطة",
    settings: "الإعدادات",
    tryDemo: "تجربة التطبيق",
    backToLanding: "الرئيسية",
    backToDashboard: "العودة للوحة التحكم",
  },

  // Header / Greeting
  header: {
    greeting: "صباح الخير، أليكس",
    subtitle: "إليك ملخص ما يحدث في منظومة تحليل المستندات الذكية الخاصة بك.",
    quickUpload: "رفع مستند جديد",
    searchPlaceholder: "ابحث في المستندات، الرؤى، الأسئلة (Cmd + K)...",
  },

  // Overview / Dashboard KPIs
  kpi: {
    documents: "المستندات",
    documentsSub: "128 ملفاً نشطاً",
    pagesProcessed: "الصفحات المعالجة",
    pagesProcessedSub: "4,820 صفحة إجمالاً",
    insightsGenerated: "الرؤى المستخرجة",
    insightsGeneratedSub: "1,936 عنصر تحليل رئيسي",
    questionsAnswered: "الإجابات المقدمة",
    questionsAnsweredSub: "3,421 استفساراً عن المستندات",
    fictionalDataNotice: "قيم توضيحية لغرض العرض في المحفظة.",
    trendUp: "مقارنة بالشهر الماضي",
  },

  // Document List & Status
  documents: {
    title: "مستودع المستندات",
    subtitle: "إدارة المستندات ورؤاها والاستفسار عنها بسهولة.",
    searchPlaceholder: "فلترة المستندات حسب الاسم، التصنيف، أو المحتوى...",
    allCategories: "جميع التصنيفات",
    allStatuses: "جميع الحالات",
    columns: {
      fileName: "اسم الملف",
      category: "التصنيف",
      type: "النوع",
      pages: "الصفحات",
      status: "الحالة",
      uploadedAt: "تاريخ الرفع",
      lastAnalyzed: "آخر تحليل",
      actions: "الإجراءات",
    },
    status: {
      ready: "جاهز",
      processing: "قيد المعالجة",
      analyzing: "قيد التحليل",
      failed: "فشل",
    },
    actions: {
      openWorkspace: "فتح مساحة العمل",
      reanalyze: "إعادة التحليل",
      rename: "إعادة تسمية",
      delete: "حذف",
    },
    emptyTitle: "لم يتم العثور على مستندات",
    emptySub: "قم برفع أول ملف PDF أو DOCX أو TXT لبدء توليد الرؤى الذكية.",
  },

  // Upload Experience
  upload: {
    title: "رفع مستند جديد",
    dragDropText: "اسحب الملف وأسقطه هنا، أو انقر للاستعراض",
    supportedFormats: "الصيغ المدعومة: PDF, DOCX, TXT (الحد الأقصى 25 ميجابايت)",
    steps: {
      uploading: "جاري الرفع",
      reading: "قراءة المستند",
      analyzing: "تحليل المحتوى",
      extracting: "استخراج الرؤى",
      ready: "جاهز",
    },
    validation: {
      unsupportedType: "صيغة غير مدعومة. يرجى رفع ملف PDF أو DOCX أو TXT.",
      emptyFile: "الملف فارغ. يرجى تحديد مستند صالح.",
      fileTooLarge: "يتجاوز حجم الملف الحد الأقصى 25 ميجابايت.",
      duplicateFile: "يوجد مستند بهذا الاسم بالفعل.",
    },
    demoNotice: "معالجة توضيحية: تدرس الملفات محلياً في المتصفح دون إرسالها لخدمات خارجية.",
    cancel: "إلغاء",
    done: "فتح مساحة العمل",
  },

  // Document Workspace
  workspace: {
    title: "مساحة عمل ذكاء المستندات",
    tabs: {
      document: "معاينة المستند",
      insights: "رؤى الذكاء الاصطناعي",
      askAi: "اسأل الذكاء الاصطناعي",
    },
    toc: "جدول المحتويات",
    page: "صفحة",
    of: "من",
    zoomIn: "تكبير",
    zoomOut: "تصغير",
    resetZoom: "إعادة ضبط",
    searchInDoc: "البحث داخل المستند...",
    matches: "نتائج",
    noMatches: "لم يتم العثور على نتائج",
    prevMatch: "النتيجة السابقة",
    nextMatch: "النتيجة التالية",
    sampleNotice: "تحليل تجريبي — تم توليده لأغراض العرض التوضيحي",
  },

  // AI Insights Panel
  insights: {
    summary: "الملخص",
    keyPoints: "النقاط الرئيسية",
    actionItems: "مهام العمل",
    dates: "التواريخ الهامة",
    entities: "الكيانات والأشخاص",
    topics: "المواضيع",
    risks: "المخاطر والاعتبارات",

    executiveSummary: "الملخص التنفيذي",
    keyTakeaways: "النتائج والحلول الرئيسية",
    mainTopics: "المواضيع الأساسية المغطاة",
    recommendedActions: "إجراءات المتابعة الموصى بها",

    export: {
      copy: "نسخ إلى الحافظة",
      copied: "تم النسخ!",
      exportTxt: "تصدير كملف TXT",
      exportJson: "تصدير JSON",
      printReport: "طباعة تقرير",
    },
    regenerate: "إعادة توليد التحليل (تجريبي)",
  },

  // Ask AI
  askAi: {
    title: "اسأل عن هذا المستند",
    subtitle: "الاستفسارات مخصصة ومحصورة بمحتوى هذا المستند فقط.",
    placeholder: "اطرح سؤالاً عن التواريخ، المخاطر، أو الأهداف الرئيسية...",
    send: "إرسال السؤال",
    suggestedTitle: "أسئلة مقترحة",
    citationLabel: "المصدر",
    jumpToSource: "الانتقال إلى القسم",
    demoTag: "إجابة محاكاة الذكاء الاصطناعي",
    empty: "لم يتم طرح أسئلة بعد",
    emptySub: "اختر سؤالاً مقترحاً أعلاه أو اكتب استفسارك الخاص.",
  },

  // History & Analytics
  history: {
    title: "سجل تدقيق التحليلات",
    subtitle: "سجل زمني لمعالجة المستندات، الاستخراج، وتفاعلات الأسئلة والأجوبة.",
    filterDoc: "جميع المستندات",
    filterAction: "جميع الإجراءات",
    columns: {
      document: "المستند",
      action: "الإجراء",
      date: "الوقت والتاريخ",
      type: "نوع التحليل",
      status: "الحالة",
    }
  },

  analytics: {
    title: "تحليلات ذكاء المستندات",
    subtitle: "حجم الرؤى ومؤشرات معالجة الصفحات وتوزيع التصنيفات.",
    chartTimeline: "المستندات المحللة عبر الزمن",
    chartCategories: "توزيع تصنيفات المستندات",
    chartActivity: "نشاط الأسئلة والتحليل الأسبوعي",
  },

  // Settings
  settings: {
    title: "الإعدادات والتفضيلات",
    subtitle: "إدارة الملف الشخصي، المظهر، اللغة، وتفضيلات مساحة العمل.",
    tabs: {
      profile: "الملف الشخصي",
      preferences: "التفضيلات",
      workspace: "مساحة العمل",
      aiSettings: "إعدادات الذكاء الاصطناعي",
      security: "واجهة الأمان",
    },
    profile: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      role: "الدور الوظيفي",
      save: "حفظ التغييرات",
    },
    preferences: {
      theme: "مظهر الواجهة",
      themeLight: "الوضع الفاتح",
      themeDark: "الوضع الداكن",
      themeSystem: "حسب النظام",
      language: "لغة العرض",
      languageEn: "English (LTR)",
      languageAr: "العربية (RTL)",
    },
    workspace: {
      name: "اسم مساحة العمل",
      defaultCategory: "التصنيف الافتراضي للمستندات",
    },
    aiSettings: {
      detailLevel: "مستوى تفصيل التحليل",
      detailConcise: "موجز",
      detailBalanced: "متوازن",
      detailComprehensive: "شامل",
      suggestedQuestions: "إظهار الأسئلة المقترحة",
      demoBadgeToggle: "عرض شارات الوضع التجريبي",
    },
    security: {
      notice: "واجهة أمان تجريبية — إدارات جلسات توضيحية",
      activeSessions: "الجلسات النشطة",
      twoFactor: "المصادقة الثنائية (2FA)",
      enabled: "مفعلة (محاكاة)",
    }
  },

  // Global Search Modal (Cmd+K)
  globalSearch: {
    placeholder: "ابحث في المستندات، الرؤى، النقاط الرئيسية، والأسئلة...",
    noResults: "لم يتم العثور على مستندات أو رؤى مطابقة.",
    groupDocs: "المستندات",
    groupInsights: "الرؤى المستخرجة",
    groupHistory: "السجل والأسئلة",
    shortcutHint: "استخدم ↑ ↓ للتنقل، Enter للاختيار، Esc للإغلاق",
  },

  // Public Landing Page
  landing: {
    badge: "عرض توضيحي لمنصة الذكاء الاصطناعي",
    heroTitle: "افهم مستنداتك وسنداتك بسرعة فائقة.",
    heroSubtitle: "يحوّل دوكيوميند الذكي ملفات PDF والعقود والتقارير المعقدة إلى رؤى تنفيدية مهيكلة، ومهام عمل، وإجابات دقيقة مع إحالات للمصادر.",
    ctaTry: "استكشف العرض التفاعلي",
    ctaFeatures: "عرض ميزات مساحة العمل",

    howItWorksTitle: "كيف يعمل النظام",
    howItWorksSub: "ثلاث خطوات فقط لتحويل الملفات الخام إلى ذكاء مستندات واضح.",
    step1Title: "1. الرفع",
    step1Desc: "اسحب ملفات PDF أو DOCX أو TXT بأمان إلى مساحة العمل.",
    step2Title: "2. التحليل",
    step2Desc: "معالجة متعددة المراحل تستخرج الملخصات، النقاط الرئيسية، والكيانات، والمخاطر.",
    step3Title: "3. الاستكشاف",
    step3Desc: "اقرأ مع تمييز المصادر، واسأل أسئلة مخصصة للمستند، وصدر التقارير.",

    featuresTitle: "ميزات مساحة عمل الشركات",
    featuresSub: "مصمم خصيصاً لفرق الأعمال التي تتنقل يومياً بين مستندات كثيفة.",

    feat1Title: "ملخصات ذكاء اصطناعي منظمة",
    feat1Desc: "نظرة تنفيدية عامة فورية، نتائج رئيسية، وإجراءات متابعة موصى بها.",
    feat2Title: "أسئلة وأجوبة محصورة بالمستند",
    feat2Desc: "اطرح أسئلة دقيقة واحصل على إجابات مع إشارات واضحة للصفحة والجزء المقتبس.",
    feat3Title: "استخراج الكيانات والمخاطر",
    feat3Desc: "تمييز تلقائي للتواريخ الهامة، الشركات، الشخصيات، واعتبارات المخاطر.",
    feat4Title: "لوحة الأوامر والبحث الشامل",
    feat4Desc: "بحث بمفتاح Cmd+K عبر كل المستندات، والرؤى المستخرجة، وسجلات المحادثات.",

    useCasesTitle: "مصمم لقطاعات الأعمال المختلفة",
    useCases: [
      { name: "استراتيجية الأعمال", desc: "مراجعة تقارير استراتيجية Q4 وأبحاث السوق في دقائق معدودة." },
      { name: "المالية والتدقيق", desc: "استخراج المؤشرات المالية، الملخصات التنفيذية، ומخاطر الامتثال." },
      { name: "الشؤون القانونية والعقود", desc: "تمييز بنود العقود والتواريخ الهامة والأطراف المعنية بسرعة." },
      { name: "الموارد البشرية", desc: "تحليل أدلة الموظفين والسياسات الداخلية والوثائق التنظيمية." },
    ],

    footerNotice: "دوكيوميند الذكي هو مشروع محفظة أعمال توضيحي يعرض هندسة الواجهة الأمامية، وتجريد خدمات الذكاء الاصطناعي، وإمكانية الوصول، وتصميم واجهات SaaS الحديثة."
  }
};
