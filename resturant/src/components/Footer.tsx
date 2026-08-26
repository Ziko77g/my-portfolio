import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#08080A] text-[#F4F0EA] border-t border-[#C5A880]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#C5A880]/15">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif tracking-[0.2em] font-medium text-[#F4F0EA]">
                LUNA
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-[#C5A880] border-l rtl:border-r rtl:border-l-0 border-[#C5A880]/40 px-2.5 py-0.5">
                RESTAURANT
              </span>
            </div>
            
            <p className="text-sm font-serif italic text-[#C5A880]">
              "{t('footer.tagline')}"
            </p>

            <p className="text-xs text-[#AAA6A0] font-light leading-relaxed max-w-sm">
              Artisanal fine dining combining seasonal luxury ingredients with modern culinary artistry and an unrepeatable atmosphere.
            </p>
          </div>

          {/* Quick Links (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#AAA6A0]">
              <li><a href="#home" className="hover:text-[#C5A880] transition-colors">{t('nav.home')}</a></li>
              <li><a href="#intro" className="hover:text-[#C5A880] transition-colors">{t('nav.about')}</a></li>
              <li><a href="#featured-menu" className="hover:text-[#C5A880] transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#chef" className="hover:text-[#C5A880] transition-colors">{t('nav.chef')}</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A880] transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#reservation" className="hover:text-[#C5A880] transition-colors">{t('nav.reserve')}</a></li>
            </ul>
          </div>

          {/* Hours (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-4">
              Hours
            </h4>
            <div className="text-xs text-[#AAA6A0] space-y-2 font-light">
              <p>Mon – Thu: 5pm – 11pm</p>
              <p>Fri – Sat: 5pm – 12am</p>
              <p>Sun: 4pm – 10pm</p>
            </div>
          </div>

          {/* Newsletter (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-2">
              {t('footer.newsletter.title')}
            </h4>
            <p className="text-xs text-[#AAA6A0] font-light leading-relaxed">
              {t('footer.newsletter.desc')}
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880] text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>{t('footer.newsletter.success')}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full px-3 py-2.5 bg-[#141418] border border-[#C5A880]/30 text-xs text-[#F4F0EA] focus:outline-none focus:border-[#C5A880]"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#C5A880] text-[#0C0C0E] hover:bg-[#D8B98F] transition-colors"
                  aria-label={t('footer.newsletter.button')}
                >
                  <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-[#AAA6A0]/60 font-light">
          {t('footer.copyright')}
        </div>

      </div>
    </footer>
  );
};
