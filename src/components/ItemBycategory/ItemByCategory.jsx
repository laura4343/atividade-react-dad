import styles from "../../styles/ItemBycategory.module.css";

export default function ItemByCategory(props) {
  return (
    <>
      <div className={styles.item}>
        <img src={props.imagem} alt="" />
        <p id={styles.title}>{props.titulo}</p>
      </div>
    </>
  );
}
