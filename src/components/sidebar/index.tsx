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

  const votingStyle = style.voting ? styles.nav__btn_active : styles.nav__btn;
  const breedsStyle = style.breeds ? styles.nav__btn_active : styles.nav__btn;
  const galleryStyle = style.gallery ? styles.nav__btn_active : styles.nav__btn;

  return (
    <>
      <NavLink
        to={routes.voting}
        className={styles.navlink_hover}
        onClick={activateLink("voting")}
      >
        <div className={styles.nav__element_voting}>
          <img src={nav__img_voting} alt="nav img" />
        </div>
        <div className={votingStyle}>VOTING</div>
      </NavLink>
      <NavLink
        to={routes.breeds}
        className={styles.navlink_hover}
        onClick={activateLink("breeds")}
      >
        <div className={styles.nav__element_breeds}>
          <img src={nav__img_breeds} alt="nav img" />
        </div>
        <div className={breedsStyle}>BREEDS</div>
      </NavLink>
      <NavLink
        to={routes.gallery}
        className={styles.navlink_hover}
        onClick={activateLink("gallery")}
      >
        <div className={styles.nav__element_gallery}>
          <img src={nav__img_gallery} alt="nav img" />
        </div>
        <div className={galleryStyle}>GALLERY</div>
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
        <SideBarLinks />
      </div>
    </div>
  );
}
