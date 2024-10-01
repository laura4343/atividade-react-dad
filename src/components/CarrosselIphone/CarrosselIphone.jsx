import styles from "../../styles/CarrosselIphone.module.css";
import iphone from "../../assets/img/celular.png";
import maca from "../../assets/img/apple.png";
import setinha from "../../assets/img/setinha.svg";
import bolinha from "../../assets/img/bolinha.svg";
import bolinhalaranja from "../../assets/img/bolinhalaranja.svg";

export default function CarrosselIphone() {
  return (
    <>
      <div>
        <div className={styles.blackbox}>
          <div className={styles.content}>
            <div class={styles.productseries}>
              <img src={maca} alt="" />
              <span>iPhone 14 Series</span>
            </div>

            <h1>Up to 10% off Voucher</h1>
            <div className={styles.shopnow}>
              <p>Shop Now</p>
              <img src={setinha} alt="" />
            </div>
          </div>
          <img src={iphone} alt="" className={styles.celular} />

          <div className={styles.bolinhas}>
            <span>
              <img src={bolinha} alt="" />
            </span>
            <span>
              <img src={bolinha} alt="" />
            </span>
            <span>
              <img src={bolinhalaranja} alt="" />
            </span>
            <span>
              <img src={bolinha} alt="" />
            </span>
            <span>
              <img src={bolinha} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
