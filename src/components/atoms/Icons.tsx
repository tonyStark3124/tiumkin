import React from 'react';

export const IconWhatsapp: React.FC<{className?:string}> = ({className}) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20.52 3.48A11.94 11.94 0 0012.01.25 11.99 11.99 0 001.5 10.76c0 2.11.55 4.16 1.6 5.97L.5 23.5l6.95-2.07a11.94 11.94 0 005.56 1.44h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.48-8.39z" fill="currentColor"/>
    <path d="M17.2 14.6c-.35-.17-2.06-1.02-2.38-1.14-.32-.12-.55-.17-.78.17-.23.34-.9 1.14-1.1 1.38-.2.23-.4.27-.75.1s-1.5-.55-2.86-1.77c-1.06-.95-1.77-2.12-1.98-2.46-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.05-.44-.02-.6-.07-.17-.78-1.88-1.07-2.57-.28-.66-.57-.57-.78-.58-.2-.01-.43-.02-.66-.02-.23 0-.6.09-.92.44-.32.35-1.2 1.18-1.2 2.88 0 1.7 1.23 3.34 1.4 3.57.17.23 2.42 3.7 5.86 5.01 3.44 1.31 3.44.87 4.06.82.62-.05 2.02-.82 2.31-1.62.29-.8.29-1.48.2-1.62-.09-.14-.32-.23-.67-.4z" fill="white"/>
  </svg>
);

export const IconPhone: React.FC<{className?:string}> = ({className}) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12.9.36 1.77.7 2.6a2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006 6l1.48-1.48a2 2 0 012.11-.45c.83.34 1.7.58 2.6.7A2 2 0 0122 16.92z" fill="currentColor"/>
  </svg>
);

export const IconMail: React.FC<{className?:string}> = ({className}) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
  </svg>
);

export const IconBuy: React.FC<{className?:string}> = ({className}) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 6h2l1 9a3 3 0 003 3h6a3 3 0 003-3l1-9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M16 10a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor"/>
  </svg>
);

export default {} as any;
