import React, { useState } from 'react';
import { User, Globe, Building, ShieldCheck, Check, Save } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Input, Select } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import type { Theme, Language } from '../types';

export const Settings: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences' | 'business' | 'security'>('profile');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form states
  const [profileName, setProfileName] = useState('Alex Morgan');
  const [profileEmail, setProfileEmail] = useState('alex.morgan@nexora.demo');
  const [profilePhone, setProfilePhone] = useState('+1 (555) 019-2834');

  const [businessName, setBusinessName] = useState('NEXORA Technologies Inc.');
  const [currency, setCurrency] = useState('USD ($)');
  const [timezone, setTimezone] = useState('UTC-5 (Eastern Time)');

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'profile'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <User className="w-4 h-4" />
          {t.settings.profile}
        </button>

        <button
          onClick={() => setActiveTab('preferences')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'preferences'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Globe className="w-4 h-4" />
          {t.settings.preferences}
        </button>

        <button
          onClick={() => setActiveTab('business')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'business'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Building className="w-4 h-4" />
          {t.settings.business}
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'security'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          {t.settings.security}
        </button>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-lg text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" />
          Settings saved successfully! (Frontend demo state)
        </div>
      )}

      {/* Form Container */}
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSave} className="max-w-xl space-y-5">
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
                  {t.settings.profile}
                </h3>
                <Input
                  label={t.common.name}
                  value={profileName}
                  onChange={e => setProfileName(e.target.value)}
                />
                <Input
                  label={t.common.email}
                  type="email"
                  value={profileEmail}
                  onChange={e => setProfileEmail(e.target.value)}
                />
                <Input
                  label={t.common.phone}
                  value={profilePhone}
                  onChange={e => setProfilePhone(e.target.value)}
                />
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
                  {t.settings.preferences}
                </h3>
                <Select
                  label={t.settings.theme}
                  value={theme}
                  onChange={e => setTheme(e.target.value as Theme)}
                  options={[
                    { value: 'light', label: t.settings.lightMode },
                    { value: 'dark', label: t.settings.darkMode },
                    { value: 'system', label: t.settings.systemMode },
                  ]}
                />
                <Select
                  label={t.settings.language}
                  value={language}
                  onChange={e => setLanguage(e.target.value as Language)}
                  options={[
                    { value: 'en', label: `${t.settings.english} (LTR)` },
                    { value: 'ar', label: `${t.settings.arabic} (RTL)` },
                  ]}
                />
              </div>
            )}

            {activeTab === 'business' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
                  {t.settings.business}
                </h3>
                <Input
                  label={t.settings.businessName}
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                />
                <Select
                  label={t.settings.currency}
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                  options={[
                    { value: 'USD ($)', label: 'USD ($)' },
                    { value: 'EUR (€)', label: 'EUR (€)' },
                    { value: 'GBP (£)', label: 'GBP (£)' },
                    { value: 'SAR (ر.س)', label: 'SAR (ر.س)' },
                    { value: 'AED (د.إ)', label: 'AED (د.إ)' },
                  ]}
                />
                <Select
                  label={t.settings.timezone}
                  value={timezone}
                  onChange={e => setTimezone(e.target.value)}
                  options={[
                    { value: 'UTC-5 (Eastern Time)', label: 'UTC-5 (Eastern Time)' },
                    { value: 'UTC+0 (London)', label: 'UTC+0 (London)' },
                    { value: 'UTC+3 (Riyadh / Dubai)', label: 'UTC+3 (Riyadh / Dubai)' },
                  ]}
                />
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
                  {t.settings.security}
                </h3>
                <p className="text-2xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800/50">
                  Note: This is a frontend demo security interface. No actual credentials or security state are changed.
                </p>
                <Input label="Current Password" type="password" placeholder="••••••••••••" />
                <Input label="New Password" type="password" placeholder="••••••••••••" />

                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={twoFactorEnabled}
                      onChange={e => setTwoFactorEnabled(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {t.settings.twoFactor}
                      </p>
                      <p className="text-2xs text-slate-500">
                        Require an authenticator app code on login
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <Button type="submit" leftIcon={<Save className="w-4 h-4" />}>
                {t.settings.saveChanges}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
