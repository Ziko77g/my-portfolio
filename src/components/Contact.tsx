import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { submitContactInquiry, type ContactPayload } from '../services/contactService';
import './Contact.css';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { t, tArray } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const projectTypes = tArray('contact.projectTypes');
  const budgetRanges = tArray('contact.budgetRanges');

  const [formData, setFormData] = useState<ContactPayload>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<'live' | 'preview'>('preview');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.validation.nameRequired');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.validation.emailInvalid');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.validation.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await submitContactInquiry(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmissionMode(result.mode);
      setIsSubmitted(true);
    }
  };

  const handleChange = (field: keyof ContactPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    const isLive = submissionMode === 'live';

    return (
      <section id="contact" className="contact section">
        <div className="container container--narrow">
          <div className="contact__success">
            <CheckCircle size={48} className="contact__success-icon" />
            <h2 className="headline-md">
              {isLive ? t('contact.success.liveTitle') : t('contact.success.title')}
            </h2>
            <p className="contact__success-message">
              {isLive ? t('contact.success.liveMessage') : t('contact.success.message')}
            </p>
            {!isLive && (
              <div className="contact__success-note">
                <AlertCircle size={16} />
                <span>{t('contact.success.note')}</span>
              </div>
            )}
            <button
              className="btn btn-secondary"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
              }}
            >
              {t('contact.success.sendAnother')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact section">
      <div className="container container--narrow">
        <div ref={ref} className={`contact__inner ${isVisible ? 'contact__inner--visible' : ''}`}>
          <div className="contact__header">
            <span className="eyebrow">{t('contact.eyebrow')}</span>
            <h2 className="headline-lg">{t('contact.headline')}</h2>
            <p className="contact__description">{t('contact.description')}</p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">{t('contact.form.name')}</label>
                <input
                  id="contact-name"
                  type="text"
                  className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                  placeholder={t('contact.form.namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  autoComplete="name"
                />
                {errors.name && <span className="contact__error" role="alert">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">{t('contact.form.email')}</label>
                <input
                  id="contact-email"
                  type="email"
                  className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  autoComplete="email"
                />
                {errors.email && <span className="contact__error" role="alert">{errors.email}</span>}
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-type" className="contact__label">{t('contact.form.projectType')}</label>
                <select
                  id="contact-type"
                  className="contact__input contact__select"
                  value={formData.projectType}
                  onChange={(e) => handleChange('projectType', e.target.value)}
                >
                  <option value="">{t('contact.form.projectTypePlaceholder')}</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-budget" className="contact__label">{t('contact.form.budget')}</label>
                <select
                  id="contact-budget"
                  className="contact__input contact__select"
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                >
                  <option value="">{t('contact.form.budgetPlaceholder')}</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">{t('contact.form.message')}</label>
              <textarea
                id="contact-message"
                className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                placeholder={t('contact.form.messagePlaceholder')}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={6}
              />
              {errors.message && <span className="contact__error" role="alert">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
