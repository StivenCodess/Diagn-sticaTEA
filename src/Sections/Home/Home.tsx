import toast, { Toaster } from "react-hot-toast";
import styles from "./Home.module.css";

import Reviews from "./Components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#faf9f6",
              color: "#2c2c2c",
            },
          }}
        />

        <main className={styles.container}>
          <h2 className={styles.title}>
            Evaluacion diagnostica complementaria
          </h2>

          <p className={styles.description}>
            Entregamos herramientas a las familias y para mejorar la calidad de
            vida de todos. Contamos con profesionales certificados.
          </p>

          <div className={styles.reserveContainer}>
            <h4 className={styles.titleReserve}>
              Agenda una hora para orientacion GRATUITA.
            </h4>

            <button
              className={styles.buttonReserve}
              onClick={() => toast.error("Las reservas no estan disponibles")}
            >
              Reservar turno
            </button>
          </div>
        </main>
        <Reviews />
      </section>
    </>
  );
}
