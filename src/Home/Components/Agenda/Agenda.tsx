import toast, { Toaster } from 'react-hot-toast';
import styles from "./Agenda.module.css"
export default function Agenda() {

  const handleNotify = () =>{
    toast.error('Las reservas no estan disponibles');
  }
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#faf9f6',
            color: '#2c2c2c',
          },
        }}
      />
      <div className={styles.txtContainer}>
        <div className={styles.txtUpperContainer}>
          <div className={styles.txtTitle}>Evaluacion diagnostica complementaria</div>
          <div className={styles.txtDesc}>Entregamos herramientas a las familias y para mejorar la calidad de vida de todos. Contamos con profesionales certificados.</div>
        </div>
        <div className={styles.txtLowerContainer}>
          <div className={styles.txtAgenda}>Agenda una hora para orientacion GRATUITA.</div>
          <div className={styles.txtButtonContainer}>
            <button className={styles.txtButton} onClick={handleNotify}>Reservar turno</button>
          </div>
        </div>
      </div>

    </div>
  )
}
