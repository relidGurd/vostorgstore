"use client";
import { useInView } from "react-intersection-observer";
import styles from "./cardsNumber.module.css";
import ButtonIcon from "@/icons/button";
import { motion } from "framer-motion";
import LogoIcon from "@/icons/logo";
import Image from "next/image";
import { useState } from "react";

interface NumberCard {
  url: string;
  id: number;
  value: string;
  cardNumber: string;
  color: string;
}

const CardsNumber: React.FC<{ props: NumberCard[] }> = ({ props }) => {
  const [test, setTest] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section style={{ paddingTop: "1rem" }} className={`container`}>
      <ul ref={ref} className={styles.cardList}>
        <motion.li
          onHoverStart={() => setTest(180)}
          onHoverEnd={() => setTest(0)}
          className={styles.card}
        >
          <div style={{ backgroundColor: "#f5f4f5" }} className={styles.cardBg}>
            <div
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "center",
                transform: `rotateZ(${test}deg)`,
                transition: "transform 0.5s ease",
              }}
            >
              <Image
                className={styles.firstCardBgImage}
                width={500}
                height={500}
                alt="test"
                src={`./logo-orange.svg`}
              />
            </div>
          </div>

          <div className={`${styles.firstCardList}`}>
            <div className={styles.cardElement}>
              <div>МЫ</div>
              <div className={styles.line}></div>
              <div>ХУДОЖНИКИ</div>
            </div>
            <div className={styles.cardElement}>
              <div>МУЗЫКАНТЫ</div>
              <div className={styles.line}></div>
              <div>СКУЛЬПТОРЫ</div>
            </div>
            <div className={styles.cardElement}>
              <div>ДИЗАЙНЕРЫ</div>
              <div className={styles.line}></div>
              <div>АРХИТЕКТОРЫ</div>
            </div>
            <div className={styles.cardElement}>
              <div>СТРИТ-АРТИСТЫ</div>
              <div className={styles.line}></div>
              <div>КУРАТОРЫ</div>
            </div>
            <div className={styles.cardElement}>
              <div>РЕЖИССЕРЫ</div>
              <div className={styles.line}></div>
              <div>ИСКУССТВОВЕДЫ</div>
            </div>
            <div className={styles.cardElement}>
              <div>ХУДОЖНИКИ-ПЕРФОРМАНСА</div>
              <div className={styles.line}></div>
              <div></div>
            </div>
            <div className={styles.cardElement}>
              <div>САУНД-ДИЗАЙНЕРЫ</div>
              <div className={styles.line}></div>
              <div>СЦЕНОГРАФЫ</div>
            </div>
            <div className={styles.cardElement}>
              <div>ДИДЖИТАЛ-ХУДОЖНИКИ</div>
              <div className={styles.line}></div>
              <div>СЦЕНОГРАФЫ</div>
            </div>
          </div>
        </motion.li>
        {props.map((card) => (
          <li key={card.id} className={styles.card}>
            <div
              style={{ backgroundColor: card.color }}
              className={styles.cardBg}
            >
              <Image
                className={styles.cardBgImage}
                width={500}
                height={500}
                alt="test"
                src={`./back.svg`}
              />
            </div>

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
