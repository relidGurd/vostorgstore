"use client";
import PageSlide from "@/conponents/PageSlider/PageSlide";
import styles from "./store.module.css";

import Link from "next/link";
import ProductCard from "@/conponents/ProductCard/ProductCard";
import Dropdown from "@/app/components/dropdown/Dropdown";

const StoreComponent = ({ categories, products }: any) => {
  const t = [1, 2, 3];
  return (
    <main>
      <PageSlide />

      <div style={{ backgroundColor: "black" }}>
        <div className={styles.storeLayout}>
          <div className={`container ${styles.storeDescription}`}>
            <h2>Название категории</h2>
            <p style={{ width: "75%", padding: "1rem 0" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              similique nostrum quaerat ut omnis cumque, suscipit praesentium
              placeat repellendus totam iusto laudantium sint, fugit
              perspiciatis magnam animi molestiae eaque tempora! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Culpa similique
              nostrum quaerat ut omnis cumque, suscipit praesentium placeat
              repellendus totam iusto laudantium sint, fugit perspiciatis magnam
              animi molestiae eaque tempora!
            </p>
          </div>
          <div className={styles.storeContainer}>
            <div style={{ height: "100%", position: "relative" }}>
              <ul className={styles.storeCategories}>
                {categories.map((el: any) => (
                  <li className={styles.categoriesListItem} key={el.id}>
                    <Link
                      className={styles.categoryMain}
                      href={`/magaz/${"category=" + el.id}`}
                    >
                      {el.attributes.Title}
                    </Link>
                    <div style={{ paddingLeft: "20px" }}>
                      {el.attributes.subcategories.data.map((el: any) => (
                        <Link
                          className={styles.categorySub}
                          key={el.id}
                          href={`/magaz/${"subcategory=" + el.id}`}
                        >
                          {el.attributes.title}
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.storeProducts}>
              <div className={styles.filtersList}>
                {t.map((el: any) => (
                  <Dropdown
                    button={
                      <button className={styles.filterButton}>Материал</button>
                    }
                  >
                    <ul className={styles.filtersListContainen}>
                      <li className={styles.filtersListContainenItem}>Акрил</li>
                      <li className={styles.filtersListContainenItem}>
                        Акварель
                      </li>
                    </ul>
                  </Dropdown>
                ))}
              </div>
              <ul className={styles.storeProductList}>
                {products.map((el: any) => (
                  <ProductCard key={el.id} card={el} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StoreComponent;
