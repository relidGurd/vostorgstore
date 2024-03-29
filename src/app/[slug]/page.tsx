import SingleProduct from "@/pages/SingleProduct/SingleProduct";
import { notFound } from "next/navigation";

async function getProduct({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `http://localhost:1337/api/products/${params.slug}?populate=*`,
    {
      next: { revalidate: 100 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const test = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getProduct({ params });
  console.log(data);
  return (
    <main>
      <SingleProduct product={data} />
    </main>
  );
};

export default test;
