import React from 'react';

const SolutionSection: React.FC = () => {
  const logoColors = { darkBlue: '#023E8A', brightBlue: '#007791', white: '#FFFFFF' };

  return (
    <section id="solution" style={{ padding: '80px 5%', textAlign: 'center', direction: 'rtl' }} aria-labelledby="solution-title">
      <header style={{ marginBottom: '40px' }}>
        <h2 id="solution-title" style={{ fontSize: '2.5rem', color: '#023E8A', fontWeight: 800 }}>
          יש פתרון אמיתי לכאב שלכם, הורים יקרים
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#222' }}>
          הסדרה הדיגיטלית <strong>"לכל הורה"</strong> לנוער מתמודד תיתן לכם כלים מעשיים.
        </p>
      </header>

      <div style={{
        maxWidth: '850px', margin: '0 auto', borderRadius: '40px',
        background: `linear-gradient(135deg, ${logoColors.brightBlue} 0%, ${logoColors.darkBlue} 100%)`,
        padding: '60px 20px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url("https://www.transparenttextures.com/patterns/puffy-clouds.png")' }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <img 
            src="/assets/rabbis-image.png" 
            alt="הרב אורי זוהר והרב דן טיומקין בשיחה על חינוך" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '20px', border: '4px solid white', marginBottom: '30px' }}
          />
          <p style={{ color: 'white', fontSize: '1.4rem', fontWeight: 400, lineHeight: '1.6', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            סדרה טיפולית דיגיטלית המעניקה ארגז כלים פרקטי להתמודדות עם המתבגרים.
          </p>
          <strong style={{ display: 'block', fontSize: '2.5rem', color: 'white', marginTop: '20px' }}>
            חובה לכל הורה!
          </strong>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;