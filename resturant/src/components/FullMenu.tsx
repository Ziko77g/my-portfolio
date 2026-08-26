import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FULL_MENU_EXTRA } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';
import type { MenuItem } from '../types';

export const FullMenu: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const categories: Array<{ id: 'starters' | 'mains' | 'desserts' | 'drinks'; labelEn: string; labelAr: string }> = [
    { id: 'starters', labelEn: 'Starters & Appetizers', labelAr: 'المقبلات والشوربات' },
    { id: 'mains', labelEn: 'Main Courses', labelAr: 'الأطباق الرئيسية' },
    { id: 'desserts', labelEn: 'Artisanal Desserts', labelAr: 'الحلويات الفاخرة' },
    { id: 'drinks', labelEn: 'Cellar & Elixirs', labelAr: 'المشروبات وإكسير العصائر' },
  ];

  const renderSection = (categoryId: 'starters' | 'mains' | 'desserts' | 'drinks', title: string) => {
    const items = FULL_MENU_EXTRA.filter((item) => item.category === categoryId);

    return (
      <div key={categoryId} className="space-y-6">
        <h3 className="text-2xl font-serif text-[#C5A880] border-b border-[#C5A880]/20 pb-3 uppercase tracking-wider font-normal">
          {title}
        </h3>

        <div className="space-y-6">
          {items.map((item: MenuItem) => {
            const name = isArabic ? item.nameAr : item.name;
            const desc = isArabic ? item.descriptionAr : item.description;

            return (
              <div key={item.id} className="group">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-lg font-serif text-[#F4F0EA] group-hover:text-[#C5A880] transition-colors duration-300">
                    {name}
                  </span>
                  <div className="flex-1 border-b border-dotted border-[#C5A880]/30 mx-2" />
                  <span className="text-base font-serif text-[#C5A880] font-semibold">
                    {t('menu.price.currency')}{item.price}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-[#AAA6A0] font-light leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="full-menu" className="py-20 md:py-32 bg-[#0C0C0E] relative border-t border-[#C5A880]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle={t('fullmenu.subtitle')}
          title={t('fullmenu.title')}
          description={t('fullmenu.description')}
        />

        {/* Two-Column Editorial Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 bg-[#141418]/60 p-8 sm:p-12 border border-[#C5A880]/20 rounded-none shadow-2xl">
          {categories.map((cat) =>
            renderSection(cat.id, isArabic ? cat.labelAr : cat.labelEn)
          )}
        </div>

      </div>
    </section>
  );
};
