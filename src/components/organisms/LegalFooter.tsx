import React from 'react';
import { Link } from 'react-router-dom';

export const LegalFooter: React.FC = () => {
  return (
    <footer
      style={footerStyle}
      aria-label="מידע משפטי וזכויות יוצרים"
    >
      <nav
        style={navStyle}
        aria-label="ניווט משפטי"
      >
        <ul style={ulStyle}>
          <li>
            <Link
              to="/termofuse"
              style={linkStyle}
              className="focus-outline"
              aria-label="מעבר לתנאי השימוש באתר"
            >
              תנאי שימוש
            </Link>
          </li>

          <li style={dividerStyle} aria-hidden="true">|</li>

          <li>
            <Link
              to="/PrivacyPolicy"
              style={linkStyle}
              className="focus-outline"
              aria-label="מעבר למדיניות הפרטיות"
            >
              מדיניות פרטיות
            </Link>
          </li>

          <li style={dividerStyle} aria-hidden="true">|</li>

          <li>
            <Link
              to="/accessibility"
              style={linkStyle}
              className="focus-outline"
              aria-label="מעבר להצהרת הנגישות"
            >
              הצהרת נגישות
            </Link>
          </li>
        </ul>
      </nav>

      <div style={contentContainerStyle}>
        <p style={copyrightStyle}>
          © כל הזכויות שמורות – בוסר המלאכים
        </p>

        <p style={disclaimerStyle}>
          הקורסים הינם מידע בלבד ואינם מהווים תחליף לייעוץ רפואי או פסיכולוגי מקצועי.
          האחריות על היישום היא על המשתמש בלבד.
        </p>
      </div>

      {/* Focus styles for keyboard users */}
      <style>{`
        .focus-outline:focus-visible {
          outline: 3px solid #A67C00;
          outline-offset: 4px;
          border-radius: 4px;
        }
      `}</style>
    </footer>
  );
};

// --- Styles ---

const footerStyle: React.CSSProperties = {
  padding: 'clamp(20px, 5vh, 60px) 5%',
  backgroundColor: '#023E8A',
  color: '#fff',
  direction: 'rtl',
  width: '100%',
  boxSizing: 'border-box',
};

const navStyle: React.CSSProperties = {
  borderBottom: '1px solid rgba(255,255,255,0.2)',
  paddingBottom: 'clamp(15px, 3vh, 30px)',
};

const ulStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: 'clamp(10px, 4vw, 30px)',
  padding: 0,
  margin: 0,
  flexWrap: 'wrap',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'underline',
  fontWeight: '500',
  fontSize: 'clamp(14px, 1.2vw + 10px, 18px)',
};

const dividerStyle: React.CSSProperties = {
  opacity: 0.5,
  display: 'flex',
  alignItems: 'center',
  fontSize: 'clamp(12px, 1vw + 5px, 16px)',
};

const contentContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: 'clamp(15px, 4vh, 30px)',
};

const copyrightStyle: React.CSSProperties = {
  fontWeight: 'bold',
  margin: 'clamp(5px, 1vh, 12px) 0',
  fontSize: 'clamp(16px, 1.5vw + 10px, 22px)',
};

const disclaimerStyle: React.CSSProperties = {
  fontSize: 'clamp(12px, 0.8vw + 8px, 15px)',
  maxWidth: '90%',
  width: '800px',
  margin: '0 auto',
  opacity: 0.9,
  lineHeight: '1.5',
};
