import React, { useState } from 'react';
import { ShoppingCart, Users, AlertTriangle, CheckSquare, Check, Trash2, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { useNotifications } from '../context/NotificationContext';
import { useLanguage } from '../context/LanguageContext';
import type { NotificationType } from '../types';

export const Notifications: React.FC = () => {
  const { t } = useLanguage();
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearAll } = useNotifications();
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'order': return <ShoppingCart className="w-5 h-5 text-blue-500" />;
      case 'customer': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'system': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'task': return <CheckSquare className="w-5 h-5 text-purple-500" />;
    }
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !n.read;
    return n.type === activeTab;
  });

  const tabItems = [
    { id: 'all', label: t.common.all, count: notifications.length },
    { id: 'unread', label: t.notifications.unread, count: unreadCount },
    { id: 'order', label: t.notifications.order },
    { id: 'customer', label: t.notifications.customer },
    { id: 'system', label: t.notifications.system },
    { id: 'task', label: t.notifications.task },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Global Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Tabs tabs={tabItems} activeTab={activeTab} onChange={setActiveTab} />

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
            <Check className="w-4 h-4 mr-1.5" />
            {t.common.markAllRead}
          </Button>
          <Button variant="ghost" size="sm" onClick={clearAll} disabled={notifications.length === 0}>
            <Trash2 className="w-4 h-4 mr-1.5" />
            {t.common.clearAll}
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <Card>
        <CardContent className="p-0">
          {filteredNotifications.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              <Bell className="w-10 h-10 mx-auto mb-2 opacity-50" />
              <p className="font-semibold text-slate-700 dark:text-slate-300">{t.common.noNotifications}</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredNotifications.map(item => (
                <div
                  key={item.id}
                  className={`p-4 flex items-start gap-4 transition-colors ${
                    !item.read ? 'bg-blue-50/40 dark:bg-blue-950/20' : ''
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                    {getIcon(item.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                        {item.title}
                      </h4>
                      <span className="text-2xs text-slate-400 whitespace-nowrap">{item.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {item.message}
                    </p>
                  </div>

                  {!item.read && (
                    <button
                      onClick={() => markAsRead(item.id)}
                      className="p-1.5 text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg shrink-0"
                      title={t.notifications.markRead}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
