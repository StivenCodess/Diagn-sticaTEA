import { useState } from "react";
import styles from "./Reviews.module.css";
import star from "./assets/star.png";
import arrow from "./assets/arrow.png";
import reviewData from "./assets/Reviews.json";

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
  const { id, name, date, review, stars } = Review;

  return (
    <div>
      <div className={styles.reviewContainer} key={id}>
        <img
          className={styles.reviewArrowLeft}
          src={arrow}
          alt="Previous"
          onClick={handlePrev}
        />

        <div className={styles.reviewUpperContainer}>
          <div className={styles.reviewName}>{name}</div>
          <div className={styles.reviewDate}>{date}</div>
        </div>

        <div className={styles.reviewComment}>{review}</div>

        <div className={styles.reviewStars}>{renderStars(stars)}</div>

        <img
          className={styles.reviewArrowRight}
          src={arrow}
          alt="Next"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
