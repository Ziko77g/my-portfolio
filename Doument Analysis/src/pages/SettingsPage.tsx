import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import type { ThemeMode, LanguageCode, DocumentCategory } from '../types';
import { 
  User, 
  Sliders, 
  Building, 
  Sparkles, 
  ShieldCheck, 
  Moon, 
  Sun, 
  Globe, 
  Check, 
  Lock,
  Smartphone,
  Laptop
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { 
    user, 
    setUser, 
    workspace, 
    setWorkspace, 
    theme, 
    setTheme, 
    language, 
    setLanguage, 
    addToast,
    t 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'profile' | 'preferences' | 'workspace' | 'aiSettings' | 'security'>('profile');

  // Form local state
  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);
  const [wsName, setWsName] = useState(workspace.name);
  const [wsCategory, setWsCategory] = useState<DocumentCategory>(workspace.defaultCategory);
  const [detailLevel, setDetailLevel] = useState(workspace.analysisDetailLevel);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ ...user, name: userName, email: userEmail });
    addToast({ type: 'success', title: 'Profile Updated' });
  };

  const handleSaveWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    setWorkspace({ ...workspace, name: wsName, defaultCategory: wsCategory, analysisDetailLevel: detailLevel });
    addToast({ type: 'success', title: 'Workspace Settings Saved' });
  };

  const settingsTabs = [
    { id: 'profile', label: t.settings.tabs.profile, icon: User },
    { id: 'preferences', label: t.settings.tabs.preferences, icon: Sliders },
    { id: 'workspace', label: t.settings.tabs.workspace, icon: Building },
    { id: 'aiSettings', label: t.settings.tabs.aiSettings, icon: Sparkles },
    { id: 'security', label: t.settings.tabs.security, icon: ShieldCheck },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t.settings.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.settings.subtitle}
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
        {settingsTabs.map((st) => {
          const Icon = st.icon;
          const isActive = activeTab === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setActiveTab(st.id as any)}
              className={`flex items-center gap-2 px-4 py-3 font-semibold text-xs border-b-2 whitespace-nowrap transition-all ${
                isActive
                  ? 'border-brand-600 text-brand-600 dark:text-brand-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{st.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="space-y-6">
        {activeTab === 'profile' && (
          <Card>
            <form onSubmit={handleSaveProfile} className="space-y-5 max-w-lg">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-500 shadow-md"
                />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">{user.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{user.role}</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.settings.profile.name}
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.settings.profile.email}
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="sm">
                  {t.settings.profile.save}
                </Button>
              </div>
            </form>
          </Card>
        )}

        {activeTab === 'preferences' && (
          <div className="space-y-6 max-w-2xl">
            {/* Theme Selector */}
            <Card className="space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>{t.settings.preferences.theme}</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { mode: 'light' as ThemeMode, label: t.settings.preferences.themeLight, icon: Sun },
                  { mode: 'dark' as ThemeMode, label: t.settings.preferences.themeDark, icon: Moon },
                  { mode: 'system' as ThemeMode, label: t.settings.preferences.themeSystem, icon: Sliders },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSel = theme === item.mode;
                  return (
                    <button
                      key={item.mode}
                      onClick={() => setTheme(item.mode)}
                      className={`p-4 rounded-xl border text-center flex flex-col items-center gap-2 transition-all ${
                        isSel
                          ? 'border-brand-600 bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Language Selector */}
            <Card className="space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-500" />
                <span>{t.settings.preferences.language}</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { code: 'en' as LanguageCode, label: t.settings.preferences.languageEn },
                  { code: 'ar' as LanguageCode, label: t.settings.preferences.languageAr },
                ].map((langItem) => {
                  const isSel = language === langItem.code;
                  return (
                    <button
                      key={langItem.code}
                      onClick={() => setLanguage(langItem.code)}
                      className={`p-4 rounded-xl border text-center flex items-center justify-between transition-all ${
                        isSel
                          ? 'border-brand-600 bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="text-xs">{langItem.label}</span>
                      {isSel && <Check className="w-4 h-4 text-brand-500" />}
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'workspace' && (
          <Card>
            <form onSubmit={handleSaveWorkspace} className="space-y-5 max-w-lg">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.settings.workspace.name}
                </label>
                <input
                  type="text"
                  value={wsName}
                  onChange={(e) => setWsName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.settings.workspace.defaultCategory}
                </label>
                <select
                  value={wsCategory}
                  onChange={(e) => setWsCategory(e.target.value as DocumentCategory)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-none"
                >
                  {['Business', 'Finance', 'Legal', 'HR', 'Marketing', 'Product'].map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="sm">Save Workspace</Button>
              </div>
            </form>
          </Card>
        )}

        {activeTab === 'aiSettings' && (
          <Card className="space-y-5 max-w-lg">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {t.settings.aiSettings.detailLevel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['concise', 'balanced', 'comprehensive'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setDetailLevel(lvl)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold capitalize border ${
                      detailLevel === lvl
                        ? 'bg-brand-600 text-white border-brand-600'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs">
              AI Service Engine: <span className="font-mono font-bold">MockAIService</span> (Offline Portfolio Mode active).
            </div>
          </Card>
        )}

        {activeTab === 'security' && (
          <div className="space-y-5 max-w-2xl">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2 font-mono">
              <Lock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{t.settings.security.notice}</span>
            </div>

            <Card className="space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center justify-between">
                <span>{t.settings.security.activeSessions}</span>
                <span className="text-xs font-mono text-emerald-500">2 Active Devices</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-brand-500" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Chrome on macOS (Current)</p>
                      <p className="text-[10px] text-slate-400 font-mono">IP: 192.168.1.45 • Frankfurt, DE</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-600 font-mono font-semibold">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">DocuMind iOS App</p>
                      <p className="text-[10px] text-slate-400 font-mono">IP: 10.0.0.12 • Last active 2h ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Revoke</Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
