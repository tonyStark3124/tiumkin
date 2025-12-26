import React, { useEffect, useRef, useState } from 'react';

const testimonialsData = [
  "כבר התיאשתי, לא היה לי אמון ברבנים ואנשי מקצוע כי הילד שלי היה כל כך מנותק... **כל כך מדוייק!** הרב אורי זוהר והרב דן נוגעים בדיוק בלב של הבעיות, פתחו לנו פתח לגישה אחרת לגמרי, והילד עלה על מסלול חיובי! **זה ממש הציל את הבית שלנו!**",
  "מצוה לפרסם. זה באמת עובד. הילד שלי היה מכור לסמארטפון שלו, ולא מזמן הוא עבר לטלפון כשר! **לא האמנו שזה יכול לקרות!**",
  "יש לנו חברים שהמליצו לנו על הספר 'בוסר המלאכים', אבל אין לנו סבלנות לקרוא, וכאן ישבתי עם בעלי, ופשוט צפינו.. **בכינו, צחקנו, החכמנו**, הכל כל כך מעשי וברור.",
  "מצוה לכל הורה למתבגר להכיר את הכלים האלו, גם בתור מניעה. **סידרת חובה לכל הורה בדור הזה**",
];

const APPEAR_TIME = 750;          // הופעה מהירה יותר
const FADE_TIME = 10000;          // היעלמות איטית יותר
const TOTAL_LIFE = APPEAR_TIME + FADE_TIME;
const SPAWN_INTERVAL = 2000;

type Card = {
  id: number;
  text: string;
  createdAt: number;
  pausedAt: number | null;
  totalPaused: number;
  order: number;
  layout: {
    x: number;
    y: number;
    scale: number;
    rotate: number;
  };
};

export const TestimonialsSpace: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const indexRef = useRef(0);
  const orderRef = useRef(0);
  const pausedRef = useRef(false);
  const hardPauseRef = useRef(false);

  const isMobile = window.innerWidth < 768;

  // יצירת קארד
  useEffect(() => {
    const interval = setInterval(() => {
      if (pausedRef.current || hardPauseRef.current) return;

      const text = testimonialsData[indexRef.current];
      indexRef.current = (indexRef.current + 1) % testimonialsData.length;

      orderRef.current += 1;

      setCards((prev) => [
        ...prev,
        {
          id: Date.now(),
          text,
          createdAt: Date.now(),
          pausedAt: null,
          totalPaused: 0,
          order: orderRef.current,
          layout: {
            x: isMobile ? 0 : Math.random() * 60 - 30,
            y: isMobile ? 0 : Math.random() * 40 - 20,
            scale: isMobile ? 1 : 1.05 + Math.random() * 0.15,
            rotate: isMobile ? 0 : Math.random() * 6 - 3,
          },
        },
      ]);
    }, SPAWN_INTERVAL);

    return () => clearInterval(interval);
  }, [isMobile]);

  // ניקוי
  useEffect(() => {
    const cleaner = setInterval(() => {
      const now = Date.now();
      setCards((prev) =>
        prev.filter((c) => {
          const t = now - c.createdAt - c.totalPaused;
          return t < TOTAL_LIFE;
        })
      );
    }, 500);

    return () => clearInterval(cleaner);
  }, []);

  const pauseAll = () => {
    pausedRef.current = true;
    setCards((prev) =>
      prev.map((c) =>
        c.pausedAt ? c : { ...c, pausedAt: Date.now() }
      )
    );
  };

  const resumeAll = () => {
    pausedRef.current = false;
    setCards((prev) =>
      prev.map((c) =>
        c.pausedAt
          ? {
              ...c,
              totalPaused: c.totalPaused + (Date.now() - c.pausedAt),
              pausedAt: null,
            }
          : c
      )
    );
  };

  const toggleHardPause = () => {
    hardPauseRef.current = !hardPauseRef.current;
    hardPauseRef.current ? pauseAll() : resumeAll();
  };

  return (
    <section style={wrapper}>
      <div style={stage}>
        {cards.map((card) => {
          const now = Date.now();
          const t =
            (card.pausedAt ?? now) -
            card.createdAt -
            card.totalPaused;

          let opacity = 1;
          let blur = 0;

          if (t < APPEAR_TIME) {
            const p = t / APPEAR_TIME;
            opacity = p;
            blur = 10 * (1 - p);
          } else {
            const p = (t - APPEAR_TIME) / FADE_TIME;
            opacity = 1 - p;
            blur = 12 * p;
          }

          return (
            <div
              key={card.id}
              onMouseEnter={pauseAll}
              onMouseLeave={resumeAll}
              onClick={toggleHardPause}
              style={{
                ...cardStyle,
                zIndex: card.order,
                opacity,
                filter: `blur(${blur}px)`,
                transform: `
                  translate(-50%, -50%)
                  translate(${card.layout.x}px, ${card.layout.y}px)
                  scale(${card.layout.scale})
                  rotate(${card.layout.rotate}deg)
                `,
              }}
            >
              <p
                style={text}
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

/* ---------- styles ---------- */

const wrapper: React.CSSProperties = {
  padding: '32px 16px',
  background: '#F9F7F2',
  direction: 'rtl',
};

const stage: React.CSSProperties = {
  position: 'relative',
  height: '420px',
  maxWidth: '720px', // גדול יותר בדסקטופ
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  maxWidth: '620px',
  padding: '28px',
  background: 'white',
  borderRadius: '28px',
  boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
  cursor: 'pointer',
  willChange: 'opacity, filter, transform',
};

const text: React.CSSProperties = {
  fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
  lineHeight: 1.7,
  margin: 0,
};
