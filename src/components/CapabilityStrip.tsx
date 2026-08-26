import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CapabilityStrip.css';

export default function CapabilityStrip() {
  const { tArray } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const items = tArray('capabilities.items');

  return (
    <section className="capability-strip" aria-label="Core capabilities">
      <div className={`container capability-strip__inner ${isVisible ? 'revealed' : ''}`} ref={ref}>
        <div className="capability-strip__list">
          {items.map((item, i) => (
            <span key={i} className="capability-strip__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
