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
      <div className="py-24 bg-gray-50 p-6">
        <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          {orderData ? (
            <div className="mt-4 text-gray-700">
              <p className="text-lg font-semibold text-[#2C80EF]">
                Thank you, {orderData.customer_details.name}! 🎉
              </p>
              {/* <p>
                🔹 Order ID: <span className="font-mono">{orderData.id}</span>
              </p> */}

              <div className="flex">
                <div className="w-1/2">
                  {/* Purchased Products */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-start">
                      Purchased Items:
                    </h3>
                    <ul className="mt-2">
                      {orderData.products.map((product, index) => (
                        <li key={index} className="">
                          <Image
                            width="400"
                            height="300"
                            src={product.image || "/placeholder.png"}
                            alt="Product"
                            className="w-14 h-14 rounded-md"
                          />
                          <div className="text-start">
                            <p className="">
                              Product Name:{" "}
                              <span className="font-semibold">
                                {product.name}
                              </span>
                            </p>
                            <p className="text-gray-700">
                              Price:{" "}
                              <span className="font-semibold">
                                €{product.price / 100}
                              </span>
                            </p>
                            <p className="text-gray-700">
                              Quantity:{" "}
                              <span className="font-semibold">
                                €{product.quantity}
                              </span>
                            </p>
                            <p>
                              Payment Status:{" "}
                              <span className="text-green-500 font-semibold">
                                {orderData.payment_status}
                              </span>
                            </p>
                            <p>
                              Email:{" "}
                              <span className="font-mono">
                                {orderData.customer_details.email}
                              </span>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-1/2">
                  {/* <p className="text-start">
                    welcome Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nobis, quisquam.
                  </p> */}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                <Link
                  href="/"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Continue Shopping
                </Link>
                {/* <Link
                  href="/orders"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  📜 View Orders
                </Link> */}
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
