import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sidebar } from '../components/navigation/Sidebar';
import { TopBar } from '../components/navigation/TopBar';
import { MobileNav } from '../components/navigation/MobileNav';
import { CommandPalette } from '../features/global-search/CommandPalette';
import { UploadModal } from '../features/upload/UploadModal';
import { ToastContainer } from '../components/common/ToastContainer';

// Page components
import { LandingPage } from '../pages/LandingPage';
import { OverviewPage } from '../pages/OverviewPage';
import { DocumentsPage } from '../pages/DocumentsPage';
import { DocumentWorkspacePage } from '../pages/DocumentWorkspacePage';
import { AnalyticsPage } from '../pages/AnalyticsPage';
import { HistoryPage } from '../pages/HistoryPage';
import { SettingsPage } from '../pages/SettingsPage';

export const AppLayout: React.FC = () => {
  const { currentPage, dir } = useApp();
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  // If current page is landing, render LandingPage standalone
  if (currentPage === 'landing') {
    return (
      <div dir={dir} className="min-h-screen bg-slate-950 text-slate-100">
        <LandingPage />
        <CommandPalette />
        <UploadModal />
        <ToastContainer />
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <OverviewPage />;
      case 'documents':
        return <DocumentsPage />;
      case 'workspace':
        return <DocumentWorkspacePage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'history':
        return <HistoryPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div dir={dir} className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      {/* Mobile Slide-over Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Main View Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <TopBar onOpenMobileNav={() => setMobileNavOpen(true)} />
        <main className="flex-1">
          {renderPage()}
        </main>
      </div>

      {/* Global Modals & Notifications */}
      <CommandPalette />
      <UploadModal />
      <ToastContainer />
    </div>
  );
};
