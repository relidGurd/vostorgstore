import ProductCard from "../ProductCard/ProductCard";
import styles from "./MainPageProducts.module.css";

interface IProductCard {
  id: number;
  title: string;
}
const MainPageProducts = ({ cardList }: any) => {
  return (
    <section className={`container`}>
      <div className={styles.testContainerItem}>
        <div className={styles.containerTitle}>
          <span>Работы наших художников</span>
        </div>
        <div className={styles.containerDescription}>
          <p className={styles.containerDescriptionText}>
            «Искусство - это линия вокруг ваших мыслей» – Густав Климт
          </p>
          <span className={styles.containerDescriptionBlink}>
            <span className={styles.blinkSlach}>_</span>10
          </span>
        </div>
      </div>
      <ul className={styles.productsGrid}>
        {cardList.map((el: any) => (
          <ProductCard key={el.id} card={el} />
        ))}
      </ul>
    </section>
  );
};

export default MainPageProducts;
