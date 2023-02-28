import React from "react";
import styles from "./style.module.scss";
// import { ReactComponent as LogImgLike } from "../../images/like.svg";
// import { ReactComponent as LogImgDislike } from "../../images/dislike.svg";
import { ReactComponent as LogImgHeart } from "../../images/heart.svg";

export default function ActionLog() {
  return (
    <div className={styles.action_log}>
      <div className={styles.action_log__time}>00:00</div>
      <div className={styles.action_log__text}>
        Image ID: <span className={styles.log_id}>BbMFS3bU-</span> was added to
        Dislikes
      </div>
      <div className={styles.action_log__icon}>
        <LogImgHeart className={styles.action_log__icon_favorite} />
      </div>
    </div>
  );
}
