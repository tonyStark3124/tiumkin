import React from 'react';
import { Link } from 'react-router-dom';

export const LegalFooter: React.FC = () => {
  return (
    <footer className="legal-footer" aria-label="קישורים משפטיים">
      <nav className="container">
        <ul className="legal-footer__links">
          <li><Link to="/legal/terms">תנאי שימוש</Link></li>
          <li><Link to="/legal/privacy">מדיניות פרטיות</Link></li>
          <li><Link to="/legal/accessibility">הצהרת נגישות</Link></li>
        </ul>
      </nav>
      <div className="container">
        <p className="legal-footer__copyright">© כל הזכויות שמורות</p>
        <p className="legal-footer__disclaimer">הקורסים הינם מידע בלבד ואינם מהווים תחליף לייעוץ רפואי/פסיכולוגי. האחריות על היישום היא על המשתמש.</p>
      </div>
    </footer>
  );
};
