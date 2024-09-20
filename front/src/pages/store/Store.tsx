"use client";
import PageSlide from "@/conponents/PageSlider/PageSlide";
import styles from "./store.module.css";
import { notFound } from "next/navigation";

import Link from "next/link";
import ProductCard from "@/conponents/ProductCard/ProductCard";
import Dropdown from "@/app/components/dropdown/Dropdown";
import { useEffect, useState } from "react";
import ContactUs from "@/conponents/ContactUs/ContactUs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Skeleton from "@/conponents/Skelton/page";
import { updateCategory } from "@/app/magaz/actions";

const StoreComponent = ({ categories, pictures }: any) => {
  const t = [1, 2, 3];

  return (
    <main>
      <PageSlide title="ВРЕМЯ" subtitle="ВОСТОРГА" />
      <div>
        <div className={styles.storeLayout}>
          <div className={`container ${styles.storeDescription}`}>
            <h2 className={styles.categoryTitle}>Магазин Восторг</h2>
            <p className={styles.categoryDescription}>Наш супер магазин</p>
          </div>
          <div className={styles.storeContainer}>
            <div style={{ height: "100%", position: "relative" }}>
              <ul className={styles.storeCategories}>
                {categories.map((el: any) => (
                  <li className={styles.categoriesListItem} key={el.id}>
                    <button
                      className={styles.categoryMain}
                      onClick={() =>
                        updateCategory({ name: "categories", id: el.id })
                      }
                    >
                      {el.attributes.title}
                    </button>
                    <div style={{ paddingLeft: "20px" }}>
                      {el.attributes.subcategories.data.map((el: any) => (
                        <button
                          className={styles.categorySub}
                          key={el.id}
                          onClick={() =>
                            updateCategory({ name: "subcategory", id: el.id })
                          }
                        >
                          {el.attributes.title}
                        </button>
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
                    key={el}
                    button={
                      <button className={styles.filterButton}>Материал</button>
                    }
                  >
                    <ul
                      style={{ width: "100%" }}
                      className={styles.filtersListContainen}
                    >
                      <li className={styles.filtersListContainenItem}>Акрил</li>
                      <li className={styles.filtersListContainenItem}>
                        Акварель
                      </li>
                    </ul>
                  </Dropdown>
                ))}
              </div>

              <ul className={styles.storeProductList}>
                {pictures.map((el: any) => (
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
