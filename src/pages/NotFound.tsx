import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './NotFound.css';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">{t('notFound.title')}</span>
        <h1 className="headline-lg not-found__message">{t('notFound.message')}</h1>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            {t('notFound.cta')}
          </Link>
          <button className="btn btn-secondary" onClick={() => window.history.back()}>
            <ArrowLeft size={16} />
            {t('notFound.goBack')}
          </button>
        </div>
      </div>
    </main>
  );
}
