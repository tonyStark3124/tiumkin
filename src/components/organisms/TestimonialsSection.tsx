import React, { useEffect, useState } from 'react';

const testimonialsData = [
  "כבר התיאשתי, לא היה לי אמון ברבנים ואנשי מקצוע כי הילד שלי היה כל כך מנותק... **כל כך מדוייק!** הרב אורי זוהר והרב דן נוגעים בדיוק בלב של הבעיות, פתחו לנו פתח לגישה אחרת לגמרי, והילד עלה על מסלול חיובי! **זה ממש הציל את הבית שלנו!**",
  "מצוה לפרסם. זה באמת עובד. הילד שלי היה מכור לסמארטפון שלו, ולא מזמן הוא עבר לטלפון כשר! **לא האמנו שזה יכול לקרות!** והכל בזכות הגישה שקיבלנו מהסידרה!",
  "יש לנו חברים שהמליצו לנו על הספר 'בוסר המלאכים', אבל אין לנו סבלנות לקרוא, וכאן ישבתי עם בעלי, ופשוט צפינו.. **בכינו, צחקנו, החכמנו**, הכל כל כך מעשי וברור. והכי חשוב: גם באמת מועיל! השינוי ניכר!",
  "מצוה לכל הורה למתבגר להכיר את הכלים האלו, לא רק כשיש בלגן, גם בתור מניעה, כי זה יכול לחסוך כל כך הרבה כאב וצער. **ממש סידרת חובה לכל הורה למתבגר בדור הזה**",
];

type LiveCard = {
  id: number;
  text: string;
  createdAt: number;
  layout: {
    top: string;
    left: string;
    scale: number;
    rotation: string;
  };
};

export const TestimonialsSpace: React.FC = () => {
  const [cards, setCards] = useState<LiveCard[]>([]);
  const indexRef = React.useRef(0);

  // יצירת קארד חדש כל שנייה
  useEffect(() => {
    const interval = setInterval(() => {
      const text = testimonialsData[indexRef.current];
      indexRef.current =
        (indexRef.current + 1) % testimonialsData.length;

      const newCard: LiveCard = {
        id: Date.now(),
        text,
        createdAt: Date.now(),
        layout: {
          top: Math.floor(Math.random() * 50 + 10) + '%',
          left: Math.floor(Math.random() * 50 + 10) + '%',
          scale: 0.85 + Math.random() * 0.3,
          rotation: Math.floor(Math.random() * 6 - 3) + 'deg',
        },
      };

      setCards((prev) => [...prev, newCard]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // ניקוי קארדים אחרי 4 שניות
  useEffect(() => {
    const cleaner = setInterval(() => {
      const now = Date.now();
      setCards((prev) =>
        prev.filter((c) => now - c.createdAt < 30000)
      );
    }, 500);

    return () => clearInterval(cleaner);
  }, []);

  return (
    <section style={wrapperStyle}>
      <div style={glowEffect('20%', '15%')} />
      <div style={glowEffect('65%', '70%')} />

      <div style={headerContainer}>
        <h2 style={sectionTitle}>הורים מספרים מהלב</h2>
        <div style={goldUnderline} />
      </div>

      <div style={spaceContainer}>
        {cards.map((card) => {
          const age = Date.now() - card.createdAt;
          const opacity = Math.max(1 - age / 4000, 0);
          const blur = age > 2500 ? 'blur(8px)' : 'none';

          return (
            <div
              key={card.id}
              style={{
                ...testimonialCard,
                top: card.layout.top,
                left: card.layout.left,
                opacity,
                filter: blur,
                transform: `scale(${card.layout.scale}) rotate(${card.layout.rotation})`,
                transition: 'opacity 4s linear, filter 4s linear',
              }}
            >
              <div style={quoteMark}>"</div>
              <p
                style={textContent}
                dangerouslySetInnerHTML={{
                  __html: card.text.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong style="color:#035D92">$1</strong>'
                  ),
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ---------- styles ----------

const wrapperStyle: React.CSSProperties = {
  padding: '100px 5%',
  backgroundColor: '#F9F7F2',
  direction: 'rtl',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
};

const headerContainer: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '40px',
  position: 'relative',
  zIndex: 10,
};

const sectionTitle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 900,
  color: '#035D92',
  margin: 0,
};

const goldUnderline: React.CSSProperties = {
  width: '60px',
  height: '4px',
  backgroundColor: '#D4AF37',
  margin: '15px auto',
  borderRadius: '2px',
};

const spaceContainer: React.CSSProperties = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  minHeight: '500px',
};

const testimonialCard: React.CSSProperties = {
  position: 'absolute',
  backgroundColor: 'rgba(255,255,255,0.95)',
  width: '100%',
  maxWidth: '450px',
  padding: '40px',
  borderRadius: '40px',
  boxShadow: '0 25px 50px rgba(3,93,146,0.08)',
  border: '1px solid rgba(255,255,255,0.6)',
  willChange: 'opacity, transform',
};

const textContent: React.CSSProperties = {
  fontSize: '1.15rem',
  lineHeight: '1.8',
  color: '#444',
  margin: 0,
};

const quoteMark: React.CSSProperties = {
  position: 'absolute',
  top: '15px',
  right: '25px',
  fontSize: '4rem',
  color: '#D4AF37',
  opacity: 0.12,
};

const glowEffect = (top: string, left: string): React.CSSProperties => ({
  position: 'absolute',
  top,
  left,
  width: '500px',
  height: '500px',
  background:
    'radial-gradient(circle, rgba(3,93,146,0.05) 0%, transparent 70%)',
  borderRadius: '50%',
  pointerEvents: 'none',
});
