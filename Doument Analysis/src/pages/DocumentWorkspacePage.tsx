import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WorkspaceLeftNav } from '../features/workspace/WorkspaceLeftNav';
import { WorkspaceCenterPreview } from '../features/workspace/WorkspaceCenterPreview';
import { WorkspaceRightInsights } from '../features/workspace/WorkspaceRightInsights';
import { AskAIPanel } from '../features/workspace/AskAIPanel';
import { FileText, Sparkles, ArrowLeft, UploadCloud } from 'lucide-react';
import { Button } from '../components/common/Button';

export const DocumentWorkspacePage: React.FC = () => {
  const { activeDocument, setCurrentPage, setIsUploadModalOpen, t } = useApp();

  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // Mobile active tab: 'document' | 'insights' | 'askAi'
  const [mobileTab, setMobileTab] = useState<'document' | 'insights' | 'askAi'>('document');
  // Right panel desktop mode toggle: 'insights' | 'askAi'
  const [desktopRightView, setDesktopRightView] = useState<'insights' | 'askAi'>('insights');

  if (!activeDocument) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
        <FileText className="w-12 h-12 text-slate-400 opacity-60" />
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200">No active document selected</h2>
        <p className="text-xs text-slate-500 max-w-sm">
          Please upload or select a document from your repository to open the Document Intelligence Workspace.
        </p>
        <Button variant="primary" onClick={() => setIsUploadModalOpen(true)} icon={<UploadCloud className="w-4 h-4" />}>
          Upload Document
        </Button>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden bg-slate-950">
      {/* Workspace Sub-header */}
      <div className="h-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage('documents')}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t.nav.backToDashboard}</span>
          </button>

          <span className="text-slate-300 dark:text-slate-700">|</span>

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="font-bold text-xs text-slate-900 dark:text-slate-100 truncate max-w-xs sm:max-w-md">
              {activeDocument.title}
            </span>
          </div>
        </div>

        {/* Desktop Toggle for Right Panel (Insights vs Ask AI) */}
        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
          <button
            onClick={() => setDesktopRightView('insights')}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              desktopRightView === 'insights'
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-2xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            AI Insights
          </button>
          <button
            onClick={() => setDesktopRightView('askAi')}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              desktopRightView === 'askAi'
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-2xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Ask AI
          </button>
        </div>

        {/* Mobile View Tab Switcher */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            onClick={() => setMobileTab('document')}
            className={`p-2 rounded-lg text-xs font-semibold ${
              mobileTab === 'document' ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'text-slate-500'
            }`}
          >
            Document
          </button>
          <button
            onClick={() => setMobileTab('insights')}
            className={`p-2 rounded-lg text-xs font-semibold ${
              mobileTab === 'insights' ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'text-slate-500'
            }`}
          >
            Insights
          </button>
          <button
            onClick={() => setMobileTab('askAi')}
            className={`p-2 rounded-lg text-xs font-semibold ${
              mobileTab === 'askAi' ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'text-slate-500'
            }`}
          >
            Ask AI
          </button>
        </div>
      </div>

      {/* Desktop Layout: 3 Columns */}
      <div className="flex-1 hidden lg:flex overflow-hidden">
        {/* Left Column: TOC / Navigation (w-64) */}
        <div className="w-64 shrink-0 h-full">
          <WorkspaceLeftNav
            document={activeDocument}
            currentPageNum={currentPageNum}
            setCurrentPageNum={setCurrentPageNum}
            activeSectionId={activeSectionId}
            setActiveSectionId={setActiveSectionId}
          />
        </div>

        {/* Center Column: Document Reader Preview (flex-1) */}
        <div className="flex-1 h-full min-w-0">
          <WorkspaceCenterPreview
            document={activeDocument}
            currentPageNum={currentPageNum}
            setCurrentPageNum={setCurrentPageNum}
            activeSectionId={activeSectionId}
          />
        </div>

        {/* Right Column: AI Insights or Ask AI Panel (w-96) */}
        <div className="w-96 shrink-0 h-full">
          {desktopRightView === 'insights' ? (
            <WorkspaceRightInsights document={activeDocument} />
          ) : (
            <AskAIPanel document={activeDocument} />
          )}
        </div>
      </div>

      {/* Mobile/Tablet Adaptive Single Layout */}
      <div className="flex-1 lg:hidden overflow-hidden">
        {mobileTab === 'document' && (
          <WorkspaceCenterPreview
            document={activeDocument}
            currentPageNum={currentPageNum}
            setCurrentPageNum={setCurrentPageNum}
            activeSectionId={activeSectionId}
          />
        )}
        {mobileTab === 'insights' && (
          <WorkspaceRightInsights document={activeDocument} />
        )}
        {mobileTab === 'askAi' && (
          <AskAIPanel document={activeDocument} />
        )}
      </div>
    </div>
  );
};
