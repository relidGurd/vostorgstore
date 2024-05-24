import styles from "./whatwedo.module.css";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WhatWeDoItem = ({ url }: any) => {
  const ref = useRef(null);
  const [setPath, useSetPath] = useState(100);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
  //   useSetPath(100 - latest * 100);
  // });

  useEffect(() => {
    const resizeImage = (latest: number) => {
      useSetPath(100 - latest * 100);
    };

    const unsubX = scrollYProgress.on("change", resizeImage);

    return () => {
      unsubX();
    };
  }, [scrollYProgress]);

  return (
    <li ref={ref} className={styles.testContainerItem}>
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
      <motion.div
        style={{
          width: "100%",
          height: "250px",
          borderRadius: "1rem",
          overflow: "hidden",
          transformOrigin: "0%",
          clipPath: `inset(0% ${setPath}% 0% 0% round 1rem)`,
          transition: "clip-path 1s cubic-bezier( 0.215, 0.61, 0.355, 1 )",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          width={1000}
          height={1000}
          alt={`el.title`}
          src={`${url}`}
        />
      </motion.div>
    </li>
  );
};

export default WhatWeDoItem;
