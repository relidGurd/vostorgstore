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

const MainPage = ({ props }: any) => {
  const count = useAppSelector((state) => state.counter.value);

  console.log(count);

  return (
    <main>
      <section className={styles.bannerSection}>
        <Image
          className={styles.banner}
          src="/products/test.jpg"
          width={1280}
          height={1280}
          alt="test"
        />
      </section>
      <section className={styles.description}>
        <div className={styles.descript}>
          <div className={`${styles.descriptionTitle}`}>
            <div className={`container`}>
              <h1 className={`blue`}>
                АРТ - <br />
                <span className={styles.descriptionTitleSub}>ОБЪЕДИНЕНИЕ</span>
              </h1>
            </div>
          </div>
        </div>

        <div className={`container currentGrid`}>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            labore veritatis nobis inventore necessitatibus, qui sunt numquam?
            Minus sed illo, veritatis possimus iusto veniam culpa aliquam.
            Repellendus quod odit esse.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dicta labore veritatis nobis inventore
            necessitatibus, qui sunt numquam? Minus sed illo, veritatis possimus
            iusto veniam culpa aliquam. Repellendus quod odit esse.
          </p>
        </div>
      </section>

      <section className={`section-green`}>
        <div className={`container`}>
          <div>
            <LogoIcon />
          </div>
        </div>

        <div className={`container container-border currentGrid`}>
          <div className={`${styles.numbers}`}>ghbdtn</div>
        </div>
      </section>

      <section className={`container`}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          className={`${styles.prodList}`}
          spaceBetween={15}
        >
          {props.data.map((el: any) => (
            <Link key={el.id} href={`/store/${el.id}`}>
              <SwiperSlide key={el.id} className={styles.productItem}>
                <Link href={`/store/${el.id}`} className={styles.card}>
                  <Image
                    className={`${styles.productItemImage}`}
                    src={`/products/test.jpg`}
                    width={200}
                    height={300}
                    alt="Test"
                  />
                  <p style={{ display: "block", color: "black" }}>{el.title}</p>
                </Link>
              </SwiperSlide>
            </Link>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default MainPage;
