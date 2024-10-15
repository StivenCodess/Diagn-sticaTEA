import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <section className={styles.section}>
        <main className={styles.main}>
          <h2 className={styles.title}>Atención a la Neurodiversidad</h2>
          <article className={styles.paragraphContainer}>
            <div className={styles.verify}>
              <p>
                Somos un centro dedicado a la atención y evaluación de la
                neurodiversidad, con un equipo de profesionales altamente{" "}
                <span>capacitados.</span>
              </p>
            </div>
            <br />
            <p>
              La evaluación del espectro autista es un proceso clínico,
              realizado por neurólogos o psiquiatras mediante varios
              instrumentos. No es una prueba única ni se realiza en un solo día.
              Nuestro objetivo es identificar las necesidades de apoyo, según
              los criterios del DSM-V, y destacar tanto fortalezas como áreas de
              desarrollo.
            </p>
          </article>
          <p className={styles.paragraph}></p>
        </main>
        <div className={styles.decorativeContainer}>
          <div className={`${styles.decorativeItem} ${styles.itemOne}`}></div>
          <div className={`${styles.decorativeItem} ${styles.itemTwo}`}></div>
          <div className={`${styles.decorativeItem} ${styles.itemThree}`}></div>
          <div className={`${styles.decorativeItem} ${styles.itemFour}`}></div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
