import React, { useEffect, useState } from "react";
import BackToRootArrow from "../backtoroot";
import styles from "./style.module.scss";
import votingStyles from "../voting/style.module.scss";
import { ReactComponent as UploadImg } from "../../images/upload.svg";
import { ReactComponent as ReloadImg } from "../../images/reload.svg";
import { getFunctionForData } from "../breeds";
import getAllBreeds from "../../api/getAllBreeds";

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
  changer: (e: any) => void;
  isLimit?: boolean;
}

function Select({ data, text, changer, isLimit = false }: SelectProps) {
  return (
    <div className={styles.select_block}>
      <p className={styles.select_text}>{text}</p>
      <select
        className={isLimit ? styles.select_limit : ""}
        name="limit"
        id="limit"
        onChange={changer}
      >
        {data.map((item, index) => (
          <option key={`${item.value}_breeds_${index * 2}`} value={item.value}>
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

function Form({ setter }: { setter: any }) {
  const orderData = [
    { value: "ASC", text: "Asc" },
    { value: "DESC", text: "Desc" },
    { value: "RANDOM", text: "Random" },
  ];
  const typeData = [
    { value: "gif,jpg", text: "All" },
    { value: "gif", text: "Animated" },
    { value: "jpg", text: "Static" },
  ];
  const limData = [
    { value: "5", text: "5 items per page" },
    { value: "10", text: "10 items per page" },
    { value: "15", text: "15 items per page" },
    { value: "20", text: "20 items per page" },
  ];
  const [breeds, setBreeds] = useState([{}] as DataType[]);
  const setLimit = (e: any) => {
    setter((old: any) => ({ ...old, limit: e.target.value }));
  };

  const setBreed = (e: any) => {
    setter((old: any) => ({ ...old, breed: e.target.value }));
  };

  const setType = (e: any) => {
    setter((old: any) => ({ ...old, type: e.target.value }));
  };

  const setOrder = (e: any) => {
    setter((old: any) => ({ ...old, order: e.target.value }));
  };

  const initBreeds = getFunctionForData(
    setBreeds,
    getAllBreeds,
    ({ id, name }: any) => ({ value: id, text: name })
  );
  useEffect(() => {
    initBreeds();
  }, []);
  return (
    <div className={styles.gallery_form}>
      <div className={styles.form_row}>
        <Select text="order" data={orderData} changer={setOrder} />
        <Select text="type" data={typeData} changer={setType} />
      </div>
      <div className={styles.form_row}>
        <Select text="breed" data={breeds} changer={setBreed} />
        <Select isLimit text="limit" data={limData} changer={setLimit} />
        <ReloadBtn />
      </div>
    </div>
  );
}

function GalleryForm({ setter }: { setter: any }) {
  return (
    <>
      <div
        className={`${votingStyles.voting__nav} ${styles.gallery_body_head}`}
      >
        <BackToRootArrow />
        <p className={votingStyles.voting__title}>Gallery</p>
        <UploadBtn />
      </div>
      <Form setter={setter} />
    </>
  );
}

export default GalleryForm;
