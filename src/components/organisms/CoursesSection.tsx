import React, { useState } from 'react';
import { courses } from '../../data/coursesData'; 
import { CourseCard } from '../molecules/CourseCard';
import { ICourse } from '../../types/course';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
  const regularCourses = courses.filter(c => c.course === true);

  return (
    <section id="courses" style={sectionWrapper} aria-labelledby="courses-main-title">
      <div style={headerStyle}>
        <h2 id="courses-main-title" style={mainTitleStyle}>ארגז הכלים להורים ומורים</h2>
        <p style={subTitleStyle}>בחרו קורס והתחילו לקבל כלים מעשיים עוד היום</p>
        <div style={underlineStyle}></div>
      </div>

      <div style={flexGrid}>
        {regularCourses.map((course) => (
          <CourseCard key={course.id} course={course} onOpenModal={(c) => setSelectedCourse(c)} />
        ))}
      </div>

      <div style={bottomSupportBar}>
         <div style={{ fontSize: '1.2rem', color: '#035D92', fontWeight: 700 }}>
           לקבלת הקורסים בדיסק און קי, ולבירור פרטים נוספים חייגו: 
           <a href="tel:0548455029" style={{ marginRight: '10px', color: '#A67C00', textDecoration: 'underline' }}>054-845-5029</a>
         </div>
      </div>

      {selectedCourse && (
        <div 
          style={modalOverlay} 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-title"
          onClick={() => setSelectedCourse(null)}
        >
          <div style={modalContent} onClick={e => e.stopPropagation()}>
            <div style={{...modalHeader, backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), transparent), url("${selectedCourse.imageSrc}")`}}>
              <h2 id="modal-title" style={modalTitleStyle}>{selectedCourse.title}</h2>
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
                  <button 
                    onClick={() => {
                      document.querySelector('#special-offers')?.scrollIntoView({ behavior: 'smooth' });
                      setSelectedCourse(null)
                    }}
                    style={bundleLinkStyle}
                  >
                    מעוניינים בחבילת קורסים במחיר מוזל? לחצו כאן
                  </button>
                </div>
              </div>
            </div>
            <button onClick={() => setSelectedCourse(null)} style={closeBtn} aria-label="סגור מודאל">✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

const sectionWrapper: React.CSSProperties = { padding: '100px 5%', backgroundColor: '#F9F7F2', direction: 'rtl' };
const headerStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '80px' };
const mainTitleStyle: React.CSSProperties = { fontSize: '2.8rem', fontWeight: 900, color: '#035D92' };
const subTitleStyle: React.CSSProperties = { fontSize: '1.15rem', color: '#444', marginTop: '10px' };
const underlineStyle: React.CSSProperties = { width: '60px', height: '4px', backgroundColor: '#A67C00', margin: '20px auto', borderRadius: '2px' };
const flexGrid: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px 40px', maxWidth: '1300px', margin: '0 auto' };
const bottomSupportBar: React.CSSProperties = { marginTop: '80px', textAlign: 'center', padding: '30px', backgroundColor: 'rgba(3, 93, 146, 0.05)', borderRadius: '20px', border: '1px dashed #035D92' };
const modalOverlay: React.CSSProperties = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(8px)', padding: '20px' };
const modalContent: React.CSSProperties = { backgroundColor: '#fff', width: '100%', maxWidth: '800px', borderRadius: '30px', overflow: 'hidden', position: 'relative' };
const modalHeader: React.CSSProperties = { height: '240px', backgroundSize: 'cover', backgroundPosition: 'center', padding: '40px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' };
const modalTitleStyle: React.CSSProperties = { fontSize: '2rem', fontWeight: 800, margin: 0 };
const modalBody: React.CSSProperties = { padding: '40px', textAlign: 'right', direction: 'rtl', overflowY: 'auto', maxHeight: '60vh' };
const modalDescStyle: React.CSSProperties = { lineHeight: '1.8', fontSize: '1.1rem', color: '#333', whiteSpace: 'pre-line' };
const modalFooter: React.CSSProperties = { marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' };
const priceContainer: React.CSSProperties = { display: 'flex', flexDirection: 'column' };
const priceLabel: React.CSSProperties = { fontSize: '0.9rem', color: '#666' };
const salePriceStyle: React.CSSProperties = { fontSize: '2.5rem', fontWeight: 900, color: '#035D92' };
const originalPriceStyle: React.CSSProperties = { fontSize: '1.2rem', color: '#999', textDecoration: 'line-through' };
const actionButtons: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' };
const buyBtn: React.CSSProperties = { backgroundColor: '#035D92', color: '#fff', padding: '15px 45px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' };
const bundleLinkStyle: React.CSSProperties = { fontSize: '0.95rem', color: '#A67C00', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none' };
const closeBtn: React.CSSProperties = { position: 'absolute', top: '15px', left: '15px', border: 'none', background: '#fff', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' };