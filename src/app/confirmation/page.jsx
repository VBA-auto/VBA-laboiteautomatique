"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setOrderData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching order:", err);
          setLoading(false);
        });
    }
  }, [sessionId]);

  if (loading) return <p>Loading...</p>;

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

// ✅ Suspense দিয়ে `useSearchParams` Handle করা
const Page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ConfirmationPage />
    </Suspense>
  );
};

export default Page;
