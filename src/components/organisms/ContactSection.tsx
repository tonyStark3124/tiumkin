import React, { useMemo, useState, useEffect } from 'react';

const RavMesserContactForm: React.FC = () => {
  // מעקב אחרי רוחב המסך כדי לקבוע את גובה ה-iframe
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // בדיקה ראשונית
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const colors = {
    background: '#F8F5F0',
    accent: '#006E7F',
    accentHover: '#005A68',
    text: '#2D2D2D',
    border: '#D1C7B7',
    inputBg: '#FFFFFF'
  };

  const iframeContent = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html lang="he" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 0; font-family: system-ui, sans-serif; background: transparent; overflow: hidden; }
            .form-container { display: flex; flex-direction: column; gap: 10px; padding: 15px; }
            .form-title { font-size: 1.2rem; color: ${colors.text}; margin: 0 0 10px 0; text-align: center; font-weight: 700; }
            
            .fields-row { display: flex; flex-direction: column; gap: 10px; }
            
            @media (min-width: 768px) {
              .fields-row { flex-direction: row; align-items: flex-end; gap: 12px; }
              .form-title { text-align: right; font-size: 1.4rem; }
            }

            .input-group { flex: 1; display: flex; flex-direction: column; gap: 4px; }
            label { font-size: 13px; color: ${colors.text}; font-weight: 600; margin-right: 4px; }
            
            input[type="text"], input[type="email"], input[type="tel"] {
              padding: 12px; border: 2px solid ${colors.border}; border-radius: 10px;
              font-size: 16px; background: ${colors.inputBg}; outline: none; width: 100%; box-sizing: border-box;
            }
            input:focus { border-color: ${colors.accent}; box-shadow: 0 0 0 3px ${colors.accent}20; }
            
            button {
              background: ${colors.accent}; color: white; padding: 12px 24px; border: none;
              border-radius: 10px; font-size: 16px; font-weight: bold; cursor: pointer;
              transition: all 0.2s; width: 100%; white-space: nowrap; margin-top: 5px;
            }
            @media (min-width: 768px) { button { width: auto; margin-top: 0; } }
            button:hover { background: ${colors.accentHover}; transform: translateY(-1px); }

            .confirmation-area { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #666; margin-top: 8px; }
            input[type="checkbox"] { width: 16px; height: 16px; accent-color: ${colors.accent}; }
          </style>
        </head>
        <body>
          <div class="form-container">
            <form action="https://subscribe.responder.co.il/" method="post">
              <h2 class="form-title">מעוניין/ת לשמוע פרטים נוספים?</h2>
              <div class="fields-row">
                <div class="input-group">
                  <label for="name">שם מלא</label>
                  <input id="name" name="fields[subscribers_name]" type="text" placeholder="השם שלך" required>
                </div>
                <div class="input-group">
                  <label for="email">אימייל</label>
                  <input id="email" name="fields[subscribers_email]" type="email" placeholder="המייל שלך" required>
                </div>
                <div class="input-group">
                  <label for="phone">טלפון</label>
                  <input id="phone" name="fields[subscribers_phone]" type="tel" placeholder="טלפון ליצירת קשר" required>
                </div>
                <button type="submit">שליחת פרטים</button>
              </div>
              <div class="confirmation-area">
                <input type="checkbox" name="confirm_registration" value="true" required id="confirm">
                <label for="confirm">אני מאשר/ת קבלת מידע על הסדנה</label>
              </div>
              <input type="hidden" name="form_id" value="2836215">
              <input type="hidden" name="encoding" value="utf-8">
            </form>
          </div>
        </body>
      </html>
    `;
  }, [colors]);

  return (
    <section style={styles.section}>
      <div style={styles.outerCard}>
        <iframe
          srcDoc={iframeContent}
          title="טופס הרשמה"
          style={{
            ...styles.iframe,
            height: isMobile ? '420px' : '160px' // שינוי גובה דינמי
          }}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '40px 15px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F8F5F0'
  },
  outerCard: {
    width: '100%',
    maxWidth: '1100px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 12px 35px rgba(0,0,0,0.07)',
    overflow: 'hidden'
  },
  iframe: {
    width: '100%',
    border: 'none',
    display: 'block',
    transition: 'height 0.3s ease' // מעבר חלק בין גבהים
  }
};

export default RavMesserContactForm;