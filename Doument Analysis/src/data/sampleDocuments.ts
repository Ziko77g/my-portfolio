import type { DocumentItem, HistoryItem, KPIStats } from '../types';

export const initialKPIStats: KPIStats = {
  documentsCount: 128,
  pagesProcessed: 4820,
  insightsGenerated: 1936,
  questionsAnswered: 3421,
  documentsTrend: "+14% this month",
  pagesTrend: "+22% this month",
  insightsTrend: "+18% this month",
  questionsTrend: "+31% this month",
};

export const sampleDocuments: DocumentItem[] = [
  {
    id: "doc-q4-strategy",
    title: "Q4 Business Strategy",
    fileName: "Q4 Business Strategy.pdf",
    fileSize: "3.4 MB",
    fileType: "PDF",
    pagesCount: 8,
    category: "Business",
    uploadedAt: "2026-08-18",
    lastAnalyzedAt: "2026-08-20",
    status: "Ready",
    suggestedQuestions: [
      "What are the main objectives for Q4?",
      "What risks are mentioned in the market expansion section?",
      "What are the key target completion dates?",
      "Summarize the resource allocation strategy."
    ],
    pages: [
      {
        pageNumber: 1,
        content: `EXECUTIVE SUMMARY & Q4 STRATEGIC VISION

DocuMind Global Enterprise Group - Q4 Strategic Directive
Confidential Document - Internal Distribution Only

1. Executive Overview
As we enter the final quarter of fiscal year 2026, DocuMind Global is positioning itself to accelerate market adoption across North America and EMEA. Our primary strategic imperative for Q4 is expanding Enterprise ARR by 35% year-over-year while introducing automated document intelligence pipelines for regulated industries.

2. Primary Strategic Pillars
- Pillar 1: Enterprise Account Expansion in Healthcare and Financial Services.
- Pillar 2: Platform Architecture Modernization with zero-retention security protocols.
- Pillar 3: EMEA Regional Expansion with multi-region compliance (GDPR & EU AI Act).
- Pillar 4: Customer Success Engineering to reduce churn below 1.2% monthly.`,
        sections: [
          {
            id: "sec-q4-1",
            title: "1. Executive Overview",
            pageNumber: 1,
            content: "Primary strategic imperative for Q4 is expanding Enterprise ARR by 35% year-over-year while introducing automated document intelligence pipelines."
          },
          {
            id: "sec-q4-2",
            title: "2. Strategic Pillars",
            pageNumber: 1,
            content: "Focus on Enterprise Expansion, Security Architecture Modernization, and EMEA Regional Compliance."
          }
        ]
      },
      {
        pageNumber: 2,
        content: `MARKET EXPANSION & TARGET REGIONS

Section 3: Regional Growth Strategy
Our EMEA expansion plan targets key financial hubs in Frankfurt, London, and Dubai. Preliminary pilot programs with 14 Tier-1 financial institutions indicate strong demand for local cloud deployment options.

Section 4: Financial Targets & Key Performance Indicators
- ARR Target: $18.5M by end of Q4.
- New Customer Acquisition: 45 Net-New Enterprise Logos.
- Gross Margin Target: Maintain > 82%.
- Sales Cycle Reduction: Decrease mean sales cycle from 74 days to 52 days.`,
        sections: [
          {
            id: "sec-q4-3",
            title: "3. Regional Growth Strategy",
            pageNumber: 2,
            content: "EMEA expansion targeting Frankfurt, London, and Dubai financial institutions with local deployment options."
          },
          {
            id: "sec-q4-4",
            title: "4. Financial Targets & KPIs",
            pageNumber: 2,
            content: "ARR Target of $18.5M, acquisition of 45 net-new enterprise logos, maintaining gross margin above 82%."
          }
        ]
      },
      {
        pageNumber: 3,
        content: `RISK ANALYSIS & MITIGATION CONTROLS

Section 5: Risk Assessment & Market Dependencies
5.1 Regulatory Compliance Risks
Operating in EMEA requires strict adherence to the upcoming EU AI Act transparency rules. Failure to secure ISO 27001 certification by October 15, 2026 could result in delayed institutional contract sign-offs.

5.2 Resource & Talent Constraints
Engineering capacity is currently strained due to parallel refactoring of the legacy search indexing pipeline. Hiring 6 senior infrastructure engineers before November 1 is critical to avoid project delays.

Section 6: Recommended Contingency Actions
1. Accelerate SOC 2 Type II audit report delivery to potential enterprise clients.
2. Establish a dedicated cross-functional taskforce for EMEA regulatory compliance.`,
        sections: [
          {
            id: "sec-q4-5",
            title: "5. Risk Assessment & Market Dependencies",
            pageNumber: 3,
            content: "Compliance with EU AI Act and ISO 27001 by October 15 is crucial. Engineering capacity constraints present risk to delivery timeline."
          },
          {
            id: "sec-q4-6",
            title: "6. Recommended Contingency Actions",
            pageNumber: 3,
            content: "Accelerate SOC 2 report delivery and form a dedicated EMEA regulatory taskforce."
          }
        ]
      },
      {
        pageNumber: 4,
        content: `RESOURCE ALLOCATION & IMPLEMENTATION TIMELINE

Section 7: Operational Roadmap
- October 1, 2026: Kickoff of Q4 Sales & Marketing campaign.
- October 15, 2026: ISO 27001 Certification audit submission deadline.
- November 15, 2026: Launch of v3.0 Document Intelligence Architecture.
- December 15, 2026: Q4 Financial Review & 2027 Planning Summit.

Section 8: Budget Allocation Breakdown
- Product & Engineering: 42% ($2.8M)
- Field Sales & Marketing: 38% ($2.5M)
- Customer Success & Support: 12% ($800K)
- Operations & Legal: 8% ($530K)`,
        sections: [
          {
            id: "sec-q4-7",
            title: "7. Operational Roadmap",
            pageNumber: 4,
            content: "Key milestones spanning October through December 2026, including ISO deadline on Oct 15 and v3.0 release on Nov 15."
          },
          {
            id: "sec-q4-8",
            title: "8. Budget Allocation Breakdown",
            pageNumber: 4,
            content: "Product & Engineering allocated 42% ($2.8M) followed by Sales & Marketing at 38% ($2.5M)."
          }
        ]
      }
    ],
    analysis: {
      documentId: "doc-q4-strategy",
      analyzedAt: "2026-08-20 14:32",
      isDemoAnalysis: true,
      summary: {
        executive: "The Q4 Business Strategy outlines a target ARR of $18.5M representing a 35% YoY growth, driven by aggressive EMEA expansion and healthcare/finance enterprise customer acquisitions. The core operational priorities include launching v3.0 platform architecture and securing regulatory certifications.",
        keyTakeaways: [
          "Target ARR of $18.5M with 45 net-new enterprise logos in Q4.",
          "EMEA regional growth focused on Frankfurt, London, and Dubai financial centers.",
          "ISO 27001 compliance audit deadline set for October 15, 2026.",
          "Product & Engineering allocated largest budget slice at 42% ($2.8M)."
        ],
        mainTopics: [
          "Enterprise ARR Growth",
          "EMEA Regional Expansion",
          "Regulatory Compliance & ISO 27001",
          "Engineering Capacity & Hiring",
          "Budget & Resource Allocation"
        ],
        recommendedFollowUps: [
          "Verify status of 6 senior infrastructure engineering requisitions.",
          "Review ISO 27001 audit preparation checklist before Oct 15.",
          "Schedule pilot briefing with Frankfurt tier-1 financial institute leads."
        ]
      },
      keyPoints: [
        {
          id: "kp-1",
          title: "35% ARR Growth Objective",
          description: "Targeting $18.5M in ARR by acquiring 45 net-new enterprise logos across financial services and healthcare.",
          importance: "high",
          source: { pageNumber: 1, sectionTitle: "1. Executive Overview", snippet: "expanding Enterprise ARR by 35% year-over-year while introducing automated document intelligence pipelines" }
        },
        {
          id: "kp-2",
          title: "EMEA Financial Hub Focus",
          description: "Expanding operations to Frankfurt, London, and Dubai with localized sovereign cloud options.",
          importance: "high",
          source: { pageNumber: 2, sectionTitle: "3. Regional Growth Strategy", snippet: "plan targets key financial hubs in Frankfurt, London, and Dubai" }
        },
        {
          id: "kp-3",
          title: "Sales Cycle Optimization",
          description: "Streamlining sales operations to reduce average deal closure time from 74 to 52 days.",
          importance: "medium",
          source: { pageNumber: 2, sectionTitle: "4. Financial Targets & KPIs", snippet: "Decrease mean sales cycle from 74 days to 52 days." }
        }
      ],
      actionItems: [
        {
          id: "ai-1",
          task: "Complete ISO 27001 audit documentation submission",
          assignee: "Compliance Team",
          dueDate: "2026-10-15",
          priority: "high",
          source: { pageNumber: 4, sectionTitle: "7. Operational Roadmap", snippet: "October 15, 2026: ISO 27001 Certification audit submission deadline." }
        },
        {
          id: "ai-2",
          task: "Hire 6 Senior Infrastructure Engineers",
          assignee: "Talent Acquisition / Engineering",
          dueDate: "2026-11-01",
          priority: "high",
          source: { pageNumber: 3, sectionTitle: "5. Risk Assessment & Market Dependencies", snippet: "Hiring 6 senior infrastructure engineers before November 1 is critical" }
        },
        {
          id: "ai-3",
          task: "Deploy v3.0 Document Intelligence Platform Architecture",
          assignee: "Core Architecture Team",
          dueDate: "2026-11-15",
          priority: "medium",
          source: { pageNumber: 4, sectionTitle: "7. Operational Roadmap", snippet: "November 15, 2026: Launch of v3.0 Document Intelligence Architecture." }
        }
      ],
      importantDates: [
        {
          id: "id-1",
          date: "October 1, 2026",
          event: "Q4 Campaign Kickoff",
          context: "Launch of global Q4 sales and marketing initiative.",
          source: { pageNumber: 4, sectionTitle: "7. Operational Roadmap", snippet: "October 1, 2026: Kickoff of Q4 Sales & Marketing campaign." }
        },
        {
          id: "id-2",
          date: "October 15, 2026",
          event: "ISO 27001 Audit Submission",
          context: "Critical regulatory deadline for European financial enterprise deals.",
          source: { pageNumber: 4, sectionTitle: "7. Operational Roadmap", snippet: "October 15, 2026: ISO 27001 Certification audit submission deadline." }
        },
        {
          id: "id-3",
          date: "November 15, 2026",
          event: "v3.0 Architecture Release",
          context: "Platform release featuring zero-retention security protocols.",
          source: { pageNumber: 4, sectionTitle: "7. Operational Roadmap", snippet: "November 15, 2026: Launch of v3.0 Document Intelligence Architecture." }
        }
      ],
      entities: [
        { id: "ent-1", name: "DocuMind Global", type: "Organization", mentionsCount: 12 },
        { id: "ent-2", name: "EU AI Act", type: "Regulation", mentionsCount: 5 },
        { id: "ent-3", name: "Frankfurt Financial Hub", type: "Location", mentionsCount: 4 },
        { id: "ent-4", name: "ISO 27001", type: "Regulation", mentionsCount: 6 },
        { id: "ent-5", name: "v3.0 Architecture", type: "Product", mentionsCount: 8 }
      ],
      topics: [
        "Executive Strategy", "ARR Expansion", "EMEA Market", "ISO Compliance", "Engineering Capacity", "Budget Allocation"
      ],
      risks: [
        {
          id: "rf-1",
          title: "ISO 27001 Certification Delay",
          description: "Missing the October 15 compliance deadline will halt pipeline conversions for European financial enterprise clients.",
          severity: "critical",
          mitigation: "Assign dedicated external auditor to perform pre-audit gap review by October 1.",
          source: { pageNumber: 3, sectionTitle: "5. Risk Assessment & Market Dependencies", snippet: "Failure to secure ISO 27001 certification by October 15, 2026 could result in delayed contract sign-offs." }
        },
        {
          id: "rf-2",
          title: "Engineering Resource Bottleneck",
          description: "Capacity is constrained due to refactoring legacy search indexing, threatening v3.0 launch timeline.",
          severity: "moderate",
          mitigation: "Contract 3 senior contractor DevOps engineers for a 90-day period.",
          source: { pageNumber: 3, sectionTitle: "5. Risk Assessment & Market Dependencies", snippet: "Engineering capacity is currently strained due to parallel refactoring of legacy search indexing" }
        }
      ]
    }
  },
  {
    id: "doc-annual-finance",
    title: "Annual Financial Overview",
    fileName: "Annual Financial Overview.pdf",
    fileSize: "5.8 MB",
    fileType: "PDF",
    pagesCount: 14,
    category: "Finance",
    uploadedAt: "2026-08-10",
    lastAnalyzedAt: "2026-08-12",
    status: "Ready",
    suggestedQuestions: [
      "What was the total revenue for the fiscal year?",
      "How did operating expenses change compared to last year?",
      "What are the major expenditure categories?",
      "What is the projected cash runway?"
    ],
    pages: [
      {
        pageNumber: 1,
        content: `ANNUAL FINANCIAL PERFORMANCE REPORT - FY 2026

Executive Summary & Key Highlights
Fiscal Year Ending June 30, 2026

1. Consolidated Revenue Analysis
Total consolidated revenue for FY2026 reached $54.2 Million, representing a 28.4% growth year-over-year compared to FY2025 ($42.2 Million). Software Subscription Revenue accounted for 84% ($45.5M) of total revenue, reflecting strong recurring revenue health.

2. Profitability & Margins
- Gross Profit: $44.4 Million (81.9% Gross Margin)
- Adjusted EBITDA: $9.8 Million (18.1% EBITDA Margin)
- Net Income: $6.2 Million`,
        sections: [
          {
            id: "sec-fin-1",
            title: "1. Consolidated Revenue Analysis",
            pageNumber: 1,
            content: "Total revenue reached $54.2M (+28.4% YoY) with software subscriptions generating 84% ($45.5M)."
          },
          {
            id: "sec-fin-2",
            title: "2. Profitability & Margins",
            pageNumber: 1,
            content: "Gross Margin maintained at 81.9% ($44.4M) and Adjusted EBITDA of $9.8M."
          }
        ]
      },
      {
        pageNumber: 2,
        content: `OPERATING EXPENSES & CASH FLOW

Section 3: Operating Expense Breakdown
Total Operating Expenses for FY2026 totaled $34.6 Million, distributed as follows:
- Research & Development (R&D): $14.2M (41% of total Opex)
- Sales & Marketing (S&M): $13.8M (40% of total Opex)
- General & Administrative (G&A): $6.6M (19% of total Opex)

Section 4: Liquidity & Cash Position
As of June 30, 2026, cash and cash equivalents stood at $31.4 Million with zero long-term debt obligations. Cash flow from operations was positive at $11.2 Million.`,
        sections: [
          {
            id: "sec-fin-3",
            title: "3. Operating Expense Breakdown",
            pageNumber: 2,
            content: "Total Opex of $34.6M split between R&D ($14.2M), Sales & Marketing ($13.8M), and G&A ($6.6M)."
          },
          {
            id: "sec-fin-4",
            title: "4. Liquidity & Cash Position",
            pageNumber: 2,
            content: "Cash reserves standing at $31.4M with zero debt and positive operating cash flow of $11.2M."
          }
        ]
      }
    ],
    analysis: {
      documentId: "doc-annual-finance",
      analyzedAt: "2026-08-12 11:15",
      isDemoAnalysis: true,
      summary: {
        executive: "FY2026 financial performance demonstrated robust growth with total revenue hitting $54.2M (+28.4% YoY) and subscription revenue contributing 84%. Operating margins remained strong at 81.9% gross margin and cash reserves ended at $31.4M with zero debt.",
        keyTakeaways: [
          "Total revenue reached $54.2M (+28.4% YoY).",
          "Subscription SaaS revenue generated 84% ($45.5M).",
          "Gross margin reached 81.9% ($44.4M).",
          "Cash position healthy at $31.4M with positive operating cash flow of $11.2M."
        ],
        mainTopics: [
          "Consolidated Revenue", "Gross & EBITDA Margins", "R&D vs Marketing Expenditure", "Cash Flow & Balance Sheet"
        ],
        recommendedFollowUps: [
          "Evaluate R&D ROI efficiency for high spending projects.",
          "Review S&M CAC payback period trends across key segments."
        ]
      },
      keyPoints: [
        {
          id: "kp-fin-1",
          title: "Revenue Growth Acceleration",
          description: "$54.2M total revenue representing 28.4% YoY expansion driven by enterprise subscriptions.",
          importance: "high",
          source: { pageNumber: 1, sectionTitle: "1. Consolidated Revenue Analysis", snippet: "Total consolidated revenue for FY2026 reached $54.2 Million, representing a 28.4% growth year-over-year" }
        },
        {
          id: "kp-fin-2",
          title: "Strong Balance Sheet",
          description: "$31.4M cash reserves with zero long-term debt obligations.",
          importance: "high",
          source: { pageNumber: 2, sectionTitle: "4. Liquidity & Cash Position", snippet: "cash and cash equivalents stood at $31.4 Million with zero long-term debt obligations." }
        }
      ],
      actionItems: [
        {
          id: "ai-fin-1",
          task: "Conduct quarterly audit on S&M expense allocation efficiency",
          assignee: "FP&A Team",
          dueDate: "2026-09-30",
          priority: "medium",
          source: { pageNumber: 2, sectionTitle: "3. Operating Expense Breakdown", snippet: "Sales & Marketing (S&M): $13.8M (40% of total Opex)" }
        }
      ],
      importantDates: [
        {
          id: "id-fin-1",
          date: "June 30, 2026",
          event: "Fiscal Year End Close",
          context: "Close of FY2026 financial records.",
          source: { pageNumber: 1, sectionTitle: "Executive Summary", snippet: "Fiscal Year Ending June 30, 2026" }
        }
      ],
      entities: [
        { id: "ent-fin-1", name: "DocuMind Corp", type: "Organization", mentionsCount: 15 },
        { id: "ent-fin-2", name: "GAAP Accounting Standards", type: "Regulation", mentionsCount: 4 }
      ],
      topics: [
        "Financial Overview", "SaaS Metrics", "Opex Analysis", "Cash Reserves"
      ],
      risks: [
        {
          id: "rf-fin-1",
          title: "High R&D & S&M Concentration",
          description: "R&D and S&M represent 81% of total operating expenses, requiring tight performance benchmarking.",
          severity: "moderate",
          mitigation: "Implement threshold controls for customer acquisition cost payback periods.",
          source: { pageNumber: 2, sectionTitle: "3. Operating Expense Breakdown", snippet: "R&D $14.2M (41%) and S&M $13.8M (40%)" }
        }
      ]
    }
  },
  {
    id: "doc-prd-v3",
    title: "Product Requirements",
    fileName: "Product Requirements.docx",
    fileSize: "1.9 MB",
    fileType: "DOCX",
    pagesCount: 6,
    category: "Product",
    uploadedAt: "2026-08-15",
    lastAnalyzedAt: "2026-08-16",
    status: "Ready",
    suggestedQuestions: [
      "What are the core functional requirements?",
      "What compliance features are required for enterprise clients?",
      "What are the target UX response time latencies?"
    ],
    pages: [
      {
        pageNumber: 1,
        content: `PRODUCT REQUIREMENTS DOCUMENT (PRD) - v3.0

Document Intelligence Engine & Multi-Modal Parser
Author: Product Architecture Team

1. Objective & Purpose
The goal of PRD v3.0 is to define requirements for automated document ingestion, multi-stage structure extraction, and sub-second semantic search indexing across PDF, DOCX, and TXT files.

2. Core Functional Requirements
- Requirement 2.1: Multi-Stage Extraction Pipeline supporting visual status progress indicators.
- Requirement 2.2: Scoped Q&A with verifiable source citations referencing exact page and section snippets.
- Requirement 2.3: Global Command Palette (Cmd+K) with instant fuzzy search across documents and extracted insights.`,
        sections: [
          {
            id: "sec-prd-1",
            title: "1. Objective & Purpose",
            pageNumber: 1,
            content: "Define requirements for document ingestion, multi-stage extraction, and sub-second semantic search."
          },
          {
            id: "sec-prd-2",
            title: "2. Core Functional Requirements",
            pageNumber: 1,
            content: "Includes multi-stage pipeline, scoped Q&A with citations, and global Cmd+K search."
          }
        ]
      }
    ],
    analysis: {
      documentId: "doc-prd-v3",
      analyzedAt: "2026-08-16 09:40",
      isDemoAnalysis: true,
      summary: {
        executive: "PRD v3.0 defines functional and technical specifications for DocuMind AI's next-generation parsing pipeline, emphasizing multi-stage progress tracking, exact citation Q&A, sub-second search latency, and strict WCAG 2.1 AA accessibility compliance.",
        keyTakeaways: [
          "Multi-stage document extraction with visual steppers.",
          "Verifiable Q&A source citations linked to exact page sections.",
          "Global Cmd+K search functionality.",
          "Strict adherence to sub-second search latencies."
        ],
        mainTopics: [
          "PRD v3.0 Specifications", "Extraction Pipeline", "Scoped Q&A Engine", "Accessibility & UX"
        ],
        recommendedFollowUps: [
          "Review UI design specs with Accessibility Specialist.",
          "Set up benchmark tests for search latency."
        ]
      },
      keyPoints: [
        {
          id: "kp-prd-1",
          title: "Verifiable Citation Requirement",
          description: "All AI answers must include explicit source references linking page numbers and section titles.",
          importance: "high",
          source: { pageNumber: 1, sectionTitle: "2. Core Functional Requirements", snippet: "Scoped Q&A with verifiable source citations referencing exact page and section snippets." }
        }
      ],
      actionItems: [
        {
          id: "ai-prd-1",
          task: "Finalize API contracts for Document Extraction Service",
          assignee: "Backend Tech Lead",
          dueDate: "2026-09-10",
          priority: "high",
          source: { pageNumber: 1, sectionTitle: "1. Objective & Purpose", snippet: "requirements for automated document ingestion" }
        }
      ],
      importantDates: [
        {
          id: "id-prd-1",
          date: "September 10, 2026",
          event: "API Contract Lock",
          context: "Final agreement on parser backend interfaces.",
          source: { pageNumber: 1, sectionTitle: "1. Objective & Purpose", snippet: "PRD v3.0 defining requirements" }
        }
      ],
      entities: [
        { id: "ent-prd-1", name: "DocuMind Engine v3.0", type: "Product", mentionsCount: 11 },
        { id: "ent-prd-2", name: "WCAG 2.1 AA", type: "Regulation", mentionsCount: 3 }
      ],
      topics: [
        "Product Specifications", "PRD Requirements", "User Interface", "Citations"
      ],
      risks: [
        {
          id: "rf-prd-1",
          title: "Parsing Latency Spillover",
          description: "Large 100+ page documents may breach sub-second search indexing targets if unoptimized.",
          severity: "moderate",
          mitigation: "Implement worker thread async batching.",
          source: { pageNumber: 1, sectionTitle: "1. Objective & Purpose", snippet: "sub-second semantic search indexing" }
        }
      ]
    }
  },
  {
    id: "doc-market-research",
    title: "Market Research Report",
    fileName: "Market Research Report.pdf",
    fileSize: "4.2 MB",
    fileType: "PDF",
    pagesCount: 10,
    category: "Marketing",
    uploadedAt: "2026-08-05",
    lastAnalyzedAt: "2026-08-06",
    status: "Ready",
    suggestedQuestions: [
      "What is the projected market size for document intelligence?",
      "Who are the main enterprise buyer personas?",
      "What are the top desired platform features?"
    ],
    pages: [
      {
        pageNumber: 1,
        content: `GLOBAL DOCUMENT INTELLIGENCE MARKET STUDY - 2026 EDITION

Section 1: Market Size & Growth Projections
The Enterprise Intelligent Document Processing (IDP) market is projected to reach $14.8 Billion by 2029, growing at a Compound Annual Growth Rate (CAGR) of 26.5%.

Section 2: Buyer Persona Insights
- Primary Buyer: VP of Enterprise Operations & Chief Information Officers (CIOs).
- Key Pain Points: Unstructured text sprawl, slow manual compliance audits, and difficulty verifying citations in AI answers.`,
        sections: [
          {
            id: "sec-mr-1",
            title: "1. Market Size & Projections",
            pageNumber: 1,
            content: "Market projected to reach $14.8B by 2029 with 26.5% CAGR."
          },
          {
            id: "sec-mr-2",
            title: "2. Buyer Persona Insights",
            pageNumber: 1,
            content: "Primary buyers are CIOs and VPs of Operations seeking fast compliance audits and citation transparency."
          }
        ]
      }
    ],
    analysis: {
      documentId: "doc-market-research",
      analyzedAt: "2026-08-06 16:20",
      isDemoAnalysis: true,
      summary: {
        executive: "Market analysis indicates strong tailwinds for IDP solutions, expanding to $14.8B by 2029. Buyer decisions are driven heavily by accuracy transparency, document citation features, and enterprise security compliance.",
        keyTakeaways: [
          "26.5% CAGR expected through 2029.",
          "CIOs prioritize verifiable source citations over generic chatbot outputs.",
          "High demand in legal, financial, and healthcare sectors."
        ],
        mainTopics: [
          "IDP Market Growth", "Buyer Personas", "Feature Priorities", "Competitive Landscape"
        ],
        recommendedFollowUps: [
          "Position marketing message around 'Verifiable Document Intelligence'.",
          "Develop enterprise sales enablement collateral targeting CIOs."
        ]
      },
      keyPoints: [
        {
          id: "kp-mr-1",
          title: "Demand for Source Verification",
          description: "84% of enterprise software buyers reject AI solutions that lack clear page-level citations.",
          importance: "high",
          source: { pageNumber: 1, sectionTitle: "2. Buyer Persona Insights", snippet: "difficulty verifying citations in AI answers" }
        }
      ],
      actionItems: [
        {
          id: "ai-mr-1",
          task: "Create CIO-focused whitepaper on Verifiable Document AI",
          assignee: "Product Marketing",
          dueDate: "2026-09-15",
          priority: "medium",
          source: { pageNumber: 1, sectionTitle: "2. Buyer Persona Insights", snippet: "Primary Buyer: VP of Enterprise Operations & Chief Information Officers" }
        }
      ],
      importantDates: [
        {
          id: "id-mr-1",
          date: "Q4 2026",
          event: "Gartner IDP Market Guide Release",
          context: "Key analyst report publication.",
          source: { pageNumber: 1, sectionTitle: "1. Market Size & Projections", snippet: "Market Study 2026 Edition" }
        }
      ],
      entities: [
        { id: "ent-mr-1", name: "Gartner Research", type: "Organization", mentionsCount: 6 },
        { id: "ent-mr-2", name: "Enterprise IDP", type: "Product", mentionsCount: 14 }
      ],
      topics: [
        "Market Research", "IDP Growth", "CIO Preferences", "Citation Transparency"
      ],
      risks: [
        {
          id: "rf-mr-1",
          title: "Generic Chatbot Commoditization",
          description: "Commoditized chat widgets risk confusing buyers unless clear structured workspace value is demonstrated.",
          severity: "low",
          mitigation: "Emphasize multi-stage workspace workflow.",
          source: { pageNumber: 1, sectionTitle: "2. Buyer Persona Insights", snippet: "difficulty verifying citations" }
        }
      ]
    }
  },
  {
    id: "doc-employee-handbook",
    title: "Employee Handbook",
    fileName: "Employee Handbook.docx",
    fileSize: "6.1 MB",
    fileType: "DOCX",
    pagesCount: 22,
    category: "HR",
    uploadedAt: "2026-07-28",
    lastAnalyzedAt: "2026-07-30",
    status: "Ready",
    suggestedQuestions: [
      "What is the remote work policy?",
      "What are the annual paid time off (PTO) entitlements?",
      "What is the code of conduct regarding confidentiality?"
    ],
    pages: [
      {
        pageNumber: 1,
        content: `DOCUMIND ENTERPRISE EMPLOYEE HANDBOOK - 2026

Welcome & Company Core Values
Section 1: Work Environment & Flexibility
DocuMind operates a flexible hybrid workforce model. Full-time team members are eligible for up to 3 days remote work per week with manager alignment.

Section 2: Time Off & Benefits
- Paid Time Off (PTO): 25 business days per calendar year.
- Parental Leave: 16 weeks fully paid leave for all eligible primary caregivers.
- Professional Learning Stipend: $2,500 annual allowance per employee.`,
        sections: [
          {
            id: "sec-hr-1",
            title: "1. Work Environment & Flexibility",
            pageNumber: 1,
            content: "Hybrid work model allowing up to 3 days remote per week."
          },
          {
            id: "sec-hr-2",
            title: "2. Time Off & Benefits",
            pageNumber: 1,
            content: "25 days annual PTO, 16 weeks paid parental leave, and $2,500 learning stipend."
          }
        ]
      }
    ],
    analysis: {
      documentId: "doc-employee-handbook",
      analyzedAt: "2026-07-30 10:05",
      isDemoAnalysis: true,
      summary: {
        executive: "The Employee Handbook outlines company policies around hybrid work (3 days remote), comprehensive benefits including 25 PTO days and $2,500 learning allowance, and strict confidentiality protocols.",
        keyTakeaways: [
          "Hybrid policy allows up to 3 days remote work per week.",
          "25 days annual PTO + 16 weeks fully paid parental leave.",
          "$2,500 annual professional development stipend per employee."
        ],
        mainTopics: [
          "Hybrid Work Policy", "Paid Time Off & Benefits", "Professional Growth Stipend", "Confidentiality"
        ],
        recommendedFollowUps: [
          "Publish learning stipend expense submission workflow on intranet.",
          "Schedule HR Q&A session for new team onboardings."
        ]
      },
      keyPoints: [
        {
          id: "kp-hr-1",
          title: "Generous Time Off Allocation",
          description: "25 business days of paid time off per calendar year plus paid parental leave.",
          importance: "high",
          source: { pageNumber: 1, sectionTitle: "2. Time Off & Benefits", snippet: "Paid Time Off (PTO): 25 business days per calendar year." }
        }
      ],
      actionItems: [
        {
          id: "ai-hr-1",
          task: "Update HR portal with learning stipend guidance",
          assignee: "HR Operations",
          dueDate: "2026-09-01",
          priority: "low",
          source: { pageNumber: 1, sectionTitle: "2. Time Off & Benefits", snippet: "Professional Learning Stipend: $2,500 annual allowance" }
        }
      ],
      importantDates: [
        {
          id: "id-hr-1",
          date: "January 1, 2026",
          event: "Handbook Policy Renewal",
          context: "Annual policy review cycle.",
          source: { pageNumber: 1, sectionTitle: "Welcome", snippet: "Employee Handbook - 2026" }
        }
      ],
      entities: [
        { id: "ent-hr-1", name: "DocuMind HR Operations", type: "Organization", mentionsCount: 18 }
      ],
      topics: [
        "HR Policies", "Hybrid Work", "Employee Benefits", "PTO Guidelines"
      ],
      risks: [
        {
          id: "rf-hr-1",
          title: "Stipend Approval Overrun",
          description: "Unclear expense submission categories could lead to delayed budget reconciliations.",
          severity: "low",
          mitigation: "Pre-approve online course platforms in HR portal.",
          source: { pageNumber: 1, sectionTitle: "2. Time Off & Benefits", snippet: "$2,500 annual allowance per employee" }
        }
      ]
    }
  }
];

