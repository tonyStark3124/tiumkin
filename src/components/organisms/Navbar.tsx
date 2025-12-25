import React from 'react';

const Navbar: React.FC = () => {
  const colors = {
    white: '#FFFFFF',
    lightBlue: '#E0F7FA',
    primaryBlue: '#00B4D8',
    darkBlue: '#03045E',
    glassWhite: 'rgba(255, 255, 255, 0.92)', // שקיפות יוקרתית
  };

  const styles: { [key: string]: React.CSSProperties } = {
    navContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      // גובה משתנה - מעט נמוך יותר בנייד
      height: 'clamp(60px, 10vh, 80px)', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 5%',
      backgroundColor: colors.glassWhite,
      backdropFilter: 'blur(12px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      zIndex: 1000,
      direction: 'rtl',
    },
    sideSection: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    brandName: {
      // גודל טקסט שמתכווץ בנייד
      fontSize: 'clamp(0.9rem, 4vw, 1.3rem)',
      fontWeight: 800,
      color: colors.darkBlue,
      margin: 0,
      whiteSpace: 'nowrap',
    },
    personName: {
      fontSize: 'clamp(0.8rem, 3.5vw, 1.1rem)',
      color: colors.primaryBlue,
      fontWeight: 600,
      textAlign: 'left',
      width: '100%',
      whiteSpace: 'nowrap',
    },
    logoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 10px',
    },
    logoCircle: {
      // לוגו קטן יותר בנייד
      width: 'clamp(50px, 12vw, 70px)',
      height: 'clamp(50px, 12vw, 70px)',
      borderRadius: '50%',
      backgroundColor: colors.white,
      border: `2px solid ${colors.primaryBlue}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  };

  return (
    <nav style={styles.navContainer}>
      {/* צד ימין - מותג */}
      <div style={styles.sideSection}>
        <h1 style={styles.brandName}>בוסר המלאכים</h1>
      </div>

      {/* אמצע - לוגו */}
      <div style={styles.logoWrapper}>
        <div 
          style={styles.logoCircle}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {/* החלף בנתיב הלוגו שלך */}
          <img 
            src="/assets/logo.jpeg" 
            alt="Logo" 
            style={styles.logoImage} 
            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150"}} 
          />
        </div>
      </div>

      {/* צד שמאל - שם */}
      <div style={{...styles.sideSection, justifyContent: 'flex-end'}}>
        <span style={styles.personName}>הרב דן טיומקין</span>
      </div>

      {/* תיקון קטן למובייל ב-CSS כדי למנוע דחיסה קיצונית */}
      <style>{`
        @media (max-width: 350px) {
          span { display: none; } /* במסכים זעירים במיוחד נשאיר רק את שם המותג והלוגו */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;