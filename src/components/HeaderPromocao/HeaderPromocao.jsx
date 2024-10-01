import styles from "../../styles/HeaderPromocao.module.css";

export default function HeaderPromocao() {
  return (
    <>
      <div className={styles.promotion}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="" className={styles.promotionLink}></a>
        </p>
        <select name="" id="" className={styles.dropdown}>
          <option value="english" className={styles.option}>
            English
          </option>
          <option value="portuguese" className={styles.option}>
            Português
          </option>
        </select>
      </div>
    </>
  );
}
