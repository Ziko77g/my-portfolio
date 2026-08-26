import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-[#101014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden shadow-2xl border border-[#C5A880]/20">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                alt="Luna Atmosphere"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 ltr:-right-6 ltr:left-auto rtl:-left-6 rtl:right-auto z-20 hidden sm:block p-6 bg-[#141418] border border-[#C5A880]/30 shadow-xl max-w-xs">
              <p className="text-xs font-serif italic text-[#C5A880] leading-relaxed">
                "Where time slows down and culinary passion takes center stage."
              </p>
            </div>
          </div>

          {/* Right Column Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
              {t('about.subtitle')}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F0EA] font-normal leading-tight">
              {t('about.title')}
            </h2>

            <div className="w-16 h-0.5 bg-[#C5A880]/60" />

            <p className="text-base text-[#AAA6A0] font-light leading-relaxed">
              {t('about.text1')}
            </p>

            <p className="text-base text-[#AAA6A0] font-light leading-relaxed">
              {t('about.text2')}
            </p>

            <div className="pt-4 text-xs text-[#AAA6A0]/60 italic">
              {t('about.disclaimer')}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
