import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { NotificationProvider } from './context/NotificationContext';
import { AppLayout } from './components/layout/AppLayout';

import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { Customers } from './pages/Customers';
import { Products } from './pages/Products';
import { Analytics } from './pages/Analytics';
import { Tasks } from './pages/Tasks';
import { Team } from './pages/Team';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NotificationProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="customers" element={<Customers />} />
                <Route path="products" element={<Products />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="team" element={<Team />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </HashRouter>
        </NotificationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
