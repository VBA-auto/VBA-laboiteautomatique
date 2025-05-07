// components/PromoPage.js
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PromoPage = () => {
  // Track which car is currently showing the promo code
  const [revealedCar, setRevealedCar] = useState(null);

  // Coupon codes for each car
  const carCoupons = {
    captur: "CAPTUR25",
    clio: "CLIO458",
    megane: "MEGANE628",
    scenic: "SCENIC776",
    fluence: "FLUENC709",
    "clio-rs": "CLIORS665",
  };

  // Function to handle car click (toggle promo code visibility for only one at a time)
  const handleCarClick = (carKey) => {
    setRevealedCar((prev) => (prev === carKey ? null : carKey)); // Toggle only one at a time
  };

  // Function to copy coupon code to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Code promo copié !");
    });
  };

  const stripeKey = process.env.NEXT_SECRET_STRIPE;
  console.log("Stripe Secret Key:", stripeKey);

  return (
    <main className="">
      <SubHeader />
      <Header />
      <div className="pt-28 pb-28 flex items-center justify-center bg-gradient-to-r from-white to-gray-100">
        <div className="text-center text-gray-700">
          <h1 className="text-2xl font-bold text-blue-500 mb-1">- 180 € </h1>
          <h1 className="text-2xl font-bold mb-4">
            🚀 Promotion Exceptionnelle{" "}
            <span className="font-normal">Jusqu&apos;au </span>
            <span className="text-green-400 font-[500] text-[22px]">
              18/03/2025
            </span>
          </h1>

          <div className="mb-5">
            <p className="font-[500] ">
              Cliquez sur votre modèle de véhicule pour obtenir votre coupon de
              réduction
            </p>
          </div>

          <div className="mb-12">
            <div className="w-full ms-5 md:ms-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  {
                    key: "captur",
                    href: "/captur",
                    src: "/images/calculateur_DC4_Renault_Capture.webp",
                    alt: "Renault Captur",
                    label: "Renault Captur",
                  },
                  {
                    key: "clio",
                    href: "/clio",
                    src: "/images/calculateur_DC4_Renault_Clio4.webp",
                    alt: "Renault Clio IV",
                    label: "Renault Clio IV",
                  },
                  {
                    key: "megane",
                    href: "/megane",
                    src: "/images/calculateur_DC4_renault-megane.webp",
                    alt: "Renault Megane",
                    label: "Renault Mégane",
                  },
                  {
                    key: "scenic",
                    href: "/scenic",
                    src: "/images/calculateur_DC4_renault_Senic.webp",
                    alt: "Renault Scenic",
                    label: "Renault Scénic",
                  },
                  {
                    key: "fluence",
                    href: "/fluence",
                    src: "/images/calculateur_DC4_renault-fluence.webp",
                    alt: "Renault Fluence",
                    label: "Renault Fluence",
                  },
                  {
                    key: "clio-rs",
                    href: "/clio-rs",
                    src: "/images/calculateur_DC4_clioRS.webp",
                    alt: "clio rs",
                    label: "Renault Clio RS",
                  },
                ].map((car, index) => (
                  <div
                    key={index}
                    className={`w-[160px] h-[120px] md:flex items-center justify-center bg-white rounded-lg shadow-md py-3 px-5 transition-all duration-300 ${
                      revealedCar === car.key ? "flip" : ""
                    }`} // Ensuring only one flips at a time
                    onClick={() => handleCarClick(car.key)} // Toggle only one at a time
                  >
                    {revealedCar === car.key ? (
                      // Show promo code if the car is revealed
                      <div className="text-center">
                        <p className="text-lg font-[500] text-blue-500">
                          {carCoupons[car.key]}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card toggle when clicking the button
                            copyToClipboard(carCoupons[car.key]);
                          }}
                          className="my-2.5 text-[13px] border border-blue-500 text-blue-500 px-4 py-[3px] rounded-md "
                        >
                          Copier
                        </button>
                        <Link
                          href={car.href}
                          className="text-sm text-blue-500 hover:font-[500] hover:underline"
                        >
                          Commander
                        </Link>
                      </div>
                    ) : (
                      // Show car image and name if not revealed
                      <div className="text-center cursor-pointer">
                        <Image
                          unoptimized
                          width={110}
                          height={100}
                          src={car.src}
                          alt={car.alt}
                          loading="lazy"
                          className="m-auto h-[70px] object-contain"
                        />
                        <p className="text-sm mt-2">
                          <span className="text-blue-500 hover:underline">
                            {car.label}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <Link
              href="/produits"
              className="border px-4 py-2.5 rounded-md text-blue-500 bg-white hover:bg-gray-50 text-sm"
            >
              Tous les produits
            </Link>
          </div>
        </div>
      </div>
      {/* <Link href="https://buy.stripe.com/3cs6s21huaBpgTe2ar">stripeeee</Link> */}
      <Footer />
    </main>
  );
};

export default PromoPage;
