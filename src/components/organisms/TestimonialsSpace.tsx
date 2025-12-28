import React, { useEffect, useState, useCallback } from 'react';

const testimonialsData = [
  "כבר התייאשתי, לא היה לי אמון באנשי מקצוע… **הדיוק פשוט מטורף.** קיבלנו גישה אחרת לגמרי, והילד עלה על מסלול חיובי.",
  "מצווה לפרסם. זה באמת עובד. הילד שלי עבר מסמארטפון לטלפון כשר. **לא האמנו שנראה את זה קורה.**",
  "ישבנו יחד, צפינו בפרקים – **בכינו, צחקנו, והבנו.** הכל כל כך מעשי וברור, והשינוי אמיתי.",
  "**סדרת חובה לכל הורה למתבגר.** לא רק כשיש קושי – אלא כהכוונה מונעת ובריאה."
];

export const TestimonialsSpace: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'enter' | 'exit'>('enter');
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection('exit');
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
      setDirection('enter');
    }, 600);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection('exit');
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
      setDirection('enter');
    }, 600);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section style={wrapperStyle} aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" style={title}>הורים מספרים מהלב</h2>

      <div style={containerWithArrows} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <button onClick={handlePrev} style={arrowButtonStyle} aria-label="עדות קודמת">&#10095;</button>

        <div style={carousel}>
          <div 
            aria-live="polite" 
            aria-atomic="true"
            style={{ ...card, ...(direction === 'enter' ? enterStyle : exitStyle) }}
          >
            <div style={cardContent}>
              <p
                style={text}
                dangerouslySetInnerHTML={{
                  __html: testimonialsData[index].replace(/\*\*(.*?)\*\*/g, '<strong style="color:#035D92">$1</strong>')
                }}
              />
            </div>
            <div style={cardFooter}>
              <div style={stars} aria-label="דירוג 5 כוכבים">★★★★★</div>
              <div style={avatar} role="img" aria-label="אווטאר משתמש"></div>
            </div>
          </div>
        </div>

        <button onClick={handleNext} style={arrowButtonStyle} aria-label="עדות הבאה">&#10094;</button>
      </div>

      <button onClick={() => setIsPaused(!isPaused)} style={pauseControlStyle} aria-label={isPaused ? "הפעל אנימציה" : "עצור אנימציה"}>
        {isPaused ? "המשך ניגון אוטומטי ▶" : "עצור ניגון אוטומטי ⏸"}
      </button>
    </section>
  );
};

const wrapperStyle: React.CSSProperties = { padding: '80px 5%', background: '#F9F7F2', textAlign: 'center', direction: 'rtl', overflow: 'hidden' };
const title: React.CSSProperties = { fontSize: '2.5rem', color: '#035D92', fontWeight: 900, marginBottom: '50px' };
const containerWithArrows: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', maxWidth: '900px', margin: '0 auto' };
const carousel: React.CSSProperties = { position: 'relative', width: '100%', maxWidth: '720px', height: '320px', overflow: 'hidden' };
const card: React.CSSProperties = { position: 'absolute', width: '100%', background: '#FFFFFF', borderRadius: '28px', boxShadow: '0 24px 50px rgba(0,0,0,0.08)', transition: 'all 0.6s ease-in-out', left: 0, right: 0 };
const enterStyle: React.CSSProperties = { transform: 'translateX(0)', opacity: 1 };
const exitStyle: React.CSSProperties = { transform: 'translateX(100%)', opacity: 0 };
const cardContent: React.CSSProperties = { padding: '40px', paddingBottom: '50px' };
const cardFooter: React.CSSProperties = { height: '60px', background: 'rgba(3, 93, 146, 0.1)', padding: '10px 25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0 0 28px 28px', position: 'relative' };
const avatar: React.CSSProperties = { width: '50px', height: '50px', borderRadius: '50%', background: '#035D92', position: 'absolute', left: '25px', top: '-25px', border: '3px solid #fff' };
const stars: React.CSSProperties = { color: '#BF9100', fontSize: '1.2rem' };
const text: React.CSSProperties = { fontSize: '1.2rem', lineHeight: '1.8', color: '#222', textAlign: 'right' };
const arrowButtonStyle: React.CSSProperties = { background: '#fff', border: '1px solid #035D92', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', color: '#035D92' };
const pauseControlStyle: React.CSSProperties = { marginTop: '30px', background: 'none', border: 'none', color: '#035D92', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold' };