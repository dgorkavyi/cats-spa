import React, { useEffect, useState } from "react";
import getImages from "../../api/getImages";
import { getFunctionForData, ImgData } from "../breeds";
import PatternImages from "../breeds/patternimages";
import Search from "../search";
import GalleryForm from "./galleryForm";
import styles from "./style.module.scss";

export default function Gallery() {
  const [query, setQuery] = useState({
    breed: null,
    type: null,
    limit: null,
    order: null,
  });
  const [images, setImages] = useState([{ id: "", url: "" }] as ImgData[]);
  const initImages = getFunctionForData(
    setImages,
    getImages,
    ({ id, url }: any) => ({ id, url })
  );

  useEffect(() => {
    initImages();
  }, []);

  useEffect(() => {
    const { breed, type, limit, order } = query;
    initImages([limit || 5, breed || "", order || "ASC", type || "jpg"]);
  }, [query]);
  return (
    <div className={styles.gallery}>
      <Search />
      <div className={styles.gallery__body}>
        <GalleryForm setter={setQuery} />
        <PatternImages data={images} />
      </div>
    </div>
  );
}
