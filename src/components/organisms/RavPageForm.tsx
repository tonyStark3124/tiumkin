import React from 'react';

const RavPageForm: React.FC = () => {
  const scriptUrl = "https://form.ravpage.co.il/1fb5263230ffe9b665f763fb708ac1af695549E2";

  const iframeContent = `
    <!DOCTYPE html>
    <html dir="rtl" lang="he">
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 10px; background: transparent; font-family: sans-serif; }
          
          /* שיפור נראות הפוקוס לנגישות */
          input:focus, a:focus, .submitButton:focus {
            outline: 3px solid #0050c7 !important;
            outline-offset: 2px;
          }

          /* הפיכת הצ'קבוקס לגדול ונוח יותר ללחיצה */
          input[type="checkbox"] {
            cursor: pointer;
            width: 18px;
            height: 18px;
          }

          label.confirmation_text {
            cursor: pointer;
            user-select: none;
            padding-right: 5px;
          }
        </style>
      </head>
      <body>
        <script type='text/javascript' src='${scriptUrl}' charset='UTF-8'></script>
        
        <script>
          // פונקציה לתיקון נגישות לאחר טעינת הטופס
          function fixAccessibility() {
            const checkbox = document.querySelector('input[type="checkbox"]');
            const label = document.querySelector('.confirmation_text');
            
            if (checkbox && label) {
              // נותנים לתיבה ID ומקשרים את הלייבל אליה
              const uniqueId = 'confirm_reg_' + Math.random().toString(36).substr(2, 9);
              checkbox.id = uniqueId;
              label.setAttribute('for', uniqueId);
              
              // הוספת תיוג לקורא מסך
              checkbox.setAttribute('aria-required', 'true');
              checkbox.setAttribute('aria-label', label.innerText);
            }
          }

          // הרצה של התיקון לאחר שהסקריפט של רב-מסר מסיים לבנות את הטופס
          window.addEventListener('load', () => {
            setTimeout(fixAccessibility, 1000);
            window.parent.postMessage({ height: document.body.scrollHeight }, "*");
          });
        </script>
      </body>
    </html>
  `;

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }} id='mailForm' tabIndex={-1}>
      <iframe
        title="טופס הרשמה לסדנה"
        srcDoc={iframeContent}
        style={{
          width: '100%',
          height: '600px',
          border: 'none',
        }}
        sandbox="allow-scripts allow-forms allow-same-origin"
      />
    </div>
  );
};

export default RavPageForm;