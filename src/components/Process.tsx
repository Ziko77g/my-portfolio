import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

export default function Process() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const steps = [0, 1, 2, 3].map((i) => ({
    number: t(`process.steps.${i}.number`),
    title: t(`process.steps.${i}.title`),
    description: t(`process.steps.${i}.description`),
  }));

  return (
    <section id="process" className="process section">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerVisible ? 'revealed' : ''}`} style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
          <span className="eyebrow">{t('process.eyebrow')}</span>
          <h2 className="headline-lg">{t('process.title')}</h2>
        </div>

        <div className="process__grid">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: { number: string; title: string; description: string }; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`process-step ${isVisible ? 'process-step--visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="process-step__number">{step.number}</span>
      <h3 className="process-step__title">{step.title}</h3>
      <p className="process-step__description">{step.description}</p>
    </div>
  );
}
