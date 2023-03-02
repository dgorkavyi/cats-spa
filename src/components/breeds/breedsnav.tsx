import React from "react";
import BackToRootArrow from "./backtoroot";
import styles from "./style.module.scss";
import votingStyles from "../voting/style.module.scss";
import { ReactComponent as AscIcon } from "../../images/asc.svg";
import { ReactComponent as DescIcon } from "../../images/desc.svg";

function BreedSelector({ choose, list }: { choose: any; list: any[] }) {
  return (
    <select
      className={styles.breed_select}
      name="breed"
      id="breed"
      onChange={choose}
    >
      {list.map((elem: string) => (
        <option value={elem}>{elem}</option>
      ))}
    </select>
  );
}

function OrderBtns({
  ascStyle,
  descStyle,
  chooseOrder,
}: {
  ascStyle: any;
  descStyle: any;
  chooseOrder: any;
}) {
  return (
    <>
      <button className={ascStyle} type="button" onClick={chooseOrder.asc}>
        <AscIcon />
      </button>
      <button className={descStyle} type="button" onClick={chooseOrder.desc}>
        <DescIcon />
      </button>
    </>
  );
}

function LimitSelector({ chooseLimit }: { chooseLimit: any }) {
  return (
    <select
      className={styles.breed_limit}
      name="limit"
      id="limit"
      onChange={chooseLimit}
    >
      <option value="5">Limit: 5</option>
      <option value="10">Limit: 10</option>
      <option value="15">Limit: 15</option>
      <option value="20">Limit: 20</option>
    </select>
  );
}

function BreedsNav({
  chooseBreed,
  chooseLimit,
  chooseOrder,
  breeds,
  order,
}: any) {
  const ascOrderStyle =
    order === "ASC" ? `${styles.order} ${styles.active}` : styles.order;
  const descOrderStyle =
    order === "DESC" ? `${styles.order} ${styles.active}` : styles.order;
  return (
    <div className={votingStyles.voting__nav}>
      <BackToRootArrow />
      <p className={votingStyles.voting__title}>Breeds</p>
      <BreedSelector choose={chooseBreed} list={breeds} />
      <LimitSelector chooseLimit={chooseLimit} />
      <OrderBtns
        ascStyle={ascOrderStyle}
        descStyle={descOrderStyle}
        chooseOrder={chooseOrder}
      />
    </div>
  );
}

export default BreedsNav;
