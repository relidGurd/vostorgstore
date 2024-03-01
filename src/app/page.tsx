import MainPage from "@/pages/mainPage/mainPage";
import { notFound } from "next/navigation";

async function getProduct() {
  const res = await fetch(`http://localhost:3001/api/products`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function Home() {
  const data = await getProduct();

  return (
    <main>
      <MainPage props={data} />
    </main>
  );
}
