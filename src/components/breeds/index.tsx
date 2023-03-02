import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Search from "../search";
import PatternImages from "./patternimages";
import styles from "./style.module.scss";
import votingStyles from "../voting/style.module.scss";
import { ReactComponent as ArrowLeft } from "../../images/arrow_left.svg";
import routes from "../../routing/routes";
import { ReactComponent as AscIcon } from "../../images/asc.svg";
import { ReactComponent as DescIcon } from "../../images/desc.svg";
// import getAllBreeds from "../../api/getAllBreeds";

function BreedsNav({
  chooseBreed,
  chooseLimit,
  chooseOrder,
  breeds,
  order,
}: any) {
  const ascOrderStyle =
    order === "ASC" ? `${styles.order} ${styles.active}` : styles.order;
  const descOrderStyle =
    order === "DESC" ? `${styles.order} ${styles.active}` : styles.order;
  return (
    <div className={votingStyles.voting__nav}>
      <NavLink style={{ display: "block" }} to={routes.root}>
        <button className={votingStyles.back_btn} type="button">
          <ArrowLeft />
        </button>
      </NavLink>
      <p className={votingStyles.voting__title}>Breeds</p>
      <select
        className={styles.breed_select}
        name="breed"
        id="breed"
        onChange={chooseBreed}
      >
        {breeds.map((elem: string) => (
          <option value={elem}>{elem}</option>
        ))}
      </select>
      <select
        className={styles.breed_limit}
        name="limit"
        id="limit"
        onChange={chooseLimit}
      >
        <option value="5">Limit: 5</option>
        <option value="10">Limit: 10</option>
        <option value="15">Limit: 15</option>
        <option value="20">Limit: 20</option>
      </select>
      <button className={ascOrderStyle} type="button" onClick={chooseOrder.asc}>
        <AscIcon />
      </button>
      <button
        className={descOrderStyle}
        type="button"
        onClick={chooseOrder.desc}
      >
        <DescIcon />
      </button>
    </div>
  );
}

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
