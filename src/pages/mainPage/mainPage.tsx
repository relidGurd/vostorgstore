"use client";
import LogoIcon from "@/icons/logo";
import styles from "./Main.module.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import ButtonIcon from "@/icons/button";

const MainPage = ({ props }: any) => {
  const count = useAppSelector((state) => state.counter.value);
  const [resizeVideoValue, setResizeVideoValue] = useState(35);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resizeVideo = (e: any) => {
    const windowPos = window.scrollY;
    setPos(windowPos);
    if (pos < window.scrollY) {
      setResizeVideoValue(resizeVideoValue - 1);
      if (resizeVideoValue <= 0) {
        setResizeVideoValue(0);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", (e: any) => resizeVideo(e));
    return () => document.removeEventListener("scroll", resizeVideo);
  }, [resizeVideoValue]);

  return (
    <main>
      <section className={`container ${styles.mainSliderContainer}`}>
        <div className={styles.mainSlider}>
          <div className={styles.ggg}>
            <div className={styles.descriptionSection}>
              <div className={styles.descSideSec}>
                <h1 className={styles.titleSlider}>
                  VOSTORG
                  <span> _ ХУДОЖНИКИ</span>
                </h1>
                <div className={styles.verticalLine}>d</div>
                <div>123123134</div>
              </div>
              <div className={`${styles.descSideSec} ${styles.t}`}>
                <div>
                  <LogoIcon />
                </div>
                <p>text</p>
              </div>
            </div>
            <div
              style={{
                clipPath: `inset(${resizeVideoValue}% round 1rem)`,
                transition: "clip-path 0.5s ease-out",
              }}
              className={`${styles.videoSliderContainer}`}
            >
              <video className={styles.videoSlider} autoPlay muted>
                <source src="/signal.mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "1rem" }} className={`container`}>
        <ul className={styles.cardList}>
          <li className={`${styles.card} ${styles.cardContainer}`}>
            <span className={`${styles.mainCardTitle}`}>ЧТО МЫ ДЕЛАЕМ</span>
          </li>
          <li className={styles.card}>
            <div className={`${styles.cardContainer} ${styles.titleSize}`}>
              200+
            </div>

            <div className={styles.cardMore}>
              <div className={styles.cardContainer}>
                <span>Художников</span>
                <button className={styles.cardButton}>
                  <ButtonIcon />
                </button>
              </div>
            </div>
          </li>
          <li className={styles.card}>
            <div className={`${styles.cardContainer} ${styles.titleSize}`}>
              100
            </div>

            <div className={styles.cardMore}>
              <div className={styles.cardContainer}>
                <span>Городов</span>
                <button className={styles.cardButton}>
                  <ButtonIcon />
                </button>
              </div>
            </div>
          </li>
          <li className={styles.card}>
            <div className={`${styles.cardContainer} ${styles.titleSize}`}>
              50
            </div>

            <div className={styles.cardMore}>
              <div className={styles.cardContainer}>
                <span>Резидентов</span>
                <button className={styles.cardButton}>
                  <ButtonIcon />
                </button>
              </div>
            </div>
          </li>
          <li className={styles.card}>
            <div className={`${styles.cardContainer} ${styles.titleSize}`}>
              800
            </div>

            <div className={styles.cardMore}>
              <div className={styles.cardContainer}>
                <span>Событий</span>
                <button className={styles.cardButton}>
                  <ButtonIcon />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainPage;
