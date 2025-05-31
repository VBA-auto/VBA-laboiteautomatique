// /src/app/ressource/articles/page.jsx
import ClientArticles from "./ClientArticles";

export const metadata = {
  title: "Articles techniques calculateur boîte auto | Laboiteautomatique VBA",
  description:
    "Articles techniques sur les calculateurs EDC et DC4 Renault : diagnostic, défauts, références",
  keywords:
    "cars, automatic transmission, car articles, BVA, car models Laboiteautomatique VBA",
};

async function fetchCars() {
  const response = await fetch(
    "https://laboiteautomatique.com/carsArticle.json",
    {
      cache: "no-store", // Ensure fresh data
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch car data");
  }

  return response.json();
}

export default async function Articles() {
  const cars = await fetchCars();

  return (
    <section>
      <ClientArticles cars={cars} />
    </section>
  );
}
