import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './SectionHeading';
import { MapPlaceholder } from './MapPlaceholder';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0C0C0E] relative border-t border-[#C5A880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle={t('contact.subtitle')}
          title={t('contact.title')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Details Column (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#141418] border border-[#C5A880]/30 text-[#C5A880] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  {t('contact.address.label')}
                </h4>
                <p className="text-base text-[#F4F0EA] font-serif">
                  {t('contact.address.val')}
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#141418] border border-[#C5A880]/30 text-[#C5A880] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  {t('contact.hours.label')}
                </h4>
                <p className="text-sm text-[#AAA6A0] font-light">
                  {t('contact.hours.mon_thu')}
                </p>
                <p className="text-sm text-[#AAA6A0] font-light">
                  {t('contact.hours.fri_sat')}
                </p>
                <p className="text-sm text-[#AAA6A0] font-light">
                  {t('contact.hours.sun')}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#141418] border border-[#C5A880]/30 text-[#C5A880] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  {t('contact.phone.label')}
                </h4>
                <a href="tel:+15552345678" className="text-base text-[#F4F0EA] font-serif hover:text-[#C5A880] transition-colors">
                  +1 (555) 234-5678
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#141418] border border-[#C5A880]/30 text-[#C5A880] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  {t('contact.email.label')}
                </h4>
                <a href="mailto:reservations@lunarestaurant.demo" className="text-base text-[#F4F0EA] font-serif hover:text-[#C5A880] transition-colors">
                  reservations@lunarestaurant.demo
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-[#C5A880]/15 flex items-center gap-4 text-[#AAA6A0]">
              <a href="#social" className="p-2.5 bg-[#141418] hover:text-[#C5A880] border border-[#C5A880]/20 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#social" className="p-2.5 bg-[#141418] hover:text-[#C5A880] border border-[#C5A880]/20 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a href="#social" className="p-2.5 bg-[#141418] hover:text-[#C5A880] border border-[#C5A880]/20 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Map Column (Cols 6-12) */}
          <div className="lg:col-span-7">
            <MapPlaceholder />
          </div>

        </div>
      </div>
    </section>
  );
};
