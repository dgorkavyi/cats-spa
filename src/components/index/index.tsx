import React from "react";
import styles from "./style.module.scss";
import img from "../../images/girl-and-pet.png";

export default function Index() {
  return (
    <div className={styles.index}>
      <img src={img} alt="girl_and_pet_image" />
    </div>
  );
}
