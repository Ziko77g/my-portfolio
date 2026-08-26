import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A880]/30 hover:border-[#C5A880] text-xs tracking-wider uppercase bg-[#141418]/60 text-[#F4F0EA] hover:text-[#C5A880] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
      aria-label={t('a11y.langSwitch')}
      title={t('a11y.langSwitch')}
    >
      <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
      <span className="font-semibold">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};
