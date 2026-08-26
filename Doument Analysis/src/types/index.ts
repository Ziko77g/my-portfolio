export type DocumentCategory = 
  | 'Business'
  | 'Finance'
  | 'Legal'
  | 'HR'
  | 'Marketing'
  | 'Product'
  | 'Other';

export type ProcessingStatus = 
  | 'Ready'
  | 'Processing'
  | 'Analyzing'
  | 'Failed';

export type FileType = 'PDF' | 'DOCX' | 'TXT';

export interface DocumentSection {
  id: string;
  title: string;
  pageNumber: number;
  content: string;
}

export interface DocumentPage {
  pageNumber: number;
  content: string;
  sections: DocumentSection[];
}

export interface SourceReference {
  pageNumber: number;
  sectionTitle: string;
  snippet: string;
}

export interface KeyPoint {
  id: string;
  title: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
  source?: SourceReference;
}

export interface ActionItem {
  id: string;
  task: string;
  assignee?: string;
  dueDate?: string;
  priority: 'high' | 'medium' | 'low';
  source?: SourceReference;
}

export interface ImportantDate {
  id: string;
  date: string;
  event: string;
  context: string;
  source?: SourceReference;
}

export interface EntityMention {
  id: string;
  name: string;
  type: 'Person' | 'Organization' | 'Product' | 'Location' | 'Regulation';
  mentionsCount: number;
}

export interface RiskFactor {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'moderate' | 'low';
  mitigation?: string;
  source?: SourceReference;
}

export interface DocumentAnalysis {
  documentId: string;
  summary: {
    executive: string;
    keyTakeaways: string[];
    mainTopics: string[];
    recommendedFollowUps: string[];
  };
  keyPoints: KeyPoint[];
  actionItems: ActionItem[];
  importantDates: ImportantDate[];
  entities: EntityMention[];
  topics: string[];
  risks: RiskFactor[];
  analyzedAt: string;
  isDemoAnalysis: boolean;
}

export interface QuestionAnswer {
  id: string;
  documentId: string;
  question: string;
  answer: string;
  source?: SourceReference;
  timestamp: string;
  isDemo: boolean;
}

export interface DocumentItem {
  id: string;
  title: string;
  fileName: string;
  fileSize: string; // e.g. "2.4 MB"
  fileType: FileType;
  pagesCount: number;
  category: DocumentCategory;
  uploadedAt: string;
  lastAnalyzedAt: string;
  status: ProcessingStatus;
  pages: DocumentPage[];
  analysis?: DocumentAnalysis;
  suggestedQuestions: string[];
}

export interface HistoryItem {
  id: string;
  documentId: string;
  documentTitle: string;
  action: 'Summary generated' | 'Insights extracted' | 'Question answered' | 'Document analyzed' | 'Document uploaded';
  timestamp: string;
  analysisType: 'Full Deep Analysis' | 'Quick Executive Summary' | 'Q&A Query' | 'Upload Ingestion';
  status: 'Completed' | 'In Progress' | 'Failed';
  details?: string;
}

export interface KPIStats {
  documentsCount: number;
  pagesProcessed: number;
  insightsGenerated: number;
  questionsAnswered: number;
  documentsTrend: string; // "+12% this month"
  pagesTrend: string;
  insightsTrend: string;
  questionsTrend: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
}

export interface WorkspaceSettings {
  name: string;
  defaultCategory: DocumentCategory;
  analysisDetailLevel: 'concise' | 'balanced' | 'comprehensive';
  enableSuggestedQuestions: boolean;
  demoModeIndicatorVisible: boolean;
}

export interface SecuritySession {
  id: string;
  device: string;
  location: string;
  ipAddress: string;
  lastActive: string;
  isCurrent: boolean;
}

export type ThemeMode = 'light' | 'dark' | 'system';
export type LanguageCode = 'en' | 'ar';
