import React from 'react';

const MaintenanceMode: React.FC = () => {
  const colors = {
    darkBlue: '#03045E',
    primaryBlue: '#007791',
    whatsappGreen: '#25D366'
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.98)', zIndex: 99999,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      alignItems: 'center', textAlign: 'center', direction: 'rtl', padding: '20px'
    }}>
      <div style={{ fontSize: '80px', marginBottom: '10px' }}>🏗️</div>
      <h1 style={{ color: colors.darkBlue, fontSize: '2.8rem', marginBottom: '15px', fontWeight: 900 }}>הדף בעריכה</h1>
      <p style={{ color: '#444', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
        אנחנו מעדכנים את האתר כדי להעניק לכם את החוויה הטובה ביותר. 
        ניתן להמשיך לצפות בתכנים באתר הישן:
      </p>

      <a href="https://bosserm.com/landing-page/" target="_blank" rel="noreferrer" 
         style={{ color: colors.primaryBlue, fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none', marginBottom: '40px', borderBottom: '2px solid' }}>
        www.bosserm.com
      </a>

      <button 
        onClick={() => window.open('https://wa.me/972548455029', '_blank')}
        style={{ padding: '15px 30px', backgroundColor: colors.whatsappGreen, color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
        צרו קשר בווטסאפ 💬
      </button>

      <style>{`body { overflow: hidden !important; touch-action: none; }`}</style>
    </div>
  );
};

export default MaintenanceMode;