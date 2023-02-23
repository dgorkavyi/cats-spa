import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
