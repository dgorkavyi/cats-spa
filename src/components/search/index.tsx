import React, { useRef, FormEvent } from "react";
import styles from "./style.module.scss";
import { ReactComponent as ImgHeart } from "../../images/heart.svg";
import { ReactComponent as ImgLike } from "../../images/like.svg";
import { ReactComponent as ImgDislike } from "../../images/dislike.svg";
import { ReactComponent as ImgSearch } from "../../images/search.svg";

export default function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const search = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <input
          ref={searchRef}
          placeholder="Search for breeds by name"
          type="search"
          name="search"
          id="searhc"
        />
        <button type="submit" className={styles.search_btn} onClick={search}>
          <ImgSearch />
        </button>
      </div>

      <div className={styles.btn}>
        <ImgLike className={styles.svg} />
      </div>
      <div className={styles.btn}>
        <ImgHeart className={styles.svg} />
      </div>
      <div className={styles.btn}>
        <ImgDislike className={styles.svg} />
      </div>
    </div>
  );
}
