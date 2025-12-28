import React from 'react';
import { Link } from 'react-router-dom';

export const LegalFooter: React.FC = () => {
  return (
    <footer style={footerStyle} aria-label="מידע משפטי וקישורים">
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li><Link to="/legal/terms" style={linkStyle}>תנאי שימוש</Link></li>
          <li style={divider}>|</li>
          <li><Link to="/legal/privacy" style={linkStyle}>מדיניות פרטיות</Link></li>
          <li style={divider}>|</li>
          <li><Link to="/legal/accessibility" style={linkStyle}>הצהרת נגישות</Link></li>
        </ul>
      </nav>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontWeight: 'bold', margin: '5px 0' }}>© כל הזכויות שמורות - בוסר המלאכים</p>
        <p style={{ fontSize: '0.85rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          הקורסים הינם מידע בלבד ואינם מהווים תחליף לייעוץ רפואי או פסיכולוגי מקצועי. האחריות על היישום היא על המשתמש בלבד.
        </p>
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = { padding: '40px 5%', backgroundColor: '#023E8A', color: '#fff', direction: 'rtl' };
const navStyle: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '20px' };
const ulStyle: React.CSSProperties = { listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '15px', padding: 0, margin: 0, flexWrap: 'wrap' };
const linkStyle: React.CSSProperties = { color: '#fff', textDecoration: 'underline', fontWeight: '500' };
const divider: React.CSSProperties = { opacity: 0.5 };