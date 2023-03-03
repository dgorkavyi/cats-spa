import React, { useEffect, useState } from "react";
import Search from "../search";
import ActionLog, { LogType } from "./actionLog";
import ImgControlls from "./imgControlls";
import styles from "./style.module.scss";
import BackToRootArrow from "../backtoroot";
import getRandomImage from "../../api/getRandomImage";

const mockUp = [
  { time: "00:01", id: "88828", mark: "Dislike" },
  { time: "00:01", id: "88818", mark: "Favorite" },
  { time: "00:01", id: "88838", mark: "Like" },
  { time: "00:01", id: "88848", mark: "Dislike" },
  { time: "00:01", id: "88858", mark: "Like" },
  { time: "00:01", id: "88868", mark: "Like" },
  { time: "00:01", id: "888878", mark: "Dislike" },
  { time: "00:01", id: "888sa88", mark: "Favorite" },
  { time: "00:01", id: "888faz88", mark: "Favorite" },
  { time: "00:01", id: "888v188", mark: "Dislike" },
  { time: "00:01", id: "888zvn88", mark: "Favorite" },
  { time: "00:01", id: "888gg88", mark: "Like" },
  { time: "00:01", id: "888ss88", mark: "Dislike" },
];

function VotingBody() {
  const [data, setData] = useState({
    id: "",
    url: "",
    isReady: false,
  });

  async function getImg() {
    const res: any = await getRandomImage();

    if (res.status === 200) {
      const { id, url } = res.data[0];
      setData({ id, url, isReady: true });
    }
  }
  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className={styles.voting_body}>
      <div className={styles.voting__nav}>
        <BackToRootArrow />
        <p className={styles.voting__title}>voting</p>
      </div>
      <div className={styles.voting__img_holder}>
        <div className={styles.img__placeholder}>
          {data.isReady ? <img src={data.url} alt="pet img" /> : ""}
        </div>
        <ImgControlls />
      </div>
      <div className={styles.user_actions_logs}>
        {mockUp.map(({ time, id, mark }) => (
          <ActionLog
            key={`${id}_${time}`}
            time={time}
            id={id}
            mark={mark as LogType}
          />
        ))}
      </div>
    </div>
  );
}

export default function Voting() {
  return (
    <div className={styles.voting}>
      <Search />
      <VotingBody />
    </div>
  );
}
