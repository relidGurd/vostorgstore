import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import StoreComponent from "@/pages/store/Store";

async function getCategories({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `http://localhost:1337/api/categories?populate=subcategories`,
    {
      next: { revalidate: 100 },
    }
  );
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getProducts({ params }: { params: { slug: string } }) {
  //localhost:1337/api/products?populate=*&filters[category][id][$eq]=1

  try {
    if (params.slug === undefined) {
      const res = await fetch(`http://localhost:1337/api/products?populate=*`, {
        next: { revalidate: 100 },
      });

      return res.json();
    }
  } catch (err) {
    notFound();
  }
}

export default async function StorePage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: categories }: any = await getCategories({ params });
  const { data: products }: any = await getProducts({ params });

  return (
    <main>
      <StoreComponent categories={categories} products={products} />
    </main>
  );
}
