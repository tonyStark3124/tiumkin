import React from 'react';

const SolutionSection: React.FC = () => {
  // דגימת צבעים מדויקת מהלוגו ששלחת
  const logoColors = {
    darkBlue: '#035D92', // הכחול העמוק מהלוגו
    brightBlue: '#0084C2', // הכחול הבהיר מהלוגו
    white: '#FFFFFF',
    textDark: '#1A3A56', // כחול כהה מאוד לטקסט החיצוני
  };

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: '80px 5%',
      backgroundColor: '#f9fbfd', // רקע נקי מאוד
      textAlign: 'center',
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    topHeader: {
      maxWidth: '850px',
      marginBottom: '50px',
    },
    mainTitle: {
      fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
      color: logoColors.textDark,
      fontWeight: 800,
      marginBottom: '15px',
      lineHeight: '1.2',
    },
    subTitle: {
      fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
      color: '#444',
      fontWeight: 400,
    },
    // הכרטיס המרכזי בעיצוב "בוסר המלאכים"
    card: {
      width: '100%',
      maxWidth: '850px',
      // גרדיאנט רדיאלי כמו בלוגו
      background: `radial-gradient(circle at center, ${logoColors.brightBlue} 0%, ${logoColors.darkBlue} 100%)`,
      borderRadius: '40px',
      padding: 'clamp(40px, 6vh, 80px) clamp(20px, 5vw, 50px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 25px 60px rgba(3, 93, 146, 0.3)',
      position: 'relative',
      overflow: 'hidden', // כדי שהאפקטים לא יצאו
    },
    // אפקט "עשן/ענן" עדין כמו בלוגו
    smokeEffect: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      opacity: 0.15,
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/puffy-clouds.png")', // טקסטורת עננים רכה
      pointerEvents: 'none',
    },
    imageContainer: {
      width: '100%',
      maxWidth: '600px',
      borderRadius: '25px',
      overflow: 'hidden',
      marginBottom: '40px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      border: `4px solid ${logoColors.white}`,
      zIndex: 2,
    },
    image: {
      width: '100%',
      display: 'block',
      objectFit: 'cover',
    },
    content: {
      maxWidth: '700px',
      color: logoColors.white,
      zIndex: 2,
    },
    description: {
      fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
      lineHeight: '1.6',
      marginBottom: '35px',
      fontWeight: 300,
    },
    boldStatement: {
      fontSize: 'clamp(1.8rem, 7vw, 3rem)',
      fontWeight: 900,
      color: logoColors.white,
      textShadow: '0 4px 15px rgba(0,0,0,0.4)',
      display: 'block',
      lineHeight: '1.1',
    }
  };

  return (
    <section id="solution" style={styles.section}>
      {/* כותרת חיצונית */}
      <div style={styles.topHeader}>
        <h2 style={styles.mainTitle}>
          יש פתרון אמיתי לכאב שלכם, הורים יקרים
        </h2>
        <p style={styles.subTitle}>
          הסדרה הדיגיטלית <strong style={{color: logoColors.darkBlue}}>"לכל הורה"</strong> לנוער מתמודד <br />
          תיתן לכם כלים מעשיים:
        </p>
      </div>

      {/* הכרטיס המרכזי */}
      <div style={styles.card}>
        <div style={styles.smokeEffect}></div>

        <div style={styles.imageContainer}>
          <img 
            src="/assets/rabbis-image.png" // התמונה של הרבנים
            alt="הרב אורי זוהר והרב דן טיומקין" 
            style={styles.image}
            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=Rabbis+Photo"}}
          />
        </div>

        <div style={styles.content}>
          <p style={styles.description}>
            סדרה טיפולית דיגיטלית עם <br />
            <strong>הרב אורי זוהר זצ"ל והרב דן טיומקין</strong> <br />
            הנותנת ארגז כלים פרקטיים ומעשיים להתמודדות עם המתבגרים.
          </p>
          
          <span style={styles.boldStatement}>
            חובה לכל הורה <br /> 
            לנוער מתמודד!
          </span>
        </div>
      </div>

      <div style={{height: '50px'}}></div>
    </section>
  );
};

export default SolutionSection;