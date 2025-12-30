import React, { useState, useEffect } from 'react';
import { ICourse } from '../../types/course';

interface Props {
  course: ICourse;
  index: number;
}

export const CourseCard: React.FC<Props> = ({ course, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isEven = index % 2 === 0;
  const displayTitle = course.title.includes('—')
    ? course.title.split('—')[1].trim()
    : course.title;

  return (
    <article
      role="group"
      aria-labelledby={`course-title-${course.id}`}
      style={{
        ...cardRowStyle,
        flexDirection: isMobile ? 'column' : (isEven ? 'row' : 'row-reverse'),
      }}
    >
      {/* Image Side */}
      <div
        role="img"
        aria-label={`תמונת הקורס: ${displayTitle}`}
        style={{
          ...imageSideStyle,
          backgroundImage: `url("${course.imageSrc}")`,
          height: isMobile ? '35vh' : 'auto',
          flex: isMobile ? 'none' : '0 0 32%',
        }}
      >
        {course.popular && (
          <div
            style={popularBadgeStyle}
            aria-hidden="true"
          >
            פופולארי
          </div>
        )}

        <div style={taglineFloatingStyle}>
          {course.tagline}
        </div>

        <div
          style={imageOverlayStyle}
          aria-hidden="true"
        />
      </div>

      {/* Content Side */}
      <div style={contentSideStyle}>
        <div style={textWrapper}>
          {/* טקסט סמנטי – ללא role=heading */}
          <span
            id={`course-title-${course.id}`}
            style={titleStyle}
          >
            {displayTitle}
          </span>

          <div
            id={`desc-${course.id}`}
            style={{
              ...descContainerStyle,
              maxHeight: (isExpanded || !isMobile) ? '2000px' : '12vh',
            }}
            aria-hidden={isMobile && !isExpanded}
          >
            <p style={descTextStyle}>{course.description}</p>
          </div>

          {isMobile && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              style={readMoreToggle}
              aria-expanded={isExpanded}
              aria-controls={`desc-${course.id}`}
              aria-label={
                isExpanded
                  ? 'סגירת פירוט הקורס'
                  : 'הצגת פירוט מלא על תכני הקורס'
              }
              className="focus-outline"
            >
              {isExpanded ? 'סגור פירוט ▲' : 'לפירוט התכנים והכלים ▼'}
            </button>
          )}
        </div>

        <div style={footerStyle}>
          <a
            href={`#purchase-options-${course.id}`}
            style={primaryBtn}
            aria-label={`מעבר לסילבוס ואפשרויות הצטרפות לקורס ${displayTitle}`}
            className="focus-outline"
          >
            לצפייה בסילבוס ומסלולי הצטרפות
          </a>
        </div>
      </div>

      <style>{`
        .focus-outline:focus-visible {
          outline: 3px solid #A67C00;
          outline-offset: 4px;
          border-radius: 8px;
        }
      `}</style>
    </article>
  );
};


// --- Fluid Styles (Refactored for Contrast & A11y) ---

const cardRowStyle: React.CSSProperties = {
  display: 'flex',
  backgroundColor: '#ffffff',
  borderRadius: 'clamp(12px, 1.5vw, 24px)',
  marginBottom: '4vw',
  overflow: 'hidden',
  boxShadow: '0 1vw 3vw rgba(0,0,0,0.04)',
  width: '100%',
  border: '1px solid #f0f0f0',
  transition: 'transform 0.3s ease',
  position: 'relative'
};

const imageSideStyle: React.CSSProperties = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  minHeight: '40vh',
};

const imageOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
  zIndex: 1
};

const taglineFloatingStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  right: '5%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  color: '#035D92',
  padding: 'clamp(8px, 1.2vw, 14px) clamp(12px, 2vw, 20px)',
  borderRadius: 'clamp(8px, 1vw, 12px)',
  fontSize: 'clamp(0.85rem, 1vw + 4px, 1.1rem)',
  fontWeight: '800',
  textAlign: 'center',
  zIndex: 10,
  boxShadow: '0 0.5vw 1.5vw rgba(0,0,0,0.2)',
  lineHeight: '1.4'
};

const popularBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '4%',
  right: '4%',
  backgroundColor: '#D90429',
  color: '#ffffff',
  padding: '0.5vw 1.5vw',
  borderRadius: '4px',
  fontWeight: 'bold',
  zIndex: 10,
  fontSize: 'clamp(0.7rem, 0.8vw + 2px, 0.9rem)',
  boxShadow: '0 0.4vw 1vw rgba(0,0,0,0.2)'
};

const contentSideStyle: React.CSSProperties = {
  padding: 'clamp(20px, 5vw, 50px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'right',
  direction: 'rtl',
  flex: 1
};

const textWrapper: React.CSSProperties = {
  marginBottom: '3vw'
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(1.5rem, 2.5vw + 2px, 2.3rem)',
  color: '#035D92',
  fontWeight: 900,
  margin: '0 0 2vw 0',
  lineHeight: '1.2',
  display: 'block'
};

const descContainerStyle: React.CSSProperties = {
  overflow: 'hidden',
  transition: 'max-height 0.4s ease-in-out'
};

const descTextStyle: React.CSSProperties = {
  fontSize: 'clamp(0.95rem, 1vw + 2px, 1.1rem)',
  lineHeight: '1.8',
  color: '#333333', // שופר מ-#444 לניגודיות חזקה יותר
  margin: 0,
  whiteSpace: 'pre-line'
};

const readMoreToggle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#035D92',
  fontWeight: '800',
  cursor: 'pointer',
  padding: '2vh 0 0 0',
  fontSize: 'clamp(0.85rem, 0.9vw, 1rem)',
  textDecoration: 'underline'
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '2vw'
};

const primaryBtn: React.CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#035D92',
  padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 3vw, 45px)',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: '800',
  fontSize: 'clamp(0.9rem, 1vw + 2px, 1.1rem)',
  textAlign: 'center',
  border: '2px solid #035D92',
  transition: 'all 0.2s ease',
  width: 'fit-content',
  display: 'inline-block'
};