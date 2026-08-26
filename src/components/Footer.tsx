import { Link, useLocation } from 'react-router-dom';
import { Code2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const currentYear = new Date().getFullYear().toString();
  const copyrightText = t('footer.copyright').replace('{year}', currentYear);

  const handleLinkClick = (hash: string) => {
    if (isHome) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">{t('footer.brand')}</Link>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer__links">
            <div className="footer__group">
              {isHome ? (
                <a href="#services" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#services');
                }}>{t('footer.services')}</a>
              ) : (
                <Link to="/#services" className="footer__link">{t('footer.services')}</Link>
              )}

              {isHome ? (
                <a href="#work" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#work');
                }}>{t('footer.work')}</a>
              ) : (
                <Link to="/#work" className="footer__link">{t('footer.work')}</Link>
              )}

              {isHome ? (
                <a href="#contact" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}>{t('footer.contact')}</a>
              ) : (
                <Link to="/#contact" className="footer__link">{t('footer.contact')}</Link>
              )}
            </div>

            <div className="footer__social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
                title="GitHub"
              >
                <Code2 size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{copyrightText}</p>
          <p className="footer__built">{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}
