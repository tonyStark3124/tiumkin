import React, { useState } from 'react';
import { ICourse } from '../../types/course';

interface Props {
  course: ICourse;
  onOpenModal: (course: ICourse) => void;
}

export const CourseCard: React.FC<Props> = ({ course, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  // פיצול הכותרת לפי המקף (אם קיים)
  const displayTitle = course.title.includes('—') 
    ? course.title.split('—')[1].trim() 
    : course.title;

  return (
    <div style={wrapperStyle}>
      <article 
        style={{
          ...cardStyle,
          transform: isHovered ? 'translateY(-12px) scale(1.01)' : 'translateY(0) scale(1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* דמות המרצה המרחפת */}
        <img 
          src="/assets/dan-image.png" 
          style={{
            ...floatingImageStyle,
            transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          }} 
          alt="דן טיומקין" 
        />

        {/* חלק עליון: תמונה והבטחה */}
        <div 
          onClick={() => onOpenModal(course)}
          style={{
            ...topSectionStyle,
            backgroundImage: `linear-gradient(to bottom, rgba(3, 93, 146, 0.15), rgba(3, 93, 146, 0.7)), url("${course.imageSrc}")`
          }}
        >
          <div style={glowOverlayStyle}></div>
          <div style={textContainerStyle}>
            <h3 style={titleStyle}>{displayTitle}</h3>
            <p style={taglineStyle}>{course.tagline}</p>
          </div>
        </div>

        {/* חלק תחתון: הסבר וכפתורי פעולה */}
        <div style={bottomSectionStyle}>
          <p style={explanationTextStyle}>
            לחצו לקבלת פירוט על תכני השיעורים והכלים המעשיים שתקבלו בקורס זה...
          </p>
          
          <div style={actionAreaStyle}>
            <button 
              style={detailsBtnStyle} 
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(course);
              }}
            >
              למידע מלא וסילבוס
              <span style={{ marginRight: '10px' }}>←</span>
            </button>

            {/* כפתור המעבר לרכישה המעוצב */}
            <a 
              href={`#course-${course.id}`} 
              className="purchase-anchor"
              style={purchaseAnchorStyle}
            >
              <span>מעבר לבחירת מסלול רכישה</span>
              <svg 
                style={arrowIconStyle} 
                width="18" height="18" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* אנימציית CSS גלובלית לחץ המקפץ */}
      <style>{`
        .purchase-anchor:hover {
          color: #00B4D8 !important;
          opacity: 1 !important;
        }
        .purchase-anchor:hover svg {
          transform: translateY(3px);
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
      `}</style>
    </div>
  );
};

// --- Styles ---

const wrapperStyle: React.CSSProperties = {
    perspective: '1000px',
    marginBottom: '30px'
};

const cardStyle: React.CSSProperties = { 
  width: '380px', 
  height: '560px', // הגדלתי מעט כדי להכיל את הלינק בנוחות
  borderRadius: '35px', 
  backgroundColor: '#fff', 
  boxShadow: '0 20px 50px rgba(3, 93, 146, 0.08)', 
  cursor: 'pointer', 
  transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)', 
  position: 'relative', 
  display: 'flex', 
  flexDirection: 'column', 
  overflow: 'visible', 
  border: '1px solid rgba(3, 93, 146, 0.03)',
  direction: 'rtl'
};

const floatingImageStyle: React.CSSProperties = { 
  position: 'absolute', 
  bottom: '180px', 
  left: '10px', 
  height: '210px', 
  width: 'auto', 
  maxWidth: '42%', 
  zIndex: 10, 
  pointerEvents: 'none', 
  objectFit: 'contain', 
  filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))',
  transition: 'transform 0.4s ease'
};

const topSectionStyle: React.CSSProperties = { 
  height: '60%', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  borderRadius: '35px 35px 0 0', 
  position: 'relative', 
  overflow: 'hidden', 
  display: 'flex', 
  flexDirection: 'column', 
  padding: '45px 30px' 
};

const glowOverlayStyle: React.CSSProperties = { 
  position: 'absolute', 
  bottom: 0, left: 0, right: 0, top: 0, 
  background: 'radial-gradient(circle at 50% 115%, rgba(255,255,255,0.7) 0%, transparent 70%)', 
  zIndex: 1 
};

const textContainerStyle: React.CSSProperties = { 
  position: 'relative', 
  zIndex: 2, 
  textAlign: 'right' 
};

const titleStyle: React.CSSProperties = { 
  fontSize: '2rem', 
  fontWeight: 800, 
  color: '#fff', 
  margin: 0, 
  lineHeight: '1.2', 
  textShadow: '0 2px 10px rgba(0,0,0,0.3)' 
};

const taglineStyle: React.CSSProperties = { 
  fontSize: '0.95rem', 
  color: '#fff', 
  marginTop: '12px', 
  opacity: 0.95, 
  maxWidth: '85%', 
  lineHeight: '1.4' 
};

const bottomSectionStyle: React.CSSProperties = { 
  height: '40%', 
  backgroundColor: '#fff', 
  borderRadius: '0 0 35px 35px', 
  padding: '25px 30px', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'space-between' 
};

const explanationTextStyle: React.CSSProperties = { 
  fontSize: '0.9rem', 
  color: '#666', 
  lineHeight: '1.4', 
  margin: '0', 
  textAlign: 'right' 
};

const actionAreaStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '10px'
};

const detailsBtnStyle: React.CSSProperties = { 
  backgroundColor: '#035D92', 
  color: '#fff', 
  border: 'none', 
  padding: '16px', 
  borderRadius: '18px', 
  fontWeight: '700', 
  fontSize: '1rem', 
  cursor: 'pointer', 
  textAlign: 'center', 
  width: '100%', 
  boxShadow: '0 10px 20px rgba(3, 93, 146, 0.2)',
  transition: 'background 0.3s ease'
};

const purchaseAnchorStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#035D92',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '8px 0',
  opacity: 0.8,
  transition: 'all 0.3s ease',
};

const arrowIconStyle: React.CSSProperties = {
  transition: 'transform 0.3s ease',
  animation: 'bounceDown 2s infinite ease-in-out'
};

export default CourseCard;