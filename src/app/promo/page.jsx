"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PromoPage = () => {
  const [revealedCar, setRevealedCar] = useState(null);
  const [promoDate, setPromoDate] = useState("");
  const [promoPrice, setPromoPrice] = useState(0);
  const [carCoupons, setCarCoupons] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const res = await fetch("/api/promoCode");
        const data = await res.json();
        const activePromo = data.find((promo) => promo.status);

        if (activePromo) {
          setPromoPrice(activePromo.price);
          setCarCoupons(activePromo.codes);
        }

        const promoRes = await fetch("/api/promo");
        const promoData = await promoRes.json();
        if (promoData?.date) {
          const formatted = new Date(promoData.date).toLocaleDateString(
            "fr-FR",
            {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }
          );
          setPromoDate(formatted);
        }
      } catch (err) {
        console.error("Promo fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPromo();
  }, []);

  const handleCarClick = (carKey) => {
    setRevealedCar((prev) => (prev === carKey ? null : carKey));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Code promo copié !");
    });
  };

  const carList = [
    {
      key: "CAPTUR",
      href: "/captur",
      src: "/images/calculateur_DC4_Renault_Capture.webp",
      alt: "Renault Captur",
      label: "Renault Captur",
    },
    {
      key: "CLIO",
      href: "/clio",
      src: "/images/calculateur_DC4_Renault_Clio4.webp",
      alt: "Renault Clio IV",
      label: "Renault Clio IV",
    },
    {
      key: "MEGANE",
      href: "/megane",
      src: "/images/calculateur_DC4_renault-megane.webp",
      alt: "Renault Megane",
      label: "Renault Mégane",
    },
    {
      key: "SCENIC",
      href: "/scenic",
      src: "/images/calculateur_DC4_renault_Senic.webp",
      alt: "Renault Scenic",
      label: "Renault Scénic",
    },
    {
      key: "FLUENCE",
      href: "/fluence",
      src: "/images/calculateur_DC4_renault-fluence.webp",
      alt: "Renault Fluence",
      label: "Renault Fluence",
    },
    {
      key: "CLIORS",
      href: "/clio-rs",
      src: "/images/calculateur_DC4_clioRS.webp",
      alt: "clio rs",
      label: "Renault Clio RS",
    },
  ];

  return (
    <main className="">
      <SubHeader />
      <Header />
      <Head>
        <title>
          promotion en cours pieces détachées Renault boite automatique
        </title>
        <meta
          name="description"
          content="Liste des calculateurs Renault en promotion. Références disponibles immédiatement."
        />
      </Head>
      <div className="pt-28 pb-28 flex items-center justify-center bg-gradient-to-r from-white to-gray-100">
        <div className="text-center text-gray-700">
          <h1 className="text-2xl font-bold text-blue-500 mb-1 inline-flex items-center gap-2">
            -{" "}
            <span>
              {loading ? (
                <span className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block" />
              ) : (
                promoPrice
              )}{" "}
              €
            </span>
          </h1>
          <h1 className="text-2xl font-bold mb-4">
            🚀 Promotion Exceptionnelle{" "}
            <span className="font-normal">Jusqu&apos;au </span>
            <span className="text-green-400 font-[500] text-[22px] inline-flex items-center min-w-[80px]">
              {promoDate ? (
                promoDate
              ) : (
                <span className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin inline-block align-middle" />
              )}
            </span>
          </h1>

          <p className="font-[500] mb-5">
            Cliquez sur votre modèle de véhicule pour obtenir votre coupon de
            réduction
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {carList.map((car) => (
              <div
                key={car.key}
                className={`w-[160px] h-[120px] md:flex items-center justify-center bg-white rounded-lg shadow-md py-3 px-5 transition-all duration-300 ${
                  revealedCar === car.key ? "flip" : ""
                }`}
                onClick={() => handleCarClick(car.key)}
              >
                {revealedCar === car.key ? (
                  <div className="text-center">
                    <p className="text-lg font-[500] text-blue-500">
                      {carCoupons[car.key] || "-"}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(carCoupons[car.key]);
                      }}
                      className="my-2.5 text-[13px] border border-blue-500 text-blue-500 px-4 py-[3px] rounded-md"
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

          <Link
            href="/produits"
            className="border px-4 py-2.5 rounded-md text-blue-500 bg-white hover:bg-gray-50 text-sm"
          >
            Tous les produits
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PromoPage;
