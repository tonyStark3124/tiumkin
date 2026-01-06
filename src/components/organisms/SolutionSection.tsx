import React from 'react';

const SolutionSection: React.FC = () => {
  const logoColors = { 
    darkBlue: '#023E8A', 
    brightBlue: '#005D70', 
    white: '#FFFFFF' 
  };

  return (
    <section 
      id="solution" 
      className="solution-section"
      style={{ 
        padding: 'clamp(3rem, 8vh, 6rem) 5%', 
        textAlign: 'center', 
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }} 
      aria-labelledby="solution-title"
    >
      <header style={{ marginBottom: 'clamp(1.5rem, 4vh, 3rem)', width: '100%' }}>
        {/* כותרת ראשית עם קלאס ייעודי למובייל */}
        <span 
          id="solution-title" 
          role="heading"
          aria-level={2}
          className="main-solution-title"
          style={{ 
            display: 'block',
            color: logoColors.darkBlue, 
            fontWeight: 500,
            maxWidth: '950px',
            margin: '0 auto',
            lineHeight: 1.1
          }}
        >
          יש פתרון אמיתי לכאב שלכם, הורים יקרים
        </span>
        <p 
          className="solution-subtitle"
          style={{ 
            color: '#222',
            marginTop: '1.5rem',
            lineHeight: 1.5
          }}
        >
          הסדרה הדיגיטלית <strong>"לכל הורה"</strong> לנוער מתמודד תיתן לכם כלים מעשיים.
        </p>
      </header>

      <div 
        role="region"
        aria-label="מידע על הסדרה הדיגיטלית"
        style={{
          width: '100%',
          maxWidth: '850px',
          margin: '0 auto',
          borderRadius: 'clamp(20px, 5vw, 40px)',
          background: `linear-gradient(135deg, ${logoColors.brightBlue} 0%, ${logoColors.darkBlue} 100%)`,
          padding: 'clamp(2.5rem, 8vw, 4rem) 5%',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div 
          aria-hidden="true" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            opacity: 0.1, 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/puffy-clouds.png")',
            pointerEvents: 'none'
          }}
        ></div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <img 
            src="/assets/rabbis-image.png" 
            alt="הרב אורי זוהר זצ''ל והרב דן טיומקין בשיחה מעמיקה על חינוך ונוער מתמודד" 
            style={{ 
              width: '100%', 
              maxWidth: '600px', 
              height: 'auto',
              borderRadius: 'clamp(10px, 3vw, 20px)', 
              border: `clamp(2px, 0.5vw, 4px) solid ${logoColors.white}`, 
              marginBottom: '2rem',
              objectFit: 'cover'
            }} 
          />
          <p 
            style={{ 
              color: logoColors.white, 
              fontSize: 'clamp(1.3rem, 2vw + 0.5rem, 1.6rem)', 
              fontWeight: 400, 
              lineHeight: '1.6', 
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              maxWidth: '90%',
              margin: '0 auto'
            }}
          >
            סדרה דיגיטלית המעניקה ארגז כלים פרקטי להתמודדות עם המתבגרים.
          </p>
          <strong 
            className="call-to-action-text"
            style={{ 
              display: 'block', 
              color: logoColors.white, 
              marginTop: '1.5rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            חובה לכל הורה!
          </strong>
        </div>
      </div>

      <style>{`
        /* שליטה מדויקת בגדלים למובייל */
        @media (max-width: 768px) {
          .main-solution-title {
            font-size: 2.4rem !important; /* גודל בולט ומשמעותי */
          }
          .solution-subtitle {
            font-size: 1.25rem !important;
          }
          .call-to-action-text {
            font-size: 2.2rem !important;
          }
        }

        /* גדלים למסכים רחבים */
        @media (min-width: 769px) {
          .main-solution-title {
            font-size: 3.5rem;
          }
          .solution-subtitle {
            font-size: 1.5rem;
          }
          .call-to-action-text {
            font-size: 3.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;