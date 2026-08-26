import React from 'react';
import { useApp } from '../context/AppContext';
import { Card } from '../components/common/Card';
import { StatusBadge, CategoryBadge } from '../components/common/Badge';
import { DemoBadge } from '../components/common/DemoBadge';
import { Button } from '../components/common/Button';
import { 
  FileText, 
  Layers, 
  Sparkles, 
  MessageSquare, 
  TrendingUp, 
  UploadCloud, 
  ArrowRight,
  ChevronRight,
  Info
} from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const { 
    t, 
    kpiStats, 
    documents, 
    setActiveDocumentId, 
    setCurrentPage, 
    setIsUploadModalOpen 
  } = useApp();

  const recentDocs = documents.slice(0, 5);

  const kpiCards = [
    {
      title: t.kpi.documents,
      value: kpiStats.documentsCount.toLocaleString(),
      sub: t.kpi.documentsSub,
      trend: kpiStats.documentsTrend,
      icon: FileText,
      color: "text-purple-500 bg-purple-500/10"
    },
    {
      title: t.kpi.pagesProcessed,
      value: kpiStats.pagesProcessed.toLocaleString(),
      sub: t.kpi.pagesProcessedSub,
      trend: kpiStats.pagesTrend,
      icon: Layers,
      color: "text-blue-500 bg-blue-500/10"
    },
    {
      title: t.kpi.insightsGenerated,
      value: kpiStats.insightsGenerated.toLocaleString(),
      sub: t.kpi.insightsGeneratedSub,
      trend: kpiStats.insightsTrend,
      icon: Sparkles,
      color: "text-emerald-500 bg-emerald-500/10"
    },
    {
      title: t.kpi.questionsAnswered,
      value: kpiStats.questionsAnswered.toLocaleString(),
      sub: t.kpi.questionsAnsweredSub,
      trend: kpiStats.questionsTrend,
      icon: MessageSquare,
      color: "text-indigo-500 bg-indigo-500/10"
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {t.header.greeting}
            </h1>
            <DemoBadge label="Sample Data" variant="subtle" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.header.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            onClick={() => setIsUploadModalOpen(true)}
            icon={<UploadCloud className="w-4 h-4" />}
          >
            {t.header.quickUpload}
          </Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <Card key={idx} hoverEffect className="relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{kpi.title}</span>
                <div className={`p-2 rounded-xl ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                  {kpi.value}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{kpi.trend}</span>
                  <span className="text-slate-400 font-normal text-[11px]">{t.kpi.trendUp}</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-3">{kpi.sub}</p>
            </Card>
          );
        })}
      </div>

      {/* Portfolio Fictional Data Alert */}
      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-brand-500 shrink-0" />
          <span>{t.kpi.fictionalDataNotice}</span>
        </div>
        <span className="text-[10px] text-brand-600 dark:text-brand-400 font-bold">DocuMind AI Portfolio</span>
      </div>

      {/* Recent Documents Table & Action List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Recent Documents</h2>
            <p className="text-xs text-slate-500">Quick access to analyzed files and structured insights.</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage('documents')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All Documents
          </Button>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 text-slate-500 font-semibold">
                  <th className="p-4">{t.documents.columns.fileName}</th>
                  <th className="p-4">{t.documents.columns.category}</th>
                  <th className="p-4">{t.documents.columns.pages}</th>
                  <th className="p-4">{t.documents.columns.status}</th>
                  <th className="p-4">{t.documents.columns.lastAnalyzed}</th>
                  <th className="p-4 text-right">{t.documents.columns.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {recentDocs.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group cursor-pointer"
                    onClick={() => {
                      setActiveDocumentId(doc.id);
                      setCurrentPage('workspace');
                    }}
                  >
                    <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{doc.title}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{doc.fileName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <CategoryBadge category={doc.category} size="sm" />
                    </td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">
                      {doc.pagesCount} pgs
                    </td>
                    <td className="p-4">
                      <StatusBadge status={doc.status} size="sm" />
                    </td>
                    <td className="p-4 text-slate-500 font-mono">
                      {doc.lastAnalyzedAt}
                    </td>
                    <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setActiveDocumentId(doc.id);
                          setCurrentPage('workspace');
                        }}
                        icon={<ChevronRight className="w-4 h-4" />}
                      >
                        Workspace
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
