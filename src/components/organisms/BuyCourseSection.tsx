import React from 'react';
import { courses } from '../../data/coursesData';

const BuyCourseSection: React.FC = () => {
  const colors = { primaryBlue: '#007791', darkBlue: '#023E8A', white: '#FFFFFF' };

  return (
    <section id="courses-section" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', direction: 'rtl' }} aria-labelledby="buy-title">
      
      <style>{`
        @keyframes highlight-blink {
          0% { outline: 4px solid transparent; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
          50% { outline: 4px solid #00B4D8; box-shadow: 0 0 20px #00B4D8; }
          100% { outline: 4px solid transparent; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        }
        article:target {
          animation: highlight-blink 1s ease-in-out 3;
          scroll-margin-top: 100px;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 id="buy-title" style={{ textAlign: 'center', fontSize: '2.5rem', color: colors.darkBlue, marginBottom: '50px', fontWeight: 900 }}>
          הקורסים המקצועיים שלנו
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {courses.map(course => {
            const isSpecialDeal = course.course === false;

            return (
              <article 
                id={`purchase-${course.id}`}
                key={course.id} 
                style={{ 
                  width: '350px', 
                  backgroundColor: 'white', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                  border: '1px solid #eee', 
                  position: 'relative',
                  display: 'flex',           // הופך את הכרטיס ל-Flex
                  flexDirection: 'column'    // סידור אלמנטים מלמעלה למטה
                }}
              >
                {isSpecialDeal && (
                  <div style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: '#D90429', color: '#fff', padding: '5px 12px', borderRadius: '5px', fontWeight: 'bold', zIndex: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
                    מבצע חבילה!
                  </div>
                )}
                
                <img src={course.imageSrc} alt="" aria-hidden="true" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                
                {/* מיכל התוכן - כאן קורה הקסם של ההצמדה למטה */}
                <div style={{ 
                  padding: '25px', 
                  flex: 1,                   // גורם לחלק הזה למלא את כל הגובה הפנוי
                  display: 'flex', 
                  flexDirection: 'column' 
                }}>
                  <h3 style={{ fontSize: '1.4rem', color: colors.darkBlue, margin: '0 0 10px 0', fontWeight: 800 }}>{course.title}</h3>
                  <p style={{ color: '#444', fontSize: '1rem', lineHeight: '1.5', marginBottom: '20px' }}>{course.tagline}</p>
                  
                  {/* מיכל המחיר והכפתור - נצמד לתחתית */}
                  <div style={{ marginTop: 'auto' }}> 
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: colors.darkBlue }}>₪{course.salePrice}</span>
                      <span style={{ textDecoration: 'line-through', color: '#777' }}>₪{course.originalPrice}</span>
                    </div>

                    <button 
                      onClick={() => window.open(course.purchaseLink, '_blank')}
                      style={{ 
                        width: '100%', 
                        padding: '15px', 
                        marginTop: '20px', 
                        backgroundColor: colors.primaryBlue, 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        fontWeight: 'bold', 
                        cursor: 'pointer', 
                        fontSize: '1.1rem' 
                      }}
                      aria-label={`רכישת קורס ${course.title} במחיר ${course.salePrice} שקלים`}
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