import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Star } from 'lucide-react';

export const RestaurantIntro: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="intro" className="py-20 md:py-32 bg-[#0C0C0E] relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Text Editorial Content (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('intro.subtitle')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F0EA] font-normal leading-tight">
              {t('intro.title')}
            </h2>

            <div className="w-20 h-0.5 bg-[#C5A880]/60 my-4" />

            <p className="text-base md:text-lg text-[#AAA6A0] font-light leading-relaxed">
              {t('intro.paragraph1')}
            </p>

            <p className="text-sm md:text-base text-[#AAA6A0]/80 font-light leading-relaxed">
              {t('intro.paragraph2')}
            </p>

            {/* Fictional Portfolio Metrics Banner */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[#C5A880]/15">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif text-[#C5A880]">
                  {t('intro.stat1.number')}
                </div>
                <div className="text-xs text-[#AAA6A0] uppercase tracking-wider font-light">
                  {t('intro.stat1.label')}
                </div>
              </div>

              <div className="space-y-1 border-l rtl:border-r rtl:border-l-0 border-[#C5A880]/20 pl-4 rtl:pr-4">
                <div className="text-2xl sm:text-3xl font-serif text-[#C5A880]">
                  {t('intro.stat2.number')}
                </div>
                <div className="text-xs text-[#AAA6A0] uppercase tracking-wider font-light">
                  {t('intro.stat2.label')}
                </div>
              </div>

              <div className="space-y-1 border-l rtl:border-r rtl:border-l-0 border-[#C5A880]/20 pl-4 rtl:pr-4">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-serif text-[#C5A880]">
                  <span>{t('intro.stat3.number')}</span>
                  <Star className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                </div>
                <div className="text-xs text-[#AAA6A0] uppercase tracking-wider font-light">
                  {t('intro.stat3.label')}
                </div>
              </div>
            </div>
          </div>

          {/* Right / Asymmetric Image Grid (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative z-10 overflow-hidden shadow-2xl border border-[#C5A880]/20">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Luna Restaurant Dining Room"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className={`absolute -bottom-8 ${isRTL ? '-left-6' : '-right-6'} z-20 w-3/5 overflow-hidden shadow-2xl border-2 border-[#141418]`}>
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Crafting Dishes"
                  className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Decorative Frame Line */}
              <div className={`absolute -top-4 ${isRTL ? '-right-4' : '-left-4'} w-full h-full border border-[#C5A880]/20 -z-0 pointer-events-none`} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
