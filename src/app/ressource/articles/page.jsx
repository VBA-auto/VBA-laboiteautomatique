// /src/app/ressource/articles/page.jsx
import ClientArticles from "./ClientArticles";

export const metadata = {
  title: "articles | Laboiteautomatique VBA",
  description:
    "Explore detailed articles about various cars equipped with automatic transmissions, including Fiat, Porsche, Toyota, and more.",
  keywords: "cars, automatic transmission, car articles, BVA, car models",
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
