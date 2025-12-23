import React from 'react';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/coursesData';
import { CourseCard } from '../components/molecules/CourseCard';
import ThemeToggle from '../components/atoms/ThemeToggle';
import Hero from '../components/organisms/Hero';
import SolutionSection from '../components/organisms/SolutionSection';


export const Home: React.FC = () => {
  return (
    <main>
      <Helmet>
        <title>פתרונות מקיפים לאתגרי חינוך הילדים</title>
        <meta name="description" content="קורסים וכלים להורים ומחנכים - שיפור תקשורת, שינה, וחוסן רגשי" />
      </Helmet>
      <Hero />
      <SolutionSection/>
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
