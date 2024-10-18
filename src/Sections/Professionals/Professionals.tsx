import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import ProfessionalCard from "./components/ProfessionalCard";
import styles from "./Professionals.module.css";
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
      <h2 className={styles.title}>Nuestros profesionales</h2>

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
