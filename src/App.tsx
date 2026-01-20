import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { LegalPage } from './pages/LegalPage';
import { LegalFooter } from './components/organisms/LegalFooter';
import { ContactButtons } from './components/molecules/ContactButtons';
import Navbar from './components/organisms/Navbar';
import MaintenanceMode from './pages/MaintenanceMode'; // וודא שהקובץ קיים בנתיב הזה
import { AccessibilityPage } from './pages/AccessibilityPage';
import { TermsOfUse } from './pages/TermsOfUse';
import { TermsEnforcedModal } from './components/organisms/TermsModal';
import {PrivacyPolicy} from './pages/PrivacyPolicy';

export const App: React.FC = () => {
  // const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // 1. בדיקה האם המשתמש נכנס דרך הנתיב הסודי
  //   if (location.pathname === '/dev-preview') {
  //     localStorage.setItem('dev_access', 'true'); // שמירת אישור בדפדפן
  //     setIsAuthorized(true);
  //     navigate('/', { replace: true }); // העברה לדף הבית וניקוי שורת הכתובת
  //   } 
  //   // 2. בדיקה האם כבר קיים אישור שמור מהעבר
  //   else if (localStorage.getItem('dev_access') === 'true') {
  //     setIsAuthorized(true);
  //   }
  // }, [location.pathname, navigate]);

  // // אם המשתמש אינו הבעלים (לא מורשה) - מציגים רק את דף התחזוקה
  // if (!isAuthorized) {
  //   return <MaintenanceMode />;
  // }

  // // אם המשתמש מורשה (הבעלים) - מציגים את האתר המלא
  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/legal/:page" element={<LegalPage />} />
        <Route path="/termofuse" element={<TermsOfUse />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
      </Routes>

      <ContactButtons />
      <LegalFooter />
    </div>
  );
};