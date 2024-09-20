"use client";

import styles from "./ArtistCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ArtistCard = () => {
  return (
    <Link href={""} className={styles.artistCard}>
      <div className={styles.artistImageContainer}>
        <Image
          className={styles.artistImage}
          width={550}
          height={550}
          alt="test"
          src={"/ban.jpg"}
        />
      </div>
      <div className={styles.artistDescriptContaiener}>
        <span className={styles.artistName}>Велобайк Константин Пасосович</span>
        <span className={styles.artistWork}>Скульптура</span>
      </div>
    </Link>
  );
};

export default ArtistCard;
