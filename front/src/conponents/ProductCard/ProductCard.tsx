"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.css";

interface ICardInterface {
  id: number;
  attributes: any;
}

interface IProp {
  card: ICardInterface;
}

const ProductCard = ({ card }: any) => {
  const { id, attributes } = card;

  return (
    <li className={styles.productCard}>
      <Link className={styles.cardLink} href={`/${id}`}>
        <div className={styles.productCardImageContainer}>
          <Image
            className={styles.productCardImage}
            width={1000}
            height={1000}
            alt={"213123"}
            src={`http://localhost:1337${attributes.product_image.data.attributes.url}`}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.descTitle}>{attributes.Title}</span>
          <span>Вася Пупкин</span>
          <span>(2022)</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
