import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/organisms/Hero';
import SolutionSection from '../components/organisms/SolutionSection';
import { CoursesSection } from '../components/organisms/CoursesSection';
import { TestimonialsSpace } from '../components/organisms/TestimonialsSpace';
import BuyCourseSection from '../components/organisms/BuyCourseSection';
import AccessibilityMenu from '../components/organisms/AccessibilityMenu';
import { courses } from '../data/coursesData';



export const Home: React.FC = () => {
  
    const singleCourses = courses.filter(c => c.course === true);
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": singleCourses.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Course",
          "name": item.title,
          "description": item.tagline,
          "provider": {
            "@type": "Person",
            "name": "דן טיומקין והרב אורי זוהר"
          }
        }
      }))
    };
    return (
    <main>
      <Helmet>
        {/* כותרת: השמות מופיעים ראשונים כדי שייחתכו פחות בתוצאות */}
        <title>דן טיומקין והרב אורי זוהר | בוסר המלאכים - הדרכת הורים</title>
        
        <meta name="description" content="הדרכה מעשית להורים למתבגרים מאת דן טיומקין והרב אורי זוהר ז''ל. כלים להתמודדות עם נוער בסיכון, קשיים בחינוך והפרעות קשב ברוח התורה." />
        
        <link rel="canonical" href="https://bosserha.com/" />

        {/* Open Graph - מה שרואים כשמשתפים לינק */}
        <meta property="og:title" content="בוסר המלאכים - דן טיומקין והרב אורי זוהר" />
        <meta property="og:description" content="הילד עובר תקופה קשה? איבדתם את ההשפעה? בואו לקבל ארגז כלים ייחודי ויעיל." />
        {/* חשוב: שים תמונה של שניהם בנתיב הזה בתיקיית ה-public */}
        <meta property="og:image" content="https://bosserha.com/assets/optimized/logo.webp" /> 
        <meta name="keywords" content="דן טיומקין, הרב אורי זוהר, נוער בסיכון, הדרכת הורים, חינוך ילדים, הפרעות קשב, סמכות הורית, חזרה בתשובה נוער" />

        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
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
