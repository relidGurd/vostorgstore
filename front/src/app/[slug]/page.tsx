import SingleProduct from "@/pages/SingleProduct/SingleProduct";
import { notFound } from "next/navigation";

async function getProduct({ params }: { params: { slug: string } }) {
  try {
    const res = await fetch(
      `http://localhost:1337/api/pictures/${params.slug}?populate=*`,
      {
        next: { revalidate: 100 },
      }
    );

    if (!res.ok) {
      notFound();
    }

    return res.json();
  } catch (err) {
    notFound();
  }
}

const test = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getProduct({ params });

  return (
    <main>
      <SingleProduct product={data} />
    </main>
  );
};

export default test;
