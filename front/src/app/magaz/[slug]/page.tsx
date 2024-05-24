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
  const t = params.slug.split("%3D");
  try {
    const res = await fetch(
      `http://localhost:1337/api/products?populate=*&filters[${t[0]}][id][$eq]=${t[1]}`,
      {
        next: { revalidate: 100 },
      }
    );

    return res.json();
  } catch (err) {
    notFound();
  }
}

export default async function CategoryPage({
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
