import React from "react";
import styles from "./style.module.scss";
import { ReactComponent as LogImgLike } from "../../images/like.svg";
import { ReactComponent as LogImgDislike } from "../../images/dislike.svg";
import { ReactComponent as LogImgHeart } from "../../images/heart.svg";

export type LogType = "Like" | "Dislike" | "Favorite";
interface Props {
  time: string;
  id: string;
  mark: LogType;
}

function Mark({ type }: { type: LogType }) {
  let res = <LogImgDislike className={styles.action_log__icon_dislike} />;

  if (type === "Like")
    res = <LogImgLike className={styles.action_log__icon_like} />;
  else if (type === "Favorite")
    res = <LogImgHeart className={styles.action_log__icon_favorite} />;

  return res;
}

export default function ActionLog({ time, id, mark }: Props) {
  return (
    <div className={styles.action_log}>
      <div className={styles.action_log__time}>{time}</div>
      <div className={styles.action_log__text}>
        Image ID: <span className={styles.log_id}>{id}</span> was added to
        {mark}
      </div>
      <div className={styles.action_log__icon}>
        <Mark type={mark} />
      </div>
    </div>
  );
}
