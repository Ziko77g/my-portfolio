import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <ErrorBoundary>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <ScrollToTop />
            <Navbar />
            <div id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/:projectId" element={<CaseStudy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </ErrorBoundary>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
