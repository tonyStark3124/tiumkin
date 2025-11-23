import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try { return localStorage.getItem('theme') === 'dark'; } catch { return false; }
  });

  useEffect(() => {
    const body = document.body;
    if (dark) body.classList.add('theme-dark'); else body.classList.remove('theme-dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);

  return (
    <button aria-pressed={dark} className="theme-toggle" onClick={() => setDark(d => !d)} title="החלף נושא">
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
