import { en } from './en';
import { ar } from './ar';
import type { LanguageCode } from '../types';

export const translations = {
  en,
  ar
};

export type TranslationKeys = typeof en;

export function getTranslation(lang: LanguageCode): TranslationKeys {
  return translations[lang] || en;
}
