import React from 'react';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/coursesData';
import { CourseCard } from '../components/molecules/CourseCard';
import ThemeToggle from '../components/atoms/ThemeToggle';
import Hero from '../components/organisms/Hero';
import SolutionSection from '../components/organisms/SolutionSection';
import { CoursesSection } from '../components/organisms/CoursesSection';
import { TestimonialsSpace } from '../components/organisms/TestimonialsSpace';
import BuyCourseSection from '../components/organisms/BuyCourseSection';
import AccessibilityMenu from '../components/organisms/AccessibilityMenu';
import RavMesserContactForm from '../components/organisms/ContactSection';
// import CoursesGallery from '../components/organisms/CoursesSection';


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
      <RavMesserContactForm/>

    </main>
  );
};
