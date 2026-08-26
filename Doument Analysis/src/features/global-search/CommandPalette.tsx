import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, FileText, Sparkles, History, CornerDownLeft, X } from 'lucide-react';
import { useKeyboardShortcut } from '../../hooks/useKeyboardShortcut';

export const CommandPalette: React.FC = () => {
  const { 
    isCmdKOpen, 
    setIsCmdKOpen, 
    documents, 
    history, 
    setActiveDocumentId, 
    setCurrentPage, 
    jumpToCitation,
    t 
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle Cmd+K listener
  useKeyboardShortcut('k', () => setIsCmdKOpen(!isCmdKOpen), { ctrlOrCmd: true });

  useEffect(() => {
    if (isCmdKOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isCmdKOpen]);

  if (!isCmdKOpen) return null;

  // Filter documents
  const matchingDocs = documents.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.category.toLowerCase().includes(query.toLowerCase())
  );

  // Filter insights keypoints
  const matchingInsights = documents.flatMap((d) => {
    if (!d.analysis) return [];
    return d.analysis.keyPoints
      .filter((kp) => kp.title.toLowerCase().includes(query.toLowerCase()) || kp.description.toLowerCase().includes(query.toLowerCase()))
      .map((kp) => ({ ...kp, docTitle: d.title, docId: d.id }));
  });

  // Filter history Q&As
  const matchingHistory = history.filter(
    (h) => h.documentTitle.toLowerCase().includes(query.toLowerCase()) || h.details?.toLowerCase().includes(query.toLowerCase())
  );

  // Group all results into flat list for keyboard navigation
  const results = [
    ...matchingDocs.map((d) => ({ type: 'document' as const, id: d.id, title: d.title, subtitle: `${d.category} • ${d.pagesCount} pages`, item: d })),
    ...matchingInsights.map((ins) => ({ type: 'insight' as const, id: ins.id, title: ins.title, subtitle: `Insight in ${ins.docTitle}`, item: ins })),
    ...matchingHistory.map((h) => ({ type: 'history' as const, id: h.id, title: h.action, subtitle: `${h.documentTitle} • ${h.timestamp}`, item: h }))
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        executeResult(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsCmdKOpen(false);
    }
  };

  const executeResult = (result: typeof results[0]) => {
    if (result.type === 'document') {
      setActiveDocumentId(result.id);
      setCurrentPage('workspace');
    } else if (result.type === 'insight') {
      const ins = result.item as any;
      setActiveDocumentId(ins.docId);
      if (ins.source) {
        jumpToCitation(ins.source.pageNumber, ins.source.snippet);
      } else {
        setCurrentPage('workspace');
      }
    } else if (result.type === 'history') {
      setCurrentPage('history');
    }
    setIsCmdKOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCmdKOpen(false)}
      />

      {/* Command Palette Card */}
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={t.globalSearch.placeholder}
            className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 text-base outline-none"
          />
          <button
            onClick={() => setIsCmdKOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
              {t.globalSearch.noResults}
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((res, idx) => {
                const isSelected = idx === selectedIndex;
                const Icon = res.type === 'document' ? FileText : res.type === 'insight' ? Sparkles : History;

                return (
                  <div
                    key={`${res.type}-${res.id}-${idx}`}
                    onClick={() => executeResult(res)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-150 ${
                      isSelected 
                        ? 'bg-brand-500/10 text-brand-600 dark:text-brand-300 font-medium' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-500/20 text-brand-600 dark:text-brand-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate">{res.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{res.subtitle}</p>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="flex items-center gap-1 text-xs text-brand-600 dark:text-brand-400">
                        <span>Select</span>
                        <CornerDownLeft className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>{t.globalSearch.shortcutHint}</span>
          <span className="hidden sm:inline">DocuMind Global Search</span>
        </div>
      </div>
    </div>
  );
};
