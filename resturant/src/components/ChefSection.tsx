import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CHEF_DATA } from '../data/restaurantData';
import { Quote } from 'lucide-react';

export const ChefSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const name = isArabic ? CHEF_DATA.nameAr : CHEF_DATA.name;
  const title = isArabic ? CHEF_DATA.titleAr : CHEF_DATA.title;
  const bio = isArabic ? CHEF_DATA.bioAr : CHEF_DATA.bio;
  const quote = isArabic ? CHEF_DATA.quoteAr : CHEF_DATA.quote;

  return (
    <section id="chef" className="py-20 md:py-32 bg-[#0C0C0E] relative border-t border-[#C5A880]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Narrative (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
              {t('chef.subtitle')}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F0EA] font-normal leading-tight">
              {name}
            </h2>

            <p className="text-sm font-semibold uppercase tracking-widest text-[#C5A880]">
              {title}
            </p>

            <div className="w-16 h-0.5 bg-[#C5A880]/60" />

            <p className="text-base md:text-lg text-[#AAA6A0] font-light leading-relaxed">
              {bio}
            </p>

            {/* Signature Quote Card */}
            <div className="p-6 bg-[#141418] border-l-4 rtl:border-r-4 rtl:border-l-0 border-[#C5A880] relative mt-8">
              <Quote className="w-8 h-8 text-[#C5A880]/30 absolute top-4 right-4 ltr:right-4 rtl:left-4 rtl:right-auto" />
              <p className="text-base font-serif italic text-[#F4F0EA] leading-relaxed relative z-10">
                {quote}
              </p>
            </div>
          </div>

          {/* Chef Portrait (Cols 8-12) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden border border-[#C5A880]/30 shadow-2xl">
                <img
                  src={CHEF_DATA.image}
                  alt={name}
                  className="w-full h-[450px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 ltr:-left-4 rtl:-right-4 px-4 py-2 bg-[#C5A880] text-[#0C0C0E] font-serif text-sm font-semibold">
                {CHEF_DATA.experienceYears}+ Years Craft
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
