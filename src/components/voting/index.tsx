import React from "react";
import Search from "../search";
import styles from "./style.module.scss";

export default function Voting() {
  return (
    <div className={styles.voting}>
      <Search />
    </div>
  );
}
