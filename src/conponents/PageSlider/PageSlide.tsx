"use client";
import BubbleLogo from "@/icons/bubbleLogo";
import styles from "./pageslide.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const PageSlide = ({ props }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [1, 1], [100, 0]);

  return (
    <section>
      <div
        ref={ref}
        style={{
          height: "100vh",
          backgroundColor: "black",
          marginTop: "-90px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            y,
            width: "100%",
            paddingTop: "10rem",
          }}
          className="container"
        >
          <h1 style={{ color: "white", fontSize: "80px" }}>Магазин</h1>
          <div style={{ width: "30%", margin: "auto" }}>
            <BubbleLogo />
          </div>
        </motion.div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
            borderRadius: `2rem 2rem 0 0`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default PageSlide;
