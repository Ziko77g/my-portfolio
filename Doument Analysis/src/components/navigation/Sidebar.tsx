import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, 
  FileText, 
  UploadCloud, 
  Sparkles, 
  History, 
  BarChart3, 
  Settings, 
  FileCheck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const { currentPage, setCurrentPage, t, workspace, setIsUploadModalOpen } = useApp();

  const navItems = [
    { id: 'overview', label: t.nav.overview, icon: LayoutDashboard },
    { id: 'documents', label: t.nav.documents, icon: FileText },
    { id: 'workspace', label: t.nav.workspace, icon: Sparkles },
    { id: 'analytics', label: t.nav.analytics, icon: BarChart3 },
    { id: 'history', label: t.nav.history, icon: History },
    { id: 'settings', label: t.nav.settings, icon: Settings },
  ];

  return (
    <aside
      className={`relative hidden md:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 z-30 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Logo & Title */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800">
        <div 
          className="flex items-center gap-3 cursor-pointer overflow-hidden"
          onClick={() => setCurrentPage('landing')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shrink-0">
            <FileCheck className="w-5 h-5" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <h1 className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-none">
                {t.brandName}
              </h1>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block mt-1 truncate">
                {t.demoTagline}
              </span>
            </div>
          )}
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Upload Quick Action Button */}
      <div className="p-3">
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className={`w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl py-2.5 px-3 transition-all duration-200 shadow-xs hover:shadow ${
            collapsed ? 'px-2' : ''
          }`}
        >
          <UploadCloud className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="text-sm truncate">{t.header.quickUpload}</span>}
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Workspace Indicator & Portfolio Demo Badge */}
      {!collapsed && (
        <div className="p-3 m-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="truncate">{workspace.name}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <span>Mode: Demo</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px]">
              Offline Mock
            </span>
          </div>
        </div>
      )}

      {/* Back to Public Landing Page Link */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setCurrentPage('landing')}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Globe className="w-4 h-4 shrink-0" />
          {!collapsed && <span>{t.nav.backToLanding}</span>}
        </button>
      </div>
    </aside>
  );
};
