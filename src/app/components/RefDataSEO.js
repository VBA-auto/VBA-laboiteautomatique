// app/shop/[id]/page.jsx

async function fetchProducts() {
  try {
    const res = await fetch("https://laboiteautomatique.com/searchData.json", {
      cache: "force-cache",
    });
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function RefdataSEO() {
  const products = await fetchProducts();

  if (!products) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <main>
      <div className="sr-only">
        <h1>Error Codes for SEO</h1>
        <ul>
          {products.map((code, index) => (
            <li key={`${code.code}-${index}`}>
              <h2>{code.title}</h2>
              <p>{code.metaTitle}</p>
              <p>{code.metaDes}</p>
              <p>{code.description}</p>
              <p>{code.compatibility}</p>
              <p>{code.warranty}</p>
              <p>{code.brand}</p>
              <p>{code.vehicle}</p>
              <p>{code.Info_complémentaire}</p>
              <p>{code.OE_number}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
