import React, { useEffect } from 'react';
import type { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') isArabic ? onNext() : onPrev();
        if (e.key === 'ArrowRight') isArabic ? onPrev() : onNext();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [currentIndex, onClose, onPrev, onNext, isArabic]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];
  const title = isArabic ? currentItem.titleAr : currentItem.title;
  const categoryLabel = isArabic ? currentItem.categoryLabelAr : currentItem.categoryLabel;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0C0E]/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-[#F4F0EA]">
        <div className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
          {currentIndex + 1} / {items.length} — {categoryLabel}
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-[#141418]/80 hover:bg-[#C5A880] hover:text-[#0C0C0E] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          aria-label={t('gallery.lightbox.close')}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 ltr:left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-[#141418]/80 hover:bg-[#C5A880] hover:text-[#0C0C0E] transition-colors duration-300 text-[#F4F0EA] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
        aria-label={t('gallery.lightbox.prev')}
      >
        <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 ltr:right-4 rtl:left-4 rtl:right-auto top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-[#141418]/80 hover:bg-[#C5A880] hover:text-[#0C0C0E] transition-colors duration-300 text-[#F4F0EA] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
        aria-label={t('gallery.lightbox.next')}
      >
        <ChevronRight className="w-6 h-6 rtl:rotate-180" />
      </button>

      {/* Image & Title Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={currentItem.url}
          alt={title}
          className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-[#C5A880]/30"
        />
        <div className="mt-4 text-center">
          <h3 className="text-xl sm:text-2xl font-serif text-[#F4F0EA]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
