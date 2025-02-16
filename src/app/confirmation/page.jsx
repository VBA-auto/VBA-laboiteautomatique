// Confirmation Page
"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get(
      "session_id"
    );

    if (sessionId) {
      fetch("/api/checkout-session", {
        method: "POST", // POST মেথড ব্যবহার করো
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id: sessionId }), // session_id পাঠাও
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.error(data.error);
          } else {
            setOrderData(data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching session:", err);
          setLoading(false);
        });
    }
  }, []);

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

const Page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ConfirmationPage />
    </Suspense>
  );
};

export default Page;
