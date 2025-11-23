import React, { useState } from 'react';
import { ICourse } from '../../types/course';
import { IconBuy } from '../atoms/Icons';

interface Props {
  course: ICourse;
}


export const CourseCard: React.FC<Props> = ({ course }) => {
  const [descOpen, setDescOpen] = useState(false);
  const pngPath = course.imageSrc.replace(/\.svg$|\.png$|\.jpg$|\.jpeg$/i, '.png');
  const webpPath = pngPath.replace(/\.png$/i, '.webp');

  // Helper: get first line only
  const firstLine = course.description.split(/\r?\n/)[0];

  return (
    <article className="course-card reveal" aria-labelledby={`course-title-${course.id}`} tabIndex={0}>
      <figure className="course-card__media">
        <picture>
          <source srcSet={webpPath} type="image/webp" />
          <source srcSet={pngPath} type="image/png" />
          <img src={pngPath} alt={`תמונת קורס: ${course.title}`} className="course-card__img" loading="lazy" />
        </picture>
        <figcaption className="course-card__media-caption">{course.tagline}</figcaption>
      </figure>
      <div className="course-card__body">
        <h2 id={`course-title-${course.id}`} className="course-card__title">{course.title}</h2>
        <p className={"course-card__desc" + (descOpen ? " open" : "")}
           onClick={() => setDescOpen(!descOpen)}
           tabIndex={0}
           role="button"
           aria-expanded={descOpen}
           aria-label={descOpen ? "הסתר תיאור מלא" : "הצג תיאור מלא"}
        >
          <span className="desc-short">
            {firstLine}
            {!descOpen && course.description.split(/\r?\n/).length > 1 && (
              <span className="desc-ellipsis" aria-hidden="true">…
                <svg width="18" height="18" viewBox="0 0 24 24" style={{verticalAlign:'middle',marginRight:2}} aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 10h8M8 14h8" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </span>
            )}
          </span>
          {descOpen && (
            <span className="desc-full">{course.description.slice(firstLine.length)}</span>
          )}
        </p>
        <div className="course-card__pricing">
          <span className="course-card__original">₪{course.originalPrice}</span>
          <span className="course-card__sale">₪{course.salePrice}</span>
        </div>
        <a
          className="course-card__cta"
          href={course.purchaseLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`לרכישת ${course.title}`}
        >
          <IconBuy className="icon-buy" />
          קנה עכשיו
        </a>
      </div>
    </article>
  );
};
