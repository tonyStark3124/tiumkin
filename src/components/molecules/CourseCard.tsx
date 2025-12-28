import React, { useState } from 'react';
import { ICourse } from '../../types/course';

interface Props {
  course: ICourse;
  onOpenModal: (course: ICourse) => void;
}

export const CourseCard: React.FC<Props> = ({ course, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  // המרה למחרוזת למניעת שגיאת TS2339
  const isBundle = course.originalPrice > 600 || String(course.id).includes('bundle');

  const displayTitle = course.title.includes('—') 
    ? course.title.split('—')[1].trim() 
    : course.title;

  return (
    <div style={wrapperStyle}>
      <article 
        style={{
          ...cardStyle,
          transform: isHovered ? 'translateY(-10px)' : 'none',
          boxShadow: isHovered ? '0 30px 60px rgba(3, 93, 146, 0.15)' : '0 10px 30px rgba(0,0,0,0.05)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isBundle && <div style={saleBadge}>מבצע 3 קורסים</div>}

        <div 
          style={{
            ...topSection,
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.85)), url("${course.imageSrc}")`
          }}
          onClick={() => onOpenModal(course)}
        >
          <h3 style={cardTitle}>{displayTitle}</h3>
          <p style={cardTagline}>{course.tagline}</p>
        </div>

        <div style={bottomSection}>
          <p style={cardDesc}>לחצו לקבלת פירוט על תכני השיעורים והכלים המעשיים שתקבלו...</p>
          <div style={buttonGroup}>
            <button onClick={() => onOpenModal(course)} style={btnPrimary}>לסילבוס המלא</button>
            <a href={`#purchase-${course.id}`} style={linkStyle}>לבחירת מסלול ↓</a>
          </div>
        </div>
      </article>
    </div>
  );
};

const wrapperStyle = { padding: '10px' };
const cardStyle: React.CSSProperties = { width: '360px', height: '540px', backgroundColor: '#fff', borderRadius: '30px', overflow: 'hidden', transition: 'all 0.4s', position: 'relative', display: 'flex', flexDirection: 'column' };
const saleBadge: React.CSSProperties = { position: 'absolute', top: '20px', right: '20px', backgroundColor: '#D90429', color: 'white', padding: '5px 15px', borderRadius: '5px', zIndex: 10, fontWeight: 'bold' };
const topSection: React.CSSProperties = { height: '60%', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '30px', cursor: 'pointer' };
const cardTitle: React.CSSProperties = { color: 'white', fontSize: '1.8rem', margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.5)' };
const cardTagline: React.CSSProperties = { color: '#eee', fontSize: '0.95rem', marginTop: '10px' };
const bottomSection: React.CSSProperties = { padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 };
const cardDesc: React.CSSProperties = { fontSize: '0.9rem', color: '#666', lineHeight: '1.4' };
const buttonGroup: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px' };
const btnPrimary: React.CSSProperties = { backgroundColor: '#035D92', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' };
const linkStyle: React.CSSProperties = { textAlign: 'center', color: '#035D92', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' };