import React from 'react';

const Navbar: React.FC = () => {
  const colors = {
    text: '#002855', // כחול כהה מאוד לניגודיות
    accent: '#005f73',
    glassWhite: '#ffffff',
  };

  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <nav 
        style={{
          height: '70px', display: 'flex', justifyContent: 'space-between', 
          alignItems: 'center', padding: '0 5%', backgroundColor: colors.glassWhite,
          direction: 'rtl', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
        aria-label="תפריט ניווט ראשי"
      >
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: colors.text }}>בוסר המלאכים</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="/" aria-label="דף הבית">
            <div style={{ width: '55px', height: '55px', borderRadius: '50%', border: `2px solid ${colors.accent}`, overflow: 'hidden' }}>
              <img 
                src="/assets/logo.jpeg" 
                alt="לוגו בוסר המלאכים - הרב דן טיומקין" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </a>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{ color: colors.text, fontWeight: 700 }}>הרב דן טיומקין</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;