import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Search from "../search";
import BreedsNav from "./breedsnav";
import PatternImages from "./patternimages";
import styles from "./style.module.scss";
// import getAllBreeds from "../../api/getAllBreeds";

export default function Breeds() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const [breeds, setBreeds] = useState(["all"]);
  const [query, setQuery] = useState({
    breed: "",
    limit: 5,
    order: "ASC",
  });
  const getBreeds = async () => {
    // const res: any = await getAllBreeds();

    // if (res.status === 200) {
    //   setBreeds(res.data.map((item: any) => item.name));
    // }
    setBreeds(["all", "Abyssinian"]);
  };

  const getImages = useCallback(async () => {
    console.log("query :>>", query);
  }, [query]);

  const chooseLimit = (e: any) => {
    setQuery((old: any) => ({ ...old, limit: e.target.value }));
  };
  const chooseBreed = (e: any) => {
    setQuery((old: any) => ({ ...old, breed: e.target.value }));
  };
  const chooseOrder = {
    asc: () => {
      console.log("object :>>", "ASC");
      setQuery((old: any) => ({ ...old, order: "ASC" }));
    },
    desc: () => {
      console.log("object :>>", "DESC");

      setQuery((old: any) => ({ ...old, order: "DESC" }));
    },
  };

  useEffect(() => {
    getBreeds();
    getImages();
  }, [getImages]);

  useEffect(() => {
    if (inView) getImages();
  }, [getImages, inView]);
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
        <div ref={ref}>
          <PatternImages />
        </div>
      </div>
    </div>
  );
}
