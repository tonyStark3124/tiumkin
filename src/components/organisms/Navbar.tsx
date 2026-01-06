import React from 'react';

const Navbar: React.FC = () => {
  const colors = {
    text: '#002855', // כחול כהה - ניגודיות מעולה
    accent: '#005f73',
    glassWhite: '#ffffff',
    focusOutline: '#2563eb', // צבע בולט לפוקוס
  };

  // סגנון משותף למניעת כותרות h1-h6 תוך שמירה על עיצוב
  const titleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: 800,
    color: colors.text,
    margin: 0,
    display: 'block'
  };

  const subTitleStyle: React.CSSProperties = {
    color: colors.text,
    fontWeight: 700,
    fontSize: '1rem',
    display: 'block'
  };

  return (
    <header 
      role="banner" 
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
    >
      <nav 
        style={{
          height: '70px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '0 5%', 
          backgroundColor: colors.glassWhite,
          direction: 'rtl', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
        aria-label="תפריט ניווט ראשי"
      >
        {/* שם המותג - צד ימין */}
        <div style={{ flex: 1 }}>
          <span style={titleStyle} role="text">
            בוסר המלאכים
          </span>
        </div>

        {/* לוגו מרכזי - קישור דף הבית */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a 
            href="/" 
            aria-label="דף הבית - בוסר המלאכים"
            className="navbar-logo-link"
            style={{ 
              display: 'block',
              borderRadius: '50%',
              transition: 'box-shadow 0.2s ease-in-out',
              outline: 'none' // מוסר כדי להחליף ב-Custom Focus
            }}
          >
            <div style={{ 
              width: '55px', 
              height: '55px', 
              borderRadius: '50%', 
              border: `2px solid ${colors.accent}`, 
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/assets/logo.jpeg" 
                alt="לוגו בוסר המלאכים - מעבר לדף הבית" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </a>
        </div>

        {/* שם המרצה - צד שמאל */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <span style={subTitleStyle} role="text">
           דן טיומקין
          </span>
        </div>
      </nav>

      {/* הוספת CSS עבור מצב פוקוס נגיש */}
      <style>{`
        .navbar-logo-link:focus-visible {
          outline: 3px solid ${colors.focusOutline} !important;
          outline-offset: 4px;
        }
        @media (max-width: 600px) {
          nav { padding: 0 3% !important; }
          span { font-size: 0.9rem !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;