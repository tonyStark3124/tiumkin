import React, { useEffect, useState } from 'react';

// This component expects the project's global SCSS (global.scss/_theme.scss) to be loaded
// (e.g. import './styles/global.scss' in index.tsx or App.tsx)

type HeaderProps = {
  logoSrc?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function Header2({
  logoSrc = '/logo-compact.png',
  title = 'כותרת האתר',
  subtitle = 'תת-כותרת קצרה ותמציתית',
  ctaText = 'הצטרף',
  ctaHref = '#',
}: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean>(() => document.body.classList.contains('theme-dark'));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isDark) document.body.classList.add('theme-dark');
    else document.body.classList.remove('theme-dark');
  }, [isDark]);

  // Close mobile menu on resize to large screens
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setMobileOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="site-header" role="banner">
=      <div className="container" style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
        {/* Logo on the right for RTL (small) */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <a href="/" aria-label="בית">
            <img src={logoSrc} alt="logo" style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: 8 }} />
          </a>
        </div>

        {/* Main hero text (left column in the original layout) */}
        <div className="site-hero__left" style={{ flex: 1, minWidth: 0 }}>
          <h1 className="site-hero__main-title">{title}</h1>
          <p className="site-hero__intro-text">{subtitle}</p>

          <div className="site-hero__actions">
            <a className="btn btn-primary" href={ctaHref} role="button">
              {ctaText}
            </a>
            <button
              className="btn btn-outline"
              onClick={() => setIsDark((s) => !s)}
              aria-pressed={isDark}
              aria-label={isDark ? 'כבה תמה כהה' : 'הפעל תמה כהה'}
            >
              {isDark ? 'כהה' : 'בהיר'}
            </button>
          </div>
        </div>

        {/* Desktop nav (hidden on very small screens) */}
        <nav aria-label="ניווט ראשי" style={{ marginRight: 12 }}>
          <ul style={{ display: 'flex', gap: 10, alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
            <li><a className="btn-outline" href="#courses">קורסים</a></li>
            <li><a className="btn-outline" href="#about">אודות</a></li>
            <li><a className="btn-outline" href="#contact">צור קשר</a></li>
            <li>
              <button
                className="theme-toggle"
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                ☰
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu - simple accessible drawer */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!mobileOpen}
        style={{
          display: mobileOpen ? 'block' : 'none',
          padding: '1rem',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          background: 'var(--color-surface)',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <li><a href="#courses" role="menuitem">קורסים</a></li>
          <li><a href="#about" role="menuitem">אודות</a></li>
          <li><a href="#contact" role="menuitem">צור קשר</a></li>
        </ul>
      </div>

    </header>
  );
}
