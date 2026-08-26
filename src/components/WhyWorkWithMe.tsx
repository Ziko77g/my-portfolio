import { MessageSquare, Code2, Smartphone, Bot, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyWorkWithMe.css';

const icons = [MessageSquare, Code2, Smartphone, Bot, Sparkles];

export default function WhyWorkWithMe() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const items = [0, 1, 2, 3, 4].map((i) => ({
    title: t(`whyMe.items.${i}.title`),
    description: t(`whyMe.items.${i}.description`),
    Icon: icons[i],
  }));

  return (
    <section id="why-me" className="why-me section">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerVisible ? 'revealed' : ''}`} style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
          <span className="eyebrow">{t('whyMe.eyebrow')}</span>
          <h2 className="headline-lg">{t('whyMe.title')}</h2>
        </div>

        <div className="why-me__grid">
          {items.map((item, index) => (
            <WhyItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItem({ item, index }: { item: { title: string; description: string; Icon: typeof MessageSquare }; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const { Icon } = item;

  return (
    <div
      ref={ref}
      className={`why-item ${isVisible ? 'why-item--visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="why-item__icon">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="why-item__title">{item.title}</h3>
        <p className="why-item__description">{item.description}</p>
      </div>
    </div>
  );
}
