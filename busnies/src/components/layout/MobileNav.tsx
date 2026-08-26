import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
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
  X,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useNotifications } from '../../context/NotificationContext';
import { Avatar } from '../ui/Avatar';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { unreadCount } = useNotifications();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navGroups = [
    {
      group: t.nav.overview,
      items: [
        { path: '/', label: t.nav.dashboard, icon: LayoutDashboard },
        { path: '/analytics', label: t.nav.analytics, icon: BarChart3 },
      ],
    },
    {
      group: t.nav.management,
      items: [
        { path: '/orders', label: t.nav.orders, icon: ShoppingCart },
        { path: '/customers', label: t.nav.customers, icon: Users },
        { path: '/products', label: t.nav.products, icon: Package },
      ],
    },
    {
      group: t.nav.workspace,
      items: [
        { path: '/tasks', label: t.nav.tasks, icon: CheckSquare },
        { path: '/team', label: t.nav.team, icon: UserCheck },
        {
          path: '/notifications',
          label: t.nav.notifications,
          icon: Bell,
          badge: unreadCount > 0 ? unreadCount : undefined,
        },
        { path: '/settings', label: t.nav.settings, icon: Settings },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Container */}
      <div className="fixed inset-y-0 left-0 rtl:right-0 rtl:left-auto max-w-full flex">
        <div className="w-screen max-w-xs bg-white dark:bg-slate-900 shadow-xl border-r rtl:border-r-0 rtl:border-l border-slate-200 dark:border-slate-800 flex flex-col animate-slide-in-left rtl:animate-slide-in-right">
          {/* Header */}
          <div className="h-16 flex items-center justify-between px-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-xs">
                <Zap className="w-4 h-4 fill-white" />
              </div>
              <span className="font-extrabold text-base text-slate-900 dark:text-slate-100 tracking-tight">
                NEXORA
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
            {navGroups.map((group, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="px-3 text-2xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  {group.group}
                </h4>
                {group.items.map(item => {
                  const Icon = item.icon;
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path);

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={clsx(
                        'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all',
                        isActive
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                      )}
                    >
                      <Icon
                        className={clsx(
                          'w-5 h-5 shrink-0',
                          isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'
                        )}
                      />
                      <span>{item.label}</span>
                      {item.badge !== undefined && (
                        <span className="ml-auto rtl:mr-auto rtl:ml-0 px-2 py-0.5 text-2xs font-bold rounded-full bg-blue-600 text-white">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Footer User Info */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <Avatar name="Alex Morgan" status="online" size="md" />
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                  Alex Morgan
                </span>
                <span className="text-2xs text-slate-500 dark:text-slate-400 truncate">
                  alex.morgan@nexora.demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
