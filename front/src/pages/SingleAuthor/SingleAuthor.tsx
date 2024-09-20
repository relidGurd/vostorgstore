"use client";
import PageSlide from "@/conponents/PageSlider/PageSlide";
import styles from "./SingleAuthor.module.css";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const SingleAuthor = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 400]);

  return (
    <section className={styles.authorBgContainer}>
      <motion.div
        style={{
          y,
          z: 100,
        }}
        className={styles.authorBgImage}
      >
        <Image src={"/lil.png"} height={1000} width={1000} alt="" />
      </motion.div>
      <div className={`container`}>ded</div>
    </section>
  );
};

export default SingleAuthor;
