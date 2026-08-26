import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { en } from '../translations/en';
import { ar } from '../translations/ar';

export type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

type TranslationValue = string | string[] | Record<string, unknown>;
type Translations = Record<string, TranslationValue | Record<string, TranslationValue>>;

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';

const translations: Record<Language, Translations> = { en, ar };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    return stored || 'en';
  });

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English
        let fallback: unknown = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in (fallback as Record<string, unknown>)) {
            fallback = (fallback as Record<string, unknown>)[fk];
          } else {
            return key; // Key not found
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }

    return typeof value === 'string' ? value : key;
  }, [language]);

  const tArray = useCallback((key: string): string[] => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return [];
      }
    }

    return Array.isArray(value) ? value : [];
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', direction);

    // Update font for Arabic
    if (language === 'ar') {
      document.body.style.fontFamily = "'Inter', 'Noto Sans Arabic', -apple-system, sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    }
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, toggleLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
