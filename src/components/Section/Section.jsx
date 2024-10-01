import styles from "../../styles/Section.module.css";

export default function Section(props) {
  return (
    <>
      <div className={styles.categorycontainer}>
        <div className={styles.labelsubtitle}>
          <div className={styles.icon}></div>
          <p>{props.subtitle}</p>
        </div>

        <h1>{props.title}</h1>
      </div>
    </>
  );
}
