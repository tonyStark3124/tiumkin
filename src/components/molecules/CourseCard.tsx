import React, { useState, useEffect } from 'react';
import { ICourse } from '../../types/course';
import { SyllabusModal } from './SyllabusModal';

interface Props {
  course: ICourse;
  index: number;
  rabbiImageSrc: string;
  shadowColor?: string; // השדה החדש שביקשת להוסיף
}

export const CourseCard: React.FC<Props> = ({ course, index, rabbiImageSrc, shadowColor = 'rgba(0,0,0,0.06)' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // פונקציית עזר למקרה שאתה מעביר צבע HEX ורוצה להוסיף לו שקיפות להילה
  const cardShadow = shadowColor.startsWith('#') 
    ? `0 10px 40px ${shadowColor}66` // הוספת שקיפות לצבע HEX
    : `0 10px 40px ${shadowColor}`;

  return (
    <>
      <article
        role="article"
        aria-labelledby={`course-title-${course.id}`}
        style={{
          ...cardRowStyle,
          flexDirection: isMobile ? 'column' : (isEven ? 'row' : 'row-reverse'),
          // כאן אנחנו מזריקים את הצל הדינמי
          boxShadow: cardShadow,
        }}
      >
        {/* צד התמונה */}
        <div
          role="img"
          aria-label={`תמונת רקע של הקורס: ${displayTitle}`}
          style={{
            ...imageSideStyle,
            backgroundImage: `url("${course.imageSrc}")`,
            height: isMobile ? '35vh' : 'auto',
            flex: isMobile ? 'none' : '0 0 32%',
          }}
        >
          {course.popular && (
            <div style={popularBadgeStyle} role="status" aria-label="קורס פופולארי">
              פופולארי
            </div>
          )}

          <div style={floatingGroupWrapper}>
             <img 
               src={rabbiImageSrc} 
               loading="lazy"
               alt="איור רבני הקורס" 
               style={rabbiFloatingImgStyle} 
             />
             <div style={taglineFloatingStyle}>
               {course.tagline}
             </div>
          </div>

          <div style={imageOverlayStyle} aria-hidden="true" />
        </div>

        {/* צד התוכן */}
        <div style={contentSideStyle}>
          <div style={textWrapper}>
            <span id={`course-title-${course.id}`} style={titleStyle} role="text">
              {displayTitle}
            </span>

            <div
              id={`desc-${course.id}`}
              style={{
                ...descContainerStyle,
                maxHeight: (isExpanded || !isMobile) ? '2000px' : '12vh',
              }}
              aria-hidden={isMobile && !isExpanded ? "true" : "false"}
            >
              <p style={descTextStyle}>{course.description}</p>
            </div>

            {isMobile && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                style={readMoreToggle}
                className="focus-outline"
              >
                {isExpanded ? 'סגור פירוט ▲' : 'לפירוט התכנים והכלים ▼'}
              </button>
            )}
          </div>

          <div style={{ ...footerStyle, gap: '15px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={primaryBtn}
              className="focus-outline"
            >
              לצפייה בסילבוס המלא {'>'}
            </button>

            <a
              href={`#purchase-${course.id}`}
              style={purchaseBtnStyle}
              className="focus-outline"
            >
              לקנייה ומסלולים מוזלים
            </a>
          </div>
        </div>

        <style>{`
          .focus-outline:focus-visible {
            outline: 3px solid #035D92;
            outline-offset: 4px;
            border-radius: 8px;
          }
        `}</style>
      </article>

      <SyllabusModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={course.CourseSyllabusImagesLink || []} 
        courseTitle={displayTitle}
        courseId={course.id}
      />
    </>
  );
};

// --- Styles ---

const cardRowStyle: React.CSSProperties = { 
  display: 'flex', 
  backgroundColor: '#ffffff', 
  borderRadius: '24px', 
  marginBottom: '6vw', // הגדלתי מעט את המרווח כדי שההילה לא תיגע בקארד הבא
  overflow: 'hidden', 
  width: '100%', 
  border: '1px solid #f0f0f0', 
  position: 'relative',
  transition: 'box-shadow 0.3s ease' // הוספת אנימציה חלקה למעבר בין קארדים
};

const imageSideStyle: React.CSSProperties = { 
  backgroundSize: 'cover', 
  backgroundPosition: 'center 25%', 
  position: 'relative', 
  minHeight: '40vh', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'flex-end' 
};

const floatingGroupWrapper: React.CSSProperties = {
  position: 'absolute',
  bottom: '5%',
  left: '15%',
  right: '15%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 10,
  height: '100%',
  justifyContent: 'flex-end'
};

const rabbiFloatingImgStyle: React.CSSProperties = {
  maxHeight: '75%', 
  width: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
  display: 'block',
  marginBottom: '-1px', 
};

const taglineFloatingStyle: React.CSSProperties = { 
  backgroundColor: 'rgba(255, 255, 255, 0.98)', 
  color: '#035D92', 
  padding: 'clamp(8px, 1.2vw, 14px) clamp(12px, 2vw, 20px)', 
  borderRadius: 'clamp(8px, 1vw, 12px)', 
  fontSize: 'clamp(0.85rem, 1vw + 4px, 1.1rem)', 
  fontWeight: '800', 
  textAlign: 'center', 
  boxShadow: '0 0.5vw 1.5vw rgba(0,0,0,0.2)', 
  lineHeight: '1.4',
  width: '100%',
  boxSizing: 'border-box'
};

const imageOverlayStyle: React.CSSProperties = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', zIndex: 1 };

const popularBadgeStyle: React.CSSProperties = { position: 'absolute', top: '4%', right: '4%', backgroundColor: '#D90429', color: '#ffffff', padding: '0.5vw 1.5vw', borderRadius: '4px', fontWeight: 'bold', zIndex: 10, fontSize: '0.8rem' };

const contentSideStyle: React.CSSProperties = { padding: 'clamp(20px, 5vw, 50px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'right', direction: 'rtl', flex: 1 };

const textWrapper: React.CSSProperties = { 
    marginBottom: '3vw' 
};

const titleStyle: React.CSSProperties = { fontSize: 'clamp(1.5rem, 2.5vw + 2px, 2.3rem)', color: '#035D92', fontWeight: 900, margin: '0 0 2vw 0', lineHeight: '1.2', display: 'block' };

const descTextStyle: React.CSSProperties = { fontSize: 'clamp(0.95rem, 1vw + 2px, 1.1rem)', lineHeight: '1.8', color: '#222222', margin: 0, whiteSpace: 'pre-line' };

const descContainerStyle: React.CSSProperties = { overflow: 'hidden', transition: 'max-height 0.4s ease-in-out' };

const readMoreToggle: React.CSSProperties = { background: 'none', border: 'none', color: '#035D92', fontWeight: '800', cursor: 'pointer', padding: '15px 0 0 0', textDecoration: 'underline' };

const footerStyle: React.CSSProperties = { display: 'flex', justifyContent: 'flex-start', marginTop: '2vw' };

const primaryBtn: React.CSSProperties = { backgroundColor: '#ffffff', color: '#035D92', padding: '12px 25px', borderRadius: '50px', fontWeight: '800', border: '2px solid #035D92', cursor: 'pointer' };

const purchaseBtnStyle: React.CSSProperties = { ...primaryBtn, backgroundColor: '#035D92', color: '#ffffff' };