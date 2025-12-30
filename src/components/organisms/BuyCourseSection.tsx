import React from 'react';
import { courses } from '../../data/coursesData';

const BuyCourseSection: React.FC = () => {
  const colors = {
    primaryBlue: '#007791',
    darkBlue: '#023E8A',
    white: '#FFFFFF',
  };

  return (
    <section
      id="courses-section"
      style={{
        padding: 'clamp(40px, 8vh, 100px) 5vw',
        backgroundColor: '#f8f9fa',
        direction: 'rtl',
      }}
      aria-labelledby="buy-title"
    >
      <style>{`
        @keyframes highlight-blink {
          0% { outline: 0.3vw solid transparent; box-shadow: 0 1vh 3vh rgba(0,0,0,0.1); }
          50% { outline: 0.3vw solid #00B4D8; box-shadow: 0 0 2vh #00B4D8; }
          100% { outline: 0.3vw solid transparent; box-shadow: 0 1vh 3vh rgba(0,0,0,0.1); }
        }

        article:target {
          animation: highlight-blink 1s ease-in-out 3;
          scroll-margin-top: 10vh;
        }

        .focus-outline:focus-visible {
          outline: 3px solid #A67C00;
          outline-offset: 4px;
          border-radius: 8px;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* כותרת אזור – ללא heading */}
        <p
          id="buy-title"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 4vw + 1rem, 3rem)',
            color: colors.darkBlue,
            marginBottom: 'clamp(30px, 5vh, 60px)',
            fontWeight: 900,
          }}
        >
          הקורסים המקצועיים שלנו
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(clamp(280px, 20vw, 350px), 1fr))',
            gap: 'clamp(20px, 3vw, 40px)',
            justifyContent: 'center',
          }}
        >
          {courses.map(course => {
            const isSpecialDeal = course.course === false;

            return (
              <article
                key={course.id}
                id={`purchase-${course.id}`}
                role="group"
                aria-labelledby={`course-buy-title-${course.id}`}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1.5vw',
                  overflow: 'hidden',
                  boxShadow: '0 1vh 3vh rgba(0,0,0,0.1)',
                  border: '1px solid #eee',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                {isSpecialDeal && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '1.5vh',
                      right: '1.5vh',
                      backgroundColor: '#D90429',
                      color: '#fff',
                      padding: '0.5vh 1.5vw',
                      borderRadius: '0.5vw',
                      fontWeight: 'bold',
                      zIndex: 5,
                      boxShadow: '0 0.5vh 1vh rgba(0,0,0,0.2)',
                      fontSize: 'clamp(0.8rem, 1vw + 0.2rem, 1.1rem)',
                    }}
                  >
                    מבצע חבילה!
                  </div>
                )}

                <img
                  src={course.imageSrc}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: '100%',
                    height: 'clamp(150px, 25vh, 220px)',
                    objectFit: 'cover',
                  }}
                />

                <div
                  style={{
                    padding: 'clamp(15px, 2.5vw, 30px)',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* כותרת כרטיס – ללא heading */}
                  <span
                    id={`course-buy-title-${course.id}`}
                    style={{
                      fontSize:
                        'clamp(1.1rem, 2vw + 0.5rem, 1.5rem)',
                      color: colors.darkBlue,
                      margin: '0 0 1.5vh 0',
                      fontWeight: 800,
                      display: 'block',
                    }}
                  >
                    {course.title}
                  </span>

                  <p
                    style={{
                      color: '#444',
                      fontSize:
                        'clamp(0.9rem, 1.2vw + 0.1rem, 1.1rem)',
                      lineHeight: '1.6',
                      marginBottom: '3vh',
                    }}
                  >
                    {course.tagline}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5vw',
                        marginBottom: '2vh',
                      }}
                    >
                      <span
                        style={{
                          fontSize:
                            'clamp(1.5rem, 2.5vw + 0.5rem, 2.2rem)',
                          fontWeight: 'bold',
                          color: colors.darkBlue,
                        }}
                      >
                        ₪{course.salePrice}
                      </span>

                      <span
                        style={{
                          textDecoration: 'line-through',
                          color: '#777',
                          fontSize:
                            'clamp(0.9rem, 1vw + 0.1rem, 1.2rem)',
                        }}
                      >
                        ₪{course.originalPrice}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        window.open(course.purchaseLink, '_blank')
                      }
                      className="focus-outline"
                      style={{
                        width: '100%',
                        padding: 'clamp(12px, 2vh, 20px)',
                        backgroundColor: colors.primaryBlue,
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.8vw',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize:
                          'clamp(1rem, 1.5vw + 0.2rem, 1.25rem)',
                        transition: 'transform 0.2s ease',
                      }}
                      aria-label={`רכישת קורס ${course.title} במחיר ${course.salePrice} שקלים. הקישור ייפתח בחלון חדש`}
                    >
                      לרכישה מאובטחת
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuyCourseSection;
