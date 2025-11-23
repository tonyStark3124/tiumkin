import { IBundle } from '../types/bundle';

export const bundles: IBundle[] = [
  {
    id: 1,
    title: 'מבצע זוגי: נוער בסיכון + ADHD',
    courseIds: [1, 2],
    price: 1000,
    description: 'שילוב של שני קורסים מרכזיים במחיר מיוחד.'
  },
  {
    id: 2,
    title: 'מבצע זוגי: נוער בסיכון + למורים',
    courseIds: [1, 3],
    price: 1000,
    description: 'קורס הורים וקורס למורים במחיר מיוחד.'
  },
  {
    id: 3,
    title: 'מבצע זוגי: ADHD + למורים',
    courseIds: [2, 3],
    price: 1000,
    description: 'שתי מסלולים משלימים במחיר מוזל.'
  },
  {
    id: 4,
    title: 'חבילת 3 הקורסים',
    courseIds: [1, 2, 3],
    price: 1500,
    description: 'החבילה הכוללת את שלושת הקורסים במחיר מבצע.'
  }
];
