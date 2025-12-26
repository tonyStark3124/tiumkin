import React from 'react';
import { courses } from '../../data/coursesData';

const BuyCourseSection: React.FC = () => {
  const colors = {
    primaryBlue: '#00B4D8',
    darkBlue: '#03045E',
    lightBlue: '#E0F7FA',
    gold: '#FFD700', // לצבע של "המשתלם ביותר"
    white: '#FFFFFF',
    textGray: '#444',
    bgGray: '#f8f9fa',
    saleRed: '#d90429'
  };

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: '80px 20px',
      backgroundColor: colors.bgGray,
      direction: 'rtl',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2rem',
      color: colors.darkBlue,
      marginBottom: '40px',
      fontWeight: '800'
    },
    flexWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      justifyContent: 'center', 
      marginBottom: '80px'
    },
    card: {
      backgroundColor: colors.white,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      width: '350px',
      minHeight: '520px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: `1px solid #eee`,
      scrollMarginTop: '120px', // מרווח מהלמעלה כשגוללים לעוגן
      position: 'relative'
    },
    // עיצוב ייחודי לחבילות מבצע
    bundleCard: {
      border: `2px solid ${colors.primaryBlue}`,
      backgroundColor: '#f0fbff', // רקע מעט שונה
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '25px',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    badge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: colors.gold,
      color: colors.darkBlue,
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 'bold',
      zIndex: 2,
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: '800',
      color: colors.darkBlue,
      margin: '0 0 10px 0',
      lineHeight: '1.4'
    },
    priceContainer: {
      marginTop: '20px',
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px'
    },
    originalPrice: {
      textDecoration: 'line-through',
      color: '#999',
      fontSize: '1.1rem'
    },
    salePrice: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: colors.primaryBlue
    },
    button: {
      width: '100%',
      padding: '15px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: colors.primaryBlue,
      color: colors.white,
      fontWeight: 'bold',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'background 0.2s',
      marginTop: '15px'
    }
  };

  const singleCourses = courses.filter(c => c.course);
  const bundleDeals = courses.filter(c => !c.course);

  return (
    <section id="courses-section" style={styles.section}>
      <div style={styles.container}>
        
        {/* --- קורסים בודדים --- */}
        <h2 style={styles.sectionTitle}>הקורסים המקצועיים שלנו</h2>
        <div style={styles.flexWrapper}>
          {singleCourses.map(course => (
            <div 
              key={course.id} 
              id={`course-${course.id}`} 
              className="course-card-animated"
              style={styles.card}
            >
              <img src={course.imageSrc} alt={course.title} style={styles.image} />
              <div style={styles.cardContent}>
                <div>
                  <h3 style={styles.title}>{course.title}</h3>
                  <p style={{color: colors.textGray, fontSize: '0.95rem'}}>{course.tagline}</p>
                </div>
                
                <div>
                  <div style={styles.priceContainer}>
                    <span style={styles.salePrice}>₪{course.salePrice}</span>
                    <span style={styles.originalPrice}>₪{course.originalPrice}</span>
                  </div>
                  <button 
                    style={styles.button}
                    onClick={() => window.open(course.purchaseLink, '_blank')}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.darkBlue}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.primaryBlue}
                  >
                    לרכישה מאובטחת
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- חבילות ומבצעים --- */}
        <h2 style={{...styles.sectionTitle, color: colors.primaryBlue}}>חבילות VIP משתלמות</h2>
        <div style={styles.flexWrapper} id='special-offers'>
          {bundleDeals.map(bundle => (
            <div 
              key={bundle.id} 
              id={`course-${bundle.id}`} 
              className="course-card-animated"
              style={{...styles.card, ...styles.bundleCard}}
            >
              <div style={styles.badge}>חבילת חיסכון</div>
              <div style={styles.cardContent}>
                <div>
                  <h3 style={{...styles.title, fontSize: '1.2rem'}}>{bundle.title}</h3>
                  <p style={{color: colors.textGray, fontSize: '0.9rem'}}>השילוב המושלם למענה מקיף</p>
                </div>
                
                <div>
                   <div style={{color: colors.saleRed, fontWeight: 'bold', fontSize: '0.9rem'}}>
                    חיסכון של ₪{bundle.originalPrice - bundle.salePrice}!
                  </div>
                  <div style={styles.priceContainer}>
                    <span style={{...styles.salePrice, color: colors.darkBlue}}>₪{bundle.salePrice}</span>
                    <span style={styles.originalPrice}>₪{bundle.originalPrice}</span>
                  </div>
                  <button 
                    style={{...styles.button, backgroundColor: colors.darkBlue}}
                    onClick={() => window.open(bundle.purchaseLink, '_blank')}
                  >
                    אני רוצה את החבילה
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* אנימציות CSS */}
      <style>{`
        .course-card-animated:target {
          animation: highlight-glow 2s ease-out;
          border: 2px solid ${colors.primaryBlue} !important;
        }

        @keyframes highlight-glow {
          0% { transform: scale(1); box-shadow: 0 0 0px ${colors.primaryBlue}; }
          20% { transform: scale(1.03); box-shadow: 0 0 25px ${colors.primaryBlue}; }
          100% { transform: scale(1); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        }

        .course-card-animated:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
};

export default BuyCourseSection;