import React from 'react';
import { IconWhatsapp, IconPhone, IconMail } from '../atoms/Icons';

export const ContactButtons: React.FC = () => {
  const whatsapp = 'https://api.whatsapp.com/send?phone=972548455029&text=%D7%9E%D7%A8%D7%91%D7%94%20%D7%9C%D7%A7%D7%95%D7%A8%D7%A1%D7%99%D7%9D%20-%20%D7%94%D7%A9%D7%95%D7%A8%D7%94%20%D7%9C%D7%9E%D7%99%D7%93%D7%95%D7%A2%20%2F%20%D7%9C%D7%99%D7%A2%D7%95%D7%A6%20%D7%AA%D7%A4%D7%95%D7%A8%D7%AA%20%D7%A7%D7%95%D7%A8%A1%20%D7%9E%D7%A4%D7%90%20';
  const tel = 'tel:0548455029';
  
  // שינוי הקישור למזהה ה-ID של הטופס
  const mailFormId = "#mailForm"; 

  // Fluid Sizing Constants
  const containerGap = 'clamp(8px, 1.5vh, 15px)';
  const iconWrapperSize = 'clamp(22px, 3.5vw, 28px)'; 
  const buttonPadding = 'clamp(10px, 1.2vw + 2px, 16px)';

  const btnBaseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: buttonPadding,
    boxShadow: '0 0.4vh 1.2vh rgba(0,0,0,0.15)',
    textDecoration: 'none',
    color: '#fff',
    transition: 'transform 0.2s ease',
  };

  const iconWrapperStyle: React.CSSProperties = {
    width: iconWrapperSize,
    height: iconWrapperSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: containerGap,
        position: 'fixed',
        bottom: 'clamp(20px, 5vh, 50px)',
        right: 'clamp(15px, 3vw, 40px)',
        zIndex: 1000,
        pointerEvents: 'none'
      }}
      role="navigation" 
      aria-label="קישורי יצירת קשר"
    >
      <a 
        style={{ ...btnBaseStyle, backgroundColor: '#25D366', pointerEvents: 'auto' }} 
        href={whatsapp} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="וואטסאפ"
      >
        <div style={iconWrapperStyle}>
          <IconWhatsapp />
        </div>
      </a>

      <a 
        style={{ ...btnBaseStyle, backgroundColor: '#007aff', pointerEvents: 'auto' }} 
        href={tel} 
        aria-label="טלפון"
      >
        <div style={iconWrapperStyle}>
          <IconPhone />
        </div>
      </a>

      {/* הכפתור המעודכן שגולל לטופס */}
      <a 
        style={{ ...btnBaseStyle, backgroundColor: '#ea4335', pointerEvents: 'auto' }} 
        href={mailFormId} 
        aria-label="עבור לטופס יצירת קשר"
      >
        <div style={iconWrapperStyle}>
          <IconMail />
        </div>
      </a>
    </div>
  );
};