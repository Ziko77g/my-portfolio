import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  Upload
} from 'lucide-react';
import { DemoBadge } from '../common/DemoBadge';

interface TopBarProps {
  onOpenMobileNav: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenMobileNav }) => {
  const { 
    user, 
    theme, 
    setTheme, 
    language, 
    setLanguage, 
    setIsCmdKOpen, 
    setIsUploadModalOpen,
    t 
  } = useApp();

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left: Mobile Nav Toggle & Breadcrumb / Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Cmd+K Trigger */}
        <button
          onClick={() => setIsCmdKOpen(true)}
          className="flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 text-xs hover:border-slate-300 dark:hover:border-slate-600 transition-all sm:w-72 md:w-80"
        >
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="truncate flex-1 text-left">{t.header.searchPlaceholder}</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5 text-slate-400">
            <span>⌘</span>K
          </kbd>
        </button>
      </div>

      {/* Right: Actions, Demo Badge, Theme, Lang & Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Transparent Demo Badge */}
        <div className="hidden lg:block">
          <DemoBadge label="Portfolio Prototype" variant="subtle" />
        </div>

        {/* Quick Upload Button */}
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-600/10 text-brand-600 dark:text-brand-400 hover:bg-brand-600/20 border border-brand-500/20 transition-colors"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload</span>
        </button>

        {/* Language Switcher Button */}
        <div className="relative group">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
            title="Switch Language (English / العربية)"
          >
            <Globe className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline-block font-mono uppercase">{language}</span>
          </button>
        </div>

        {/* Theme Mode Toggle Button */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={`Switch Theme (Current: ${theme})`}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-600" />
          )}
        </button>

        {/* User Profile Avatar */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-800">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-xs"
          />
          <div className="hidden xl:block min-w-0 text-left">
            <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">{user.name}</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
