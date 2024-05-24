"use client";
import { useInView } from "react-intersection-observer";
import styles from "./cardsNumber.module.css";
import ButtonIcon from "@/icons/button";
import { motion } from "framer-motion";
import LogoIcon from "@/icons/logo";

interface NumberCard {
  url: string;
  id: number;
  value: string;
  cardNumber: string;
}

const CardsNumber: React.FC<{ props: NumberCard[] }> = ({ props }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
            <motion.div className={styles.cardBg}></motion.div>

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
