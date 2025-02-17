"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConfirmationPageContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sessionId) {
      fetch("/api/checkout-session", {
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
            console.log(data);
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

  if (loading)
    return (
      <p className="text-center text-lg font-medium text-gray-600">
        ⏳ Processing your payment...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 font-semibold">
        ❌ Error: {error}
      </p>
    );

  return (
    <>
      <SubHeader />
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-green-600">
            ✅ Payment Successful!
          </h1>
          {orderData ? (
            <div className="mt-4 text-gray-700">
              <p className="text-lg font-semibold">
                Thank you, {orderData.customer_details.name}! 🎉
              </p>
              <p>
                🔹 Order ID: <span className="font-mono">{orderData.id}</span>
              </p>
              <p>
                💰 Amount Paid:{" "}
                <span className="font-semibold text-lg">
                  €{orderData.amount_total / 100}
                </span>
              </p>
              <p>
                📦 Payment Status:{" "}
                <span className="text-green-500 font-semibold">
                  {orderData.payment_status}
                </span>
              </p>
              <p>
                📩 Email:{" "}
                <span className="font-mono">
                  {orderData.customer_details.email}
                </span>
              </p>

              {/* Purchased Products */}
              <div className="mt-4">
                <h3 className="text-lg font-bold">🛒 Purchased Items:</h3>
                <ul className="mt-2 space-y-3">
                  {orderData.products.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-4 border-b pb-2"
                    >
                      <Image
                        src={product.image || "/placeholder.png"}
                        alt="Product"
                        className="w-14 h-14 rounded-md"
                      />
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-gray-500">€{product.price / 100}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                <Link
                  href="/"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  🏠 Continue Shopping
                </Link>
                <Link
                  href="/orders"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  📜 View Orders
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-red-500 font-semibold">
              ❌ No order data found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
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
