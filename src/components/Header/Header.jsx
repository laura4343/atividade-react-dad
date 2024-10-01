import styles from "../../styles/Header.module.css";
import lupa from "../../assets/img/lupa-search.svg";
import wish from "../../assets/img/carrinho.svg";
import carrinho from "../../assets/img/carrinhoo.svg";

//styled-components - estou criando uma constante que é uma tag estilizada (muito louco)
import styled from "styled-components";
const HeaderPreco = styled.header`
  background-color: #fa9f9f;
  width: 100%;
  height: 100px;
`;

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>Exclusive</h2>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <div className={styles.containersearch}>
          <div className={styles.inputsearch}>
            <input type="text" placeholder="What are you looking for?" />
            <img src={lupa} alt="" />
          </div>

          <img src={wish} alt="" />
          <img src={carrinho} alt="" />
        </div>
      </header>
    </>
  );
}
