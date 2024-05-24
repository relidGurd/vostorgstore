"use client";
import styles from "./Exhibition.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Exhibition = () => {
  return (
    <section className={`container ${styles.exhibitionContainer}`}>
      <h2>Выставки</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <li className={styles.exhibitionItem}>
            <div className={styles.exhibitionYear}>2015</div>
            <div className={styles.exhibitionSeparator}></div>
            <div className={styles.exhibitionDescription}>
              <div className={styles.exhibitionTitle}>
                Корчиневые натюрморты
              </div>
              <span className={styles.exhibitionPlace}>CUB</span>
              <span className={styles.exhibitionCity}>Москва, Россия</span>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className={styles.exhibitionItem}>
            <div className={styles.exhibitionYear}>2015</div>
            <div className={styles.exhibitionSeparator}></div>
            <div className={styles.exhibitionDescription}>
              <div className={styles.exhibitionTitle}>Пенное древо</div>
              <span className={styles.exhibitionPlace}>Пивная у Валерия</span>
              <span className={styles.exhibitionCity}>Москва, Россия</span>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className={styles.exhibitionItem}>
            <div className={styles.exhibitionYear}>2015</div>
            <div className={styles.exhibitionSeparator}></div>
            <div className={styles.exhibitionDescription}>
              <div className={styles.exhibitionTitle}>Дядя Женя</div>
              <span className={styles.exhibitionPlace}>Открытая выставка</span>
              <span className={styles.exhibitionCity}>Матам, Африка</span>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className={styles.exhibitionItem}>
            <div className={styles.exhibitionYear}>2015</div>
            <div className={styles.exhibitionSeparator}></div>
            <div className={styles.exhibitionDescription}>
              <div className={styles.exhibitionTitle}>
                Корчиневые натюрморты
              </div>
              <span className={styles.exhibitionPlace}>CUB</span>
              <span className={styles.exhibitionCity}>Москва, Россия</span>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className={styles.exhibitionItem}>
            <div className={styles.exhibitionYear}>2015</div>
            <div className={styles.exhibitionSeparator}></div>
            <div className={styles.exhibitionDescription}>
              <div className={styles.exhibitionTitle}>
                Корчиневые натюрморты
              </div>
              <span className={styles.exhibitionPlace}>CUB</span>
              <span className={styles.exhibitionCity}>Москва, Россия</span>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Exhibition;
