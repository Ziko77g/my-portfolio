import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu as MenuIcon, Calendar } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#intro', label: t('nav.about') },
    { href: '#featured-menu', label: t('nav.menu') },
    { href: '#chef', label: t('nav.chef') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#reviews', label: t('nav.reviews') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-4 border-b border-[#C5A880]/15 shadow-xl'
            : 'bg-gradient-to-b from-[#0C0C0E]/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          >
            <span className="text-2xl font-serif tracking-[0.2em] font-medium text-[#F4F0EA] group-hover:text-[#C5A880] transition-colors duration-300">
              LUNA
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] border-l rtl:border-r rtl:border-l-0 border-[#C5A880]/40 px-2 py-0.5 font-light">
              RESTAURANT
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-[#AAA6A0] hover:text-[#C5A880] transition-colors duration-300 focus:outline-none focus:text-[#C5A880]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items: Language Switcher & Reservation CTA */}
          <div className="hidden lg:flex items-center space-x-5 rtl:space-x-reverse">
            <LanguageSwitcher />

            <a
              href="#reservation"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A880] text-[#0C0C0E] hover:bg-[#D8B98F] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t('nav.reserve')}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md text-[#F4F0EA] hover:text-[#C5A880] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              aria-label={t('a11y.menuOpen')}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
