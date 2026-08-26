import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';
import { Lightbox } from './Lightbox';
import { Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#101014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle={t('gallery.subtitle')}
          title={t('gallery.title')}
          description={t('gallery.description')}
        />

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const title = isArabic ? item.titleAr : item.title;
            const category = isArabic ? item.categoryLabelAr : item.categoryLabel;

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden cursor-pointer bg-[#141418] border border-[#C5A880]/15 ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.url}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-1">
                    {category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-serif text-[#F4F0EA]">
                      {title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-[#C5A880] text-[#0C0C0E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
