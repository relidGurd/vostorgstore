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

const SingleProduct = ({ product }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(product.attributes.images.data);
  return (
    <div className={`container ${styles.productContainer}`}>
      <div className={styles.productSectionImages}>
        <Swiper
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
        </Swiper>
      </div>
      <div className={styles.productSectionInfo}>
        <h1>{product.attributes.Title}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          debitis quidem dolor similique officiis harum, consequuntur animi?
          Distinctio iure eveniet rerum, tenetur nemo, enim cupiditate
          voluptatem asperiores soluta aliquam esse.
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
