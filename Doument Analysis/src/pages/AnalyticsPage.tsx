import React from 'react';
import { useApp } from '../context/AppContext';
import { Card } from '../components/common/Card';
import { DemoBadge } from '../components/common/DemoBadge';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar 
} from 'recharts';
import { Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const { t } = useApp();

  // Fictional analytics demo datasets
  const timelineData = [
    { month: 'Mar', documents: 14, pages: 420 },
    { month: 'Apr', documents: 22, pages: 780 },
    { month: 'May', documents: 38, pages: 1240 },
    { month: 'Jun', documents: 45, pages: 1600 },
    { month: 'Jul', documents: 89, pages: 3200 },
    { month: 'Aug', documents: 128, pages: 4820 },
  ];

  const categoryData = [
    { name: 'Business', value: 42, color: '#8b5cf6' },
    { name: 'Finance', value: 28, color: '#10b981' },
    { name: 'Legal', value: 22, color: '#f59e0b' },
    { name: 'HR', value: 16, color: '#0284c7' },
    { name: 'Marketing', value: 12, color: '#f43f5e' },
    { name: 'Product', value: 8, color: '#6366f1' },
  ];

  const activityData = [
    { day: 'Mon', queries: 145, summaries: 42 },
    { day: 'Tue', queries: 210, summaries: 68 },
    { day: 'Wed', queries: 280, summaries: 85 },
    { day: 'Thu', queries: 320, summaries: 94 },
    { day: 'Fri', queries: 290, summaries: 78 },
    { day: 'Sat', queries: 110, summaries: 25 },
    { day: 'Sun', queries: 85, summaries: 18 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {t.analytics.title}
            </h1>
            <DemoBadge label="Sample Analytics" variant="subtle" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.analytics.subtitle}
          </p>
        </div>
      </div>

      {/* Top Metric Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold">Avg. Processing Time</p>
            <p className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">1.2 sec/page</p>
            <span className="text-[10px] text-emerald-500 font-mono">15% faster than benchmark</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold">Extraction Accuracy Rating</p>
            <p className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">99.4% Demo</p>
            <span className="text-[10px] text-slate-400 font-mono">Verifiable Source Citation Engine</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold">Active Document Workspaces</p>
            <p className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">128 Files</p>
            <span className="text-[10px] text-brand-600 dark:text-brand-400 font-mono">Fully Indexed</span>
          </div>
        </Card>
      </div>

      {/* Visual Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline Area Chart */}
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.analytics.chartTimeline}</h3>
            <span className="text-[10px] font-mono text-slate-400">Cumulative Monthly Volume</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorDocs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0c8ee9" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0c8ee9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }} 
                />
                <Area type="monotone" dataKey="documents" stroke="#0c8ee9" strokeWidth={2} fillOpacity={1} fill="url(#colorDocs)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Category Pie Chart */}
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.analytics.chartCategories}</h3>
            <span className="text-[10px] font-mono text-slate-400">By Industry Segment</span>
          </div>
          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs pt-2">
            {categoryData.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-slate-700 dark:text-slate-300">{c.name} ({c.value}%)</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Weekly Activity Bar Chart */}
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.analytics.chartActivity}</h3>
          <span className="text-[10px] font-mono text-slate-400">Queries vs Summaries</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }} 
              />
              <Bar dataKey="queries" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="summaries" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};
