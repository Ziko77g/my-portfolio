import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card } from '../components/common/Card';
import { DemoBadge } from '../components/common/DemoBadge';
import { Search, FileText, CheckCircle2 } from 'lucide-react';

export const HistoryPage: React.FC = () => {
  const { history, documents, t } = useApp();
  const [filterDoc, setFilterDoc] = useState<string>('All');
  const [filterAction, setFilterAction] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHistory = history.filter((h) => {
    const matchesDoc = filterDoc === 'All' || h.documentId === filterDoc;
    const matchesAction = filterAction === 'All' || h.action === filterAction;
    const matchesSearch = h.documentTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (h.details && h.details.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDoc && matchesAction && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {t.history.title}
            </h1>
            <DemoBadge label="Audit Log" variant="subtle" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.history.subtitle}
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search audit history logs..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select
            value={filterDoc}
            onChange={(e) => setFilterDoc(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 outline-none"
          >
            <option value="All">{t.history.filterDoc}</option>
            {documents.map((d) => (
              <option key={d.id} value={d.id}>{d.title}</option>
            ))}
          </select>

          <select
            value={filterAction}
            onChange={(e) => setFilterAction(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 outline-none"
          >
            <option value="All">{t.history.filterAction}</option>
            <option value="Summary generated">Summary generated</option>
            <option value="Insights extracted">Insights extracted</option>
            <option value="Question answered">Question answered</option>
            <option value="Document analyzed">Document analyzed</option>
            <option value="Document uploaded">Document uploaded</option>
          </select>
        </div>
      </div>

      {/* History Log Table */}
      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 text-slate-500 font-semibold">
                <th className="p-4">{t.history.columns.document}</th>
                <th className="p-4">{t.history.columns.action}</th>
                <th className="p-4">{t.history.columns.type}</th>
                <th className="p-4">{t.history.columns.date}</th>
                <th className="p-4">{t.history.columns.status}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredHistory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-slate-900 dark:text-slate-100">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-brand-500 shrink-0" />
                      <span>{item.documentTitle}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{item.action}</span>
                    {item.details && <p className="text-[10px] text-slate-400 mt-0.5 truncate">{item.details}</p>}
                  </td>
                  <td className="p-4 font-mono text-slate-600 dark:text-slate-400">
                    {item.analysisType}
                  </td>
                  <td className="p-4 text-slate-500 font-mono">
                    {item.timestamp}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
