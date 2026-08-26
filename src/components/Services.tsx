import { ArrowRight, ArrowLeft, Globe, LayoutDashboard, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const icons = [Globe, LayoutDashboard, Bot];

export default function Services() {
  const { t, tArray, direction } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const isRtl = direction === 'rtl';

  const services = [1, 2, 3].map((num) => ({
    title: t(`services.service${num}.title`),
    description: t(`services.service${num}.description`),
    features: tArray(`services.service${num}.features`),
    Icon: icons[num - 1],
  }));

  return (
    <section id="services" className="services section">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerVisible ? 'revealed' : ''}`} style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="headline-lg">{t('services.title')}</h2>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="services__cta-wrapper">
          <a href="#contact" className="btn btn-secondary services__cta" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {t('services.cta')}
            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: { title: string; description: string; features: string[]; Icon: typeof Globe }; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const { Icon } = service;

  return (
    <div
      ref={ref}
      className={`service-card ${isVisible ? 'service-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="service-card__icon">
        <Icon size={24} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      <ul className="service-card__features">
        {service.features.map((feature, i) => (
          <li key={i} className="service-card__feature">{feature}</li>
        ))}
      </ul>
    </div>
  );
}
