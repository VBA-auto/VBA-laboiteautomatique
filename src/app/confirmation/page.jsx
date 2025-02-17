"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ConfirmationPageContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sessionId) {
      fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId }),
      })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setProducts(data.products);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching session:", err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [sessionId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="confirmation-page">
      <h1>✅ Payment Successful!</h1>
      <h2>🛍 Purchased Products:</h2>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - {item.quantity}x (€{item.price})
          </li>
        ))}
      </ul>
      <button
        onClick={() => (window.location.href = "/shop")}
        className="buy-more-btn"
      >
        🛒 Buy More Products
      </button>
    </div>
  );
};

const ConfirmationPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ConfirmationPageContent />
    </Suspense>
  );
};

export default ConfirmationPage;
