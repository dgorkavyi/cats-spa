import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../main";
import SideBar from "../sidebar";
import styles from "./style.module.scss";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <SideBar />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}
