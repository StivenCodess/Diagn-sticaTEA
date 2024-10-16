import { NavLink } from "react-router-dom";

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
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
              to="aboutUs"
            >
              Nosotros
            </NavLink>
          </li>
          <li className={styles.navLink}>Profesionales</li>
          <li className={styles.navLink}>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
