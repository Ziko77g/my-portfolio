import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 ltr:right-6 rtl:left-6 rtl:right-auto z-40 p-3.5 rounded-full bg-[#C5A880] text-[#0C0C0E] shadow-2xl hover:bg-[#D8B98F] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
      aria-label={t('a11y.scrollToTop')}
      title={t('a11y.scrollToTop')}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
