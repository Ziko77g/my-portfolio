import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Code2, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';
import './CaseStudy.css';

export default function CaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const { t, tArray, direction } = useLanguage();

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[currentIndex];

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const key = project.translationKey;
  const features = tArray(`${key}.features`);
  const hasAiDisclaimer = key === 'documind';

  return (
    <main className="case-study">
      <CaseStudyHero project={project} tKey={key} t={t} direction={direction} />
      <CaseStudyOverview tKey={key} t={t} />
      <CaseStudyChallenge tKey={key} t={t} />
      <CaseStudyFeatures tKey={key} t={t} features={features} technologies={project.technologies} />
      <CaseStudyDesign tKey={key} t={t} />
      {hasAiDisclaimer && <CaseStudyAI tKey={key} t={t} />}
      {key === 'nexora' && <CaseStudyDataNote tKey={key} t={t} />}
      <CaseStudyCTA
        t={t}
        direction={direction}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </main>
  );
}

function CaseStudyHero({
  project,
  tKey,
  t,
  direction,
}: {
  project: (typeof projects)[0];
  tKey: string;
  t: (k: string) => string;
  direction: string;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const isRtl = direction === 'rtl';

  return (
    <section className="cs-hero" ref={ref}>
      <div className="container">
        <div className={`cs-hero__inner ${isVisible ? 'cs-hero__inner--visible' : ''}`}>
          <Link to="/#work" className="cs-hero__back">
            {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {t('caseStudy.backToWork')}
          </Link>

          <div className="cs-hero__meta">
            <span className="status-badge">{t(`${tKey}.status`)}</span>
            {project.statusDetail && (
              <span className="status-badge">{t(`${tKey}.statusDetail`)}</span>
            )}
          </div>

          <h1 className="headline-xl cs-hero__title">{t(`${tKey}.name`)}</h1>
          <p className="cs-hero__label">{t(`${tKey}.label`)}</p>
          <p className="cs-hero__desc">{t(`${tKey}.shortDesc`)}</p>

          <div className="cs-hero__links">
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t('caseStudy.viewLiveDemo')} <ExternalLink size={14} />
              </a>
            ) : (
              <a
                href="#preview"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('.cs-hero__image')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('caseStudy.interactivePreview')} <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Code2 size={16} /> {t('caseStudy.viewSource')}
              </a>
            )}
          </div>
        </div>

        <div className={`cs-hero__image ${isVisible ? 'cs-hero__image--visible' : ''}`}>
          <div className="cs-hero__frame">
            <div className="cs-hero__frame-bar">
              <span className="cs-hero__dot" />
              <span className="cs-hero__dot" />
              <span className="cs-hero__dot" />
            </div>
            <img
              src={project.image}
              alt={`${t(`${tKey}.name`)} — ${t(`${tKey}.label`)}`}
              className="cs-hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyOverview({ tKey, t }: { tKey: string; t: (k: string) => string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="cs-section" ref={ref}>
      <div className={`container container--narrow cs-reveal ${isVisible ? 'cs-reveal--visible' : ''}`}>
        <span className="eyebrow">{t('caseStudy.overview')}</span>
        <p className="cs-section__text">{t(`${tKey}.overview`)}</p>
      </div>
    </section>
  );
}

