import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Nav.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Nav = () => {
  const [closeNav, setCloseNav] = useState(true);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Autism Logo" className={styles.logoImg} />
        <h1 className={styles.logoTitle}>DiagnosticaTEA</h1>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setCloseNav(!closeNav)}
        className={
          !closeNav
            ? `${styles.hamburguer}`
            : `${styles.hamburguer} ${styles.hamburguerClosed}`
        }
      />

      <nav
        className={
          closeNav
            ? `${styles.navContainer}`
            : `${styles.navContainer} ${styles.closed}`
        }
      >
        <div className={styles.closeIcon}>
          <span>Menu</span>
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            onClick={() => setCloseNav(!closeNav)}
          />
        </div>

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
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
              to="professionals"
            >
              Profesionales
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
              to="contact"
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
