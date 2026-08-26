import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#0C0C0E] relative border-t border-[#C5A880]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle={t('reviews.subtitle')}
          title={t('reviews.title')}
        />

        {/* Testimonial Card Slider */}
        <div className="relative bg-[#141418] border border-[#C5A880]/20 p-8 sm:p-12 md:p-16 shadow-2xl animate-fade-in">
          
          <Quote className="w-12 h-12 text-[#C5A880]/20 absolute top-6 right-6 ltr:right-6 rtl:left-6 rtl:right-auto" />

          {/* Rating Stars */}
          <div className="flex items-center gap-1.5 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
            ))}
          </div>

          {/* Quote Content */}
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#F4F0EA] leading-relaxed italic mb-8">
            "{current.text}"
          </p>

          {/* Author Details */}
          <div className="flex items-center justify-between border-t border-[#C5A880]/15 pt-6">
            <div>
              <h4 className="text-lg font-serif font-medium text-[#C5A880]">
                {current.author}
              </h4>
              <p className="text-xs text-[#AAA6A0] uppercase tracking-wider font-light">
                {current.role} • {current.date}
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-[#C5A880]/30 hover:border-[#C5A880] text-[#F4F0EA] hover:text-[#C5A880] hover:bg-[#191920] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>

              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-[#C5A880]/30 hover:border-[#C5A880] text-[#F4F0EA] hover:text-[#C5A880] hover:bg-[#191920] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
