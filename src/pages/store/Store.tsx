"use client";
import PageSlide from "@/conponents/PageSlider/PageSlide";
import styles from "./store.module.css";
import Image from "next/image";
import { useEffect } from "react";

const StoreComponent = ({ props }: any) => {
  console.log(props);
  return (
    <main>
      <PageSlide />
    </main>
  );
};

export default StoreComponent;
