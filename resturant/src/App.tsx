import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RestaurantIntro } from './components/RestaurantIntro';
import { FeaturedMenu } from './components/FeaturedMenu';
import { FullMenu } from './components/FullMenu';
import { AboutSection } from './components/AboutSection';
import { ChefSection } from './components/ChefSection';
import { GallerySection } from './components/GallerySection';
import { Testimonials } from './components/Testimonials';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0E] text-[#F4F0EA] flex flex-col font-sans selection:bg-[#C5A880] selection:text-[#0C0C0E]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Application Sections */}
      <main className="flex-grow">
        <Hero />
        <RestaurantIntro />
        <FeaturedMenu />
        <FullMenu />
        <AboutSection />
        <ChefSection />
        <GallerySection />
        <Testimonials />
        <ReservationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
