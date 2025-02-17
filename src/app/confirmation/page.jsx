"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ConfirmationPageContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sessionId) {
      fetch("/app/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id: sessionId }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setOrderData(data);
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
    <div>
      <h1>✅ Payment Successful!</h1>
      {orderData ? (
        <div>
          <p>🔹 Order ID: {orderData.id}</p>
          <p>💰 Amount Paid: ${orderData.amount_total / 100}</p>
          <p>📦 Payment Status: {orderData.payment_status}</p>
          <p>👤 Customer Email: {orderData.customer_details.email}</p>
        </div>
      ) : (
        <p>❌ No order data found.</p>
      )}
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
