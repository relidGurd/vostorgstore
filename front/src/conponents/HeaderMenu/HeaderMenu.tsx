"use client";
import LogoIcon from "@/icons/logo";
import styles from "./headerMenu.module.css";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const [y, setY] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const router = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    const visulMenu = (latest: number) => {
      if (latest >= window.innerHeight || latest === 0) {
        setY(0);
        if (latest === 0) {
          setIsStart(true);
        } else {
          setIsStart(false);
        }
      } else {
        setY(-100);
      }
    };

    const unsubScrollY = scrollY.on("change", visulMenu);

    return () => {
      unsubScrollY();
    };
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y }}
      animate={{
        y,
      }}
      style={{
        transition: `transform 0.5s cubic-bezier( 0.215, 0.61, 0.355, 1 )`,
        backgroundColor: isStart ? "transparent" : "white",
      }}
      className={styles.headerMenu}
    >
      <div className={`${styles.headerMenuContainer} container`}>
        <LogoIcon
          color={`${isStart && router === "/" ? "transparent" : "#FF6900"}`}
        />
        <nav className={styles.navContaiener}>
          <ul className={styles.menuList}>
            <li>О нас</li>
            <li>Магазин</li>
            <li>Художники</li>
            <li>Партнерам</li>
            <li>Контакты</li>
          </ul>
          <Link className={styles.menuLink} href={`/`}>
            Стать художником
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};

export default HeaderMenu;
