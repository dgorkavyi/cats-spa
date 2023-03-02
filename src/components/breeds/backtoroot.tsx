import React from "react";
import { NavLink } from "react-router-dom";
import votingStyles from "../voting/style.module.scss";
import routes from "../../routing/routes";
import { ReactComponent as ArrowLeft } from "../../images/arrow_left.svg";

function BackToRootArrow() {
  return (
    <NavLink style={{ display: "block" }} to={routes.root}>
      <button className={votingStyles.back_btn} type="button">
        <ArrowLeft />
      </button>
    </NavLink>
  );
}

export default BackToRootArrow;
