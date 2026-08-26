import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const { t, tArray } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const focusAreas = tArray('about.focus');

  return (
    <section id="about" className="about section">
      <div className="container">
        <div ref={ref} className={`about__inner ${isVisible ? 'about__inner--visible' : ''}`}>
          <div className="about__content">
            <span className="eyebrow">{t('about.eyebrow')}</span>
            <h2 className="headline-lg about__title">{t('about.title')}</h2>
            <p className="about__description">{t('about.description')}</p>
          </div>

          <div className="about__visual">
            <div className="about__brand-mark">
              <span className="about__initial">Z</span>
            </div>
            <div className="about__focus-areas">
              <h3 className="about__focus-title">{t('about.focusTitle')}</h3>
              <div className="about__tags">
                {focusAreas.map((area, i) => (
                  <span key={i} className="about__tag">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
