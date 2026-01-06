import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const target = document.getElementById('courses-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // העברת פוקוס לאלמנט היעד לטובת קוראי מסך
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  };

  return (
    <section 
      style={{
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        position: 'relative', 
        backgroundImage: `url(/assets/reka.jpeg)`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        direction: 'rtl',
        padding: '0 5vw',
        backgroundColor: '#000'
      }}
      aria-label="באנר ראשי - סמכות הורית"
    >
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          zIndex: 1 
        }} 
        aria-hidden="true"
      ></div>
      
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%',
          maxWidth: '950px', 
          padding: '4vh 2vw' 
        }}
      >
        <h1 
          style={{ 
            fontSize: 'clamp(1.8rem, 5vw + 1rem, 3.5rem)', 
            fontWeight: 500, 
            fontFamily: 'Varela Round, sans-serif',
            color: '#FFFFFF', 
            marginBottom: 'clamp(15px, 3vh, 30px)', 
            lineHeight: '1.2' 
          }}
        >
          מרגישים שהילדים המתבגרים שלכם עושים בחירות לא טובות
          <span style={{ color: '#67D7F5', fontFamily: 'Assistant, sans-serif', display: 'block', marginTop: '0.5rem' }}>
            ואין לכם דרך להשפיע עליהם?
          </span>
        </h1>
        
        <p 
          style={{ 
            fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.4rem)', 
            color: '#FFFFFF', 
            marginBottom: 'clamp(25px, 5vh, 45px)', 
            lineHeight: '1.6',
            maxWidth: '800px',
            marginInline: 'auto'
          }}
        >
          הסמכות והמשמעת נצרכות, אבל לפעמים הם כמו <strong>מכת צפרדע</strong>... <br />
          הם נמשכים לחברים רעים, חוצפה וחוסר משמעת… <strong>נשמע מוכר?</strong>
        </p>

        <button 
          type="button"
          onClick={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={(e) => {
            e.currentTarget.style.outline = '3px solid #67D7F5';
            e.currentTarget.style.outlineOffset = '2px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = 'none';
          }}
          style={{
            padding: '1em 2.5em', 
            fontSize: 'clamp(1rem, 1vw + 0.5rem, 1.25rem)', 
            backgroundColor: isHovered ? '#005F73' : '#007791',
            color: '#ffffff', 
            border: 'none', 
            borderRadius: '50px', 
            cursor: 'pointer',
            fontWeight: 'bold', 
            transition: 'all 0.2s ease',
            width: 'fit-content',
            boxShadow: isHovered 
              ? '0 6px 20px rgba(0,0,0,0.4)' 
              : '0 4px 15px rgba(0,0,0,0.3)'
          }}
          aria-label="אני רוצה להכיר את ארגז הכלים - גלילה לפירוט הקורסים"
        >
          אני רוצה להכיר את ארגז הכלים
        </button>
      </div>
    </section>
  );
};

export default Hero;