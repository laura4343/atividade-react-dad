import styles from "../../styles/Footer.module.css";
import qrcode from "../../assets/img/qrcode.svg";
import googleplayappstore from "../../assets/img/googleplayappstore.svg";
import socialmedias from "../../assets/img/socialmedias.svg";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h2>Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className={styles.subscribeInput}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">→</button>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Support</h3>

          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Subscribe</h3>

          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Link</h3>

          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Download App</h3>

          <p id={styles.graytext}>Save $3 with App New User Only</p>

          <div className={styles.qrCodes}>
            <img src={qrcode} alt="" />
            <img src={googleplayappstore} alt="" />
          </div>

          <div className={styles.socialMedia}>
            <img src={socialmedias} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
