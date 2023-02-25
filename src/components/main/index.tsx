import React from "react";
import { Props } from "../../types";
import styles from "./style.module.scss";

export default function Main({ children }: Props) {
  return <div className={styles.main}>{children}</div>;
}
