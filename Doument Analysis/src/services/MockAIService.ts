import type { AIService } from './AIService';
import type { DocumentItem, DocumentAnalysis, QuestionAnswer } from '../types';

export class MockAIService implements AIService {
  private simulateDelay(ms: number = 600): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async analyzeDocument(document: DocumentItem): Promise<DocumentAnalysis> {
    await this.simulateDelay(800);

    // If pre-cooked demo analysis exists, return it
    if (document.analysis) {
      return {
        ...document.analysis,
        analyzedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
        isDemoAnalysis: true
      };
    }

    // Dynamic fallback generation for user uploaded custom files
    const firstPageContent = document.pages[0]?.content || document.title;

    return {
      documentId: document.id,
      analyzedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      isDemoAnalysis: true,
      summary: {
        executive: `[Demo AI Analysis] Executive summary generated for "${document.title}". The document contains ${document.pagesCount} page(s) covering ${document.category.toLowerCase()} operational guidelines, core objectives, and implementation criteria.`,
        keyTakeaways: [
          `Document title "${document.title}" classified under ${document.category} category.`,
          `Extracted ${document.pages.length} page section(s) for structured indexing.`,
          `Identified core recommendations and compliance points in Page 1.`
        ],
        mainTopics: [
          `${document.category} Strategy`,
          "Document Structure Analysis",
          "Operational Directives",
          "Risk Assessment"
        ],
        recommendedFollowUps: [
          "Review extracted key dates and action items.",
          "Verify source citations in Ask AI section."
        ]
      },
      keyPoints: [
        {
          id: `kp-mock-1`,
          title: `Primary Focus of ${document.title}`,
          description: `Analysis of section 1 indicates key directives related to ${document.category.toLowerCase()} management.`,
          importance: 'high',
          source: { pageNumber: 1, sectionTitle: "Page 1 Content", snippet: firstPageContent.substring(0, 80) + '...' }
        }
      ],
      actionItems: [
        {
          id: `ai-mock-1`,
          task: `Review ${document.title} key milestones with team`,
          assignee: "Document Owner",
          dueDate: "2026-10-01",
          priority: "medium",
          source: { pageNumber: 1, sectionTitle: "Section Overview", snippet: firstPageContent.substring(0, 60) }
        }
      ],
      importantDates: [
        {
          id: `id-mock-1`,
          date: "2026-10-01",
          event: "Document Review Milestone",
          context: "Scheduled evaluation date for document directives.",
          source: { pageNumber: 1, sectionTitle: "Page 1", snippet: "Extracted from uploaded document text" }
        }
      ],
      entities: [
        { id: "ent-m1", name: document.title.split('.')[0], type: "Product", mentionsCount: 5 },
        { id: "ent-m2", name: `${document.category} Dept`, type: "Organization", mentionsCount: 3 }
      ],
      topics: [document.category, "Document Intelligence", "Analysis Summary"],
      risks: [
        {
          id: `rf-mock-1`,
          title: "Compliance Verification Required",
          description: "Ensure all external references in this uploaded document comply with internal organizational policies.",
          severity: "low",
          mitigation: "Cross-reference with central legal repository.",
          source: { pageNumber: 1, sectionTitle: "General Document Context", snippet: firstPageContent.substring(0, 70) }
        }
      ]
    };
  }

  async generateSummary(document: DocumentItem): Promise<DocumentAnalysis['summary']> {
    const fullAnalysis = await this.analyzeDocument(document);
    return fullAnalysis.summary;
  }

  async extractInsights(document: DocumentItem): Promise<{
    keyPoints: DocumentAnalysis['keyPoints'];
    actionItems: DocumentAnalysis['actionItems'];
    importantDates: DocumentAnalysis['importantDates'];
    entities: DocumentAnalysis['entities'];
    topics: DocumentAnalysis['topics'];
    risks: DocumentAnalysis['risks'];
  }> {
    const fullAnalysis = await this.analyzeDocument(document);
    return {
      keyPoints: fullAnalysis.keyPoints,
      actionItems: fullAnalysis.actionItems,
      importantDates: fullAnalysis.importantDates,
      entities: fullAnalysis.entities,
      topics: fullAnalysis.topics,
      risks: fullAnalysis.risks
    };
  }

