import React from 'react';

/**
 * Privacy Policy Component
 * Styled to match the Terms of Use design perfectly.
 */

export const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "20 ינואר 2025";
  const contactEmail = "m0548455029@gmail.com";

  return (
    <main
      style={wrapperStyle}
      aria-labelledby="privacy-title"
      role="main"
    >
      <h1 id="privacy-title" style={titleStyle}>מדיניות פרטיות</h1>

      <section style={sectionStyle}>
        <p>אנו בבוסר פתרונות חינוך מכבדים את פרטיות המשתמשים. להלן פירוט האופן שבו אנו אוספים ומשתמשים במידע:</p>

        <h2>1. כללי</h2>
        <p>
          מדיניות זו מפרטת את האופן שבו האתר אוסף, משתמש ומגן על המידע האישי שלך. שימוש באתר מהווה הסכמה למדיניות זו.
        </p>

        <h2>2. הגנה על קטינים</h2>
        <p>
          האתר מיועד למשתמשים מעל גיל 18. איננו אוספים מידע על קטינים ביודעין. במידה ונודע לנו על איסוף מידע כזה, הוא יימחק לאלתר.
        </p>

        <h2>3. המידע שנאסף</h2>
        <p>
          אנו אוספים מידע שנמסר על ידך בטפסים (שם, טלפון, אימייל) וכן מידע טכני אוטומטי (כתובת IP, סוג דפדפן ונתוני גלישה) לצורך שיפור השירות.
        </p>

        <h2>4. השימוש במידע</h2>
        <p>
          המידע משמש למתן שירות, מענה לפניות, דיוור שיווקי (בכפוף להסכמתך), ושיפור חוויית המשתמש באתר.
        </p>

        <h2>5. עוגיות (Cookies)</h2>
        <p>
          האתר עשוי להשתמש בעוגיות לצורך תפעולו התקין ואיסוף נתונים סטטיסטיים. ניתן לבטל את העוגיות דרך הגדרות הדפדפן שלך.
        </p>

        <h2>6. העברת מידע לצד ג'</h2>
        <p>
          איננו מוכרים מידע אישי. מידע עשוי לעבור לצדדים שלישיים רק לצורך תפעול האתר (שרתים, מערכות CRM) או במידה ונדרש על פי חוק.
        </p>

        <h2>7. אבטחת מידע ואחסון</h2>
        <p>
          המידע מאובטח באמצעים מקובלים (SSL). המידע עשוי להיות מאוחסן על שרתים מחוץ לישראל המוגנים תחת תקני אבטחה בינלאומיים.
        </p>

        <h2>8. זכויות המשתמש</h2>
        <p>
          הנך זכאי לעיין במידע שנשמר עליך, לבקש לתקנו או למחקו. למימוש זכויות אלו, ניתן לפנות אלינו במייל הרשום מטה.
        </p>

        <h2>9. שינויים במדיניות</h2>
        <p>
          אנו שומרים את הזכות לעדכן את המדיניות מעת לעת. המשך השימוש באתר מהווה הסכמה לגרסה המעודכנת.
        </p>

        <div style={{ marginTop: '2rem', padding: '15px', background: '#eef2f7', borderRadius: '0.5rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>ליצירת קשר בנושא פרטיות:</p>
          <a 
            href={`mailto:${contactEmail}`} 
            style={{ color: '#023E8A', fontWeight: 'bold', textDecoration: 'underline' }}
          >
            {contactEmail}
          </a>
          <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>עודכן לאחרונה: {lastUpdated}</p>
        </div>
      </section>

      <button
        style={buttonStyle}
        onClick={() => window.history.back()}
        aria-label="חזרה לדף הקודם"
      >
        חזרה לדף הקודם
      </button>
    </main>
  );
};

// --- Styles (Matches your Terms of Use exactly) ---

const wrapperStyle: React.CSSProperties = {
  padding: 'clamp(20px, 5vw, 60px)',
  maxWidth: '900px',
  margin: '0 auto',
  direction: 'rtl',
  fontFamily: 'Arial, sans-serif',
  color: '#222',
  lineHeight: 1.6
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(1.8rem, 4vw + 1rem, 3rem)',
  color: '#023E8A',
  textAlign: 'center',
  marginBottom: '2rem'
};

const sectionStyle: React.CSSProperties = {
  fontSize: 'clamp(0.95rem, 1vw + 0.3rem, 1.2rem)',
  background: '#f9f9f9',
  padding: 'clamp(20px, 3vw, 40px)',
  borderRadius: '1rem',
  border: '1px solid #ccc'
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