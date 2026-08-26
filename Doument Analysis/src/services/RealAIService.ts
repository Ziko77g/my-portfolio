import type { AIService } from './AIService';
import type { DocumentItem, DocumentAnalysis, QuestionAnswer } from '../types';

/**
 * RealAIService Template
 * 
 * This class serves as the production integration blueprint for connecting
 * DocuMind AI to a real backend REST / gRPC service or LLM provider (e.g., OpenAI, Anthropic, Custom LLM endpoint).
 * 
 * To connect to a live API:
 * 1. Instantiate `RealAIService` in `src/services/index.ts` with your API endpoint & bearer token.
 * 2. Update the fetch calls inside each method below.
 */
export class RealAIService implements AIService {
  private apiEndpoint: string;
  private apiKey?: string;

  constructor(apiEndpoint: string = '/api/v1', apiKey?: string) {
    this.apiEndpoint = apiEndpoint;
    this.apiKey = apiKey;
  }

  /**
   * Endpoint: POST /api/v1/documents/:id/analyze
   */
  async analyzeDocument(document: DocumentItem): Promise<DocumentAnalysis> {
    const response = await fetch(`${this.apiEndpoint}/documents/${document.id}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {})
      },
      body: JSON.stringify({ documentId: document.id })
    });

    if (!response.ok) {
      throw new Error(`RealAIService analysis failed: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Endpoint: GET /api/v1/documents/:id/summary
   */
  async generateSummary(document: DocumentItem): Promise<DocumentAnalysis['summary']> {
    const response = await fetch(`${this.apiEndpoint}/documents/${document.id}/summary`, {
      headers: {
        ...(this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {})
      }
    });

    if (!response.ok) {
      throw new Error(`RealAIService summary failed: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Endpoint: GET /api/v1/documents/:id/insights
   */
  async extractInsights(document: DocumentItem): Promise<{
    keyPoints: DocumentAnalysis['keyPoints'];
    actionItems: DocumentAnalysis['actionItems'];
    importantDates: DocumentAnalysis['importantDates'];
    entities: DocumentAnalysis['entities'];
    topics: DocumentAnalysis['topics'];
    risks: DocumentAnalysis['risks'];
  }> {
    const response = await fetch(`${this.apiEndpoint}/documents/${document.id}/insights`, {
      headers: {
        ...(this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {})
      }
    });

    if (!response.ok) {
      throw new Error(`RealAIService insights failed: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Endpoint: POST /api/v1/documents/:id/query
   */
  async askDocumentQuestion(document: DocumentItem, question: string): Promise<QuestionAnswer> {
    const response = await fetch(`${this.apiEndpoint}/documents/${document.id}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {})
      },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error(`RealAIService Q&A failed: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Endpoint: GET /api/v1/documents/:id/suggestions
   */
  async generateSuggestions(document: DocumentItem): Promise<string[]> {
    const response = await fetch(`${this.apiEndpoint}/documents/${document.id}/suggestions`, {
      headers: {
        ...(this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {})
      }
    });

    if (!response.ok) {
      throw new Error(`RealAIService suggestions failed: ${response.statusText}`);
    }

    return await response.json();
  }
}
