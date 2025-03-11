"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import { FaStore } from "react-icons/fa6";

const ConfirmationPageContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [products, setProducts] = useState([]);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [{ name, image, price, quantity } = {}] = products;

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
            console.log(data);
            setProducts(data.products);
            setCustomerEmail(data.customer_email);
            setCustomerName(data.customer_name);
            setOrderNumber(data.receipt_number);
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

  const orderTotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <SubHeader />
      <Header />
      <div className="md:w-2/3 gap-12 mx-auto md:flex justify-between py-[120px]">
        {/* Right Panel */}
        <div className="w-1/2">
          <div className="mb-4 flex items-center gap-2">
            <p className="shadow-md rounded-full border p-1">
              <FaStore />
            </p>
            <p className="text-sm text-gray-500 font-[500]">VBA</p>
          </div>
          <div className="">
            <h1 className="font-[500] text-gray-500 text-[15px]">Pay VBA</h1>
            <p
              id="total_commande"
              className="text-3xl prices mb-5 font-[600] text-gray-700 mt-2"
            >
              €{orderTotal}.00
            </p>
          </div>

          <div className="space-y-4">
            <div className="list-none pl-0">
              <div className="flex items-start space-x-4 mb-4">
                {image && (
                  <Image src={image} alt={name} width={50} height={50} />
                )}

                <div className="w-[100%]">
                  {products.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-between gap-8"
                    >
                      <div className="w-[300px]">
                        <p className="text-sm text-gray-800">{item.name}</p>
                        <p className="text-[13px] text-gray-400 mb-5">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-end">
                        <p className="text-[15px] prices text-gray-800 font-medium">
                          €{item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr />
              <div className="flex">
                <div className="w-1/2">
                  <p className="ms-16 text-sm font-[500] text-gray-700 mt-2">
                    Total Paid
                  </p>
                </div>
                <div className="w-1/2 text-end">
                  <p
                    id="total_commande"
                    className="text-sm font-[500] text-gray-700 mt-2"
                  >
                    €{orderTotal}.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Panel */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="w-full text-center">
            <IoIosCheckmarkCircleOutline className="mx-auto text-6xl text-green-500" />
            <p className="text-normal text-gray-700 my-2">
              Thanks for your payment
            </p>
            <p className="text-sm text-gray-500">
              A payment to VBA CALCULATEUR will appear on your statement.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="text-center py-28 pb-[180px] sr-only">
        <p id="customer_email" className="text-sm text-gray-700">
          Customer Email: {customerEmail}
        </p>
        <p id="order_number" className="text-sm text-gray-700">
          Order Number: {orderNumber}
        </p>
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
