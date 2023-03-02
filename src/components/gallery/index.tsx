import React from "react";
import PatternImages from "../breeds/patternimages";
import Search from "../search";
import GalleryForm from "./galleryForm";
import styles from "./style.module.scss";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <Search />
      <div className={styles.gallery__body}>
        <GalleryForm />
        <PatternImages />
      </div>
    </div>
  );
}
