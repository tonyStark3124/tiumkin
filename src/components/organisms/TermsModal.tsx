import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const TermsEnforcedModal: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [visitedTermsPage, setVisitedTermsPage] = useState(false);
  const navigate = useNavigate();

  const handleVisitTerms = () => {
    setVisitedTermsPage(true);
    navigate('/legal/terms'); // מעבר לדף תנאי שימוש
  };

  const handleAgree = () => {
    if (visitedTermsPage) {
      setShowModal(false);
      navigate('/'); // מעבר לדף הראשי
    } else {
      alert('יש לקרוא את תנאי השימוש המלא לפני ההסכמה.');
    }
  };

  if (!showModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      style={overlayStyle}
    >
      <div style={modalStyle}>
        <h2 id="terms-modal-title" style={titleStyle}>תנאי שימוש – חובה לאשר</h2>
        <p style={textStyle}>
          עליך לקרוא ולהסכים לתנאי השימוש שלנו לפני השימוש באתר.  
          ניתן לקרוא את התנאים המלאים ב<Link to="/legal/terms" style={linkStyle} onClick={handleVisitTerms}>עמוד תנאי שימוש מלא</Link>.
        </p>

        <button
          style={{ ...buttonStyle, marginTop: '1.5rem' }}
          onClick={handleAgree}
        >
          אני מסכים לתנאי השימוש
        </button>
      </div>
    </div>
  );
};

// --- Styles ---
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999
};

const modalStyle: React.CSSProperties = {
  background: '#fff',
  padding: 'clamp(20px, 5vw, 40px)',
  borderRadius: '1rem',
  maxWidth: '500px',
  width: '90%',
  boxShadow: '0 0 30px rgba(0,0,0,0.3)',
  textAlign: 'center',
  direction: 'rtl',
  animation: 'pop-in 0.5s ease-out'
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(1.5rem, 3vw + 1rem, 2rem)',
  marginBottom: '1rem',
  color: '#023E8A'
};

const textStyle: React.CSSProperties = {
  fontSize: 'clamp(1rem, 1vw + 0.3rem, 1.2rem)',
  marginBottom: '1rem'
};

const linkStyle: React.CSSProperties = {
  color: '#007791',
  textDecoration: 'underline',
  cursor: 'pointer'
};

const buttonStyle: React.CSSProperties = {
  padding: 'clamp(10px, 2vh, 16px) clamp(20px, 4vw, 40px)',
  backgroundColor: '#023E8A',
  color: '#fff',
  border: 'none',
  borderRadius: '0.8rem',
  fontWeight: 'bold',
  fontSize: 'clamp(1rem, 1.2vw + 0.2rem, 1.2rem)',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};
