import React, { useState } from 'react';
import { courses } from '../../data/coursesData'; 
import { CourseCard } from '../molecules/CourseCard';
import { ICourse } from '../../types/course';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
  const regularCourses = courses.filter(c => c.course === true);

  return (
    <section id="courses" style={sectionWrapper}>
      <div style={headerStyle}>
        <h2 style={mainTitleStyle}>ארגז הכלים להורים ומורים</h2>
        <p style={subTitleStyle}>בחרו קורס והתחילו לקבל כלים מעשיים עוד היום</p>
        <div style={underlineStyle}></div>
      </div>

      <div style={flexGrid}>
        {regularCourses.map((course) => (
          <CourseCard key={course.id} course={course} onOpenModal={(c) => setSelectedCourse(c)} />
        ))}
      </div>

      {/* בר שירות לקוחות תחתון */}
      <div style={bottomSupportBar}>
         <div style={{ fontSize: '1.2rem', color: '#035D92', fontWeight: 600 }}>
           לקבלת הקורסים בדיסק און קי, ולבירור פרטים נוספים חייגו: 
           <a href="tel:054-845-5029" style={{ marginRight: '10px', color: '#D4AF37' }}>054-845-5029</a>
         </div>
      </div>

      {selectedCourse && (
        <div style={modalOverlay} onClick={() => setSelectedCourse(null)}>
          <div style={modalContent} onClick={e => e.stopPropagation()}>
            <div style={{...modalHeader, backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("${selectedCourse.imageSrc}")`}}>
              <h2 style={modalTitleStyle}>{selectedCourse.title}</h2>
            </div>

            <div style={modalBody}>
              <h3 style={{ color: '#035D92', marginBottom: '15px' }}>על הקורס:</h3>
              <p style={modalDescStyle}>{selectedCourse.description}</p>
              
              <div style={modalFooter}>
                <div style={priceContainer}>
                  <span style={priceLabel}>השקעה בקורס:</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={salePriceStyle}>₪{selectedCourse.salePrice}</span>
                    <span style={originalPriceStyle}>₪{selectedCourse.originalPrice}</span>
                  </div>
                </div>
                
                <div style={actionButtons}>
                  <a href={selectedCourse.purchaseLink} target="_blank" rel="noreferrer" style={buyBtn}>הרשמה לגישה מיידית</a>
                  
                  {/* שורת שירות טלפוני בתוך המודאל */}
                  <p style={phoneSupportStyle}>
                    אפשרות לרכישה ב<b>דיסק און קי</b>: 
                    <a href="tel:054-845-5029" style={{ color: '#035D92', textDecoration: 'none', marginRight: '5px', fontWeight: 'bold' }}>054-845-5029</a>
                  </p>

                  {/* <a href="#special-offers" onClick={() => setSelectedCourse(null)} style={bundleLinkStyle}>
                    מעוניינים בחבילת קורסים במחיר מוזל? לחצו כאן
                  </a> */}
                
                  <button 
                    onClick={() => {
                      const element = document.querySelector('#special-offers');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      setSelectedCourse(null)
                    }}
                    style={bundleLinkStyle}
                  >
                    מעוניינים בחבילת קורסים במחיר מוזל? לחצו כאן
                  </button>
                </div>
              </div>
            </div>
            <button onClick={() => setSelectedCourse(null)} style={closeBtn}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

// --- Styles החדשים ---
const sectionWrapper: React.CSSProperties = { padding: '100px 5%', backgroundColor: '#F9F7F2', direction: 'rtl' };
const headerStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '80px' };
const mainTitleStyle: React.CSSProperties = { fontSize: '2.8rem', fontWeight: 900, color: '#035D92' };
const subTitleStyle: React.CSSProperties = { fontSize: '1.1rem', color: '#666', marginTop: '10px' };
const underlineStyle: React.CSSProperties = { width: '60px', height: '4px', backgroundColor: '#D4AF37', margin: '20px auto', borderRadius: '2px' };
const flexGrid: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px 40px', maxWidth: '1300px', margin: '0 auto' };

const bottomSupportBar: React.CSSProperties = { marginTop: '80px', textAlign: 'center', padding: '30px', backgroundColor: 'rgba(3, 93, 146, 0.05)', borderRadius: '20px', border: '1px dashed #035D92' };

const modalOverlay: React.CSSProperties = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(3, 93, 146, 0.97)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(10px)', padding: '20px' };
const modalContent: React.CSSProperties = { backgroundColor: '#fff', width: '100%', maxWidth: '850px', borderRadius: '40px', overflow: 'hidden', position: 'relative' };
const modalHeader: React.CSSProperties = { height: '240px', backgroundSize: 'cover', backgroundPosition: 'center', padding: '40px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' };
const modalTitleStyle: React.CSSProperties = { fontSize: '2.2rem', fontWeight: 800, margin: 0 };
const modalBody: React.CSSProperties = { padding: '40px', textAlign: 'right', direction: 'rtl', overflowY: 'auto', maxHeight: '60vh' };
const modalDescStyle: React.CSSProperties = { lineHeight: '1.8', fontSize: '1.1rem', color: '#444', whiteSpace: 'pre-line' };

const modalFooter: React.CSSProperties = { marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' };
const priceContainer: React.CSSProperties = { display: 'flex', flexDirection: 'column' };
const priceLabel: React.CSSProperties = { fontSize: '0.9rem', color: '#888' };
const salePriceStyle: React.CSSProperties = { fontSize: '2.8rem', fontWeight: 900, color: '#035D92' };
const originalPriceStyle: React.CSSProperties = { fontSize: '1.2rem', color: '#bbb', textDecoration: 'line-through' };

const actionButtons: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' };
const buyBtn: React.CSSProperties = { backgroundColor: '#035D92', color: '#fff', padding: '15px 45px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 10px 25px rgba(3, 93, 146, 0.3)' };
const phoneSupportStyle: React.CSSProperties = { fontSize: '0.95rem', color: '#555', margin: '5px 0' };
const bundleLinkStyle: React.CSSProperties = { fontSize: '0.9rem', color: '#D4AF37', fontWeight: '600', textDecoration: 'underline', cursor: 'pointer' };
const closeBtn: React.CSSProperties = { position: 'absolute', top: '20px', left: '20px', border: 'none', background: '#fff', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer', fontWeight: 'bold' };