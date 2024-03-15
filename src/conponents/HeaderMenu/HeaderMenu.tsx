"use client";
import LogoIcon from "@/icons/logo";
import styles from "./headerMenu.module.css";
import { useEffect, useState } from "react";
const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <div className={`${styles.headerMenuContainer} container`}>
        <LogoIcon color={"red"} />
        <nav>
          <ul className={styles.menuList}>
            <li>О нас</li>
            <li>Магазин</li>
            <li>Художники</li>
            <li>Партнерам</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
