import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      style={{
        minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        position: 'relative', backgroundImage: `url(/assets/image.png)`, 
        backgroundSize: 'cover', backgroundPosition: 'center', direction: 'rtl'
      }}
      aria-label="באנר ראשי"
    >
      {/* שכבת הגנה לניגודיות טקסט - חובה לנגישות */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.65)', zIndex: 1 }} aria-hidden="true"></div>
      
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '950px', padding: '20px' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px' }}>
          מרגישים שהילדים המתבגרים שלכם עושים בחירות לא טובות
          <span style={{ color: '#4CC9F0', display: 'block' }}>ואין לכם דרך להשפיע עליהם?</span>
        </h1>
        
        <p style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '30px', lineHeight: '1.6' }}>
          הסמכות והמשמעת נצרכות, אבל לפעמים הם כמו <strong>מכת צפרדע</strong>... <br />
          הם נמשכים לחברים רעים, חוצפה וחוסר משמעת… <strong>נשמע מוכר?</strong>
        </p>

        <button 
          onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            padding: '18px 45px', fontSize: '1.2rem', backgroundColor: '#007791',
            color: '#ffffff', border: 'none', borderRadius: '50px', cursor: 'pointer',
            fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          אני רוצה להכיר את ארגז הכלים
        </button>
      </div>
    </section>
  );
};

export default Hero;