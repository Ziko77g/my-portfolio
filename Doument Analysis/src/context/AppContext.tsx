import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  DocumentItem, 
  HistoryItem, 
  ThemeMode, 
  LanguageCode, 
  KPIStats, 
  UserProfile, 
  WorkspaceSettings,
  QuestionAnswer 
} from '../types';
import { initialKPIStats } from '../data/sampleDocuments';
import { StorageService } from '../services';
import { getTranslation } from '../translations';
import type { TranslationKeys } from '../translations';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
}

interface AppContextType {
  // Navigation & Page State
  currentPage: 'landing' | 'overview' | 'documents' | 'workspace' | 'analytics' | 'history' | 'settings';
  setCurrentPage: (page: 'landing' | 'overview' | 'documents' | 'workspace' | 'analytics' | 'history' | 'settings') => void;
  
  // Documents & Active Selection
  documents: DocumentItem[];
  activeDocumentId: string | null;
  activeDocument: DocumentItem | null;
  setActiveDocumentId: (id: string | null) => void;
  addDocument: (doc: DocumentItem) => void;
  updateDocument: (id: string, updates: Partial<DocumentItem>) => void;
  deleteDocument: (id: string) => void;

  // History Audit Log
  history: HistoryItem[];
  addHistoryItem: (item: Omit<HistoryItem, 'id' | 'timestamp'>) => void;

  // Key Target Source Citation Navigation
  activeTargetCitation: { pageNumber: number; snippet?: string } | null;
  jumpToCitation: (pageNumber: number, snippet?: string) => void;

  // Modals & Panels
  isUploadModalOpen: boolean;
  setIsUploadModalOpen: (open: boolean) => void;
  isCmdKOpen: boolean;
  setIsCmdKOpen: (open: boolean) => void;

  // Stats
  kpiStats: KPIStats;

  // User & Workspace
  user: UserProfile;
  setUser: (user: UserProfile) => void;
  workspace: WorkspaceSettings;
  setWorkspace: (ws: WorkspaceSettings) => void;

  // Theme & Language
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationKeys;
  dir: 'ltr' | 'rtl';

  // Toasts
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;

  // Q&A History per document
  qaHistory: Record<string, QuestionAnswer[]>;
  addQAResponse: (docId: string, qa: QuestionAnswer) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'overview' | 'documents' | 'workspace' | 'analytics' | 'history' | 'settings'>('landing');
  
  const [documents, setDocuments] = useState<DocumentItem[]>(() => StorageService.getDocuments());
  const [activeDocumentId, setActiveDocumentId] = useState<string | null>("doc-q4-strategy");
  const [history, setHistory] = useState<HistoryItem[]>(() => StorageService.getHistory());
  
  const [activeTargetCitation, setActiveTargetCitation] = useState<{ pageNumber: number; snippet?: string } | null>(null);
  
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [isCmdKOpen, setIsCmdKOpen] = useState<boolean>(false);
  
  const [kpiStats] = useState<KPIStats>(initialKPIStats);
  const [user, setUserState] = useState<UserProfile>(() => StorageService.getUser());
  const [workspace, setWorkspaceState] = useState<WorkspaceSettings>(() => StorageService.getWorkspace());
  
  const [theme, setThemeState] = useState<ThemeMode>(() => StorageService.getTheme());
  const [language, setLanguageState] = useState<LanguageCode>(() => StorageService.getLanguage());

  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [qaHistory, setQaHistory] = useState<Record<string, QuestionAnswer[]>>({});

  // Sync active document object
  const activeDocument = documents.find((d) => d.id === activeDocumentId) || documents[0] || null;

  // Persist Documents & History
  useEffect(() => {
    StorageService.saveDocuments(documents);
  }, [documents]);

  useEffect(() => {
    StorageService.saveHistory(history);
  }, [history]);

  // Handle Theme
  useEffect(() => {
    StorageService.setTheme(theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) root.classList.add('dark');
      else root.classList.remove('dark');
    }
  }, [theme]);

  // Handle Language & RTL
  useEffect(() => {
    StorageService.setLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = getTranslation(language);

  // Helper actions
  const addDocument = (newDoc: DocumentItem) => {
    setDocuments((prev) => [newDoc, ...prev]);
    setActiveDocumentId(newDoc.id);
    addHistoryItem({
      documentId: newDoc.id,
      documentTitle: newDoc.fileName,
      action: 'Document uploaded',
      analysisType: 'Upload Ingestion',
      status: 'Completed',
      details: `Uploaded ${newDoc.fileSize} file with ${newDoc.pagesCount} pages.`
    });
  };

  const updateDocument = (id: string, updates: Partial<DocumentItem>) => {
    setDocuments((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...updates } : d))
    );
  };

  const deleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
    if (activeDocumentId === id) {
      const remaining = documents.filter((d) => d.id !== id);
      setActiveDocumentId(remaining.length > 0 ? remaining[0].id : null);
    }
  };

  const addHistoryItem = (item: Omit<HistoryItem, 'id' | 'timestamp'>) => {
    const newItem: HistoryItem = {
      ...item,
      id: `hist-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    setHistory((prev) => [newItem, ...prev]);
  };

  const jumpToCitation = (pageNumber: number, snippet?: string) => {
    setActiveTargetCitation({ pageNumber, snippet });
    // Switch page to workspace if not already there
    if (currentPage !== 'workspace') {
      setCurrentPage('workspace');
    }
  };

  const setUser = (u: UserProfile) => {
    setUserState(u);
    StorageService.saveUser(u);
  };

  const setWorkspace = (ws: WorkspaceSettings) => {
    setWorkspaceState(ws);
    StorageService.saveWorkspace(ws);
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addQAResponse = (docId: string, qa: QuestionAnswer) => {
    setQaHistory((prev) => ({
      ...prev,
      [docId]: [...(prev[docId] || []), qa]
    }));
    addHistoryItem({
      documentId: docId,
      documentTitle: activeDocument?.title || "Document",
      action: 'Question answered',
      analysisType: 'Q&A Query',
      status: 'Completed',
      details: `Answered: "${qa.question.substring(0, 40)}..."`
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        documents,
        activeDocumentId,
        activeDocument,
        setActiveDocumentId,
        addDocument,
        updateDocument,
        deleteDocument,
        history,
        addHistoryItem,
        activeTargetCitation,
        jumpToCitation,
        isUploadModalOpen,
        setIsUploadModalOpen,
        isCmdKOpen,
        setIsCmdKOpen,
        kpiStats,
        user,
        setUser,
        workspace,
        setWorkspace,
        theme,
        setTheme,
        language,
        setLanguage,
        t,
        dir,
        toasts,
        addToast,
        removeToast,
        qaHistory,
        addQAResponse
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
