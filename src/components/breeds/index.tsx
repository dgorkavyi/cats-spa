import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
import Search from "../search";
import BreedsNav from "./breedsnav";
import PatternImages from "./patternimages";
import styles from "./style.module.scss";
import getAllBreeds from "../../api/getAllBreeds";
import getImages from "../../api/getImages";

export interface ImgData {
  id: string;
  url: string;
}

export function getFunctionForData(setData: any, apiFn: any, mapFn: any) {
  return async function (apiArgs: any[] = []) {
    const res: any = await apiFn(...apiArgs);
    if (res.status === 200) {
      const data = res.data.map(mapFn);
      setData(() => data);
    }
  };
}

export default function Breeds() {
  // const { ref, inView } = useInView({
  //   threshold: 1,
  // });
  const [images, setImages] = useState([{ id: "", url: "" }] as ImgData[]);
  const [breeds, setBreeds] = useState([{ id: "", name: "" }]);
  const [query, setQuery] = useState({
    breed: "",
    limit: 5,
    order: "ASC",
  });

  const getBreeds = getFunctionForData(
    setBreeds,
    getAllBreeds,
    ({ id, name }: any) => ({ id, name })
  );

  const initImages = getFunctionForData(
    setImages,
    getImages,
    ({ id, url }: any) => ({
      id,
      url,
    })
  );

  const chooseLimit = (e: any) => {
    setQuery((old: any) => ({ ...old, limit: e.target.value }));
  };
  const chooseBreed = (e: any) => {
    setQuery((old: any) => ({ ...old, breed: e.target.value }));
  };
  const chooseOrder = {
    asc: () => {
      setQuery((old: any) => ({ ...old, order: "ASC" }));
    },
    desc: () => {
      setQuery((old: any) => ({ ...old, order: "DESC" }));
    },
  };

  useEffect(() => {
    getBreeds();
    initImages();
  }, []);

  useEffect(() => {
    const { limit, breed, order } = query;
    initImages([limit, breed, order]);
  }, [query]);

  // useEffect(() => {
  //   if (inView) initImages();
  // }, [initImages, inView]);
  return (
    <div className={styles.breeds}>
      <Search />
      <div className={styles.breeds__body}>
        <BreedsNav
          chooseBreed={chooseBreed}
          chooseLimit={chooseLimit}
          chooseOrder={chooseOrder}
          breeds={breeds}
          order={query.order}
        />
        <div>
          <PatternImages data={images} />
        </div>
      </div>
    </div>
  );
}
