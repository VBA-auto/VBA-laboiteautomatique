// components/PromoPage.js
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PromoPage = () => {
  const [loading, setLoading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [promoCode, setPromoCode] = useState("RENAULT30"); // Exemple de code promo

  // Fonction pour simuler un chargement
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowText(true);
    }, 2000); // Simule un chargement de 2 secondes
  };

  // Fonction pour copier le code promo
  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode).then(() => {
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
            🚀 Promotion Exceptionnelle !
          </h1>
          <p className="text-normal mb-8">
            Ne manquez pas notre offre spéciale sur les pièces détachées Renault
            ! Jusqu&apos;à 10% de réduction sur une sélection de pièces.
          </p>

          <div className="mb-8">
            <div className="w-full carss">
              <div className="md:flex gap-5">
                {[
                  {
                    href: "/captur",
                    src: "/images/calculateur_DC4_Renault_Capture.webp",
                    alt: "Renault Captur",
                    label: "Renault Captur",
                  },

                  {
                    href: "/clio",
                    src: "/images/calculateur_DC4_Renault_Clio4.webp",
                    alt: "Renault Clio IV",
                    label: "Renault Clio IV",
                  },
                  {
                    href: "/megane",
                    src: "/images/calculateur_DC4_renault-megane.webp",
                    alt: "Renault Megane",
                    label: "Renault Mégane",
                  },
                  {
                    href: "/scenic",
                    src: "/images/calculateur_DC4_renault_Senic.webp",
                    alt: "Renault Scenic",
                    label: "Renault Scénic",
                  },
                  {
                    href: "/fluence",
                    src: "/images/calculateur_DC4_renault-fluence.webp",
                    alt: "Renault Fluence",
                    label: "Renault Fluence",
                  },
                  {
                    href: "/clio-rs",
                    src: "/images/calculateur_DC4_clioRS.webp",
                    alt: "Ford Focus",
                    label: "Renault Clio RS",
                  },
                ].map((car, index) => (
                  <div key={index} className="carsCard rounded-md">
                    <Link
                      rel="preload"
                      href={car.href}
                      className="text-[15px] text-center"
                    >
                      <Image
                        width={110}
                        height={100}
                        src={car.src}
                        alt={car.alt}
                        loading="lazy"
                        className="m-auto h-[70px] object-contain"
                      />
                      {car.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {!showText && (
            <button
              onClick={handleClick}
              disabled={loading}
              className="bg-white border text-[#2C80EF] px-10 py-3 rounded-md font-[500] text-sm hover:bg-gray-100 transition duration-300"
            >
              {loading ? "Chargement..." : "Voir les offres"}
            </button>
          )}

          {showText && (
            <div className="mt-4">
              <p className="text-normal mb-4">
                Utilisez le code promo :{" "}
                <strong className="text-[#2C80EF]">{promoCode}</strong>
              </p>
              <button
                onClick={copyToClipboard}
                className="bg-white border text-[#2C80EF] text-sm px-7 py-3 rounded-md font-[500] hover:bg-gray-100 transition duration-300"
              >
                Copier le code
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PromoPage;
