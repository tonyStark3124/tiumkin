import React, { useState, useEffect, useRef } from 'react';

interface Props {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  courseId: string | number;
}

export const SyllabusModal: React.FC<Props> = ({ images, isOpen, onClose, courseTitle, courseId }) => {
  const [zoomedImgIndex, setZoomedImgIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const zoomCloseBtnRef = useRef<HTMLButtonElement>(null);

  // Focus Management & Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      setTimeout(() => modalRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      lastFocusedElement.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (zoomedImgIndex !== null) {
      setScale(1); 
      zoomCloseBtnRef.current?.focus();
    }
  }, [zoomedImgIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (zoomedImgIndex !== null) setZoomedImgIndex(null);
      else onClose();
    }
    
    if (zoomedImgIndex !== null) {
      if (e.key === 'ArrowRight') navigateImage(-1);
      if (e.key === 'ArrowLeft') navigateImage(1);
    }

    if (e.key === 'Tab' && zoomedImgIndex === null) {
      const focusable = modalRef.current?.querySelectorAll('button, [href], a, [tabindex]:not([tabindex="-1"])');
      if (!focusable) return;
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  };

  const navigateImage = (direction: number) => {
    if (zoomedImgIndex === null) return;
    const nextIndex = (zoomedImgIndex + direction + images.length) % images.length;
    setZoomedImgIndex(nextIndex);
  };

  const getDistance = (touches: React.TouchList) => {
    return Math.hypot(
      touches[0].pageX - touches[1].pageX,
      touches[0].pageY - touches[1].pageY
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      setLastTouchDistance(getDistance(e.touches));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDistance !== null) {
      e.preventDefault(); 
      const distance = getDistance(e.touches);
      const delta = distance / lastTouchDistance;
      const newScale = Math.min(Math.max(scale * delta, 1), 4);
      setScale(newScale);
      setLastTouchDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    setLastTouchDistance(null);
  };

  if (!isOpen) return null;

  return (
    <div 
      style={overlayStyle} 
      onClick={onClose} 
      onKeyDown={handleKeyDown}
      role="dialog" 
      aria-modal="true"
      aria-labelledby="modal-title-id"
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        style={contentStyle} 
        onClick={(e) => e.stopPropagation()}
      >
        <header style={headerStyle}>
          <button 
            onClick={onClose} 
            style={closeBtnStyle} 
            aria-label="סגור חלון סילבוס"
          >✕</button>
          <span id="modal-title-id" style={titleStyle}>סילבוס: {courseTitle}</span>
          <p style={instructionStyle}>ניתן לדפדף בהחלקה או להגדיל בצביטה (Pinch)</p>
        </header>

        <div style={galleryGridStyle} role="list" aria-label="גלריית עמודי סילבוס">
          {images.map((img, index) => (
            <button
              key={index}
              style={imageWrapperBtn}
              onClick={() => setZoomedImgIndex(index)}
              aria-label={`עמוד סילבוס ${index + 1}, לחץ להגדלה`}
              role="listitem"
            >
              <img src={img} alt={`תצוגה מקדימה עמוד ${index + 1}`} style={imgThumbnailStyle} />
              <div style={zoomOverlayHint} aria-hidden="true">זום 🔍</div>
            </button>
          ))}
          <div style={{ height: '100px' }} aria-hidden="true" />
        </div>

        <footer style={floatingFooterStyle}>
          <a 
            href={`#purchase-${courseId}`} 
            onClick={onClose} 
            style={modalPurchaseBtn}
            aria-label="מעבר להרשמה לקורס"
          >
            אהבתי, אני רוצה להצטרף לקורס! ←
          </a>
        </footer>
      </div>

      {zoomedImgIndex !== null && (
        <div 
          style={zoomLayerStyle} 
          onClick={() => setZoomedImgIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button 
            ref={zoomCloseBtnRef}
            style={closeZoomBtn} 
            onClick={() => setZoomedImgIndex(null)}
            aria-label="סגור תצוגה מוגדלת וחזור לסילבוס"
          >
            סגור ×
          </button>

          {images.length > 1 && (
            <>
              <button 
                style={{...navBtnStyle, right: '15px'}} 
                onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
                aria-label="לעמוד הקודם"
              >
                ▸
              </button>
              <button 
                style={{...navBtnStyle, left: '15px'}} 
                onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
                aria-label="לעמוד הבא"
              >
                ◂
              </button>
            </>
          )}

          <div 
            style={{
              ...zoomContainerStyle,
              transform: `scale(${scale})`,
              transition: lastTouchDistance ? 'none' : 'transform 0.2s ease-out'
            }}
          >
            <img 
              src={images[zoomedImgIndex]} 
              alt={`עמוד סילבוס ${zoomedImgIndex + 1} מתוך ${images.length}`} 
              style={fullImgStyle} 
              draggable={false}
            />
          </div>
          
          <div style={pageIndicatorStyle} aria-live="polite">
            עמוד {zoomedImgIndex + 1} מתוך {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Styles (Identical to previous, ensuring high contrast) ---

const overlayStyle: React.CSSProperties = { 
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
  backgroundColor: 'rgba(0,0,0,0.88)', zIndex: 9999, 
  display: 'flex', justifyContent: 'center', alignItems: 'center', 
  backdropFilter: 'blur(10px)', padding: '10px' 
};

const contentStyle: React.CSSProperties = { 
  backgroundColor: '#fff', width: '100%', maxWidth: '900px', maxHeight: '94vh', 
  borderRadius: '24px', overflow: 'hidden', position: 'relative', 
  display: 'flex', flexDirection: 'column', outline: 'none', direction: 'rtl' 
};

const headerStyle: React.CSSProperties = { 
  backgroundColor: '#fff', padding: 'clamp(15px, 4%, 25px) 40px', 
  borderBottom: '1px solid #eee', zIndex: 10, position: 'relative'
};

const titleStyle: React.CSSProperties = { 
  display: 'block', color: '#035D92', fontSize: 'clamp(1.1rem, 2vw + 0.5rem, 1.6rem)', 
  fontWeight: 800, lineHeight: 1.2, margin: 0
};

const instructionStyle: React.CSSProperties = { 
  margin: '5px 0 0', color: '#595959', fontSize: '0.9rem' 
};

const closeBtnStyle: React.CSSProperties = { 
  position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)',
  background: '#f2f2f2', border: 'none', borderRadius: '50%', 
  width: '44px', height: '44px', cursor: 'pointer', fontWeight: 'bold',
  display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const galleryGridStyle: React.CSSProperties = { 
  padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', 
  overflowY: 'auto', flex: 1
};

const imageWrapperBtn: React.CSSProperties = { 
  border: 'none', background: 'none', padding: 0, 
  cursor: 'zoom-in', width: '100%', position: 'relative'
};

const imgThumbnailStyle: React.CSSProperties = { 
  width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
};

const zoomOverlayHint: React.CSSProperties = { 
  position: 'absolute', bottom: '15px', right: '15px', 
  backgroundColor: 'rgba(3, 93, 146, 0.95)', color: '#fff', 
  padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', pointerEvents: 'none'
};

const floatingFooterStyle: React.CSSProperties = { 
  padding: '20px', textAlign: 'center', backgroundColor: '#fff', 
  borderTop: '1px solid #eee', zIndex: 20
};

const modalPurchaseBtn: React.CSSProperties = { 
  display: 'inline-block', backgroundColor: '#035D92', color: '#fff', 
  padding: '14px 35px', borderRadius: '50px', textDecoration: 'none', 
  fontWeight: '900', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(3,93,146,0.3)'
};

const zoomLayerStyle: React.CSSProperties = { 
  position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
  backgroundColor: '#000', zIndex: 10000, display: 'flex', 
  flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
  overflow: 'hidden'
};

const zoomContainerStyle: React.CSSProperties = {
  width: '100%', height: '100%', display: 'flex', 
  justifyContent: 'center', alignItems: 'center', touchAction: 'none'
};

const fullImgStyle: React.CSSProperties = { 
  maxWidth: '98%', maxHeight: '88vh', objectFit: 'contain'
};

const closeZoomBtn: React.CSSProperties = { 
  position: 'absolute', top: '25px', right: '25px', padding: '12px 24px', 
  backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '30px', 
  fontWeight: 'bold', zIndex: 10005, cursor: 'pointer', minHeight: '44px'
};

const navBtnStyle: React.CSSProperties = {
  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none',
  borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px',
  cursor: 'pointer', zIndex: 10004, display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const pageIndicatorStyle: React.CSSProperties = {
  position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
  color: '#fff', backgroundColor: 'rgba(0,0,0,0.7)', padding: '6px 18px', 
  borderRadius: '20px', fontSize: '0.9rem', zIndex: 10005
};