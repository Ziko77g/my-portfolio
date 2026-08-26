import React from 'react';
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
  ChevronLeft,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { useLanguage } from '../../context/LanguageContext';
import { useNotifications } from '../../context/NotificationContext';

export interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggleCollapse }) => {
  const { t } = useLanguage();
  const { unreadCount } = useNotifications();
  const location = useLocation();

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
    <aside
      className={clsx(
        'hidden md:flex flex-col bg-white dark:bg-slate-900 border-r rtl:border-r-0 rtl:border-l border-slate-200 dark:border-slate-800 transition-all duration-300 relative z-30 h-screen sticky top-0 shrink-0 select-none',
        collapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-5 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 dark:text-slate-100 tracking-tight">
                NEXORA
              </span>
              <span className="text-2xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest -mt-1">
                {t.common.demoData}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          ) : (
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            {!collapsed && (
              <h4 className="px-3 text-2xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                {group.group}
              </h4>
            )}
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
                  title={collapsed ? item.label : undefined}
                  className={clsx(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all group relative',
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  )}
                >
                  <Icon
                    className={clsx(
                      'w-5 h-5 shrink-0 transition-colors',
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                    )}
                  />
                  {!collapsed && <span className="truncate">{item.label}</span>}

                  {/* Badge count */}
                  {item.badge !== undefined && (
                    <span
                      className={clsx(
                        'px-1.5 py-0.5 text-2xs font-bold rounded-full bg-blue-600 text-white shrink-0',
                        collapsed ? 'absolute top-1 right-1' : 'ml-auto rtl:mr-auto rtl:ml-0'
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      {/* User Profile Footer */}
      <div className="p-3 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <Avatar name="Alex Morgan" status="online" size="md" />
          {!collapsed && (
            <div className="flex flex-col min-w-0 overflow-hidden">
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                Alex Morgan
              </span>
              <span className="text-2xs text-slate-500 dark:text-slate-400 truncate">
                alex.morgan@nexora.demo
              </span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
