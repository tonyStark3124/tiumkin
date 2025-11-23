import React from 'react';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/coursesData';
import { CourseCard } from '../components/molecules/CourseCard';
import ThemeToggle from '../components/atoms/ThemeToggle';


export const Home: React.FC = () => {
  return (
    <main>
      <Helmet>
        <title>פתרונות מקיפים לאתגרי חינוך הילדים</title>
        <meta name="description" content="קורסים וכלים להורים ומחנכים - שיפור תקשורת, שינה, וחוסן רגשי" />
      </Helmet>

      <header className="site-header">
        <div className="container site-hero">
          <div className="site-hero__left">
            <h1 className="site-hero__main-title">
              מרגישים שהילדים המתבגרים שלכם עושים בחירות לא טובות, ואין לכם דרך להשפיע עליהם?
            </h1>
            <div className="site-hero__intro-text">
              <p>אם אתם הורים לילדים מתבגרים מאתגרים — יש ארגז כלים שכדאי לכם להכיר!</p>
              <p>הסמכות והמשמעת נצרכות כמובן, אבל לפעמים הם כמו מכת צפרדע: לוקחים מכשיר אחד וצצים שניים במקומו…</p>
              <p>הם נמשכים לחברים רעים, מכשירים רעים, חוצפה וחוסר משמעת… נשמע מוכר?</p>
            </div>
            <div className="site-hero__actions">
              <a className="btn btn-primary" href="#courses">צפה בקורסים</a>
              <a className="btn btn-outline" href="/legal">מידע משפטי</a>
            </div>
          </div>
          <div className="site-hero__right"><ThemeToggle /></div>
        </div>
      </header>

      <section id="courses" aria-label="רשימת הקורסים" className="container">
        <div className="course-grid">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
};
