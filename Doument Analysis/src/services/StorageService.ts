import type { DocumentItem, HistoryItem, ThemeMode, LanguageCode, UserProfile, WorkspaceSettings } from '../types';
import { sampleDocuments, sampleHistory } from '../data/sampleDocuments';

const KEYS = {
  DOCUMENTS: 'documind_documents_v1',
  HISTORY: 'documind_history_v1',
  THEME: 'documind_theme_v1',
  LANGUAGE: 'documind_lang_v1',
  USER: 'documind_user_v1',
  WORKSPACE: 'documind_workspace_v1'
};

export const defaultUser: UserProfile = {
  name: "Alex Mercer",
  email: "alex.mercer@documind-demo.io",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  role: "Senior AI Product Lead"
};

export const defaultWorkspace: WorkspaceSettings = {
  name: "DocuMind Enterprise Workspace",
  defaultCategory: "Business",
  analysisDetailLevel: "comprehensive",
  enableSuggestedQuestions: true,
  demoModeIndicatorVisible: true
};

export class StorageService {
  static getDocuments(): DocumentItem[] {
    try {
      const data = localStorage.getItem(KEYS.DOCUMENTS);
      return data ? JSON.parse(data) : sampleDocuments;
    } catch (e) {
      console.warn('Failed to read documents from localStorage:', e);
      return sampleDocuments;
    }
  }

  static saveDocuments(docs: DocumentItem[]): void {
    try {
      localStorage.setItem(KEYS.DOCUMENTS, JSON.stringify(docs));
    } catch (e) {
      console.warn('Failed to save documents to localStorage:', e);
    }
  }

  static getHistory(): HistoryItem[] {
    try {
      const data = localStorage.getItem(KEYS.HISTORY);
      return data ? JSON.parse(data) : sampleHistory;
    } catch (e) {
      return sampleHistory;
    }
  }

  static saveHistory(history: HistoryItem[]): void {
    try {
      localStorage.setItem(KEYS.HISTORY, JSON.stringify(history));
    } catch (e) {
      console.warn('Failed to save history to localStorage:', e);
    }
  }

  static getTheme(): ThemeMode {
    try {
      const theme = localStorage.getItem(KEYS.THEME) as ThemeMode;
      return theme || 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  static setTheme(theme: ThemeMode): void {
    try {
      localStorage.setItem(KEYS.THEME, theme);
    } catch (e) {}
  }

  static getLanguage(): LanguageCode {
    try {
      const lang = localStorage.getItem(KEYS.LANGUAGE) as LanguageCode;
      return lang || 'en';
    } catch (e) {
      return 'en';
    }
  }

  static setLanguage(lang: LanguageCode): void {
    try {
      localStorage.setItem(KEYS.LANGUAGE, lang);
    } catch (e) {}
  }

  static getUser(): UserProfile {
    try {
      const user = localStorage.getItem(KEYS.USER);
      return user ? JSON.parse(user) : defaultUser;
    } catch (e) {
      return defaultUser;
    }
  }

  static saveUser(user: UserProfile): void {
    try {
      localStorage.setItem(KEYS.USER, JSON.stringify(user));
    } catch (e) {}
  }

  static getWorkspace(): WorkspaceSettings {
    try {
      const ws = localStorage.getItem(KEYS.WORKSPACE);
      return ws ? JSON.parse(ws) : defaultWorkspace;
    } catch (e) {
      return defaultWorkspace;
    }
  }

  static saveWorkspace(ws: WorkspaceSettings): void {
    try {
      localStorage.setItem(KEYS.WORKSPACE, JSON.stringify(ws));
    } catch (e) {}
  }
}
