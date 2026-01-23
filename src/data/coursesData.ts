import { ICourse } from '../types/course';

export const courses: ICourse[] = [
  {
    id: 1,
    course: true,
    CourseSyllabusImagesLink: ['../assets/optimized/sylabus-sikun.webp'],
    popular: true,
    title: 'קורס כלים להורים — נוער בסיכון',
    tagline: '11 פרקים. מאת הרב אורי זוהר ז"ל ודן טיומקין. מיועד להורים. מקיף את נושא נוער בסיכון בדגש של כלים פרקטיים ומעשיים.',
    description: `קורס זה אינו מיועד לכללי החינוך הקלאסי לילדים חמודים שרק מנסים לרצות. זה קורס שמדבר על מצבי כאב, שבו הנערים כבר אינם מתפקדים כראוי, ואנחנו זקוקים לכלים מעשיים כדי לגרום להם לחזור לעשות בחירות טובות.

מדובר ב-11 שיעורים, פרקטיים ומעשיים, שבו הרב אורי זוהר זצ"ל משתף מנסיונו האישי, וביחד עם דן טיומקין הם פורסים משנה סדורה מעשית ופרקטית שעובדת בשטח ועוזרת להורים להתמודד עם המצב ולהגיב בכלים הנכונים, מה שיקרין על הנערים ויעזור להם לחזור למסלול של אמון ותיקון.

במהלך הקורס משולבים קטעי וידאו של רבנים ואנשי מקצוע, שמדברים על השאלות הקשות (סמארטפונים, חוצפה, שאר האחים וכו').`,
    originalPrice: 900,
    salePrice: 620,
    imageSrc: '/assets/optimized/sikun-img.webp',
    purchaseLink: 'https://my.schooler.biz/s/28898/boser/1',
    shadowColor: '#00ced1'

  },
  {
    id: 2,
    course: true,
    CourseSyllabusImagesLink: ["../assets/optimized/ADHDtohen1.webp", "../assets/optimized/ADHDtohen2.webp"],
    popular: false,
    title: 'קורס כלים להורים — הפרעת קשב (ADHD)',
    tagline: '20 פרקים מאת הרב אורי זוהר זצ"ל וגן טיומקים מיועד להורים לילדים עם ADHD /ADD',
    description: `קורס זה מיועד להורים שמלווים ילדים בעלי הפרעת קשב. הרב אורי זוהר זצ"ל ודן טיומקין משתפים מנסיונם האישי ומדברים במשך 20 שיעורים על הפרעת קשב – לא רק מוסחות, אלא ניהול עצמי מאתגר, עם דחיינות, אימפולסיביות, פתיל קצר וכו'.

הקורס מתמקד במניעה, בזיהוי החוזקות ובכלים מעשיים כיצד לזהות את החוזקות ולקדם אותם. הפתרון להתמודדות מיטבית עם הפרעת קשב אינו רק "רטלין – כן או לא". בסוף אי אפשר רק להחליש את המנוע, צריך גם לחזק את הברקסים, וזה נושא הקורס. איך מצליחים לחזק את מנגנוני השליטה והניהול העצמי כדי להצליח לעזור לילדים להאמין בעצמם ולעלות על מסלול חיובי של תיקון.`,
    originalPrice: 900,
    salePrice: 620,
    imageSrc: '/assets/optimized/image-ADHD.webp',
    purchaseLink: 'https://my.schooler.biz/s/54136/1674384566174/vDHhvSw',
    shadowColor: "#8a2be2"
  },
  {
    id: 3,
    course: true,
    CourseSyllabusImagesLink: ['../assets/optimized/sylabus-teacher.webp'],
    popular: false,
    title: 'קורס כלים למורים ומורות',
    tagline: '10 פרקים מעשיים מאת הרב אורי זוהר זצ"ל ודן טיומקין יישום כלים חיוניים בכיתה',
    description: `כולם מכירים את הסיסמאות, אבל איך באמת מצליחים ליישם "ימין מקרבת" בכיתה, שיש בה גם ילדים מאתגרים וגם מצטיינים. במשך 10 שיעורים הרב אורי זוהר זצ"ל ודן טיומקין מביאים כלים מעשיים שיכולים לתת תועלת לכל המורים והמורות, דרך כבוד וידידות, אמון ואהבה, תחת מסגרת מחייבת של מוסד לימודי עם תקנון מחייב.

הקורס כולל גם הדרכה מיוחדת של שני פרקים שעוסקים בהוראת הגמרא, ופרקים רבים שמתאימים למורים ומורות שרוצים לעשות מלאכתם נאמנה ולחנך באופן שבאמת משפיע!`,
    originalPrice: 800,
    salePrice: 620,
    imageSrc: '/assets/optimized/teacher-img.webp',
    purchaseLink: 'https://my.schooler.biz/s/60381/1688042019588/NsPTKZw',
    shadowColor: "#1B3022"
  },
  {
    id: 4,
    course: false,
    popular: false,
    title: 'כלים להורים לנוער בסיכון + קורס כלים להורים לילדים עם הפרעת קשב',
    tagline: '',
    description: '',
    originalPrice: 1240,
    salePrice: 1000,
    imageSrc: '/assets/optimized/ADHD+sikun.webp',
    purchaseLink: 'https://app.icount.co.il/m/ab7e7/c68ea131p16u6923871?utm_source=iCount&utm_medium=paypage&utm_campaign=22',
    shadowColor: "#D4AF37"
  },
  {
    id: 5,
    course: false,
    popular: false,
    title: 'קורס כלים להורים לילדים עם הפרעת קשב + קורס כלים למורים ומורות',
    tagline: '',
    description: '',
    originalPrice: 1240,
    salePrice: 1000,
    imageSrc: '/assets/optimized/teacher+ADHD.webp',
    purchaseLink: 'https://app.icount.co.il/m/98925/c68ea131p1au6923882?utm_source=iCount&utm_medium=paypage&utm_campaign=26',
    shadowColor: "#D4AF37"
  },
  {
    id: 6,
    course: false,
    popular: false,
    title: 'קורס כלים למורים ומורות + קורס כלים להורים לנוער בסיכון',
    tagline: '',
    description: '',
    originalPrice: 1240,
    salePrice: 1000,
    imageSrc: '/assets/optimized/teacher+sikun.webp',
    purchaseLink: 'https://app.icount.co.il/m/08bb3/c68ea131p1eu6923888?utm_source=iCount&utm_medium=paypage&utm_campaign=30',
    shadowColor: "#D4AF37"
  },
  {
    id: 7,
    course: false,
    popular: true,
    title: 'קורס כלים להורים לנוער בסיכון + קורס כלים להורים לילדים עם הפרעת קשב + קורס כלים למורים ומורות',
    tagline: '',
    description: '',
    originalPrice: 1860,
    salePrice: 1500,
    imageSrc: '/assets/optimized/mivtsa-all3.webp',
    purchaseLink: 'https://app.icount.co.il/m/c0ecc/c68ea131p14u692388d?utm_source=iCount&utm_medium=paypage&utm_campaign=20',
    shadowColor: "#D4AF37"
  }
];
