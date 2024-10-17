import { useState } from "react";

import styles from "./Reviews.module.css";
import { star, arrow, reviewData } from "../../assets";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const renderStars = (rating: number) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<img src={star} alt="star" key={i} />);
    }

    return stars;
  };

  const handlePrev = () => {
    if (currentReview - 1 <= 0) return setCurrentReview(reviewData.length - 1);
    setCurrentReview(currentReview - 1);
  };

  const handleNext = () => {
    if (currentReview + 1 == reviewData.length) return setCurrentReview(0);
    setCurrentReview(currentReview + 1);
  };

  const Review = reviewData[currentReview];
  const { id, name, date, review, stars, avatar_url } = Review;

  return (
    <div className={styles.container} key={id}>
      <img
        className={`${styles.arrow} ${styles.arrowLeft}`}
        src={arrow}
        alt="Previous"
        onClick={handlePrev}
      />

      <div className={styles.reviewContainer}>
        <div className={styles.reviewUpperContainer}>
          <div className={styles.infoUser}>
            <img className={styles.avatar} src={avatar_url} alt="" />
            <span className={styles.reviewName}>{name}</span>
          </div>

          <span className={styles.reviewDate}>{date}</span>
        </div>

        <p className={styles.reviewComment}>{review}</p>

        <div className={styles.reviewStars}>{renderStars(stars)}</div>
      </div>

      <img
        className={`${styles.arrow} ${styles.arrowRight} `}
        src={arrow}
        alt="Next"
        onClick={handleNext}
      />
    </div>
  );
}
