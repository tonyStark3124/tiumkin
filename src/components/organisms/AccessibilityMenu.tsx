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

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999, direction: 'rtl' }}>
      {/* כפתור הפתיחה */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#007791',
          color: 'white', border: 'none', cursor: 'pointer', fontSize: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}
        aria-label="תפריט נגישות"
      >
        ♿
      </button>

      {/* התפריט עצמו */}
      {isOpen && (
        <div style={{
          position: 'absolute', bottom: '60px', left: '0', width: '200px',
          backgroundColor: 'white', borderRadius: '12px', padding: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.2)', border: '1px solid #ddd',
          display: 'flex', flexDirection: 'column', gap: '10px'
        }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid #eee' }}>נגישות</p>
          
          <button onClick={() => changeFontSize(10)} style={menuBtnStyle}>הגדל טקסט +</button>
          <button onClick={() => changeFontSize(-10)} style={menuBtnStyle}>הקטן טקסט -</button>
          <button onClick={toggleHighContrast} style={menuBtnStyle}>
            {isHighContrast ? "ביטול ניגודיות" : "ניגודיות גבוהה"}
          </button>
          <button onClick={() => {
            setFontSize(100);
            document.documentElement.style.fontSize = '100%';
            document.body.style.filter = 'none';
            setIsHighContrast(false);
          }} style={{ ...menuBtnStyle, backgroundColor: '#f0f0f0', color: '#333' }}>איפוס הגדרות</button>
        </div>
      )}
    </div>
  );
};

const menuBtnStyle: React.CSSProperties = {
  padding: '8px', cursor: 'pointer', border: '1px solid #007791',
  borderRadius: '4px', backgroundColor: 'white', color: '#007791', fontWeight: 'bold'
};

export default AccessibilityMenu;