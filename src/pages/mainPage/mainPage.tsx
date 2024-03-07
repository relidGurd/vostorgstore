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
import { useEffect, useMemo, useRef, useState } from "react";
import ButtonIcon from "@/icons/button";
import BubbleLogo from "@/icons/bubbleLogo";
import { InView, useInView } from "react-intersection-observer";

const MainPage = ({ props }: any) => {
  const count = useAppSelector((state: any) => state.counter.value);
  const { ref: sectionContacts, inView: inViewContacts, entry } = useInView();
  const [parallaxPos, setParallaxPos] = useState(0);
  const [resizeVideoValue, setResizeVideoValue] = useState(35);
  const [scrollNap, setScrollNap] = useState(0);
  const {
    ref: videoRef,
    inView: inViewVideo,
    entry: entryVideo,
  } = useInView({
    threshold: 1,
    delay: 1000,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (scrollNap < currentScroll) {
        const newResizeVideoValue =
          35 - (35 * currentScroll) / entryVideo?.target.clientHeight;
        setResizeVideoValue(newResizeVideoValue < 0 ? 0 : newResizeVideoValue);
      } else if (scrollNap > currentScroll && entryVideo?.isIntersecting) {
        const newResizeVideoValue =
          resizeVideoValue +
          (35 * currentScroll) / entryVideo?.target.clientHeight;
        setResizeVideoValue(
          newResizeVideoValue > 35 ? 35 : newResizeVideoValue
        );
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollNap, entryVideo, resizeVideoValue]);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const pos = window.scrollY;
      if (inViewContacts) {
        setParallaxPos((pos * 1) / 40);
        // console.log("inv");
      }
    };
    if (entry?.isIntersecting === true) {
      document.addEventListener("scroll", handleScroll);
    } else document.removeEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [inViewContacts]);

  return (
    <>
      <section className={`container ${styles.mainSliderContainer}`}>
        <div className={styles.verticalLine}></div>
        <div ref={videoRef} className={styles.mainSlider}>
          <div className={styles.ggg}>
            <div className={styles.descriptionSection}>
              <div className={styles.descSideSec}>
                <h1 className={styles.titleSlider}>
                  VOSTORG
                  <span>
                    <span className={styles.blinkSlach}>_</span> ХУДОЖНИКИ
                  </span>
                </h1>
                <div className={styles.slideMenuContainer}>
                  <ul className={styles.slideMenu}>
                    <li>О нас</li>
                    <li>Магазин</li>
                    <li>Художники</li>
                    <li>Парнтнерам</li>
                    <li>Контакты</li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.descSideSec} ${styles.t}`}>
                <div>
                  <LogoIcon />
                </div>
                <div className={styles.slideTextContainer}>
                  <p className={styles.slideText}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, quidem! Suscipit, libero! Voluptatum
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                clipPath: `inset(${resizeVideoValue}% round 1rem)`,
                transition: "clip-path 0.5s ease",
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

      <section className={`container ${styles.contactSection}`}>
        <div className={styles.contactSectionItem}>
          <div className={styles.aboutUsMoreSection}>
            <h2>О нас</h2>
            <div>
              ©️{" "}
              <span
                style={{
                  display: "inline-block",
                  fontSize: "25px",
                  fontWeight: "500",
                }}
              >
                VOSTORG
              </span>
            </div>
          </div>
          <button className={styles.aboutUsButton}>Подробнее</button>
        </div>
      </section>

      <section className={`container`}>
        <ul className={styles.testContainer}>
          <li className={styles.testContainerItem}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span>Что мы делаем</span>
              <h3>Развиваем</h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                width={1000}
                height={1000}
                alt={`el.title`}
                src={`/1.webp`}
              />
            </div>
          </li>
          <li className={styles.testContainerItem}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span>Что мы делаем</span>
              <h3>Вдохновляем</h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                width={1000}
                height={1000}
                alt={`el.title`}
                src={`/1.webp`}
              />
            </div>
          </li>
          <li className={styles.testContainerItem}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span>Что мы делаем</span>
              <h3>Ебем</h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                width={1000}
                height={1000}
                alt={`el.title`}
                src={`/1.webp`}
              />
            </div>
          </li>
          <li className={styles.testContainerItem}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span>Что мы делаем</span>
              <h3>Сосем</h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                width={1000}
                height={1000}
                alt={`el.title`}
                src={`/1.webp`}
              />
            </div>
          </li>
        </ul>
      </section>

      <section className={`container`}>
        <div
          style={{ marginTop: "17rem", marginBottom: "5rem" }}
          className={styles.testContainerItem}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span>Что мы делаем</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "40px", fontWeight: 700, width: "50%" }}>
              We help brands grow and tell their stories to the world.
            </p>
            <span style={{ fontSize: "40px", fontWeight: 700 }}>
              <span className={styles.blinkSlach}>_</span>10
            </span>
          </div>
        </div>
        <ul className={styles.productsGrid}>
          {props.data.map((el: any) => (
            <li className={styles.productCard} key={el.id}>
              <div className={styles.productCardImageContainer}>
                <Image
                  className={styles.productCardImage}
                  width={1000}
                  height={1000}
                  alt={el.title}
                  src={`/3.webp`}
                />
              </div>
              <div className={styles.descriptionContainer}>
                <span className={styles.descTitle}>{el.title}</span>
                <span>Вася Пупкин</span>
                <span>(2022)</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.contactSection}`}>
        <div className={styles.contactSectionItem}>
          <div className={styles.aboutUsMoreSection}>
            <h2>О нас</h2>
            <div>
              ©️{" "}
              <span
                style={{
                  display: "inline-block",
                  fontSize: "25px",
                  fontWeight: "500",
                }}
              >
                VOSTORG
              </span>
            </div>
          </div>
          <button className={styles.aboutUsButton}>Подробнее</button>
        </div>
      </section>

      <section
        ref={sectionContacts}
        style={{ paddingTop: "1rem" }}
        className={`container`}
      >
        <div className={styles.parallaxSectionContainer}>
          <div className={styles.parallaxBgSection}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "600px",
              }}
            >
              <h2 style={{ color: "white", fontWeight: "500", width: "40%" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Numquam,
                harum. Voluptas, eaque et.
              </h2>
              <div>
                <span
                  style={{
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "500",
                  }}
                >
                  Остались вопросы?
                </span>
                <button
                  className={styles.contactsButton}
                  style={{
                    marginTop: "20px",
                    fontSize: "20px",
                    fontWeight: "500",
                    width: "100%",
                    textAlign: "left",
                    backgroundColor: "black",
                    color: "white",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                  }}
                >
                  Контакты
                </button>
              </div>
            </div>
            <div
              style={{
                transform: `translateY(${parallaxPos}px)`,
                transition: `transform 1s ease`,
                zIndex: "-1",
              }}
              className={styles.parallaxBubbleLogo}
            >
              <BubbleLogo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
