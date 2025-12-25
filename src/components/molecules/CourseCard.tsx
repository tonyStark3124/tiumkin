import React from 'react';
import { ICourse } from '../../types/course';

interface Props {
  course: ICourse;
  onOpenModal: (course: ICourse) => void;
}

export const CourseCard: React.FC<Props> = ({ course, onOpenModal }) => {
  const displayTitle = course.title.includes('—') 
    ? course.title.split('—')[1].trim() 
    : course.title;

  return (
    <article 
      style={cardStyle}
      onClick={() => onOpenModal(course)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-12px) scale(1.01)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
    >
      {/* דמות המרצה המרחפת */}
      <img src="/assets/dan-image.png" style={floatingImageStyle} alt="דן טיומקין" />

      {/* רקע והבטחה */}
      <div style={{
        ...topSectionStyle,
        backgroundImage: `linear-gradient(to bottom, rgba(3, 93, 146, 0.15), rgba(3, 93, 146, 0.7)), url("${course.imageSrc}")`
      }}>
        <div style={glowOverlayStyle}></div>
        <div style={textContainerStyle}>
          <h3 style={titleStyle}>{displayTitle}</h3>
          <p style={taglineStyle}>{course.tagline}</p>
        </div>
      </div>

      {/* תוכן מסביר בקארד */}
      <div style={bottomSectionStyle}>
        <p style={explanationTextStyle}>לחצו לקבלת פירוט על תכני השיעורים והכלים המעשיים שתקבלו בקורס זה...</p>
        <button style={detailsBtnStyle}>
          למידע מלא וסילבוס
          <span style={{ marginRight: '10px' }}>←</span>
        </button>
      </div>
    </article>
  );
};

// --- Styles ---
const cardStyle: React.CSSProperties = { width: '380px', height: '520px', borderRadius: '35px', backgroundColor: '#fff', boxShadow: '0 20px 50px rgba(3, 93, 146, 0.08)', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'visible', border: '1px solid rgba(3, 93, 146, 0.03)' };
const floatingImageStyle: React.CSSProperties = { position: 'absolute', bottom: '130px', left: '10px', height: '210px', width: 'auto', maxWidth: '42%', zIndex: 10, pointerEvents: 'none', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))' };
const topSectionStyle: React.CSSProperties = { height: '65%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '35px 35px 0 0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '45px 30px' };
const glowOverlayStyle: React.CSSProperties = { position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, background: 'radial-gradient(circle at 50% 115%, rgba(255,255,255,0.7) 0%, transparent 70%)', zIndex: 1 };
const textContainerStyle: React.CSSProperties = { position: 'relative', zIndex: 2, textAlign: 'right' };
const titleStyle: React.CSSProperties = { fontSize: '2.1rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' };
const taglineStyle: React.CSSProperties = { fontSize: '0.95rem', color: '#fff', marginTop: '12px', opacity: 0.95, maxWidth: '85%', lineHeight: '1.4' };
const bottomSectionStyle: React.CSSProperties = { height: '35%', backgroundColor: '#fff', borderRadius: '0 0 35px 35px', padding: '25px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' };
const explanationTextStyle: React.CSSProperties = { fontSize: '0.9rem', color: '#666', lineHeight: '1.4', margin: '0', textAlign: 'right' };
const detailsBtnStyle: React.CSSProperties = { backgroundColor: '#035D92', color: '#fff', border: 'none', padding: '15px', borderRadius: '18px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', textAlign: 'center', width: '100%', boxShadow: '0 10px 20px rgba(3, 93, 146, 0.2)' };