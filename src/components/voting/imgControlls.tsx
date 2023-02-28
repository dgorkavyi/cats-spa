import React from "react";
import styles from "./style.module.scss";
import { ReactComponent as LogImgLike } from "../../images/like.svg";
import { ReactComponent as LogImgDislike } from "../../images/dislike.svg";
import { ReactComponent as LogImgHeart } from "../../images/heart.svg";

export default function ImgControlls() {
  return (
    <div className={styles.voting__img_controlls}>
      <button type="button" className={styles.voting__img_controlls_like}>
        <LogImgLike />
      </button>
      <button type="button" className={styles.voting__img_controlls_favorite}>
        <LogImgHeart />
      </button>
      <button type="button" className={styles.voting__img_controlls_dislike}>
        <LogImgDislike />
      </button>
    </div>
  );
}
