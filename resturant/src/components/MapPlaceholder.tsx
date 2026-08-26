import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MapPlaceholder: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-80 sm:h-96 bg-[#0C0C0E] border border-[#C5A880]/20 overflow-hidden shadow-2xl group">
      {/* SVG Stylized Dark Luxury Map Background */}
      <svg
        className="w-full h-full opacity-40 group-hover:scale-105 transition-transform duration-1000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.15" />
          </pattern>
        </defs>

        {/* Base Grid */}
        <rect width="800" height="500" fill="#0C0C0E" />
        <rect width="800" height="500" fill="url(#grid)" />

        {/* Abstract River / Waterline */}
        <path
          d="M -50 300 C 150 250, 300 400, 500 280 C 650 180, 750 320, 900 250"
          fill="none"
          stroke="#191922"
          strokeWidth="35"
        />

        {/* Stylized Street Lines */}
        <path d="M 100 0 L 250 500" stroke="#C5A880" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M 500 0 L 350 500" stroke="#C5A880" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M 0 180 L 800 220" stroke="#C5A880" strokeWidth="3" strokeOpacity="0.4" />
        <path d="M 0 350 L 800 320" stroke="#C5A880" strokeWidth="2" strokeOpacity="0.25" />

        {/* Diagonal Boulevard */}
        <path d="M 50 450 L 750 50" stroke="#C5A880" strokeWidth="4" strokeOpacity="0.5" />

        {/* Glowing Radar Pulse around Location */}
        <circle cx="400" cy="225" r="30" fill="#C5A880" fillOpacity="0.15" className="animate-ping" />
        <circle cx="400" cy="225" r="12" fill="#C5A880" fillOpacity="0.4" />
      </svg>

      {/* Map Location Pin Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
        <div className="p-3 rounded-full bg-[#C5A880] text-[#0C0C0E] shadow-2xl animate-bounce">
          <MapPin className="w-6 h-6 fill-[#0C0C0E]" />
        </div>
        <div className="mt-2 px-3 py-1 bg-[#141418]/90 border border-[#C5A880]/50 text-[#F4F0EA] text-xs font-serif shadow-lg">
          LUNA RESTAURANT
        </div>
      </div>

      {/* Directives Banner */}
      <div className="absolute bottom-4 left-4 ltr:left-4 rtl:right-4 rtl:left-auto z-10">
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#141418]/90 hover:bg-[#C5A880] text-[#F4F0EA] hover:text-[#0C0C0E] border border-[#C5A880]/30 text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{t('contact.map.directions')}</span>
        </a>
      </div>
    </div>
  );
};
