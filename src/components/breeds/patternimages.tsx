import React from "react";
import styles from "./style.module.scss";

function addShine(style: any): string {
  return `${style} ${styles.shine}`;
}

function PatternElem({ className, url }: { className: string; url: string }) {
  const style = url.length > 0 ? className : addShine(className);
  let result = <div style={{ display: "nonde" }} />;

  if (url !== "") {
    result = (
      <div className={style}>
        <img src={url} alt="" />
      </div>
    );
  }
  return result;
}

function* styleElem() {
  while (true) {
    yield styles.pattern__element_col_1;
    yield styles.pattern__element_col_box_1;
    yield styles.pattern__element_little_one_1;
    yield styles.pattern__element_little_two_1;
    yield styles.pattern__element_bigbox_1;
    yield styles.pattern__element_col_2;
    yield styles.pattern__element_col_box_2;
    yield styles.pattern__element_little_one_2;
    yield styles.pattern__element_little_two_2;
    yield styles.pattern__element_bigbox_2;
  }
}

export default function PatternImages({ data }: { data: any[] }) {
  const styleName = styleElem();
  return (
    <div className={styles.pattern__container}>
      {data.map(({ url }) => (
        <PatternElem
          key={`${url}_22`}
          url={url}
          className={styleName.next().value}
        />
      ))}
    </div>
  );
}
