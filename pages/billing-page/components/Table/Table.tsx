import styles from "./Table.module.scss";
const Table = () => {
  return (
    <div className={styles.billing__page__table__content}>
      <ul className={styles.table__heading}>
        <li>Date</li>
        <li>Type</li>
        <li>Receipt</li>
      </ul>
      <ul className={styles.table__row}>
        <li>Oct. 21, 2021</li>
        <li>Pro Annual</li>
        <li className={styles.btn__download}>
          <button>Download</button>
        </li>
      </ul>
      <ul className={styles.table__row}>
        <li>Aug. 21, 2021</li>
        <li>Pro Portfolio</li>
        <li className={styles.btn__download}>
          <button>Download</button>
        </li>
      </ul>
      <ul className={styles.table__row}>
        <li>July. 21, 2021</li>
        <li>Sponsored Post</li>
        <li className={styles.btn__download}>
          <button>Download</button>
        </li>
      </ul>
      <ul className={styles.table__row}>
        <li>Jun. 21, 2021</li>
        <li>Sponsored Post</li>
        <li className={styles.btn__download}>
          <button>Download</button>
        </li>
      </ul>
      <button className={styles.billing__page__table__loadmore}>
        Load mores
      </button>
    </div>
  );
};

export default Table;
