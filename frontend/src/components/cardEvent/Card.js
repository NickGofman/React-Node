import React from 'react';
import styles from './card.module.css';

function Card(props) {
  const { eventName, date, time, style, income } = props;
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{eventName}</h3>
      <p className={styles.cardText}>
        <strong>Date:</strong> {date}
      </p>
      <p className={styles.cardText}>
        <strong>Time:</strong> {time}
      </p>
      <p className={styles.cardText}>
        <strong>Style:</strong> {style}
      </p>
      <p className={styles.cardText}>
        <strong>Income:</strong> {income}
      </p>
    </div>
  );
}

export default Card;
