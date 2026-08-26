import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const { t } = useLanguage();

  // Prevent background scrolling when menu is open & listen to Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-[#0C0C0E]/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div 
        className="fixed inset-y-0 right-0 ltr:right-0 rtl:left-0 rtl:right-auto w-full max-w-sm bg-[#141418] border-l rtl:border-r border-[#C5A880]/20 p-6 flex flex-col justify-between shadow-2xl animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.menu')}
      >
        {/* Header inside Drawer */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A880]/15">
            <a href="#home" onClick={onClose} className="flex items-center gap-2 text-[#F4F0EA]">
              <span className="text-2xl font-serif tracking-widest text-[#C5A880]">LUNA</span>
            </a>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full text-[#AAA6A0] hover:text-[#F4F0EA] hover:bg-[#191920] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              aria-label={t('a11y.menuClose')}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-4 py-3 text-lg font-serif text-[#F4F0EA] hover:text-[#C5A880] hover:bg-[#191920]/60 rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer inside Drawer */}
        <div className="pt-6 border-t border-[#C5A880]/15 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-[#AAA6A0]">Language</span>
            <LanguageSwitcher />
          </div>

          <a
            href="#reservation"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#C5A880] text-[#0C0C0E] font-semibold text-sm rounded-none hover:bg-[#D8B98F] transition-colors duration-300 shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('nav.reserve')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
