import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const TermsOfUse: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 1. גלילה לראש הדף בטעינה
    window.scrollTo(0, 0);

    // 2. העברת פוקוס הנגישות לראש הדף
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  const handleBack = () => {
    // חזרה לדף הקודם
    navigate(-1); 
  };

  return (
    <main
      style={wrapperStyle}
      aria-labelledby="terms-title"
      role="main"
    >
      {/* הוספת tabIndex מאפשרת לפוקוס לנחות כאן עבור קוראי מסך */}
      <h1 
        id="terms-title" 
        ref={titleRef} 
        tabIndex={-1} 
        style={titleStyle}
      >
        תנאי שימוש באתר
      </h1>

      <section style={sectionStyle}>
        <p>ברוכים הבאים לאתר שלנו. השימוש באתר כפוף לתנאי השימוש המפורטים להלן:</p>

        <h2>1. הקדמה והגדרות</h2>
        <p>
          האתר בבעלות <strong>בוסר פתרונות חינוך</strong>. כל שימוש באתר מהווה הסכמה לתנאי שימוש אלו בלבד.
        </p>

        <h2>2. קבלת תנאי השימוש</h2>
        <p>
          על ידי שימוש באתר אתה מאשר שקראת והסכמת לכל תנאי השימוש. אם אינך מסכים – נא להפסיק את השימוש באתר.
        </p>

        <h2>3. שימוש מותר ואסור</h2>
        <ul>
          <li>שימוש אישי בלבד, לא מסחרי.</li>
          <li>איסור פגיעה בזכויות צד שלישי או שימוש בלתי חוקי.</li>
          <li>אין להפריע או לפגוע בפעילות האתר או המשתמשים האחרים.</li>
        </ul>

        <h2>4. הרשמה ואימות פרטים</h2>
        <p>
          המשתמש אחראי על שמירת סודיות פרטי ההתחברות. האתר לא אחראי על שימוש שלא על ידך.
        </p>

        <h2>5. זכויות יוצרים וקניין רוחני</h2>
        <p>
          כל התוכן באתר הוא רכוש האתר או בעלי האתר. אין להעתיק, לשכפל או להפיץ ללא אישור מראש.
        </p>

        <h2>6. הגבלת אחריות</h2>
        <p>
          האתר מסופק "כמות שהוא". אין אנו אחראים לנזקים ישירים או עקיפים הנובעים מהשימוש באתר.
        </p>

        <h2>7. שינויים בתנאי השימוש</h2>
        <p>
          אנו שומרים לעצמנו את הזכות לשנות תנאי שימוש בכל עת. גרסה חדשה של התנאים חלה על המשתמשים מיידית.
        </p>

        <h2>8. משפט ושיפוט</h2>
        <p>
          כל מחלוקת תיושב אך ורק לפי חוקי מדינת ישראל, בבית משפט מוסמך בישראל.
        </p>

        <h2>9. הפניות למסמכים נוספים</h2>
        <p>
          השימוש באתר כפוף גם למדיניות הפרטיות והצהרת הנגישות של האתר.
        </p>

        <h2>10. התנהגות מותרת/אסורה בקהילה</h2>
        <p>
          אין להעלות תוכן פוגע או מסית. המשתמש אחראי לכל תוכן שהוא מפרסם.
        </p>

        <h2>11. רכישות ותשלומים</h2>
        <p>
          אם ניתנות שירותי רכישה באתר, החזרות וביטולים כפופים לתנאי האתר.
        </p>

        <h2>12. הגנת פרטיות</h2>
        <p>
          כל שימוש באתר כפוף למדיניות הפרטיות שלנו. נא לקרוא אותה.
        </p>

        <p style={{ marginTop: '2rem', fontWeight: 'bold', color: '#d90429' }}>
          ⚠️ שימוש באתר מהווה הסכמה מלאה לכל התנאים המפורטים לעיל.
        </p>
      </section>

      <button
        style={buttonStyle}
        onClick={handleBack}
        aria-label="חזרה לדף הקודם"
      >
        חזרה לדף הקודם
      </button>
    </main>
  );
};

// --- Styles ---

const wrapperStyle: React.CSSProperties = {
  padding: 'clamp(20px, 5vw, 60px)',
  // מרווח עליון כדי שהנאבבאר לא יסתיר את התוכן (מינימום 30px ובדרך כלל יותר)
  marginTop: '80px', 
  maxWidth: '900px',
  marginRight: 'auto',
  marginLeft: 'auto',
  direction: 'rtl',
  fontFamily: 'Arial, sans-serif',
  color: '#222',
  lineHeight: 1.6,
  outline: 'none' // למנוע מסגרת על כל ה-main כשמקבל פוקוס
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(1.8rem, 4vw + 1rem, 3rem)',
  color: '#023E8A',
  textAlign: 'center',
  marginBottom: '2rem',
  outline: 'none' // למנוע מסגרת כחולה בגלל ה-tabIndex
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