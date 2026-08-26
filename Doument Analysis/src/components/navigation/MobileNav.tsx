import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  LayoutDashboard, 
  FileText, 
  Sparkles, 
  BarChart3, 
  History, 
  Settings, 
  UploadCloud,
  FileCheck,
  Globe
} from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { currentPage, setCurrentPage, t, setIsUploadModalOpen } = useApp();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const navItems = [
    { id: 'overview', label: t.nav.overview, icon: LayoutDashboard },
    { id: 'documents', label: t.nav.documents, icon: FileText },
    { id: 'workspace', label: t.nav.workspace, icon: Sparkles },
    { id: 'analytics', label: t.nav.analytics, icon: BarChart3 },
    { id: 'history', label: t.nav.history, icon: History },
    { id: 'settings', label: t.nav.settings, icon: Settings },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-10 shadow-2xl animate-slide-in-left">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100">{t.brandName}</h2>
              <p className="text-[10px] text-slate-500 font-mono">Demo Workspace</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload CTA */}
        <div className="p-4">
          <button
            onClick={() => {
              onClose();
              setIsUploadModalOpen(true);
            }}
            className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-md"
          >
            <UploadCloud className="w-5 h-5" />
            <span>{t.header.quickUpload}</span>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id as any);
                  onClose();
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => {
              setCurrentPage('landing');
              onClose();
            }}
            className="w-full flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
          >
            <Globe className="w-4 h-4" />
            <span>{t.nav.backToLanding}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
