import React, { useState } from 'react';

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.body.style.filter = 'contrast(1.2) grayscale(0.5)';
      document.body.style.backgroundColor = '#fff';
    } else {
      document.body.style.filter = 'none';
      document.body.style.backgroundColor = '';
    }
  };

  const changeFontSize = (delta: number) => {
    const newSize = fontSize + delta;
    if (newSize >= 100 && newSize <= 150) {
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  // Fluid typography and spacing constants
  const fluidBtnSize = 'clamp(45px, 8vw, 65px)';
  const fluidFontSize = 'clamp(1rem, 1.2vw + 0.5rem, 1.5rem)';
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '3vh', 
      left: '3vw', 
      zIndex: 9999, 
      direction: 'rtl' 
    }}>
      {/* כפתור הפתיחה */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: fluidBtnSize, 
          height: fluidBtnSize, 
          borderRadius: '50%', 
          backgroundColor: '#007791',
          color: 'white', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: 'clamp(20px, 3vw + 5px, 32px)', 
          boxShadow: '0 0.5vh 1.5vh rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="תפריט נגישות"
      >
        ♿
      </button>

      {/* התפריט עצמו */}
      {isOpen && (
        <div style={{
          position: 'absolute', 
          bottom: '120%', 
          left: '0', 
          width: 'clamp(220px, 40vw, 320px)',
          backgroundColor: 'white', 
          borderRadius: '1.5vw', 
          padding: 'clamp(12px, 2.5%, 24px)',
          boxShadow: '0 1vh 3vh rgba(0,0,0,0.2)', 
          border: '1px solid #ddd',
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.2vh'
        }}>
          <p style={{ 
            margin: '0 0 1vh 0', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            borderBottom: '1px solid #eee',
            fontSize: fluidFontSize,
            paddingBottom: '0.5vh'
          }}>
            נגישות
          </p>
          
          <button onClick={() => changeFontSize(10)} style={menuBtnStyle}>הגדל טקסט +</button>
          <button onClick={() => changeFontSize(-10)} style={menuBtnStyle}>הקטן טקסט -</button>
          <button onClick={toggleHighContrast} style={menuBtnStyle}>
            {isHighContrast ? "ביטול ניגודיות" : "ניגודיות גבוהה"}
          </button>
          
          <button 
            onClick={() => {
              setFontSize(100);
              document.documentElement.style.fontSize = '100%';
              document.body.style.filter = 'none';
              setIsHighContrast(false);
            }} 
            style={{ 
              ...menuBtnStyle, 
              backgroundColor: '#f0f0f0', 
              color: '#333',
              marginTop: '0.5vh' 
            }}
          >
            איפוס הגדרות
          </button>
        </div>
      )}
    </div>
  );
};

// Fluid helper for individual menu buttons
const menuBtnStyle: React.CSSProperties = {
  padding: 'clamp(8px, 1.5vh, 16px)', 
  cursor: 'pointer', 
  border: '1px solid #007791',
  borderRadius: '0.5vw', 
  backgroundColor: 'white', 
  color: '#007791', 
  fontWeight: 'bold',
  fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 1.1rem)',
  width: '100%',
  transition: 'background-color 0.2s'
};

export default AccessibilityMenu;