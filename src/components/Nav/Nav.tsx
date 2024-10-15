import styles from "./Nav.module.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Autism Logo" className={styles.logoImg} />
        <h1 className={styles.logoTitle}>DiagnosticaTEA</h1>
      </div>

      <nav className={styles.navContainer}>
        <ul className={styles.ulContainer}>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Profesionales</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
