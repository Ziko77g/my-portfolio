import type { AIService } from './AIService';
import { MockAIService } from './MockAIService';

// Default export uses MockAIService for the portfolio demo.
// To switch to a real AI backend, replace with `new RealAIService('https://api.documind.io/v1')`.
export const aiService: AIService = new MockAIService();

export * from './AIService';
export * from './MockAIService';
export * from './RealAIService';
export * from './StorageService';
