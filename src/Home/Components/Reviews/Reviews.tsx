import { useState } from 'react';
import styles from './Reviews.module.css'
import star from "./assets/star.png";
import arrow from "./assets/arrow.png";
import reviewData from "./assets/Reviews.json";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);


  const renderStars = (rating : any)=>{
    const stars = [];
    for(let i = 0; i<rating ; i++){
      stars.push(<img src={star} alt='star' key={i} />)
    }
    return stars;
  }
  
  
  const handlePrev = () =>{
    let num = currentReview - 1;
    if(num < 0) num = reviewData.length - 1;
    setCurrentReview(num);
  }
  const handleNext = () =>{
    let num = currentReview + 1
    if(num == reviewData.length) num = 0;
    setCurrentReview(num);
  }

  const Review = reviewData[currentReview];

  const {id, nombre, fecha, review, estrellas} = Review;

  return (
    <div>
      <div className={styles.reviewContainer} key={id}>

        <img className={styles.reviewArrowLeft} src={arrow} alt="Previous" onClick={handlePrev}/>

        <div className={styles.reviewUpperContainer}>

          <div className={styles.reviewName}>{nombre}</div>
          <div className={styles.reviewDate}>{fecha}</div>
          
        </div>

        <div className={styles.reviewComment}>{review}</div>

        <div className={styles.reviewStars}>{renderStars(estrellas)}</div>

        <img className={styles.reviewArrowRight} src={arrow} alt="Next" onClick={handleNext}/>
      </div>
    </div>
  )
}
