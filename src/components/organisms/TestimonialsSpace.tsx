import React, { useEffect, useState, useCallback } from 'react';

/* --- Testimonials content (semantic & accessible) --- */
const testimonialsData: React.ReactNode[] = [
  <>כבר התייאשתי, לא היה לי אמון באנשי מקצוע… <strong>הדיוק פשוט מטורף.</strong> קיבלנו גישה אחרת לגמרי, והילד עלה על מסלול חיובי.</>,
  <>מצווה לפרסם. זה באמת עובד. הילד שלי עבר מסמארטפון לטלפון כשר. <strong>לא האמנו שנראה את זה קורה.</strong></>,
  <>ישבנו יחד, צפינו בפרקים – <strong>בכינו, צחקנו, והבנו.</strong> הכל כל כך מעשי וברור, והשינוי אמיתי.</>,
  <><strong>סדרת חובה לכל הורה למתבגר.</strong> לא רק כשיש קושי – אלא כהכוונה מונעת ובריאה.</>
];

export const TestimonialsSpace: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'enter' | 'exit'>('enter');
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  /* --- Reduced motion support (WCAG) --- */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const listener = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const handleNext = useCallback(() => {
    setDirection('exit');
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
      setDirection('enter');
    }, reduceMotion ? 0 : 600);
  }, [reduceMotion]);

  const handlePrev = useCallback(() => {
    setDirection('exit');
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
      setDirection('enter');
    }, reduceMotion ? 0 : 600);
  }, [reduceMotion]);

  useEffect(() => {
    if (isPaused || reduceMotion) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, reduceMotion]);

  return (
    <section style={wrapperStyle} aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" style={title}>הורים מספרים מהלב</h2>

      <div
        style={containerWithArrows}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button onClick={handlePrev} style={arrowButtonStyle} aria-label="עדות קודמת">
          &#10095;
        </button>

        <div style={carousel}>
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              ...card,
              ...(reduceMotion
                ? enterStyle
                : direction === 'enter'
                ? enterStyle
                : exitStyle),
            }}
          >
            <div style={cardContent}>
              <p style={text}>{testimonialsData[index]}</p>
            </div>

            <div style={cardFooter}>
              <div style={stars} aria-label="דירוג 5 כוכבים">★★★★★</div>
              <div style={avatar} role="img" aria-label="אווטאר משתמש"></div>
            </div>
          </div>
        </div>

        <button onClick={handleNext} style={arrowButtonStyle} aria-label="עדות הבאה">
          &#10094;
        </button>
      </div>

      <button
        onClick={() => setIsPaused(!isPaused)}
        style={pauseControlStyle}
        aria-label={isPaused ? 'הפעל ניגון אוטומטי' : 'עצור ניגון אוטומטי'}
      >
        {isPaused ? 'המשך ניגון אוטומטי ▶' : 'עצור ניגון אוטומטי ⏸'}
      </button>
    </section>
  );
};

/* --- Styles --- */

const wrapperStyle: React.CSSProperties = {
  padding: 'clamp(40px, 8vw, 100px) 5%',
  background: '#F9F7F2',
  textAlign: 'center',
  direction: 'rtl',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const title: React.CSSProperties = {
  fontSize: 'clamp(1.8rem, 4vw + 0.5rem, 3rem)',
  color: '#035D92',
  fontWeight: 900,
  marginBottom: 'clamp(20px, 5vw, 60px)',
};

const containerWithArrows: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(10px, 3vw, 30px)',
  width: '100%',
  maxWidth: '1100px',
};

const carousel: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '750px',
  height: 'clamp(280px, 45vh, 400px)',
  overflow: 'hidden',
};

const card: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: '#fff',
  borderRadius: 'clamp(15px, 3vw, 28px)',
  boxShadow: '0 24px 50px rgba(0,0,0,0.08)',
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'flex',
  flexDirection: 'column',
};

const enterStyle: React.CSSProperties = {
  transform: 'translateX(0)',
  opacity: 1,
};

const exitStyle: React.CSSProperties = {
  transform: 'translateX(-100%)',
  opacity: 0,
};

const cardContent: React.CSSProperties = {
  padding: 'clamp(20px, 5vw, 50px)',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const text: React.CSSProperties = {
  fontSize: 'clamp(1rem, 1.2vw + 0.5rem, 1.4rem)',
  lineHeight: 1.6,
  color: '#222',
  textAlign: 'right',
  margin: 0,
};

const cardFooter: React.CSSProperties = {
  height: 'clamp(50px, 8vw, 70px)',
  background: 'rgba(3, 93, 146, 0.1)',
  padding: '0 clamp(15px, 4vw, 30px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '0 0 clamp(15px, 3vw, 28px) clamp(15px, 3vw, 28px)',
  position: 'relative',
};

const avatar: React.CSSProperties = {
  width: 'clamp(40px, 6vw, 60px)',
  height: 'clamp(40px, 6vw, 60px)',
  borderRadius: '50%',
  background: '#035D92',
  position: 'absolute',
  left: 'clamp(15px, 4vw, 30px)',
  top: 'clamp(-30px, -3vw, -20px)',
  border: '3px solid #fff',
};

const stars: React.CSSProperties = {
  color: '#BF9100',
  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
};

const arrowButtonStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #035D92',
  width: 'clamp(35px, 5vw, 55px)',
  height: 'clamp(35px, 5vw, 55px)',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)',
  color: '#035D92',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const pauseControlStyle: React.CSSProperties = {
  marginTop: 'clamp(20px, 4vw, 40px)',
  background: 'none',
  border: 'none',
  color: '#035D92',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: 'clamp(0.85rem, 1vw + 0.2rem, 1.1rem)',
};
