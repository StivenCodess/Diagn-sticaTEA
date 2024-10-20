import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./Contact.module.css";
import ContactForm from "./components/ContactForm";
import { infinite } from "../../assets";

export default function Contact() {
  return (
    <section className={styles.contactContainer}>
      <article className={styles.formContainer}>
        <h3>Contactanos</h3>
        <ContactForm />
      </article>
      <article className={styles.infoContainer}>
        <div className={styles.socialMedia}>
          <h3>Nuestras redes</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
              <span>Diagnotica_TEA</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} size="2xl" />
              <span>Diagnoticatea</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
              <span>Diagnotica_TEA</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareWhatsapp} size="2xl" />
              <span>Diagnotica</span>
            </li>
          </ul>
        </div>

        <div className={styles.addressContainer}>
          <h3>Encontranos en:</h3>

          <div className={styles.address}>
            <FontAwesomeIcon icon={faLocationDot} size="2xl" />
            <span>Balcarce 556, Villa Mercedes</span>
          </div>

          <img src={infinite} alt="infinite logo" />
        </div>
      </article>
    </section>
  );
}
