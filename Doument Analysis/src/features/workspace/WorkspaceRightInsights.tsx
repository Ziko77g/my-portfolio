import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { DocumentItem } from '../../types';
import { DemoBadge } from '../../components/common/DemoBadge';
import { 
  Sparkles, 
  FileText, 
  ListChecks, 
  Calendar, 
  Users, 
  AlertTriangle, 
  Copy, 
  Check, 
  Download, 
  Printer,
  ChevronRight,
  Bookmark
} from 'lucide-react';
import { Button } from '../../components/common/Button';

interface RightInsightsProps {
  document: DocumentItem;
}

export const WorkspaceRightInsights: React.FC<RightInsightsProps> = ({ document: docItem }) => {
  const { t, jumpToCitation, addToast } = useApp();
  const [activeTab, setActiveTab] = useState<'summary' | 'keyPoints' | 'actions' | 'dates' | 'entities' | 'risks'>('summary');
  const [copied, setCopied] = useState<boolean>(false);

  const analysis = docItem.analysis;

  const handleCopySummary = () => {
    if (!analysis) return;
    const text = `Executive Summary for ${docItem.title}:\n\n${analysis.summary.executive}\n\nKey Takeaways:\n${analysis.summary.keyTakeaways.map(t => `- ${t}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    addToast({ type: 'success', title: t.insights.export.copied });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportJSON = () => {
    if (!analysis) return;
    const blob = new Blob([JSON.stringify(analysis, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = `${docItem.title}_analysis.json`;
    a.click();
    addToast({ type: 'success', title: 'Exported JSON Report' });
  };

  const handleExportTXT = () => {
    if (!analysis) return;
    const content = `DOCUMIND AI INSIGHTS REPORT
Document: ${docItem.title}
Analyzed At: ${analysis.analyzedAt}

EXECUTIVE SUMMARY:
${analysis.summary.executive}

KEY POINTS:
${analysis.keyPoints.map(kp => `- ${kp.title}: ${kp.description}`).join('\n')}

ACTION ITEMS:
${analysis.actionItems.map(ai => `- [${ai.priority}] ${ai.task} (Assignee: ${ai.assignee || 'Unassigned'})`).join('\n')}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = `${docItem.title}_insights.txt`;
    a.click();
    addToast({ type: 'success', title: 'Exported TXT Report' });
  };

  const handlePrint = () => {
    window.print();
  };

  if (!analysis) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center text-slate-500">
        <Sparkles className="w-8 h-8 text-slate-400 mb-2 animate-pulse" />
        <p className="font-semibold text-sm">No insights available</p>
        <p className="text-xs text-slate-400 mt-1">Analyze this document to generate structured insights.</p>
      </div>
    );
  }

  const tabs = [
    { id: 'summary', label: t.insights.summary, icon: FileText },
    { id: 'keyPoints', label: t.insights.keyPoints, icon: Sparkles, count: analysis.keyPoints.length },
    { id: 'actions', label: t.insights.actionItems, icon: ListChecks, count: analysis.actionItems.length },
    { id: 'dates', label: t.insights.dates, icon: Calendar, count: analysis.importantDates.length },
    { id: 'entities', label: t.insights.entities, icon: Users, count: analysis.entities.length },
    { id: 'risks', label: t.insights.risks, icon: AlertTriangle, count: analysis.risks.length },
  ];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 text-xs overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-500" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.nav.aiInsights}</h3>
        </div>
        <DemoBadge label="Sample AI Analysis" variant="inline" />
      </div>

      {/* Insight Navigation Tabs */}
      <div className="flex items-center border-b border-slate-200 dark:border-slate-800 overflow-x-auto px-2 no-scrollbar bg-slate-50/50 dark:bg-slate-900/50">
        {tabs.map((tb) => {
          const Icon = tb.icon;
          const isActive = activeTab === tb.id;
          return (
            <button
              key={tb.id}
              onClick={() => setActiveTab(tb.id as any)}
              className={`flex items-center gap-1.5 px-3 py-2.5 font-medium border-b-2 whitespace-nowrap transition-colors text-xs ${
                isActive
                  ? 'border-brand-600 text-brand-600 dark:text-brand-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tb.label}</span>
              {tb.count !== undefined && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                  {tb.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {activeTab === 'summary' && (
          <div className="space-y-4">
            {/* Executive Summary */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs flex items-center justify-between">
                <span>{t.insights.executiveSummary}</span>
                <span className="text-[10px] text-slate-400 font-mono">Demo Output</span>
              </h4>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
                {analysis.summary.executive}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs">{t.insights.keyTakeaways}</h4>
              <ul className="space-y-2">
                {analysis.summary.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50/60 dark:bg-slate-800/20 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Actions */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs">{t.insights.recommendedActions}</h4>
              <ul className="space-y-1.5">
                {analysis.summary.recommendedFollowUps.map((action, idx) => (
                  <li key={idx} className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                    ✓ {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'keyPoints' && (
          <div className="space-y-3">
            {analysis.keyPoints.map((kp) => (
              <div key={kp.id} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-slate-100">{kp.title}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold ${
                    kp.importance === 'high' ? 'bg-rose-500/10 text-rose-600 border border-rose-500/20' : 'bg-slate-200 dark:bg-slate-800 text-slate-600'
                  }`}>
                    {kp.importance}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">{kp.description}</p>
                {kp.source && (
                  <button
                    onClick={() => jumpToCitation(kp.source!.pageNumber, kp.source!.snippet)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[11px] font-semibold hover:bg-brand-500/20 transition-colors"
                  >
                    <Bookmark className="w-3 h-3" />
                    <span>Source: Page {kp.source.pageNumber} — {kp.source.sectionTitle}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'actions' && (
          <div className="space-y-3">
            {analysis.actionItems.map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{item.task}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold ${
                    item.priority === 'high' ? 'bg-rose-500/10 text-rose-600' : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Assignee: {item.assignee || 'Unassigned'}</span>
                  <span>Due: {item.dueDate || 'TBD'}</span>
                </div>
                {item.source && (
                  <button
                    onClick={() => jumpToCitation(item.source!.pageNumber, item.source!.snippet)}
                    className="inline-flex items-center gap-1 text-[11px] text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    <Bookmark className="w-3 h-3" />
                    <span>Page {item.source.pageNumber}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'dates' && (
          <div className="space-y-3">
            {analysis.importantDates.map((dt) => (
              <div key={dt.id} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-600 dark:text-brand-400 font-mono text-xs">{dt.date}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{dt.event}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs">{dt.context}</p>
                {dt.source && (
                  <button
                    onClick={() => jumpToCitation(dt.source!.pageNumber, dt.source!.snippet)}
                    className="inline-flex items-center gap-1 text-[11px] text-brand-600 dark:text-brand-400 hover:underline mt-1"
                  >
                    <Bookmark className="w-3 h-3" />
                    <span>Page {dt.source.pageNumber}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'entities' && (
          <div className="grid grid-cols-2 gap-2">
            {analysis.entities.map((ent) => (
              <div key={ent.id} className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
                <p className="font-bold text-slate-900 dark:text-slate-100 truncate">{ent.name}</p>
                <div className="flex items-center justify-between mt-1 text-[10px] text-slate-500 font-mono">
                  <span>{ent.type}</span>
                  <span>{ent.mentionsCount}x</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'risks' && (
          <div className="space-y-3">
            {analysis.risks.map((rf) => (
              <div key={rf.id} className="p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-600 dark:text-rose-400">{rf.title}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold bg-rose-500/20 text-rose-700 dark:text-rose-300">
                    {rf.severity}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs">{rf.description}</p>
                {rf.mitigation && (
                  <div className="p-2 rounded bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Mitigation: </span>
                    {rf.mitigation}
                  </div>
                )}
                {rf.source && (
                  <button
                    onClick={() => jumpToCitation(rf.source!.pageNumber, rf.source!.snippet)}
                    className="inline-flex items-center gap-1 text-[11px] text-rose-600 dark:text-rose-400 hover:underline"
                  >
                    <Bookmark className="w-3 h-3" />
                    <span>Source Page {rf.source.pageNumber}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Export Footer */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopySummary}
            icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportTXT}
            icon={<Download className="w-3.5 h-3.5" />}
          >
            TXT
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportJSON}
            icon={<Download className="w-3.5 h-3.5" />}
          >
            JSON
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePrint}
          icon={<Printer className="w-3.5 h-3.5" />}
        >
          Print
        </Button>
      </div>
    </div>
  );
};
