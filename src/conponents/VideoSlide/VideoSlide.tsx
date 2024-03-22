"use client";
import LogoIcon from "@/icons/logo";
import styles from "./videoSlide.module.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll } from "framer-motion";

const VideoSlide = () => {
  const ref = useRef(null);
  const { scrollYProgress }: any = useScroll({
    target: ref,
    offset: ["center center", "start start"],
  });

  const [videoVal, setVideoVal] = useState(35);

  useEffect(() => {
    const doSomething = (latest: any) => {
      const calculatedValue = latest * 35;
      const newValue = calculatedValue >= 0 ? Math.min(calculatedValue, 35) : 0;
      setVideoVal(newValue);
      if (window.scrollY === 0) {
        setVideoVal(35);
        if (window.innerWidth <= 630) {
          setVideoVal(20);
        }
      }
    };

    const unsubY = scrollYProgress.on("change", doSomething);
    return () => {
      unsubY();
    };
  }, [scrollYProgress, videoVal]);

  return (
    <section ref={ref} className={`container ${styles.mainSliderContainer}`}>
      <div className={styles.verticalLine}></div>
      <div className={styles.mainSlider}>
        <div className={styles.ggg}>
          <div className={styles.descriptionSection}>
            <div className={styles.descSideSec}>
              <h1 className={styles.titleSlider}>
                VOSTORG
                <span>
                  <span className={styles.blinkSlach}>_</span> ХУДОЖНИКИ
                </span>
              </h1>
            </div>
            <div className={`${styles.descSideSec} ${styles.t}`}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <LogoIcon color="#FF6900" />
              </div>
              <div className={styles.slideTextContainer}>
                <p className={styles.slideText}>
                  VOSTORG — это объединение творцов и авторов художественных и
                  креативных индустрий.
                </p>
                <span
                  style={{
                    fontSize: "20px",
                    color: "#cccccc",
                    paddingLeft: "1rem",
                    textDecoration: "underline",
                    marginTop: "2rem",
                  }}
                >
                  Детали
                </span>
              </div>
            </div>
          </div>
          <motion.div
            style={{
              transition: "clip-path 1s cubic-bezier( 0.23, 1, 0.32, 1 )",
              clipPath: `inset(${videoVal}% round 1rem)`,
            }}
            className={`${styles.videoSliderContainer}`}
          >
            <video className={styles.videoSlider} autoPlay muted>
              <source src="/signal.mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlide;
