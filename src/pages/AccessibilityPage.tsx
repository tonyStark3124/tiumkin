import React from 'react';

export const AccessibilityPage: React.FC = () => {
  const colors = {
    background: '#F9F9F9',
    heading: '#035D92',
    text: '#222',
    link: '#007791',
    divider: '#CCC'
  };

  return (
    <main 
      style={wrapper} 
      aria-label="דף הצהרת נגישות"
      lang="he"
    >
      <h1 style={mainTitle}>הצהרת נגישות</h1>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>מחויבות לנגישות</h2>
        <p style={textStyle}>
          אנו ב–<strong>בוסר המלאכים</strong> מחויבים לאפשר חוויית גלישה נגישה, שוויונית ומכבדת לכלל המשתמשים,
          כולל אנשים עם מוגבלויות מסוגים שונים.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>תקנים ואופן ההתאמה</h2>
        <ul style={listStyle}>
          <li><strong>תקן ישראלי:</strong> ת"י 5568 – נגישות תכנים באינטרנט – רמת AA</li>
          <li><strong>תקן בינלאומי:</strong> WCAG 2.1 – רמת AA</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>התאמות נגישות שבוצעו</h2>
        <ul style={listStyle}>
          <li>ניווט מלא באמצעות מקלדת בלבד</li>
          <li>מבנה סמנטי ברור של HTML, כולל היררכיית כותרות תקנית</li>
          <li>טקסטים ברורים בעברית עם ניגודיות צבעים מספקת</li>
          <li>תיאורי טקסט חלופי (alt) לכל התמונות המשמעותיות</li>
          <li>תמיכה בקוראי מסך נפוצים: NVDA, JAWS, VoiceOver ועוד</li>
          <li>קישורים ואובייקטים עם תוויות ברורות בעברית</li>
          <li>תמיכה בהגדלת טקסט דרך הגדרות הדפדפן</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>מגבלות ידועות וחריגות</h2>
        <p style={textStyle}>
          יתכן שחלק מהתכנים או רכיבים טרם הונגשו במלואם.  
          חלק מתכנים צד ג’ (כגון PDF או יישומים חיצוניים) עשויים שלא להיות נגישים במלואם.  
          ייתכן שחלק מהמדיה חסר תמלול מלא או כתוביות תקניות.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>יצירת קשר בנושא נגישות</h2>
        <p style={textStyle}>
          נשמח לשמוע ממך אם נתקלת בבעיה או יש לך רעיון לשיפור הנגישות באתר.
        </p>
        <ul style={listStyle}>
          <li>דואר אלקטרוני: <a href="mailto:accessibility@bosserha.com" style={linkStyle}>accessibility@bosserha.com</a></li>
          <li>טלפון: +972 54-845-5029</li>
          <li>שעות מענה: ימי א’–ה’, 09:00–17:00</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>עדכונים ושיפור מתמיד</h2>
        <p style={textStyle}>
          אנו מחויבים לעדכן את דף זה תוך תיעדוף שינויים משמעותיים באתר או בהתקדמות ביישום תקני נגישות.
        </p>
        <p style={textStyle}><strong>תאריך עדכון אחרון:</strong> 30.12.2025</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>מידע משפטי ורפרנסים</h2>
        <p style={textStyle}>
          ההצהרה פורסמה בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ותקנות נגישות השירות, וכן בהתאם להנחיות WCAG 2.1 Level AA.
        </p>
      </section>
    </main>
  );
};

// --- Styles ---

const wrapper: React.CSSProperties = {
  padding: 'clamp(30px, 5vw, 80px)',
  maxWidth: '1000px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#F9F9F9',
  color: '#222',
  direction: 'rtl',
  lineHeight: 1.6
};

const mainTitle: React.CSSProperties = {
  fontSize: 'clamp(2rem, 5vw + 1rem, 3rem)',
  fontWeight: 900,
  textAlign: 'center',
  marginBottom: 'clamp(20px, 4vw, 40px)',
  color: '#035D92'
};

const sectionStyle: React.CSSProperties = {
  marginBottom: 'clamp(30px, 5vw, 50px)'
};

const sectionTitle: React.CSSProperties = {
  fontSize: 'clamp(1.5rem, 4vw + 0.5rem, 2rem)',
  fontWeight: 800,
  marginBottom: 'clamp(15px, 3vw, 25px)',
  color: '#035D92'
};

const textStyle: React.CSSProperties = {
  fontSize: 'clamp(1rem, 1.2vw + 0.2rem, 1.2rem)',
  marginBottom: '1em'
};

const listStyle: React.CSSProperties = {
  marginLeft: '0',
  paddingLeft: '1em',
  listStyleType: 'disc'
};

const linkStyle: React.CSSProperties = {
  color: '#007791',
  textDecoration: 'underline'
};
