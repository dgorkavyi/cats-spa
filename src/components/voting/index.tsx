import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../images/arrow_left.svg";
import Search from "../search";
import ActionLog from "./actionLog";
import ImgControlls from "./imgControlls";
import styles from "./style.module.scss";
import routes from "../../routing/routes";

function VotingBody() {
  const isImgReady = false;
  return (
    <div className={styles.voting_body}>
      <div className={styles.voting__nav}>
        <NavLink style={{ display: "block" }} to={routes.root}>
          <button type="button">
            <ArrowLeft />
          </button>
        </NavLink>
        <p className={styles.voting__title}>voting</p>
      </div>
      <div className={styles.voting__img_holder}>
        <div className={styles.img__placeholder}>
          {isImgReady ? <img src="" alt="pet img" /> : ""}
        </div>
        <ImgControlls />
      </div>
      <div className={styles.user_actions_logs}>
        <ActionLog />
        <ActionLog />
        <ActionLog />
        <ActionLog />
        <ActionLog />
        <ActionLog />
        <ActionLog />
        <ActionLog />
        <ActionLog />
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