function CaseStudyChallenge({ tKey, t }: { tKey: string; t: (k: string) => string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="cs-section cs-section--alt" ref={ref}>
      <div className={`container container--narrow cs-reveal ${isVisible ? 'cs-reveal--visible' : ''}`}>
        <div className="cs-two-col">
          <div>
            <span className="eyebrow">{t('caseStudy.challenge')}</span>
            <h2 className="headline-sm">{t(`${tKey}.challenge`)}</h2>
          </div>
          <div>
            <span className="eyebrow">{t('caseStudy.approach')}</span>
            <p className="cs-section__text">{t(`${tKey}.approach`)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyFeatures({
  tKey,
  t,
  features,
  technologies,
}: {
  tKey: string;
  t: (k: string) => string;
  features: string[];
  technologies: string[];
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="cs-section" ref={ref}>
      <div className={`container container--narrow cs-reveal ${isVisible ? 'cs-reveal--visible' : ''}`}>
        <div className="cs-two-col">
          <div>
            <span className="eyebrow">{t('caseStudy.keyFeatures')}</span>
            <ul className="cs-features">
              {features.map((f, i) => (
                <li key={i} className="cs-feature">{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">{t('caseStudy.technology')}</span>
            <div className="cs-tech-tags">
              {technologies.map((tech) => (
                <span key={tech} className="cs-tech-tag">{tech}</span>
              ))}
            </div>

            <div className="cs-design-section">
              <span className="eyebrow">{t('caseStudy.responsiveExperience')}</span>
              <p className="cs-section__text">{t(`${tKey}.responsive`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyDesign({ tKey, t }: { tKey: string; t: (k: string) => string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="cs-section cs-section--alt" ref={ref}>
      <div className={`container container--narrow cs-reveal ${isVisible ? 'cs-reveal--visible' : ''}`}>
        <span className="eyebrow">{t('caseStudy.designDecisions')}</span>
        <p className="cs-section__text">{t(`${tKey}.designDecisions`)}</p>

        <div className="cs-challenges">
          <span className="eyebrow">{t('caseStudy.challenges')}</span>
          <p className="cs-section__text">{t(`${tKey}.challenges`)}</p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyAI({ tKey, t }: { tKey: string; t: (k: string) => string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="cs-section" ref={ref}>
      <div className={`container container--narrow cs-reveal ${isVisible ? 'cs-reveal--visible' : ''}`}>
        <div className="cs-ai-notice">
          <AlertTriangle size={20} className="cs-ai-notice__icon" />
          <div>
            <span className="eyebrow">{t('caseStudy.aiDisclaimer')}</span>
            <p className="cs-section__text">{t(`${tKey}.aiDisclaimer`)}</p>
          </div>
        </div>

        <div className="cs-ai-arch">
          <span className="eyebrow">{t('caseStudy.aiArchitecture')}</span>
          <p className="cs-section__text">{t(`${tKey}.aiArchitecture`)}</p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyDataNote({ tKey, t }: { tKey: string; t: (k: string) => string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="cs-section" ref={ref}>
      <div className={`container container--narrow cs-reveal ${isVisible ? 'cs-reveal--visible' : ''}`}>
        <div className="cs-data-note">
          <span className="eyebrow">{t('caseStudy.dataNote')}</span>
          <p className="cs-section__text">{t(`${tKey}.dataNote`)}</p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCTA({
  t,
  direction,
  prevProject,
  nextProject,
}: {
  t: (k: string) => string;
  direction: string;
  prevProject: (typeof projects)[0];
  nextProject: (typeof projects)[0];
}) {
  const { ref, isVisible } = useScrollAnimation();
  const isRtl = direction === 'rtl';

  return (
    <section className="cs-cta" ref={ref}>
      <div className={`container container--narrow cs-reveal ${isVisible ? 'cs-reveal--visible' : ''}`}>
        <div className="cs-cta__inner">
          <div className="cs-cta__project-nav">
            <Link to={prevProject.route} className="cs-cta__project-link">
              <span className="cs-cta__project-dir">
                {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                {t('caseStudy.prevProject')}
              </span>
              <span className="cs-cta__project-name">{t(`${prevProject.translationKey}.name`)}</span>
            </Link>

            <Link to={nextProject.route} className="cs-cta__project-link cs-cta__project-link--next">
              <span className="cs-cta__project-dir">
                {t('caseStudy.nextProject')}
                {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </span>
              <span className="cs-cta__project-name">{t(`${nextProject.translationKey}.name`)}</span>
            </Link>
          </div>

          <div className="cs-cta__nav">
            <Link to="/#work" className="btn btn-secondary">
              {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {t('caseStudy.backToWork')}
            </Link>
            <Link to="/#contact" className="btn btn-primary">
              {t('caseStudy.startProject')}
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
