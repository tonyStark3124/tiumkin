import React, { useEffect, useState } from 'react';

const testimonialsData = [
  "כבר התייאשתי, לא היה לי אמון באנשי מקצוע… **הדיוק פשוט מטורף.** קיבלנו גישה אחרת לגמרי, והילד עלה על מסלול חיובי.",
  "מצווה לפרסם. זה באמת עובד. הילד שלי עבר מסמארטפון לטלפון כשר. **לא האמנו שנראה את זה קורה.**",
  "ישבנו יחד, צפינו בפרקים – **בכינו, צחקנו, והבנו.** הכל כל כך מעשי וברור, והשינוי אמיתי.",
  "**סדרת חובה לכל הורה למתבגר.** לא רק כשיש קושי – אלא כהכוונה מונעת ובריאה."
];

export const TestimonialsSpace: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('exit');

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonialsData.length);
        setDirection('enter');
      }, 600);

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={wrapperStyle}>
      <h2 style={title}>הורים מספרים מהלב</h2>

      <div style={carousel}>
        <div
          style={{
            ...card,
            ...(direction === 'enter' ? enterStyle : exitStyle)
          }}
        >
          {/* Text Section */}
          <div style={cardContent}>
            <p
              style={text}
              dangerouslySetInnerHTML={{
                __html: testimonialsData[index].replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong style="color:#035D92">$1</strong>'
                )
              }}
            />
          </div>

          {/* Footer Section */}
          <div style={cardFooter}>
            <div style={stars}>★★★★★</div>
            <div style={avatar}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Styles ---------- */

const wrapperStyle: React.CSSProperties = {
  padding: '100px 5%',
  background: '#F9F7F2',
  direction: 'rtl',
  textAlign: 'center'
};

const title: React.CSSProperties = {
  fontSize: '2.8rem',
  color: '#035D92',
  fontWeight: 900,
  marginBottom: '50px'
};

const carousel: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '720px',
  margin: '0 auto',
  height: '280px'
};

const card: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  background: '#FFFFFF',
  borderRadius: '28px',
  boxShadow: '0 24px 50px rgba(0,0,0,0.08)',
  overflow: 'hidden',
  transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
};

const enterStyle: React.CSSProperties = {
  transform: 'translateX(0)',
  opacity: 1
};

const exitStyle: React.CSSProperties = {
  transform: 'translateX(120%)',
  opacity: 0
};

const cardContent: React.CSSProperties = {
  padding: '40px',
  paddingBottom: '20px' // משאיר מקום לחלק התחתון
};

const cardFooter: React.CSSProperties = {
  height: '20%', // מקסימום 20% מהכארד
  background: 'rgba(15, 164, 169, 0.2)', // טורקיז שקוף יותר
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative'
};

const avatar: React.CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: '#000',
  position: 'relative',
  top: '-15px', // בולט מעל הרקע
  border: '2px solid #FFFFFF'
};

const stars: React.CSSProperties = {
  color: '#F4C430',
  fontSize: '1.2rem',
  letterSpacing: '2px'
};

const text: React.CSSProperties = {
  fontSize: '1.75rem',
  lineHeight: '1.85',
  color: '#2E2E2E',
  textAlign: 'right',
  margin: 0
};
