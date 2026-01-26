import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

/**
 * Accessibility Statement - Final Consistent Version
 * Includes: Scroll to top, Accessibility focus, Navbar offset, and uniform styling.
 */

export const AccessibilityPage: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lastUpdated = "30.12.2025";
  const contactEmail = "m0548455029@gmail.com";

  useEffect(() => {
    // 1. גלילה לראש הדף בטעינה
    window.scrollTo(0, 0);

    // 2. העברת פוקוס הנגישות לראש הדף
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  return (
    
    <main
      style={wrapperStyle}
      aria-labelledby="accessibility-title"
      role="main"
    >
      <Helmet>
        <title>הצהרת נגישות | בוסר המלאכים</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <h1 
        id="accessibility-title" 
        ref={titleRef}
        tabIndex={-1}
        style={titleStyle}
      >
        הצהרת נגישות
      </h1>

      <section style={sectionStyle}>
        <h2>מחויבות לנגישות</h2>
        <p>
          אנו ב–<strong>בוסר פתרונות חינוך</strong> מחויבים לאפשר חוויית גלישה נגישה, שוויונית ומכבדת לכלל המשתמשים,
          כולל אנשים עם מוגבלויות מסוגים שונים. אנו רואים בנגישות ערך עליון וחלק בלתי נפרד מתפיסת השירות שלנו.
        </p>

        <h2>תקנים ואופן ההתאמה</h2>
        <ul>
          <li><strong>תקן ישראלי:</strong> ת"י 5568 – נגישות תכנים באינטרנט – רמת AA</li>
          <li><strong>תקן בינלאומי:</strong> WCAG 2.1 – רמת AA</li>
        </ul>

        <h2>התאמות נגישות שבוצעו</h2>
        <p>באתר זה הוטמעו התאמות טכנולוגיות רבות, ביניהן:</p>
        <ul>
          <li>ניווט מלא באמצעות מקלדת (Keyboard Navigation)</li>
          <li>מבנה סמנטי ברור והיררכיית כותרות תקנית</li>
          <li>ניגודיות צבעים גבוהה לקריאה נוחה</li>
          <li>טקסט חלופי (Alt Text) לתמונות</li>
          <li>תמיכה מלאה בקוראי מסך נפוצים (NVDA, JAWS)</li>
          <li>מנגנון "דלג לתוכן המרכזי" ופוקוס ברור על אלמנטים</li>
        </ul>

        <h2>מגבלות ידועות</h2>
        <p>
          למרות מאמצינו, ייתכן שחלק מהתכנים (כגון קבצי PDF חיצוניים או רכיבי צד ג') טרם הונגשו במלואם. 
          אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר לכלל האוכלוסייה להשתמש בו.
        </p>

        <h2>יצירת קשר בנושא נגישות</h2>
        <p>
          נתקלתם בבעיה? יש לכם הצעה לשיפור? נשמח לעמוד לרשותכם:
        </p>
        <div style={{ background: '#eef2f7', padding: '20px', borderRadius: '0.8rem', marginTop: '1rem' }}>
          <p><strong>דוא"ל:</strong> <a href={`mailto:${contactEmail}`} style={linkStyle}>{contactEmail}</a></p>
          <p><strong>טלפון:</strong> 054-845-5029</p>
          <p><strong>שעות מענה:</strong> ימי א’–ה’, 09:00–17:00</p>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
          <strong>תאריך עדכון אחרון:</strong> {lastUpdated}
        </p>
      </section>

      <button
        style={buttonStyle}
        onClick={() => navigate(-1)}
        aria-label="חזרה לדף הקודם"
      >
        חזרה לדף הקודם
      </button>
    </main>
  );
};

// --- Styles (Consistent with Terms and Privacy) ---

const wrapperStyle: React.CSSProperties = {
  padding: 'clamp(20px, 5vw, 60px)',
  marginTop: '80px', // בטיחות מהנאבבאר
  maxWidth: '900px',
  marginRight: 'auto',
  marginLeft: 'auto',
  direction: 'rtl',
  fontFamily: 'Arial, sans-serif',
  color: '#222',
  lineHeight: 1.6,
  outline: 'none'
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(1.8rem, 4vw + 1rem, 3rem)',
  color: '#023E8A',
  textAlign: 'center',
  marginBottom: '2rem',
  outline: 'none'
};

const sectionStyle: React.CSSProperties = {
  fontSize: 'clamp(0.95rem, 1vw + 0.3rem, 1.2rem)',
  background: '#f9f9f9',
  padding: 'clamp(20px, 3vw, 40px)',
  borderRadius: '1rem',
  border: '1px solid #ccc'
};

const linkStyle: React.CSSProperties = {
  color: '#023E8A',
  fontWeight: 'bold',
  textDecoration: 'underline'
};

const buttonStyle: React.CSSProperties = {
  marginTop: '2rem',
  display: 'block',
  width: '100%',
  padding: 'clamp(12px, 2vh, 18px)',
  fontSize: 'clamp(1rem, 1.5vw + 0.2rem, 1.2rem)',
  fontWeight: 'bold',
  backgroundColor: '#023E8A',
  color: '#fff',
  border: 'none',
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease'
};