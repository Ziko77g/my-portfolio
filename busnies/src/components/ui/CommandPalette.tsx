import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  CheckSquare,
  UserCheck,
  Bell,
  Settings,
  Sun,
  Moon,
  Globe,
  Search,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const { setLanguage, language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    { id: 'nav-dash', title: t.nav.dashboard, section: t.nav.overview, icon: <LayoutDashboard className="w-4 h-4" />, action: () => navigate('/') },
    { id: 'nav-orders', title: t.nav.orders, section: t.nav.management, icon: <ShoppingCart className="w-4 h-4" />, action: () => navigate('/orders') },
    { id: 'nav-customers', title: t.nav.customers, section: t.nav.management, icon: <Users className="w-4 h-4" />, action: () => navigate('/customers') },
    { id: 'nav-products', title: t.nav.products, section: t.nav.management, icon: <Package className="w-4 h-4" />, action: () => navigate('/products') },
    { id: 'nav-analytics', title: t.nav.analytics, section: t.nav.overview, icon: <BarChart3 className="w-4 h-4" />, action: () => navigate('/analytics') },
    { id: 'nav-tasks', title: t.nav.tasks, section: t.nav.workspace, icon: <CheckSquare className="w-4 h-4" />, action: () => navigate('/tasks') },
    { id: 'nav-team', title: t.nav.team, section: t.nav.workspace, icon: <UserCheck className="w-4 h-4" />, action: () => navigate('/team') },
    { id: 'nav-notif', title: t.nav.notifications, section: t.nav.workspace, icon: <Bell className="w-4 h-4" />, action: () => navigate('/notifications') },
    { id: 'nav-settings', title: t.nav.settings, section: t.nav.workspace, icon: <Settings className="w-4 h-4" />, action: () => navigate('/settings') },
    { id: 'theme-light', title: `${t.settings.theme}: ${t.settings.lightMode}`, section: 'Actions', icon: <Sun className="w-4 h-4" />, action: () => setTheme('light') },
    { id: 'theme-dark', title: `${t.settings.theme}: ${t.settings.darkMode}`, section: 'Actions', icon: <Moon className="w-4 h-4" />, action: () => setTheme('dark') },
    { id: 'lang-toggle', title: language === 'en' ? 'Switch to Arabic (العربية)' : 'Switch to English', section: 'Actions', icon: <Globe className="w-4 h-4" />, action: () => setLanguage(language === 'en' ? 'ar' : 'en') },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.section.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled externally if passed
        }
      }

      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-modal border border-slate-200 dark:border-slate-800 overflow-hidden animate-scale-in z-10">
        <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ltr:mr-2 rtl:ml-2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command or search... (Press Esc to close)"
            className="w-full py-3.5 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500">No commands found.</div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <button
                key={cmd.id}
                onClick={() => {
                  cmd.action();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  idx === selectedIndex
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 dark:text-slate-500">{cmd.icon}</span>
                  <span>{cmd.title}</span>
                </div>
                <span className="text-2xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {cmd.section}
                </span>
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-2xs text-slate-400">
          <span>Navigate with <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">↓</kbd></span>
          <span>Select with <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">↵</kbd></span>
        </div>
      </div>
    </div>
  );
};
