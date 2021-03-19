import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

import styles from "./styles.module.css";

export const Card = ({
  description,
  image,
  lessons,
  name,
  preview,
  pro,
  slug,
  tags,
}) => {
  const [tier, tierClass] = pro ? ["Pro", styles.pro] : ["Free", styles.free];
  return (
    <div className={styles.card} id={`course-${slug}`}>
      <div className={styles.contents}>
        <h3 className={styles.heading}>{name}</h3>
        <img alt="" className={styles.image} src={`/${image}.svg`} />
        <LinesEllipsis
          className={styles.description}
          ellipses="..."
          text={description}
          maxLine={5}
        />
        <div className={styles.details}>
          <span className={tierClass}>{tier}</span>
          <div className={styles.tags}>
            <span className={styles.tagLabel}>Tags:</span>
            {tags?.map((tag) => (
              <div className={styles.tag} key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        {lessons && (
          <div className={styles.lessons}>{lessons.length} lessons</div>
        )}
        <details className={styles.preview}>
          <summary>Preview</summary>
          <p className={styles.previewContents}>{preview}</p>
        </details>
      </div>
    </div>
  );
};
