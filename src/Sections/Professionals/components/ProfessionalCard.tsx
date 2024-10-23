import styles from "./ProfessionalCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBookOpen,
  faLandmark,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

interface Employee {
  name: string;
  role: string;
  university_degree: string;
  university: string;
  photo: string;
}

interface ProfessionalCardProps {
  employee: Employee;
}

const ProfessionalCard = ({ employee }: ProfessionalCardProps) => {
  const { name, role, university_degree, university, photo } = employee;

  return (
    <li className={styles.cardContainer}>
       <picture className={styles.cardPhotoContainer}>
        <img
          className={styles.cardPhoto}
          src={photo}
          alt={`${name} ${role} ${university_degree}`}
        /> 
       </picture>

      <h4 className={styles.cardName}>{name}</h4>

      <ul className={styles.cardInfoContainer}>
        <li>
          <FontAwesomeIcon icon={faBookOpen} size="lg" />
          <span>{role}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserGraduate} size="lg" />
          <span>{university_degree}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faLandmark} size="lg" />
          <span>{university}</span>
        </li>
      </ul>
    </li>
  );
};

export default ProfessionalCard;
