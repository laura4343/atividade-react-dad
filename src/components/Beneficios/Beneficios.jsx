import styles from "../../styles/Beneficios.module.css";

export default function Beneficios(props) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.beneficio}>
          <img src={props.imagem} alt="" />

          <div className={styles.textos}>
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
          </div>
        </div>
      </div>
    </>
  );
}
