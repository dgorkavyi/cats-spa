import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routing/routes";
import logo from "../../images/Logo.svg";
import styles from "./style.module.scss";
import nav__img_voting from "../../images/vote-table.png";
import nav__img_breeds from "../../images/pet-breeds.png";
import nav__img_gallery from "../../images/images-search.png";

function SideBarLinks() {
  const defaultState = {
    voting: false,
    breeds: false,
    gallery: false,
  };
  const [style, setStyle] = useState(defaultState);

  function activateLink(name: string) {
    return () => setStyle({ ...defaultState, [name]: true });
  }

  return (
    <>
      <NavLink
        to={routes.voting}
        onClick={activateLink("voting")}
        className={style.voting ? styles.nav__btn_active : styles.nav__btn}
      >
        VOTING
      </NavLink>
      <NavLink
        to={routes.breeds}
        onClick={activateLink("breeds")}
        className={style.breeds ? styles.nav__btn_active : styles.nav__btn}
      >
        BREEDS
      </NavLink>
      <NavLink
        to={routes.gallery}
        onClick={activateLink("gallery")}
        className={style.gallery ? styles.nav__btn_active : styles.nav__btn}
      >
        GALLERY
      </NavLink>
    </>
  );
}

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src={logo} alt="logo" />
      <p className={styles.sidebar__text}>Lets start using The Cat API</p>
      <div className={styles.nav}>
        <div className={styles.nav__element_voting}>
          <img src={nav__img_voting} alt="nav img" />
        </div>
        <div className={styles.nav__element_breeds}>
          <img src={nav__img_breeds} alt="nav img" />
        </div>
        <div className={styles.nav__element_gallery}>
          <img src={nav__img_gallery} alt="nav img" />
        </div>
      </div>
      <div className={styles.nav}>
        <SideBarLinks />
      </div>
    </div>
  );
}
