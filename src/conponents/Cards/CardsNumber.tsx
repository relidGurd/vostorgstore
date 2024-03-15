"use client";
import { useInView } from "react-intersection-observer";
import styles from "./cardsNumber.module.css";
import ButtonIcon from "@/icons/button";
import { useState } from "react";

interface NumberCard {
  url: string;
  id: number;
  value: string;
  cardNumber: string;
}

const CardsNumber: React.FC<{ props: NumberCard[] }> = ({ props }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section style={{ paddingTop: "1rem" }} className={`container`}>
      <ul ref={ref} className={styles.cardList}>
        <li className={`${styles.card} ${styles.cardContainer}`}>
          <span className={`${styles.mainCardTitle}`}>ЧТО МЫ ДЕЛАЕМ</span>
        </li>
        {props.map((card) => (
          <li key={card.id} className={styles.card}>
            <div
              className={`${styles.cardContainer} ${styles.titleSize} ${
                inView ? styles.fadeInUp : ""
              }`}
            >
              {card.cardNumber}
            </div>

            <div className={styles.cardMore}>
              <div className={styles.cardContainer}>
                <span className={inView ? styles.fadeInUp : ""}>
                  {card.value}
                </span>
                <button className={styles.cardButton}>
                  <ButtonIcon />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardsNumber;
