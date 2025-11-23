import React from 'react';
import { useParams } from 'react-router-dom';

export const LegalPage: React.FC = () => {
  const { page } = useParams<{ page: string }>();

  const contentMap: Record<string, { title: string; body: string }> = {
    terms: { title: 'תנאי שימוש', body: 'תוכן דוגמה לתנאי שימוש.' },
    privacy: { title: 'מדיניות פרטיות', body: 'תוכן דוגמה למדיניות פרטיות.' },
    accessibility: { title: 'הצהרת נגישות', body: 'תוכן דוגמה להצהרת נגישות.' }
  };

  const data = page ? contentMap[page] || { title: 'מידע משפטי', body: 'תוכן לא זמין.' } : { title: 'מידע משפטי', body: 'תוכן לא זמין.' };

  return (
    <main>
      <header>
        <h1>{data.title}</h1>
      </header>
      <section>
        <p>{data.body}</p>
      </section>
    </main>
  );
};
