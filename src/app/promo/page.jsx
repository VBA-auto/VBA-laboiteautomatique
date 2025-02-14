// components/PromoPage.js
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PromoPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  // Coupon codes for each car
  const carCoupons = {
    captur: "CAPTUR25",
    clio: "CLIO25",
    megane: "MEGANE25",
    scenic: "SCENIC25",
    fluence: "FLUENCE25",
    "clio-rs": "CLIORS25",
  };

  // Function to handle car selection
  const handleCarClick = (carKey, carHref) => {
    setSelectedCar({ key: carKey, href: carHref });
  };

  // Function to copy coupon code to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Code promo copié !");
    });
  };

  return (
    <main className="">
      <SubHeader />
      <Header />
      <div className="py-28 flex items-center justify-center bg-gradient-to-r from-white to-gray-100">
        <div className="text-center text-gray-700">
          <h1 className="text-3xl font-bold mb-4">
            🚀 Promotion Exceptionnelle
          </h1>
          <p className="text-normal mb-8 text-green-500">
            Jusqu&apos;au 03/03/2025
          </p>

          <div className="mb-8">
            <div className="w-full carss">
              <div className="md:flex gap-5">
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
                    alt: "Ford Focus",
                    label: "Renault Clio RS",
                  },
                ].map((car, index) => (
                  <div
                    key={index}
                    className="carsCard rounded-md cursor-pointer"
                    onClick={() => handleCarClick(car.key, car.href)}
                  >
                    <div className="text-[15px] text-center">
                      <Image
                        width={110}
                        height={100}
                        src={car.src}
                        alt={car.alt}
                        loading="lazy"
                        className="m-auto h-[70px] object-contain"
                      />
                      {car.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p>
              Cliquez sur votre modèle pour obtenir votre coupon de réduction
            </p>
          </div>

          {/* Display coupon code dynamically */}
          {selectedCar && (
            <div className="mt-6">
              <p className="text-normal font-[500]">
                Code promo pour {selectedCar.key.toUpperCase()}
              </p>
              <div className="flex items-center justify-center gap-1 my-3">
                <p className="font-[500] text-blue-500">
                  {carCoupons[selectedCar.key]}
                </p>
                <button
                  onClick={() => copyToClipboard(carCoupons[selectedCar.key])}
                  className="text-sm text-gary-700 "
                >
                  <span className="border px-1 rounded-md">Copier</span>
                </button>
              </div>
              <div className="mt-5">
                <Link
                  href={selectedCar.href}
                  className="border text-blue-500 px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  acheter {selectedCar.key}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PromoPage;
