import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Professionals.module.css";
import ProfessionalCard from "./components/ProfessionalCard";
import { employesData } from "./assets";

export default function Professionals() {
  const carrouselRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (!carrouselRef.current) return;
    carrouselRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    if (!carrouselRef.current) return;
    carrouselRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.infoContainer}>
        <h1 className={styles.title}>Nuestros profesionales</h1>
        <p>
          Nuestro equipo está compuesto por especialistas dedicados y altamente
          capacitados en el tratamiento del autismo. Con una sólida formación y
          experiencia, brindamos una atención integral y personalizada para cada
          persona y su familia.
        </p>
      </article>

      <article className={styles.arrowContainer}>
        <FontAwesomeIcon
          icon={faCaretLeft}
          size="2xl"
          style={{ color: "fff" }}
          onClick={handleScrollLeft}
        />

        <div className={styles.carrouselContainer} ref={carrouselRef}>
          {employesData.map((employee) => {
            return <ProfessionalCard employee={employee} />;
          })}
        </div>

        <FontAwesomeIcon
          icon={faCaretRight}
          size="2xl"
          style={{ color: "fff" }}
          onClick={handleScrollRight}
        />
      </article>
    </section>
  );
}
