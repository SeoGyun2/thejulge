import React from 'react';
import styles from './card.module.css';

interface CardProps {
  cardImage: string;
  cardTitle: string;
  cardDate: string;
  cardLocation: string;
  cardPrice: string;
  discountText?: string;  
}

const Card = ({cardImage, cardTitle, cardDate, cardLocation, cardPrice, discountText}: CardProps) => {

  return (
    
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={cardImage} alt="so" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{cardTitle}</h3>
            <p className={styles.cardDate}>
              <img src="/clock.svg" alt="Clock" className={styles.clockIcon} /> {cardDate}
            </p>
            <p className={styles.cardLocation}>
              <img src="/ping.svg" alt="ping" className={styles.ping} /> {cardLocation}</p>
            <div className={styles.cardPrice}>
              <span>{cardPrice}원</span>
              {discountText&&<span className={styles.discountText}>{discountText}<img src="/upkeyboard.svg" alt="up" className={styles.upkeyboard} /> </span>}
            </div>
          </div>
        </div>        
      </div>
    
  );
};

export default Card;