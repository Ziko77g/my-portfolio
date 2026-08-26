import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';
import './FeaturedWork.css';

export default function FeaturedWork() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="work" className="featured-work section">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerVisible ? 'revealed' : ''}`} style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
          <span className="eyebrow">{t('work.eyebrow')}</span>
          <h2 className="headline-lg">{t('work.title')}</h2>
          <p>{t('work.description')}</p>
        </div>

        <div className="featured-work__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { t, direction } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;
  const isRtl = direction === 'rtl';

  return (
    <article
      ref={ref}
      className={`project-card project-card--${isEven ? 'left' : 'right'} ${isVisible ? 'project-card--visible' : ''}`}
    >
      <Link to={project.route} className="project-card__link" aria-label={`View ${t(`${project.translationKey}.name`)} case study`}>
        <div className="project-card__image-wrapper">
          <div className="project-card__frame">
            <div className="project-card__frame-bar">
              <span className="project-card__dot" />
              <span className="project-card__dot" />
              <span className="project-card__dot" />
            </div>
            <img
              src={project.image}
              alt={`${t(`${project.translationKey}.name`)} — ${t(`${project.translationKey}.label`)}`}
              loading="lazy"
              className="project-card__img"
            />
          </div>
          <div className="project-card__overlay">
            <span className="project-card__view">
              {t('work.exploreProject')}
              {isRtl ? <ArrowUpLeft size={18} /> : <ArrowUpRight size={18} />}
            </span>
          </div>
        </div>

        <div className="project-card__info">
          <div className="project-card__meta">
            <span className="project-card__number">0{index + 1}</span>
            <span className="status-badge">{t(`${project.translationKey}.status`)}</span>
          </div>
          <h3 className="project-card__title headline-sm">{t(`${project.translationKey}.name`)}</h3>
          <p className="project-card__label">{t(`${project.translationKey}.label`)}</p>
          <p className="project-card__desc">{t(`${project.translationKey}.shortDesc`)}</p>
          <div className="project-card__tech">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="project-card__tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
