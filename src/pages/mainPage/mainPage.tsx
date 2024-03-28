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

      <MainPageProducts cardList={props} />
      <AboutUsBunner url="/" buttonText="Работы" />
      <ContactUs />
    </>
  );
};

export default MainPage;