  async askDocumentQuestion(document: DocumentItem, question: string): Promise<QuestionAnswer> {
    await this.simulateDelay(700);

    const qLower = question.toLowerCase();
    
    // Check if question matches pre-cooked scenarios for sample documents
    if (document.id === 'doc-q4-strategy') {
      if (qLower.includes('objective') || qLower.includes('goal') || qLower.includes('target')) {
        return {
          id: `qa-${Date.now()}`,
          documentId: document.id,
          question,
          answer: "[Demo AI] The main Q4 objective is expanding Enterprise ARR by 35% year-over-year (reaching $18.5M ARR) while acquiring 45 net-new enterprise logos across healthcare and financial services.",
          source: { pageNumber: 1, sectionTitle: "1. Executive Overview", snippet: "expanding Enterprise ARR by 35% year-over-year while introducing automated document intelligence pipelines" },
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isDemo: true
        };
      }
      if (qLower.includes('risk') || qLower.includes('threat') || qLower.includes('challenge')) {
        return {
          id: `qa-${Date.now()}`,
          documentId: document.id,
          question,
          answer: "[Demo AI] Key risks highlighted include failure to secure ISO 27001 certification by October 15, 2026 (which could delay EMEA contract sign-offs) and engineering capacity constraints due to legacy search refactoring.",
          source: { pageNumber: 3, sectionTitle: "5. Risk Assessment & Market Dependencies", snippet: "Failure to secure ISO 27001 certification by October 15, 2026 could result in delayed institutional contract sign-offs." },
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isDemo: true
        };
      }
      if (qLower.includes('date') || qLower.includes('milestone') || qLower.includes('timeline')) {
        return {
          id: `qa-${Date.now()}`,
          documentId: document.id,
          question,
          answer: "[Demo AI] Key dates are: October 1 (Q4 Campaign Kickoff), October 15 (ISO 27001 Audit Submission Deadline), November 15 (v3.0 Platform Release), and December 15 (Planning Summit).",
          source: { pageNumber: 4, sectionTitle: "7. Operational Roadmap", snippet: "October 15, 2026: ISO 27001 Certification audit submission deadline." },
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isDemo: true
        };
      }
    }

    if (document.id === 'doc-annual-finance') {
      if (qLower.includes('revenue') || qLower.includes('income') || qLower.includes('growth')) {
        return {
          id: `qa-${Date.now()}`,
          documentId: document.id,
          question,
          answer: "[Demo AI] Total consolidated revenue reached $54.2 Million (+28.4% YoY), with software subscription revenue generating 84% ($45.5 Million).",
          source: { pageNumber: 1, sectionTitle: "1. Consolidated Revenue Analysis", snippet: "Total consolidated revenue for FY2026 reached $54.2 Million, representing a 28.4% growth year-over-year" },
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isDemo: true
        };
      }
    }

    // Default dynamic answer for general questions or uploaded documents
    const firstSection = document.pages[0]?.sections[0];
    const sourcePage = firstSection ? firstSection.pageNumber : 1;
    const sourceTitle = firstSection ? firstSection.title : "Document Content";
    const snippet = document.pages[0]?.content.substring(0, 100) || document.title;

    return {
      id: `qa-${Date.now()}`,
      documentId: document.id,
      question,
      answer: `[Demo AI] Based on "${document.title}", the document outlines key criteria regarding your query "${question}". Relevant information was identified on Page ${sourcePage}.`,
      source: {
        pageNumber: sourcePage,
        sectionTitle: sourceTitle,
        snippet: snippet + '...'
      },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isDemo: true
    };
  }

  async generateSuggestions(document: DocumentItem): Promise<string[]> {
    if (document.suggestedQuestions && document.suggestedQuestions.length > 0) {
      return document.suggestedQuestions;
    }
    return [
      `What is the executive summary of ${document.title}?`,
      "What key dates or deadlines are mentioned?",
      "What risks or considerations are highlighted?",
      "Summarize the main action items."
    ];
  }
}