export const sampleHistory: HistoryItem[] = [
  {
    id: "hist-1",
    documentId: "doc-q4-strategy",
    documentTitle: "Q4 Business Strategy.pdf",
    action: "Document analyzed",
    timestamp: "2026-08-20 14:32",
    analysisType: "Full Deep Analysis",
    status: "Completed",
    details: "Extracted 3 Key Points, 3 Action Items, 3 Dates, 2 Risk Factors."
  },
  {
    id: "hist-2",
    documentId: "doc-q4-strategy",
    documentTitle: "Q4 Business Strategy.pdf",
    action: "Question answered",
    timestamp: "2026-08-20 14:35",
    analysisType: "Q&A Query",
    status: "Completed",
    details: "Answered 'What are the main objectives for Q4?' with citation Page 1 - Executive Overview."
  },
  {
    id: "hist-3",
    documentId: "doc-annual-finance",
    documentTitle: "Annual Financial Overview.pdf",
    action: "Summary generated",
    timestamp: "2026-08-12 11:15",
    analysisType: "Quick Executive Summary",
    status: "Completed",
    details: "Executive summary created highlighting $54.2M total revenue."
  },
  {
    id: "hist-4",
    documentId: "doc-prd-v3",
    documentTitle: "Product Requirements.docx",
    action: "Insights extracted",
    timestamp: "2026-08-16 09:40",
    analysisType: "Full Deep Analysis",
    status: "Completed",
    details: "Identified PRD v3.0 core citation requirement."
  },
  {
    id: "hist-5",
    documentId: "doc-employee-handbook",
    documentTitle: "Employee Handbook.docx",
    action: "Document uploaded",
    timestamp: "2026-07-28 08:12",
    analysisType: "Upload Ingestion",
    status: "Completed",
    details: "Local file ingestion completed successfully."
  }
];
