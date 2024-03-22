import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import StoreComponent from "@/pages/store/Store";

async function getData({ params }: { params: { slug: string[] } }) {
  const res = await fetch(`http://localhost:3001/api/categories`, {
    next: { revalidate: 100 },
  });
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getCategoryProducts({ params }: { params: { slug: string[] } }) {
  const parentSlug = params.slug[0];
  const categoryId = params.slug[1];

  const res = await fetch(
    `http://localhost:3001/api/products-category?${parentSlug}=${categoryId}`,
    { next: { revalidate: 100 } }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getProduct({ params }: { params: { slug: string[] } }) {
  const productId = params.slug[0];

  const res = await fetch(`http://localhost:3001/api/product?id=${productId}`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function StorePage({
  params,
}: {
  params: { slug: string[] };
}) {
  if (params.slug?.length === 1) {
    const { data }: any = await getProduct({ params });

    console.log(data.categories);

    return (
      <div>
        <h2>{data.title}</h2>
        <div></div>
        <div>
          {data.images.map((el: any) => (
            <Image width={"100"} height={100} src={el} alt="dsf" />
          ))}
        </div>
      </div>
    );
  }

  if (params.slug?.length === 2) {
    const { data }: any = await getCategoryProducts({ params });
    return (
      <div>
        {data.map((el: any) => (
          <Link key={el.id} href={`/store/${el.id}`}>
            {el.title}
          </Link>
        ))}
      </div>
    );
  }

  const { data }: any = await getData({ params });
  return (
    <main>
      <StoreComponent props={data} />
    </main>
    // <ul>
    //   {data.map((el: any) => (
    //     <li key={el.id}>
    //       <Link href={`/store/category/${el.id}`}>{el.name}</Link>
    //       <div>
    //         {el.subcategory.map((sub: any) => (
    //           <Link key={sub.id} href={`/store/subcategory/${sub.id}`}>
    //             {sub.name}
    //           </Link>
    //         ))}
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
}
