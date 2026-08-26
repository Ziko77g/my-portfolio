import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Calendar, UtensilsCrossed } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
          alt="Luna Restaurant Ambiance"
          className="w-full h-full object-cover object-center transform transition-transform duration-[8000ms] hover:scale-105"
          loading="eager"
        />
        {/* Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/60 to-[#0C0C0E]/40" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(12,12,14,0.6) 100%)' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F4F0EA]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A880]/40 bg-[#0C0C0E]/60 backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
            {t('hero.badge')}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-wider text-[#F4F0EA] mb-4 drop-shadow-lg">
          {t('hero.title')}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-[#C5A880] mb-6 font-normal tracking-wide">
          "{t('hero.tagline')}"
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#AAA6A0] font-light leading-relaxed mb-10">
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#reservation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C5A880] text-[#0C0C0E] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#D8B98F] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('hero.cta.primary')}</span>
          </a>

          <a
            href="#featured-menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#C5A880]/50 bg-[#0C0C0E]/40 backdrop-blur-sm text-[#F4F0EA] hover:border-[#C5A880] hover:text-[#C5A880] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C5A880]" />
            <span>{t('hero.cta.secondary')}</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#AAA6A0] hover:text-[#C5A880] transition-colors duration-300 group"
        aria-label={t('hero.scroll')}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#AAA6A0] group-hover:text-[#C5A880]">
          {t('hero.scroll')}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
      </a>
    </section>
  );
};
