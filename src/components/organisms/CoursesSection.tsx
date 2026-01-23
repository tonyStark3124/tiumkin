import React from 'react';
import { courses } from '../../data/coursesData';
import { CourseCard } from '../molecules/CourseCard';

export const CoursesSection: React.FC = () => {
  const regularCourses = courses.filter(c => c.course === true);

  return (
    <section
      id="courses"
      style={sectionWrapper}
      aria-labelledby="courses-section-title"
    >
      <div style={headerStyle}>
        <p id="courses-section-title" style={mainTitleStyle}>
          ארגז הכלים להורים ומורים
        </p>

        <p style={subTitleStyle}>
          כלים מעשיים לשינוי אמיתי באווירה בבית ובכיתה
        </p>

        <div
          style={underlineStyle}
          aria-hidden="true"
        />
      </div>

      <div style={coursesListContainer}>
        {regularCourses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} rabbiImageSrc={"../assets/optimized/rabbis-image.webp"} shadowColor={course.shadowColor} />
        ))}
      </div>

      {/* אזור הנעה לחבילות */}
      <div
        id="special-offers-anchor"
        style={bundleSectionStyle}
        role="region"
        aria-labelledby="bundle-title"
      >
        <div style={bundleContent}>
          <p id="bundle-title" style={bundleTitle}>
            רוצים להעמיק וגם לחסוך?
          </p>

          <p style={bundleText}>
            רכישת חבילת קורסים תעניק לכם מעטפת שלמה של כלים במחיר המשתלם ביותר.
          </p>

         <button
            type="button"
            onClick={() => {
              const section = document.querySelector('#special-deals-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                
                // מחכים לסיום הגלילה ואז מעביר פוקוס
                setTimeout(() => {
                  // אם לסקשן יש tabindex, נתן לו פוקוס
                  if (section instanceof HTMLElement) {
                    section.focus();
                  }
                }, 500); // 500ms להשלמת אנימציית הגלילה
              }
            }}
            style={bundleBtnStyle}
            aria-label="מעבר לאזור חבילות הקורסים והמבצעים"
          >
            לצפייה בחבילות הקורסים והמבצעים
          </button>
        </div>
      </div>

      <div style={bottomSupportBar}>
        <p style={supportBarText}>
         לאפשרות לקבל את הקורס בדיסק אונקי אנא צרו קשר בטלפון:
         <br />
          <a
            href="tel:+972548455029"
            style={phoneLinkStyle}
            aria-label="התקשרות טלפונית למספר 0548455029"
          >
            054-845-5029
          </a>
          <br />
          או במייל:
          <br />
          <a
            href="mailto:m0548455029@gmail.com"
            style={phoneLinkStyle}
            aria-label="שליחת דואר אלקטרוני לכתובת m0548455029@gmail.com"
          >
            m0548455029@gmail.com
          </a>
          
        </p>
      </div>
    </section>
  );
};

/* --- Styles --- */

const sectionWrapper: React.CSSProperties = {
  padding: 'clamp(60px, 12vh, 150px) 5%',
  backgroundColor: '#F9F7F2',
  direction: 'rtl',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '80px',
};

const mainTitleStyle: React.CSSProperties = {
  fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
  fontWeight: 900,
  color: '#035D92',
  letterSpacing: '-0.5px',
};

const subTitleStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  color: '#555',
  marginTop: '15px',
};

const underlineStyle: React.CSSProperties = {
  width: '70px',
  height: '5px',
  backgroundColor: '#A67C00',
  margin: '25px auto',
  borderRadius: '10px',
};

const coursesListContainer: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
};

const bundleSectionStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '60px auto 0',
  backgroundColor: '#035D92',
  borderRadius: '30px',
  padding: '60px 30px',
  textAlign: 'center',
  color: '#fff',
  boxShadow: '0 20px 50px rgba(3, 93, 146, 0.25)',
  position: 'relative',
  overflow: 'hidden',
};

const bundleContent: React.CSSProperties = {
  position: 'relative',
  zIndex: 2,
};

const bundleTitle: React.CSSProperties = {
  fontSize: '2.2rem',
  fontWeight: 800,
  margin: '0 0 15px 0',
};

const bundleText: React.CSSProperties = {
  fontSize: '1.2rem',
  marginBottom: '35px',
  opacity: 0.9,
  maxWidth: '600px',
  margin: '0 auto 35px',
};

const bundleBtnStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  color: '#035D92',
  padding: '18px 50px',
  borderRadius: '60px',
  border: 'none',
  fontWeight: 900,
  fontSize: '1.2rem',
  cursor: 'pointer',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
  outlineOffset: '4px',
};

const bottomSupportBar: React.CSSProperties = {
  marginTop: '100px',
  textAlign: 'center',
  paddingTop: '30px',
  borderTop: '1px solid #ddd',
};

const supportBarText: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#666',
};

const phoneLinkStyle: React.CSSProperties = {
  marginRight: '10px',
  color: '#035D92',
  fontWeight: 800,
  textDecoration: 'none',
};
