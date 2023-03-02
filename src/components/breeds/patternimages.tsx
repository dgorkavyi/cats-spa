import React from "react";
import styles from "./style.module.scss";

function addShine(style: any): string {
  return `${style} ${styles.shine}`;
}

function PatternElem({ className, url }: { className: string; url: string }) {
  const style = url.length > 0 ? className : addShine(className);
  return (
    <div className={style}>
      <img src={url} alt="" />
    </div>
  );
}

export default function PatternImages() {
  const url = "https://eneyida.tv/uploads/posts/2019-10/1570963092_1.jpg";
  return (
    <div className={styles.pattern__container}>
      <PatternElem url={url} className={styles.pattern__element_col_1} />
      <PatternElem url={url} className={styles.pattern__element_col_box_1} />
      <PatternElem url={url} className={styles.pattern__element_little_one_1} />
      <PatternElem url={url} className={styles.pattern__element_little_two_1} />
      <PatternElem url={url} className={styles.pattern__element_bigbox_1} />
      <PatternElem url={url} className={styles.pattern__element_col_2} />
      <PatternElem url={url} className={styles.pattern__element_col_box_2} />
      <PatternElem url={url} className={styles.pattern__element_little_one_2} />
      <PatternElem url={url} className={styles.pattern__element_little_two_2} />
      <PatternElem url={url} className={styles.pattern__element_bigbox_2} />
    </div>
  );
}
