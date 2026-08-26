import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ReservationFormData } from '../types';
import { SectionHeading } from './SectionHeading';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: 2,
    seatingArea: 'main',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('reservation.error.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('reservation.error.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('reservation.error.email');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('reservation.error.required');
    }

    if (!formData.date) {
      newErrors.date = t('reservation.error.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission & store demo reservation locally
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('luna_demo_reservations') || '[]');
      existing.push({ ...formData, id: Date.now() });
      localStorage.setItem('luna_demo_reservations', JSON.stringify(existing));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '19:00',
      guests: 2,
      seatingArea: 'main',
      specialRequests: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="reservation" className="py-20 md:py-32 bg-[#101014] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle={t('reservation.subtitle')}
          title={t('reservation.title')}
          description={t('reservation.description')}
        />

        <div className="bg-[#141418] border border-[#C5A880]/20 p-8 sm:p-12 shadow-2xl relative">
          
          {isSuccess ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-serif text-[#F4F0EA]">
                {t('reservation.success.title')}
              </h3>

              <p className="text-sm md:text-base text-[#AAA6A0] max-w-md mx-auto font-light leading-relaxed">
                {t('reservation.success.message')}
              </p>

              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#C5A880] text-[#0C0C0E] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#D8B98F] transition-colors"
                >
                  {t('reservation.success.close')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                    {t('reservation.label.name')} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#0C0C0E] border text-[#F4F0EA] text-sm focus:outline-none focus:ring-1 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#C5A880]/20 focus:ring-[#C5A880]'
                    }`}
                    placeholder="e.g. Eleanor Vance"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                    {t('reservation.label.email')} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#0C0C0E] border text-[#F4F0EA] text-sm focus:outline-none focus:ring-1 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#C5A880]/20 focus:ring-[#C5A880]'
                    }`}
                    placeholder="eleanor@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                    {t('reservation.label.phone')} *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#0C0C0E] border text-[#F4F0EA] text-sm focus:outline-none focus:ring-1 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#C5A880]/20 focus:ring-[#C5A880]'
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                    {t('reservation.label.date')} *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#0C0C0E] border text-[#F4F0EA] text-sm focus:outline-none focus:ring-1 ${
                      errors.date ? 'border-red-500 focus:ring-red-500' : 'border-[#C5A880]/20 focus:ring-[#C5A880]'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                    {t('reservation.label.time')}
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0C0C0E] border border-[#C5A880]/20 text-[#F4F0EA] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
                  >
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                    {t('reservation.label.guests')}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#0C0C0E] border border-[#C5A880]/20 text-[#F4F0EA] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Seating Preference */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                  {t('reservation.label.seating')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'main', labelKey: 'reservation.seating.main' },
                    { id: 'terrace', labelKey: 'reservation.seating.terrace' },
                    { id: 'chefs_table', labelKey: 'reservation.seating.chefs_table' },
                    { id: 'private_dining', labelKey: 'reservation.seating.private_dining' },
                  ].map((seat) => (
                    <button
                      key={seat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingArea: seat.id as any })}
                      className={`p-3 text-xs uppercase tracking-wider border text-center transition-all ${
                        formData.seatingArea === seat.id
                          ? 'border-[#C5A880] bg-[#C5A880]/15 text-[#C5A880] font-semibold'
                          : 'border-[#C5A880]/20 bg-[#0C0C0E] text-[#AAA6A0] hover:text-[#F4F0EA]'
                      }`}
                    >
                      {t(seat.labelKey)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#F4F0EA]">
                  {t('reservation.label.special')}
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0C0C0E] border border-[#C5A880]/20 text-[#F4F0EA] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
                  placeholder="Allergies, anniversary celebrations, dietary requirements..."
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-[#C5A880] text-[#0C0C0E] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#D8B98F] transition-all shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? t('reservation.button.submitting') : t('reservation.button.submit')}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
