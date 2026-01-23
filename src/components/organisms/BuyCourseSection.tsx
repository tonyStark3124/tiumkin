import React from 'react';
import { courses } from '../../data/coursesData';

const BuyCourseSection: React.FC = () => {
  const colors = {
    primaryBlue: '#007791',
    darkBlue: '#023E8A',
    white: '#FFFFFF',
  };

  // הפרדת הקורסים לפי סוג
  const regularCourses = courses.filter(course => course.course !== false);
  const specialDeals = courses.filter(course => course.course === false);

  const renderCourseCard = (course: any) => {
    const isSpecialDeal = course.course === false;
    // הגדרת צבע ברירת מחדל אם shadowColor לא קיים בדאטה
    const dynamicShadow = course.shadowColor || 'rgba(0,0,0,0.1)';

    return (
      <article
        key={course.id}
        id={`purchase-${course.id}`}
        role="article"
        aria-labelledby={`course-title-${course.id}`}
        aria-describedby={`course-desc-${course.id} course-price-${course.id}`}
        style={{
          backgroundColor: 'white',
          borderRadius: 'clamp(12px, 1.5vw, 20px)',
          overflow: 'hidden',
          // הוספת ההילה הראשונית
          boxShadow: `0 4px 20px ${dynamicShadow}`, 
          border: '1px solid #eee',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '380px',
          flex: '1 1 300px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          // הילה דומיננטית יותר בריחוף
          e.currentTarget.style.boxShadow = `0 12px 30px ${dynamicShadow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          // חזרה להילה המקורית
          e.currentTarget.style.boxShadow = `0 4px 20px ${dynamicShadow}`;
        }}
      >
        {isSpecialDeal && (
          <div
            role="status"
            aria-label="מבצע חבילה מיוחד"
            style={{
              position: 'absolute',
              top: 'clamp(8px, 1.5vh, 16px)',
              right: 'clamp(8px, 1.5vh, 16px)',
              backgroundColor: '#D90429',
              color: '#fff',
              padding: 'clamp(4px, 0.5vh, 8px) clamp(12px, 1.5vw, 20px)',
              borderRadius: 'clamp(4px, 0.5vw, 8px)',
              fontWeight: 'bold',
              zIndex: 5,
              boxShadow: '0 2px 8px rgba(217, 4, 41, 0.3)',
              fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            }}
          >
            מבצע חבילה!
          </div>
        )}

        <img
          src={course.imageSrc}
          alt={`תמונת נושא לקורס ${course.title}`}
          style={{
            width: '100%',
            height: 'clamp(180px, 30vw, 220px)',
            objectFit: 'cover',
            objectPosition: '50% 25%', 
          }}
        />

        <div
          style={{
            padding: 'clamp(16px, 3vw, 30px)',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3
            id={`course-title-${course.id}`}
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              color: colors.darkBlue,
              margin: '0 0 clamp(8px, 1.5vh, 12px) 0',
              fontWeight: 800,
              lineHeight: '1.3',
            }}
          >
            {course.title}
          </h3>

          <p
            id={`course-desc-${course.id}`}
            style={{
              color: '#444',
              fontSize: 'clamp(0.875rem, 2.2vw, 1.1rem)',
              lineHeight: '1.6',
              marginBottom: 'clamp(16px, 3vh, 24px)',
              flex: 1,
            }}
          >
            {course.tagline}
          </p>

          <div style={{ marginTop: 'auto' }}>
            <div
              id={`course-price-${course.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 1.5vw, 16px)',
                marginBottom: 'clamp(12px, 2vh, 16px)',
                flexWrap: 'wrap',
              }}
            >
              <span
                aria-label={`מחיר: ${course.salePrice} שקלים`}
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: colors.darkBlue,
                }}
              >
                ₪{course.salePrice}
              </span>
            </div>

            <button
              onClick={() => window.open(course.purchaseLink, '_blank')}
              aria-label={`רכישת קורס ${course.title} במחיר ${course.salePrice} שקלים. הקישור ייפתח בחלון חדש`}
              style={{
                width: '100%',
                padding: 'clamp(12px, 2.5vh, 18px) clamp(16px, 2vw, 24px)',
                backgroundColor: colors.primaryBlue,
                color: 'white',
                border: '2px solid transparent',
                borderRadius: 'clamp(6px, 0.8vw, 10px)',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
                transition: 'all 0.2s ease',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '3px solid #FFD700';
                e.currentTarget.style.outlineOffset = '3px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#005F73';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryBlue;
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              לרכישה מאובטחת
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <>
      <style>{`
        @keyframes highlight-blink {
          0%, 100% { 
            outline: 3px solid transparent; 
          }
          50% { 
            outline: 3px solid #00B4D8; 
            box-shadow: 0 0 20px #00B4D8; 
          }
        }

        article:target {
          animation: highlight-blink 1s ease-in-out 3;
          scroll-margin-top: clamp(80px, 10vh, 120px);
        }

        .skip-link {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          background: #023E8A;
          color: white;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          z-index: 1000;
          transition: top 0.3s ease;
        }

        .skip-link:focus {
          top: 20px;
          outline: 3px solid #FFD700;
          outline-offset: 3px;
        }

        @media (max-width: 768px) {
          article {
            scroll-margin-top: 60px;
          }
        }

        @media (max-width: 480px) {
          article {
            scroll-margin-top: 50px;
          }
        }
      `}</style>

      <a href="#special-deals-section" className="skip-link">
        דלג למבצעים המיוחדים
      </a>
      <a href="#courses-section" className="skip-link" style={{ top: '-140px' }}>
        דלג לקורסים הרגילים
      </a>

      {regularCourses.length > 0 && (
        <section
          id="courses-section"
          role="region"
          aria-labelledby="courses-title"
          aria-describedby="courses-count"
          style={{
            padding: 'clamp(40px, 8vh, 100px) clamp(16px, 5vw, 80px)',
            backgroundColor: '#f8f9fa',
            direction: 'rtl',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <h2
              id="courses-title"
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                color: colors.darkBlue,
                marginBottom: 'clamp(12px, 2vh, 20px)',
                fontWeight: 900,
                lineHeight: '1.2',
              }}
            >
              הקורסים המקצועיים שלנו
            </h2>

            <p
              id="courses-count"
              role="status"
              aria-live="polite"
              style={{
                textAlign: 'center',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                color: '#666',
                marginBottom: 'clamp(30px, 5vh, 60px)',
                fontWeight: 500,
              }}
            >
              {regularCourses.length} {regularCourses.length === 1 ? 'קורס זמין' : 'קורסים זמינים'}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(16px, 3vw, 40px)',
                justifyContent: 'center',
              }}
            >
              {regularCourses.map(renderCourseCard)}
            </div>
          </div>
        </section>
      )}

      {specialDeals.length > 0 && (
        <section
          id="special-deals-section"
          tabIndex={-1}
          role="region"
          aria-labelledby="special-deals-title"
          aria-describedby="special-deals-count"
          style={{
            outline: 'none',
            padding: 'clamp(40px, 8vh, 100px) clamp(16px, 5vw, 80px)',
            backgroundColor: '#fff5f5',
            direction: 'rtl',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <h2
              id="special-deals-title"
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                color: '#D90429',
                marginBottom: 'clamp(12px, 2vh, 20px)',
                fontWeight: 900,
                lineHeight: '1.2',
              }}
            >
               מבצעים מיוחדים 
            </h2>

            <p
              id="special-deals-count"
              role="status"
              aria-live="polite"
              style={{
                textAlign: 'center',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                color: '#666',
                marginBottom: 'clamp(30px, 5vh, 60px)',
                fontWeight: 500,
              }}
            >
              {specialDeals.length} {specialDeals.length === 1 ? 'מבצע זמין' : 'מבצעים זמינים'}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(16px, 3vw, 40px)',
                justifyContent: 'center',
              }}
            >
              {specialDeals.map(renderCourseCard)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BuyCourseSection;