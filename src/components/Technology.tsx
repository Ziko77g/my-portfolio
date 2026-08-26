import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { technologies } from '../data/technologies';
import './Technology.css';

export default function Technology() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="technologies" className="technology section">
      <div className="container">
        <div ref={ref} className={`technology__inner ${isVisible ? 'technology__inner--visible' : ''}`}>
          <span className="eyebrow">{t('tech.eyebrow')}</span>
          <p className="technology__title">{t('tech.title')}</p>
          <div className="technology__grid">
            {technologies.map((tech, i) => (
              <div key={tech.name} className="technology__item" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="technology__name">{tech.name}</span>
                <span className="technology__category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
