import React from 'react';
import type { MenuItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const name = isArabic ? item.nameAr : item.name;
  const description = isArabic ? item.descriptionAr : item.description;
  const tags = isArabic ? (item.dietaryTagsAr || item.dietaryTags) : item.dietaryTags;

  return (
    <div className="group relative bg-[#141418] border border-[#C5A880]/15 hover:border-[#C5A880]/50 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0C0C0E]">
        <img
          src={item.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent opacity-80" />

        {/* Special Badge */}
        {item.isChefSpecial && (
          <div className="absolute top-3 left-3 ltr:left-3 rtl:right-3 rtl:left-auto inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#C5A880] text-[#0C0C0E] text-[10px] font-semibold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3 h-3" />
            <span>Chef's Choice</span>
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 ltr:right-3 rtl:left-3 rtl:right-auto px-3 py-1 bg-[#0C0C0E]/80 backdrop-blur-md border border-[#C5A880]/30 text-[#C5A880] text-sm font-serif font-semibold">
          {t('menu.price.currency')}{item.price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <h3 className="text-xl font-serif font-medium text-[#F4F0EA] group-hover:text-[#C5A880] transition-colors duration-300 mb-2">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-[#AAA6A0] font-light leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Dietary Tags */}
        {tags && tags.length > 0 && (
          <div className="pt-3 flex flex-wrap gap-1.5 border-t border-[#C5A880]/10">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase tracking-wider text-[#C5A880]/90 bg-[#C5A880]/10 px-2 py-0.5 rounded-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
