import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { CategoryId } from '../types';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';
import { MenuCard } from './MenuCard';

export const FeaturedMenu: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const categories: Array<{ id: CategoryId; labelKey: string }> = [
    { id: 'all', labelKey: 'menu.filter.all' },
    { id: 'starters', labelKey: 'menu.filter.starters' },
    { id: 'mains', labelKey: 'menu.filter.mains' },
    { id: 'desserts', labelKey: 'menu.filter.desserts' },
    { id: 'drinks', labelKey: 'menu.filter.drinks' },
  ];

  const filteredDishes = activeCategory === 'all'
    ? SIGNATURE_DISHES
    : SIGNATURE_DISHES.filter((dish) => dish.category === activeCategory);

  return (
    <section id="featured-menu" className="py-20 md:py-32 bg-[#101014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle={t('menu.subtitle')}
          title={t('menu.title')}
          description={t('menu.description')}
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-all duration-300 font-medium ${
                  isActive
                    ? 'bg-[#C5A880] text-[#0C0C0E] shadow-md font-semibold'
                    : 'bg-[#141418] text-[#AAA6A0] hover:text-[#F4F0EA] border border-[#C5A880]/15 hover:border-[#C5A880]/40'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <MenuCard key={dish.id} item={dish} />
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-12 text-[#AAA6A0] font-light">
            No dishes available in this category.
          </div>
        )}

        {/* CTA to Full Menu */}
        <div className="mt-16 text-center">
          <a
            href="#full-menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#C5A880]/40 text-[#F4F0EA] hover:border-[#C5A880] hover:text-[#C5A880] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            <span>{t('fullmenu.title')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
