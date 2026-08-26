import type { DocumentItem, DocumentAnalysis, QuestionAnswer } from '../types';

export interface AIService {
  /**
   * Analyzes an uploaded document to extract summaries, key points, action items, dates, entities, and risks.
   */
  analyzeDocument(document: DocumentItem): Promise<DocumentAnalysis>;

  /**
   * Generates a structured executive summary for the document.
   */
  generateSummary(document: DocumentItem): Promise<DocumentAnalysis['summary']>;

  /**
   * Extracts structured insights (key points, action items, dates, entities, topics, risks).
   */
  extractInsights(document: DocumentItem): Promise<{
    keyPoints: DocumentAnalysis['keyPoints'];
    actionItems: DocumentAnalysis['actionItems'];
    importantDates: DocumentAnalysis['importantDates'];
    entities: DocumentAnalysis['entities'];
    topics: DocumentAnalysis['topics'];
    risks: DocumentAnalysis['risks'];
  }>;

  /**
   * Answers a question strictly scoped to the provided document context with source references.
   */
  askDocumentQuestion(document: DocumentItem, question: string): Promise<QuestionAnswer>;

  /**
   * Generates contextual suggested questions based on the document text.
   */
  generateSuggestions(document: DocumentItem): Promise<string[]>;
}
