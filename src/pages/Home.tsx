import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/organisms/Hero';
import SolutionSection from '../components/organisms/SolutionSection';
import { CoursesSection } from '../components/organisms/CoursesSection';
import { TestimonialsSpace } from '../components/organisms/TestimonialsSpace';
import BuyCourseSection from '../components/organisms/BuyCourseSection';
import AccessibilityMenu from '../components/organisms/AccessibilityMenu';



export const Home: React.FC = () => {
  return (
    <main>
      <Helmet>
        <title>פתרונות מקיפים לאתגרי חינוך הילדים</title>
        <meta name="description" content="קורסים וכלים להורים ומחנכים - שיפור תקשורת, שינה, וחוסן רגשי" />
      </Helmet>
      <Hero />
      <SolutionSection/>
      <CoursesSection/>
      <BuyCourseSection/>
      <TestimonialsSpace/>
      <AccessibilityMenu/>
    </main>
  );
};
