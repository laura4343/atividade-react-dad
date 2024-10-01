import styles from "../../styles/Timer.module.css";

export default function Timer() {
  return (
    <>
      <div className={styles.unidades}>
        <div className={styles.unidade}>Day</div>
        <div className={styles.unidade}>Hours</div>
        <div className={styles.unidade}>Minutes</div>
        <div className={styles.unidade}>Seconds</div>
      </div>
    </>
  );
}
