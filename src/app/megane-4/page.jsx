"use client";
import Image from "next/image";
import React, { useState, useEffect, Suspense } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import ReturnButton from "@/components/ReturnButton";
import Head from "next/head";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import { useRouter, useSearchParams } from "next/navigation";

import DieselCompMegane4 from "./components/DieselCompMegane4";
import PageLevelStock from "@/components/PagelevelStock";
import SinglePageTotalStocks from "@/components/singlePageTotalStocks";

const pageDescription =
  "Références de calculateurs pour Renault Megane 4. Modèles compatibles et symptômes connus.";
const HeadingText = "Calculateur Megane 4 Diesel – Boîte auto ";

const TabCatContent = () => {
  const [TabMode, setTabMode] = useState(true);
  const [Diesel, setDiesel] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("essence");

  const [stock, setStock] = useState(null);

  const handleStockChange = (currentStock) => {
    setStock(currentStock);
  };

  // URL query parameter থেকে initial state set করার জন্য useEffect
  useEffect(() => {
    const type = searchParams.get("type");

    if (type === "diesel" || type === "1.5") {
      setDiesel(true);
      setTabMode(true);
    } else if (type === "essence" || type === "1.2") {
      setDiesel(false);
      setTabMode(true);
    }
    // যদি কোনো type parameter না থাকে, তাহলে default (Essence) থাকবে
  }, [searchParams]);

  const handleDieselCalculatuer = () => {
    setDiesel(true);

    setTabMode(true);

    // URL update করা যেন back/forward button কাজ করে
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", "diesel");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <div className="bg-[#f7f7f7]">
        <section className="py-[60px] mx-[15px]">
          <div className="container mx-auto">
            <Head>
              <title>Calculateur Megane 4 Diesel – Boîte auto </title>
              <meta name="description" content={pageDescription} />
              <meta name="headline" content={HeadingText} />
            </Head>

            <div style={{ display: "none" }}>
              <h1>Calculateur pour Renault Megane IV</h1>
            </div>
            <div className="bg-white/50">
              <div className="md:flex items-center gap-5 border border-gray-200 p-4 rounded-lg">
                <div className="md:w-1/2">
                  <div className=""></div>
                  <div className="">
                    {Diesel && (
                      <div className="">
                        <div className="">
                          <h1 className="md:text-lg text-base md:mb-0 mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <PageLevelStock
                              modelName="Renault Megane 4"
                              carType="diesel"
                              onStockChange={handleStockChange}
                            />
                            Calculateur Renault Megane IV - 1.5 Diesel
                          </h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:w-1/4 ms-auto">
                  <div className=" mx-auto">
                    {TabMode && (
                      <div className="w-full mx-auto">
                        <div className="flex">
                          {/* Container for the toggle */}
                          <div className="relative bg-gray-200 rounded-full p-1 w-full flex">
                            {/* Sliding background indicator */}
                            <div
                              className={`absolute top-1 bottom-1 w-1/2 bg-[#2C80EF] rounded-full transition-transform duration-300 ease-in-out shadow-lg ${
                                activeTab === "diesel"
                                  ? "transform translate-x-full"
                                  : ""
                              }`}
                            ></div>

                            {/* Diesel Button */}
                            <button
                              onClick={handleDieselCalculatuer}
                              className={`relative z-10 py-3 rounded-full w-1/2 font-medium transition-all duration-300 ease-in-out ${
                                activeTab === "diesel"
                                  ? "text-white"
                                  : "text-white hover:text-white"
                              }`}
                            >
                              1.5 Diesel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex mt-10 p-4 items-center gap-2 border border-gray-200  rounded-lg bg-white/50">
              <div className="md:w-1/4">
                <div className="my-3">
                  <Image
                    unoptimized
                    width={300}
                    height={290}
                    src="https://laboiteautomatique.com/images/megane_4_car.webp"
                    className="mx-auto w-[270px]  mb-4"
                    priority={true}
                    alt=""
                  />
                </div>
              </div>
              <div className="md:w-3/4 ">
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <ReturnButton />
                  </div>
                  <div className="w-1/2">
                    <SinglePageTotalStocks
                      title="Mégane IV"
                      carName="Renault Megane 4"
                    />
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl mt-0 font-semibold  text-gray-700">
                    Renault Mégane IV
                  </h1>
                </div>

                <p className="text-justify text-[15px] my-3">
                  Vérifiez la disponibilté de votre module (boite de vitesse à
                  contrôler) pour votre boite automatique <strong>EDC</strong>{" "}
                  Renault <strong>megane 4</strong>. Celui-ci peut être livré
                  vierge ou directement programmé (Plug & Play). L’
                  <Link href="/prestation/installation">installation</Link> est
                  possible en fonction de votre lieu géographique. Choisissez
                  votre modèle pour Renault megane 4:{" "}
                  <Link href="/megane-4/diesel" className="underline">
                    1.5 Diesel
                  </Link>
                  {". "}
                  N’hésitez pas à nous contacter si vous souhaitez être
                  absolument certain que cette pièce est bien à l’origine du
                  problème. Pour plus d&apos;informations, vous pouvez consulter
                  notre{" "}
                  <Link href="/ressource/aide-en-ligne" className="underline">
                    aide en ligne
                  </Link>
                  {"."}
                </p>
                <div className="carsef grid md:grid-cols-8 grid-cols-3 md:mt-0 mt-3 items-center justify-start">
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321808R">310321808R </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto my-12">
            <div className="">
              {Diesel && (
                <div className="">
                  <DieselCompMegane4 />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

const TabCat = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TabCatContent />
    </Suspense>
  );
};

export default TabCat;
