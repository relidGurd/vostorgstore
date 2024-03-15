"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.css";

interface ICardInterface {
  id: number;
  title: string;
  images: [string];
}

interface IProp {
  card: ICardInterface;
}

const ProductCard = ({ card }: IProp) => {
  return (
    <li className={styles.productCard}>
      <Link className={styles.cardLink} href={`/store/${card.id}`}>
        <div className={styles.productCardImageContainer}>
          <Image
            className={styles.productCardImage}
            width={1000}
            height={1000}
            alt={"213123"}
            src={`${card.images[0]}`}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.descTitle}>{card.title}</span>
          <span>Вася Пупкин</span>
          <span>(2022)</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
