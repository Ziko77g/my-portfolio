import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { toggleTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { href: isHome ? '#home' : '/', label: t('nav.home') },
    { href: isHome ? '#work' : '/#work', label: t('nav.work') },
    { href: isHome ? '#services' : '/#services', label: t('nav.services') },
    { href: isHome ? '#process' : '/#process', label: t('nav.process') },
    { href: isHome ? '#about' : '/#about', label: t('nav.about') },
    { href: isHome ? '#contact' : '/#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMobileMenuOpen]);

  // Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      toggleRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Focus trap
  useEffect(() => {
    if (!isMobileMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !menuRef.current) return;

      const elements = menuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const first = elements[0];
      const last = elements[elements.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <Link to="/" className="navbar__brand" aria-label="Home">
          <span className="navbar__brand-text">Zakar</span>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar__links" role="menubar">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              role="menuitem"
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="navbar__controls">
          <button
            className="navbar__control-btn"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            title={language === 'en' ? 'العربية' : 'English'}
          >
            {language === 'en' ? 'ع' : 'EN'}
          </button>
          <button
            className="navbar__control-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {resolvedTheme === 'dark' ? '☀' : '☾'}
          </button>
          <Link to="/#contact" className="btn btn-primary navbar__cta">
            {t('nav.startProject')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar__mobile-controls">
          <button
            className="navbar__control-btn"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
          >
            {language === 'en' ? 'ع' : 'EN'}
          </button>
          <button
            className="navbar__control-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {resolvedTheme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            ref={toggleRef}
            className="navbar__menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__overlay ${isMobileMenuOpen ? 'navbar__overlay--open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-menu-header">
          <button
            className="navbar__menu-close"
            onClick={() => {
              setIsMobileMenuOpen(false);
              toggleRef.current?.focus();
            }}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <div className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="navbar__mobile-footer">
          <Link
            to="/#contact"
            className="btn btn-primary navbar__mobile-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.startProject')}
          </Link>
        </div>
      </div>
    </header>
  );
}
