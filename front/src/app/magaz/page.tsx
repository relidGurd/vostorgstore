import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import StoreComponent from "@/pages/store/Store";
import { useRouter } from "next/navigation";

async function getCategories({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
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

async function getProducts({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { test: string };
}) {
  //localhost:1337/api/products?populate=*&filters[category][id][$eq]=1

  // const gr = searchParams.test.split("%3D");

  try {
    const res = await fetch(
      `http://localhost:1337/api/pictures?populate=*&pagination[pageSize]=4&pagination[page]=1${
        searchParams.test !== undefined
          ? `&filters[${searchParams.test.split("=")[0]}][id][$eq]=${
              searchParams.test.split("=")[1]
            }`
          : ""
      }`,
      {
        next: { revalidate: 100 },
      }
    );

    return res.json();
  } catch (err) {
    notFound();
  }
}

export default async function StorePage({ params, searchParams }: any) {
  const { data: categories }: any = await getCategories({
    params,
    searchParams,
  });
  const { data: pictures }: any = await getProducts({ params, searchParams });

  // console.log(pictures);

  return (
    <main>
      <StoreComponent categories={categories} pictures={pictures} />
    </main>
  );
}
