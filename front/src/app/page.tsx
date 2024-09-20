import MainPage from "@/pages/mainPage/mainPage";
import { notFound } from "next/navigation";

async function getProduct() {
  const res = await fetch(
    `http://localhost:1337/api/pictures?populate=*&pagination[page]=1&pagination[pageSize]=6`,
    {
      next: { revalidate: 100 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getProduct();

  return (
    <main>
      <MainPage data={data} />
    </main>
  );
}
