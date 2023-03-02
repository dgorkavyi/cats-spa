import React from "react";
import BackToRootArrow from "../breeds/backtoroot";
import styles from "./style.module.scss";
import votingStyles from "../voting/style.module.scss";
import { ReactComponent as UploadImg } from "../../images/upload.svg";
import { ReactComponent as ReloadImg } from "../../images/reload.svg";

function UploadBtn() {
  return (
    <button className={styles.upload} type="button">
      <UploadImg />
      Upload
    </button>
  );
}

type DataType = {
  value: string;
  text: string;
};

interface SelectProps {
  data: DataType[];
  text: string;
  isLimit?: boolean;
}

function Select({ data, text, isLimit = false }: SelectProps) {
  return (
    <div className={styles.select_block}>
      <p className={styles.select_text}>{text}</p>
      <select
        className={isLimit ? styles.select_limit : ""}
        name="limit"
        id="limit"
      >
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}

function ReloadBtn() {
  return (
    <button className={styles.reload_btn} type="button">
      <ReloadImg />
    </button>
  );
}

function Form() {
  const orderData = [
    { value: "ASC", text: "Asc" },
    { value: "DESC", text: "Desc" },
    { value: "RAND", text: "Random" },
  ];
  const typeData = [
    { value: "ALL", text: "All" },
    { value: "ANIM", text: "Animated" },
    { value: "STATIC", text: "Static" },
  ];
  const breedData = [
    { value: "ALL", text: "All" },
    { value: "RAND", text: "Random" },
  ];
  const limData = [
    { value: "5", text: "5 items per page" },
    { value: "10", text: "10 items per page" },
    { value: "15", text: "15 items per page" },
    { value: "20", text: "20 items per page" },
  ];
  return (
    <div className={styles.gallery_form}>
      <div className={styles.form_row}>
        <Select text="order" data={orderData} />
        <Select text="type" data={typeData} />
      </div>
      <div className={styles.form_row}>
        <Select text="breed" data={breedData} />
        <Select isLimit text="limit" data={limData} />
        <ReloadBtn />
      </div>
    </div>
  );
}

function GalleryForm() {
  return (
    <>
      <div
        className={`${votingStyles.voting__nav} ${styles.gallery_body_head}`}
      >
        <BackToRootArrow />
        <p className={votingStyles.voting__title}>Gallery</p>
        <UploadBtn />
      </div>
      <Form />
    </>
  );
}

export default GalleryForm;
