"use client";
import styles from "./Main.module.css";
import Image from "next/image";
import { useEffect } from "react";
import VideoSlide from "@/conponents/VideoSlide/VideoSlide";
import CardsNumber from "@/conponents/Cards/CardsNumber";
import MainPageProducts from "@/conponents/MainPageProducts/MainPageProducts";
import AboutUsBunner from "@/conponents/AboutUsBanner/AboutUsBunner";
import WhatWeDoItem from "@/conponents/WhatWeDoItem/WhatWeDoItem";
import ContactUs from "@/conponents/ContactUs/ContactUs";
import Exhibition from "@/conponents/Exhibition/Exhibition";
import Popup from "@/conponents/Popup/Popup";

const MainPage = ({ data }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const da = [
    {
      url: "/artists",
      id: 1,
      value: "Художники",
      cardNumber: "200+",
      color: "#eb5f0a",
    },
    {
      url: "/city",
      id: 2,
      value: "Города",
      cardNumber: "100",
      color: "#d1cc04",
    },
    {
      url: "/residents",
      id: 3,
      value: "Резиденты",
      cardNumber: "500",
      color: "#eb5f0a",
    },
    {
      url: "/events",
      id: 4,
      value: "События",
      cardNumber: "800",
      color: "#c88abc",
    },
  ];

  return (
    <>
      <VideoSlide />

      <CardsNumber props={da} />

      <AboutUsBunner url="/" buttonText="О нас" />

      <section className={`container`}>
        <div className={`${styles.sectionWe}`}>
          <div className={styles.leftSide}>
            <h2
              className={`${styles.leftSideTitle} ${styles.leftSideTitleStyles} ${styles.sectionWeColor}`}
            >
              МЫ
            </h2>
            <div
              style={{ height: "50px" }}
              className={styles.verticalLine}
            ></div>
            <p className={styles.leftSideText}>
              Экосистема <span>творческой молодежи со всей России </span>
              включающая в себя <span>весь спектр творцов и авторов</span>
              художественных и креативных индустрий
            </p>
            <div
              style={{ height: "200px" }}
              className={styles.verticalLine}
            ></div>
            <h2 className={`${styles.leftSideTitleStyles}`}>
              НАША ДЕЯТЕЛЬНОСТЬ
            </h2>
            <div
              style={{ height: "50px" }}
              className={styles.verticalLine}
            ></div>
            <p className={styles.leftSideText}>
              <span>Развитие современного искусства,</span> кураторская
              деятельность, поддержка начинающих деятелей культуры,
              <span>продвижение регионального искусства,</span>
              мультидисциплинарные проекты, исследовательские проекты
            </p>
          </div>

          <div>
            <h2 className={`${styles.leftSideTitleStyles} `}>
              АРТ-ОБЪЕДИНЕНИЕ
            </h2>
            <div
              style={{ height: "150px" }}
              className={styles.verticalLine}
            ></div>
            <h2
              className={`${styles.leftSideTitleStyles} ${styles.sectionWeColor}`}
            >
              НАША МИССИЯ
            </h2>
            <div
              style={{ height: "150px" }}
              className={styles.verticalLine}
            ></div>
            <p className={styles.leftSideText}>
              Переосмысление <span>искусства,</span> создание контекстов и
              смыслов, поиск для самовыражения.{" "}
              <span>Формирование и развитие</span> культуры{" "}
              <span>в разных регионах России</span>
            </p>
          </div>
        </div>
      </section>
      <Exhibition />

      <section className={`container`}>
        <ul className={styles.testContainer}>
          <WhatWeDoItem url={`/3.jpg`} />
          <WhatWeDoItem url={`/3.webp`} />
          <WhatWeDoItem url={`/3.jpg`} />
          <WhatWeDoItem url={`/3.webp`} />
        </ul>
      </section>

      <MainPageProducts cardList={data} />

      <AboutUsBunner url="/" buttonText="Послденее предложение" />
      <ContactUs />
    </>
  );
};

export default MainPage;
