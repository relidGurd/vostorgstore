"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import styles from "./SingleProduct.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Popup from "@/conponents/Popup/Popup";

const SingleProduct = ({ product }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`container ${styles.productContainer}`}>
      <div className={styles.productSectionImages}>
        {/* <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.swiperPreviewSlide}
        >
          {product.attributes.images.data.map((el: any) => (
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src={`http://localhost:1337${el.attributes.url}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={16}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.swiperSlideList}
        >
          {product.attributes.images.data.map((el: any) => (
            <SwiperSlide>
              <img
                className={styles.listImages}
                src={`http://localhost:1337${el.attributes.url}`}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

        {product.attributes.images.data.map((el: any) => (
          <div>
            <Popup
              elem={
                <img
                  className={styles.slideImage}
                  src={`http://localhost:1337${el.attributes.url}`}
                />
              }
            >
              <Swiper
                style={{
                  position: "absolute",
                  width: "75%",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                }}
              >
                <SwiperSlide>
                  <img
                    className={styles.slideImage}
                    src={`http://localhost:1337${el.attributes.url}`}
                  />
                </SwiperSlide>
              </Swiper>
            </Popup>
          </div>
        ))}
      </div>
      <div className={styles.productSectionInfo}>
        <div className={styles.productInfo}>
          <span className={styles.productAuthorTitle}>
            КУКАРЕКОВ ПЕТУЧ ПЕТУХОВИЧ
          </span>
          <h1 className={styles.pictureProductTitle}>ВОНЮЧИЙ НОСОК</h1>
          <p className={styles.productDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            debitis quidem dolor similique officiis harum, consequuntur animi?
            Distinctio iure eveniet rerum, tenetur nemo, enim cupiditate
            voluptatem asperiores soluta aliquam esse.
          </p>
          <Popup elem={<button className={styles.buyButton}>КУПИТЬ</button>}>
            <div>
              <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </form>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
