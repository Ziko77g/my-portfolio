import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Menu,
  Search,
  Command,
  Sun,
  Moon,
  Globe,
  Bell,
  Check,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useNotifications } from '../../context/NotificationContext';
import { Dropdown } from '../ui/Dropdown';

export interface HeaderProps {
  onOpenMobileNav: () => void;
  onOpenSearch: () => void;
  onOpenCommandPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileNav,
  onOpenSearch,
  onOpenCommandPalette,
}) => {
  const { location } = { location: useLocation() };
  const { setTheme, isDark } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { unreadCount, notifications, markAsRead } = useNotifications();

  // Compute Page Title from location
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return t.nav.dashboard;
      case '/orders': return t.nav.orders;
      case '/customers': return t.nav.customers;
      case '/products': return t.nav.products;
      case '/analytics': return t.nav.analytics;
      case '/tasks': return t.nav.tasks;
      case '/team': return t.nav.team;
      case '/notifications': return t.nav.notifications;
      case '/settings': return t.nav.settings;
      default: return t.nav.dashboard;
    }
  };

  const themeItems = [
    {
      id: 'light',
      label: t.settings.lightMode,
      icon: <Sun className="w-4 h-4" />,
      onClick: () => setTheme('light'),
    },
    {
      id: 'dark',
      label: t.settings.darkMode,
      icon: <Moon className="w-4 h-4" />,
      onClick: () => setTheme('dark'),
    },
    {
      id: 'system',
      label: t.settings.systemMode,
      icon: <Command className="w-4 h-4" />,
      onClick: () => setTheme('system'),
    },
  ];

  const langItems = [
    {
      id: 'en',
      label: t.settings.english,
      onClick: () => setLanguage('en'),
    },
    {
      id: 'ar',
      label: t.settings.arabic,
      onClick: () => setLanguage('ar'),
    },
  ];

  return (
    <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 px-4 sm:px-6 flex items-center justify-between transition-colors">
      {/* Left: Mobile hamburger & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          {getPageTitle(location.pathname)}
        </h1>
      </div>

      {/* Right: Search, Theme, Language, Notifications */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Global Search & Command Palette trigger */}
        <button
          onClick={onOpenSearch}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-400 dark:text-slate-500 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>{t.common.search}...</span>
          <kbd
            onClick={(e) => {
              e.stopPropagation();
              onOpenCommandPalette();
            }}
            className="px-1.5 py-0.5 text-2xs bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-slate-500 dark:text-slate-300 font-mono"
          >
            ⌘K
          </kbd>
        </button>

        {/* Mobile Search Icon */}
        <button
          onClick={onOpenSearch}
          className="sm:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label={t.common.search}
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Theme Dropdown */}
        <Dropdown
          trigger={
            <button
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Moon className="w-5 h-5 text-blue-400" /> : <Sun className="w-5 h-5 text-amber-500" />}
            </button>
          }
          items={themeItems}
        />

        {/* Language Switcher Dropdown */}
        <Dropdown
          trigger={
            <button
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs font-medium uppercase"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden xs:inline">{language}</span>
            </button>
          }
          items={langItems}
        />

        {/* Notifications Dropdown */}
        <Dropdown
          trigger={
            <button
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-blue-600 rounded-full ring-2 ring-white dark:ring-slate-900" />
              )}
            </button>
          }
          items={notifications.slice(0, 4).map(n => ({
            id: n.id,
            label: n.title,
            icon: n.read ? undefined : <Check className="w-3.5 h-3.5 text-blue-500" />,
            onClick: () => markAsRead(n.id),
          }))}
        />
      </div>
    </header>
  );
};
