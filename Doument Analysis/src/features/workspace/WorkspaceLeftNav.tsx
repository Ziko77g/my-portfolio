import React from 'react';
import { useApp } from '../../context/AppContext';
import type { DocumentItem } from '../../types';
import { FileText, Hash, Layers } from 'lucide-react';

interface LeftNavProps {
  document: DocumentItem;
  currentPageNum: number;
  setCurrentPageNum: (page: number) => void;
  activeSectionId: string | null;
  setActiveSectionId: (secId: string | null) => void;
}

export const WorkspaceLeftNav: React.FC<LeftNavProps> = ({
  document,
  currentPageNum,
  setCurrentPageNum,
  activeSectionId,
  setActiveSectionId,
}) => {
  const { t } = useApp();

  return (
    <div className="h-full flex flex-col bg-slate-50/50 dark:bg-slate-900/60 border-r border-slate-200 dark:border-slate-800 text-xs overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-brand-500" />
          <span>{t.workspace.toc}</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 bg-slate-200/60 dark:bg-slate-800 px-2 py-0.5 rounded">
          {document.pagesCount} {t.workspace.page}s
        </span>
      </div>

      {/* Pages & Sections List */}
      <div className="p-3 space-y-4">
        {document.pages.map((page) => (
          <div key={`left-page-${page.pageNumber}`} className="space-y-1">
            {/* Page Header Pill */}
            <button
              onClick={() => setCurrentPageNum(page.pageNumber)}
              className={`w-full flex items-center justify-between p-2 rounded-lg font-medium transition-all ${
                currentPageNum === page.pageNumber
                  ? 'bg-brand-600 text-white font-bold shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                <span>{t.workspace.page} {page.pageNumber}</span>
              </div>
              <span className="text-[10px] font-mono opacity-80">{page.sections.length} sec</span>
            </button>

            {/* Sections Sub-items */}
            <div className="pl-4 space-y-1">
              {page.sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    setCurrentPageNum(page.pageNumber);
                    setActiveSectionId(sec.id);
                  }}
                  className={`w-full text-left p-1.5 rounded-md truncate text-[11px] transition-colors flex items-center gap-1.5 ${
                    activeSectionId === sec.id
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <Hash className="w-3 h-3 shrink-0 opacity-60" />
                  <span className="truncate">{sec.title}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
