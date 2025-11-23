import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './App';
import './styles/global.scss';

// Initialize theme from localStorage early
try {
  const t = localStorage.getItem('theme');
  if (t === 'dark') document.body.classList.add('theme-dark');
} catch {}

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
