import { ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Hero.css';

export default function Hero() {
  const { t, direction } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const isRtl = direction === 'rtl';

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container hero__container">
        <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
          <span className="eyebrow hero__eyebrow">{t('hero.eyebrow')}</span>

          <h1 className="hero__headline headline-xl">
            {t('hero.headline')}
          </h1>

          <p className="hero__subline">
            {t('hero.subline')}
          </p>

          <p className="hero__description">
            {t('hero.description')}
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={scrollToWork}>
              {t('hero.viewWork')}
              <ArrowDown size={16} />
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              {t('hero.startProject')}
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>

          <div className="hero__availability">
            <span className="status-badge status-badge--available">
              <span className="status-dot" />
              {t('hero.available')}
            </span>
          </div>
        </div>

        <div className={`hero__visual ${isVisible ? 'hero__visual--visible' : ''}`}>
          <div className="hero__projects">
            <div className="hero__project hero__project--1">
              <div className="hero__project-frame">
                <div className="hero__project-bar">
                  <span className="hero__dot" />
                  <span className="hero__dot" />
                  <span className="hero__dot" />
                </div>
                <img
                  src="/luna-preview.jpg"
                  alt="Luna Restaurant — Premium restaurant website with cinematic design and bilingual support"
                  loading="eager"
                  className="hero__project-img"
                />
              </div>
              <span className="hero__project-label">Luna Restaurant</span>
            </div>
            <div className="hero__project hero__project--2">
              <div className="hero__project-frame">
                <div className="hero__project-bar">
                  <span className="hero__dot" />
                  <span className="hero__dot" />
                  <span className="hero__dot" />
                </div>
                <img
                  src="/nexora-preview.jpg"
                  alt="NEXORA — Business management SaaS dashboard with analytics and KPI tracking"
                  loading="eager"
                  className="hero__project-img"
                />
              </div>
              <span className="hero__project-label">NEXORA</span>
            </div>
            <div className="hero__project hero__project--3">
              <div className="hero__project-frame">
                <div className="hero__project-bar">
                  <span className="hero__dot" />
                  <span className="hero__dot" />
                  <span className="hero__dot" />
                </div>
                <img
                  src="/documind-preview.jpg"
                  alt="DocuMind AI — AI document intelligence workspace with insights and Q&A"
                  loading="eager"
                  className="hero__project-img"
                />
              </div>
              <span className="hero__project-label">DocuMind AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
