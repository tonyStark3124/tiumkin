import React from 'react';

const Hero: React.FC = () => {
  const colors = {
    white: '#FFFFFF',
    lightBlue: '#E0F7FA',
    primaryBlue: '#00B4D8',
    darkBlue: '#03045E',
    blackOverlay: 'rgba(0, 0, 0, 0.50)', // כהות עמוקה יותר למראה יוקרתי
  };

  const styles: { [key: string]: React.CSSProperties } = {
    heroContainer: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      boxSizing: 'border-box',
      backgroundImage: `url(/assets/image.png)`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: window.innerWidth < 768 ? 'scroll' : 'fixed', 
      direction: 'rtl',
      // שימוש ב-Padding רספונסיבי
      padding: '100px 20px 40px 20px', 
    },
    overlay: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: colors.blackOverlay,
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '950px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(1rem, 3vh, 2rem)', // רווח דינמי בין האלמנטים
    },
    headline: {
      // כותרת: מינימום 1.6rem, זורמת עם המסך, מקסימום 3.5rem
      fontSize: 'clamp(1.6rem, 7vw, 3.5rem)', 
      fontWeight: 800,
      lineHeight: '1.1',
      color: colors.lightBlue,
      margin: 0,
      letterSpacing: '-0.02em', // צמצום רווח בין אותיות למראה מודרני
    },
    highlight: {
      color: colors.primaryBlue,
      display: 'block', // יורד שורה בצורה יפה
      marginTop: '5px',
    },
    empathyBox: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0',
    },
    empathyText: {
      // טקסט הזדהות: עדין יותר וקטן יותר בנייד
      fontSize: 'clamp(0.9rem, 3.5vw, 2.00rem)',
      lineHeight: '1.5',
      color: '#E0E0E0',
      fontWeight: 300,
      paddingRight: '15px',
      borderRight: `3px solid ${colors.primaryBlue}`,
      textAlign: 'right',
      maxWidth: '650px',
    },
    solutionLead: {
      // משפט מפתח לפני כפתור
      fontSize: 'clamp(1.1rem, 4.5vw, 1.6rem)',
      fontWeight: 600,
      color: colors.white,
      lineHeight: '1.3',
    },
    ctaButton: {
      // כפתור שגדל מעט עם המסך
      padding: 'clamp(12px, 2vh, 18px) clamp(30px, 6vw, 60px)',
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      backgroundColor: colors.primaryBlue,
      color: colors.white,
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'transform 0.2s, background-color 0.2s',
      boxShadow: '0 10px 20px rgba(0, 180, 216, 0.3)',
      alignSelf: 'center',
    }
  };

  return (
    <section style={styles.heroContainer}>
      <div style={styles.overlay}></div>
      <h1>הדף בבנייה </h1><br/>
     

      <div style={styles.content}>
         <a style={{fontSize:'2rem'}} href='https://bosserm.com/landing-page/'>למעבר לדף לחצו</a>
{/*         <h1 style={styles.headline}>
          מרגישים שהילדים המתבגרים שלכם <br />
          עושים בחירות לא טובות
          <span style={styles.highlight}>ואין לכם דרך להשפיע עליהם?</span>
        </h1>
        
        <div style={styles.empathyBox}>
          <p style={styles.empathyText}>
            הסמכות והמשמעת נצרכות כמובן, אבל לפעמים הם כמו <strong>מכת צפרדע</strong>,<br />
            לוקחים מכשיר אחד וצצים שניים במקומו... <br />
            הם נמשכים לחברים רעים, מכשירים רעים, חוצפה וחוסר משמעת… <br />
            <strong>נשמע מוכר?</strong>
          </p>
        </div>

        <p style={styles.solutionLead}>
          אם אתם הורים לילדים מתבגרים מאתגרים, <br />
          יש ארגז כלים שכדאי לכם להכיר!
        </p>

        <button 
          onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
          style={styles.ctaButton}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = colors.darkBlue;
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = colors.primaryBlue;
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          אני רוצה להכיר את ארגז הכלים
        </button>*/}
      </div> 
      
      {/* חץ גלילה מעוצב */}
      <div className="scroll-arrow" style={{
        position: 'absolute', bottom: '20px', zIndex: 2,
        color: colors.white, fontSize: '1.5rem', animation: 'bounce 2s infinite',
        opacity: 0.7
      }}> ↓ </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-8px);}
          60% {transform: translateY(-4px);}
        }
        @media (max-height: 650px) {
          .scroll-arrow { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;