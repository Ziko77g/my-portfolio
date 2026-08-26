import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import type { DocumentItem } from '../../types';
import { aiService } from '../../services';
import { DemoBadge } from '../../components/common/DemoBadge';
import { Button } from '../../components/common/Button';
import { 
  Sparkles, 
  Send, 
  Bookmark, 
  Copy, 
  Check, 
  MessageSquare, 
  Loader2,
  HelpCircle
} from 'lucide-react';

interface AskAIPanelProps {
  document: DocumentItem;
}

export const AskAIPanel: React.FC<AskAIPanelProps> = ({ document }) => {
  const { t, qaHistory, addQAResponse, jumpToCitation, addToast } = useApp();
  const [questionInput, setQuestionInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const docQA = qaHistory[document.id] || [];

  useEffect(() => {
    aiService.generateSuggestions(document).then(setSuggestedQuestions);
  }, [document]);

  const handleAsk = async (q: string) => {
    if (!q.trim() || isLoading) return;

    setQuestionInput('');
    setIsLoading(true);

    try {
      const response = await aiService.askDocumentQuestion(document, q);
      addQAResponse(document.id, response);
    } catch (e) {
      addToast({ type: 'error', title: 'Q&A Error', message: 'Failed to process demo question.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyAnswer = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    addToast({ type: 'success', title: t.insights.export.copied });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 text-xs overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>{t.askAi.title}</span>
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5 truncate">{document.title}</p>
        </div>
        <DemoBadge label="Demo AI" variant="inline" />
      </div>

      {/* Suggested Questions Chips */}
      <div className="p-3 bg-slate-50/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 space-y-2">
        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-brand-500" />
          <span>{t.askAi.suggestedTitle}</span>
        </span>
        <div className="flex flex-wrap gap-1.5">
          {suggestedQuestions.map((sq, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(sq)}
              disabled={isLoading}
              className="text-left text-[11px] px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors shadow-2xs"
            >
              {sq}
            </button>
          ))}
        </div>
      </div>

      {/* Conversation Thread */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {docQA.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-2">
            <MessageSquare className="w-8 h-8 opacity-40" />
            <p className="font-semibold text-xs text-slate-600 dark:text-slate-300">{t.askAi.empty}</p>
            <p className="text-[11px] max-w-xs">{t.askAi.emptySub}</p>
          </div>
        ) : (
          docQA.map((qa) => (
            <div key={qa.id} className="space-y-3 animate-fade-in">
              {/* User Question */}
              <div className="flex justify-end">
                <div className="max-w-[85%] p-3 rounded-2xl bg-brand-600 text-white font-medium text-xs shadow-xs">
                  {qa.question}
                </div>
              </div>

              {/* AI Answer Card */}
              <div className="flex justify-start">
                <div className="max-w-[92%] p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-600 dark:text-brand-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>DocuMind Intelligence</span>
                    </div>
                    <DemoBadge label="Demo Response" variant="inline" />
                  </div>

                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-sans text-xs whitespace-pre-line">
                    {qa.answer}
                  </p>

                  {/* Verifiable Source Citation Badge */}
                  {qa.source && (
                    <div className="pt-1 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                      <button
                        onClick={() => jumpToCitation(qa.source!.pageNumber, qa.source!.snippet)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-[11px] font-semibold hover:bg-indigo-500/20 transition-colors"
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{t.askAi.citationLabel}: Page {qa.source.pageNumber} — {qa.source.sectionTitle}</span>
                      </button>

                      <button
                        onClick={() => handleCopyAnswer(qa.id, qa.answer)}
                        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        title="Copy Answer"
                      >
                        {copiedId === qa.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-500 text-xs">
            <Loader2 className="w-4 h-4 animate-spin text-brand-500" />
            <span>Analyzing document context for response...</span>
          </div>
        )}
      </div>

      {/* Question Input Form */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk(questionInput);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
            placeholder={t.askAi.placeholder}
            disabled={isLoading}
            className="flex-1 px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-500/30"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={!questionInput.trim() || isLoading}
            icon={isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
          >
            {t.askAi.send}
          </Button>
        </form>
      </div>
    </div>
  );
};
