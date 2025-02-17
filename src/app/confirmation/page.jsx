"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

const ConfirmationPageContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [products, setProducts] = useState([]);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
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
            setCustomerEmail(data.customer_email);
            setCustomerName(data.customer_name);
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
    <>
      <SubHeader />
      <Header />
      <div className="w-1/2 gap-12 mx-auto flex justify-between pt-[180px]">
        {/* Left Panel */}
        <div className="w-1/2flex items-center justify-center bg-white">
          <div className="w-full text-center">
            <IoIosCheckmarkCircleOutline className="mx-auto text-2xl text-green-500" />
            <p className="text-normal text-gray-700 my-2">
              Thanks for your payment
            </p>
            <p className="text-sm text-gray-500">
              A payment to VBA CALCULATEUR will appear on your statement.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2">
          <div className="mb-4">
            <p className="text-sm text-gray-500 font-[500]">VBA</p>
          </div>

          <div className="space-y-4">
            <div className="list-none pl-0">
              {products.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  {/* Product Image */}
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  )}
                  <div>
                    <p className="text-sm text-gray-700">
                      {item.name} - {item.quantity}x
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Email: {customerEmail}
                    </p>
                    <p className="text-sm font-bold text-gray-700 mt-2">
                      Total Paid: €{" "}
                      {products.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-28 pb-[180px]">
        <Link
          className="border border-blue-400 px-8 py-2.5 text-sm rounded-md"
          href="/produits"
        >
          Shop again
        </Link>
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
