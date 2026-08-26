import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import type { DocumentItem } from '../../types';
import { CategoryBadge } from '../../components/common/Badge';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  X, 
  FileText,
  Bookmark
} from 'lucide-react';

interface CenterPreviewProps {
  document: DocumentItem;
  currentPageNum: number;
  setCurrentPageNum: (page: number) => void;
  activeSectionId: string | null;
}

export const WorkspaceCenterPreview: React.FC<CenterPreviewProps> = ({
  document,
  currentPageNum,
  setCurrentPageNum,
  activeSectionId
}) => {
  const { t, activeTargetCitation } = useApp();

  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState<number>(0);

  // Jump to page if activeTargetCitation triggers
  useEffect(() => {
    if (activeTargetCitation && activeTargetCitation.pageNumber) {
      setCurrentPageNum(activeTargetCitation.pageNumber);
    }
  }, [activeTargetCitation, setCurrentPageNum]);

  const activePage = document.pages.find((p) => p.pageNumber === currentPageNum) || document.pages[0];

  // In-document Search logic
  const content = activePage?.content || '';
  const searchMatches = searchQuery.trim()
    ? (content.match(new RegExp(searchQuery.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi')) || [])
    : [];

  const handleNextMatch = () => {
    if (searchMatches.length === 0) return;
    setCurrentMatchIndex((prev) => (prev + 1) % searchMatches.length);
  };

  const handlePrevMatch = () => {
    if (searchMatches.length === 0) return;
    setCurrentMatchIndex((prev) => (prev - 1 + searchMatches.length) % searchMatches.length);
  };

  // Render text with highlight support
  const renderHighlightedContent = (text: string) => {
    if (!searchQuery.trim()) {
      return <span>{text}</span>;
    }

    const regex = new RegExp(`(${searchQuery.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    let matchCounter = 0;

    return (
      <>
        {parts.map((part, i) => {
          if (part.toLowerCase() === searchQuery.toLowerCase()) {
            const isCurrent = matchCounter === currentMatchIndex;
            matchCounter++;
            return (
              <mark
                key={i}
                className={isCurrent ? 'doc-search-highlight-active' : 'doc-search-highlight'}
              >
                {part}
              </mark>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <div className="h-full flex flex-col bg-slate-100 dark:bg-slate-950 overflow-hidden relative">
      {/* Top Toolbar */}
      <div className="p-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-xs z-10">
        {/* Left: Metadata & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
            <FileText className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">{document.title}</h2>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <CategoryBadge category={document.category} size="sm" />
              <span>•</span>
              <span className="font-mono">{document.fileType}</span>
              <span>•</span>
              <span>{document.fileSize}</span>
            </div>
          </div>
        </div>

        {/* Center: In-document Search Input */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentMatchIndex(0);
              }}
              placeholder={t.workspace.searchInDoc}
              className="pl-8 pr-16 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none w-48 focus:w-64 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {searchQuery && (
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
              <span>
                {searchMatches.length > 0 ? `${currentMatchIndex + 1}/${searchMatches.length}` : t.workspace.noMatches}
              </span>
              {searchMatches.length > 0 && (
                <>
                  <button
                    onClick={handlePrevMatch}
                    className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded"
                    title={t.workspace.prevMatch}
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={handleNextMatch}
                    className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded"
                    title={t.workspace.nextMatch}
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right: Zoom & Page Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setZoomLevel((z) => Math.max(70, z - 10))}
              className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900"
              title={t.workspace.zoomOut}
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[11px] min-w-[40px] text-center">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
              className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900"
              title={t.workspace.zoomIn}
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="p-1 text-slate-400 hover:text-slate-600 border-l border-slate-200 dark:border-slate-700 ml-1"
              title={t.workspace.resetZoom}
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-1.5 text-xs">
            <button
              disabled={currentPageNum <= 1}
              onClick={() => setCurrentPageNum(currentPageNum - 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-slate-700 dark:text-slate-300">
              {currentPageNum} / {document.pagesCount}
            </span>
            <button
              disabled={currentPageNum >= document.pagesCount}
              onClick={() => setCurrentPageNum(currentPageNum + 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Document Reader Canvas */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center">
        <div 
          className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-8 sm:p-12 max-w-3xl w-full min-h-[700px] transition-transform duration-200 origin-top"
          style={{ transform: `scale(${zoomLevel / 100})` }}
        >
          {/* Target Citation Highlight Banner */}
          {activeTargetCitation && activeTargetCitation.pageNumber === currentPageNum && (
            <div className="mb-6 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs flex items-center gap-2 animate-pulse">
              <Bookmark className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>Cited Source Location: Page {currentPageNum}</span>
            </div>
          )}

          {/* Sections Rendered */}
          {activePage?.sections.map((sec) => {
            const isSecActive = activeSectionId === sec.id;
            return (
              <div
                key={sec.id}
                id={sec.id}
                className={`mb-8 p-4 rounded-xl transition-all duration-300 ${
                  isSecActive ? 'ring-2 ring-brand-500 bg-brand-500/5' : ''
                }`}
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 border-b border-slate-100 dark:border-slate-800/80 pb-1.5 flex items-center justify-between">
                  <span>{sec.title}</span>
                  <span className="text-[10px] font-mono text-slate-400 font-normal">Page {currentPageNum}</span>
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line font-sans">
                  {renderHighlightedContent(sec.content)}
                </p>
              </div>
            );
          })}

          {/* Full Page Content Fallback */}
          {(!activePage?.sections || activePage.sections.length === 0) && (
            <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
              {renderHighlightedContent(activePage?.content || '')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
