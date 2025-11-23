import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LegalPage } from './pages/LegalPage';
import { LegalFooter } from './components/organisms/LegalFooter';
import { ContactButtons } from './components/molecules/ContactButtons';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal/:page" element={<LegalPage />} />
      </Routes>

      <ContactButtons />
      <LegalFooter />
    </div>
  );
};
