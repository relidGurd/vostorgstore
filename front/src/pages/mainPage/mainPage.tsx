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

const MainPage = ({ props }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const da = [
    {
      url: "/artists",
      id: 1,
      value: "Художники",
      cardNumber: "200+",
    },
    {
      url: "/city",
      id: 2,
      value: "Города",
      cardNumber: "100",
    },
    {
      url: "/residents",
      id: 3,
      value: "Резиденты",
      cardNumber: "500",
    },
    {
      url: "/events",
      id: 4,
      value: "События",
      cardNumber: "800",
    },
  ];

  return (
    <>
      <VideoSlide />

      <CardsNumber props={da} />
      <AboutUsBunner url="/" buttonText="О нас" />

      <section className={`container`}>
        <ul className={styles.testContainer}>
          <WhatWeDoItem url={`/3.jpg`} />
          <WhatWeDoItem url={`/3.webp`} />
          <WhatWeDoItem url={`/3.jpg`} />
          <WhatWeDoItem url={`/3.webp`} />
        </ul>
      </section>

      <section className={`container`}>
        <div className={`${styles.sectionWe}`}>
          <div className={styles.leftSide}>
            <h2 className={styles.leftSideTitle}>МЫ</h2>
            <div
              style={{ height: "50px" }}
              className={styles.verticalLine}
            ></div>
            <p className={styles.leftSideText}>
              Экосистема творческой молодежиЭкосистема творческой
              молодежиЭкосистема творческой молодежи Экосистема творческой
              молодежи
            </p>
            <div
              style={{ height: "200px" }}
              className={styles.verticalLine}
            ></div>
            <h2>НАША ДЕЯТЕЛЬНОСТЬ</h2>
            <div
              style={{ height: "50px" }}
              className={styles.verticalLine}
            ></div>
            <p className={styles.leftSideText}>
              Развитие современного искусства, кураторская деятельность,
              поддержка начинающих деятелей культуры, продвижение регионального
              искусства, мультидисциплинарные проекты, исследовательские проекты
            </p>
          </div>

          <div>
            <h2>АРТ-ОБЪЕДИНЕНИЕ</h2>
            <div
              style={{ height: "150px" }}
              className={styles.verticalLine}
            ></div>
            <h2>НАША МИССИЯ</h2>
            <div
              style={{ height: "150px" }}
              className={styles.verticalLine}
            ></div>
            <p className={styles.leftSideText}>
              Переосмысление искусства, создание контекстов и смыслов, поиск для
              самовыражения. Формирование и развитие культуры в разных регионах
              России
            </p>
          </div>
        </div>
      </section>

      {/* <MainPageProducts cardList={props} /> */}
      {/* <AboutUsBunner url="/" buttonText="Работы" />
      <ContactUs /> */}
    </>
  );
};

export default MainPage;
