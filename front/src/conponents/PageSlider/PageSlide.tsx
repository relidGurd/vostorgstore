"use client";
import BubbleLogo from "@/icons/bubbleLogo";
import styles from "./pageslide.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const PageSlide = ({ title, subtitle }: any) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 2], [-350, 550]);
  const yy = useTransform(scrollYProgress, [0, 1], [250, -100]);

  return (
    <section ref={ref}>
      <div className={`${styles.sceneMagaz} container`}>
        <motion.div style={{ y: yy }} className={styles.magazTitle}>
          <h1 className={styles.pageSlideTitle}>
            {title}
            <span
              style={{ color: "var(--main-orange)", display: "inline-block" }}
            >
              {subtitle ? subtitle : ""}
            </span>
            <br />
          </h1>
        </motion.div>
        <motion.div style={{ y, z: -100 }} className={styles.magazBack}>
          <Image src={"/ban.jpg"} width={500} height={500} alt="dd" />
        </motion.div>
      </div>
    </section>
  );
};

export default PageSlide;
