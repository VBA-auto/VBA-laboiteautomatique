"use client";
import Image from "next/image";
import React, { useEffect, useState, Suspense } from "react";
import EssenceComp from "./components/EssenceCompCaptur";
import DieselComp from "./components/DieselCompCaptur";
import Footer from "@/components/Footer";
import Link from "next/link";
import ReturnButton from "@/components/ReturnButton";
import Head from "next/head";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { useRouter, useSearchParams } from "next/navigation";
import PageLevelStock from "@/components/PagelevelStock";

const pageDescription =
  "Renault Captur, calculateur boite automatique EDC pour Renault Captur essence et Renault Captur Diesel voir stock";
const HeadingText = "Calculateur pour Renault Captur";

const TabCatContent = () => {
  const [TabMode, setTabMode] = useState(true);
  const [Essence, setEssence] = useState(true);
  const [Diesel, setDiesel] = useState(false);
  const [activeTab, setActiveTab] = useState("essence");

  const [stock, setStock] = useState(null);

  const handleStockChange = (currentStock) => {
    setStock(currentStock);
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  // URL query parameter থেকে initial state set করার জন্য useEffect
  useEffect(() => {
    const type = searchParams.get("type");

    if (type === "diesel" || type === "1.5") {
      setDiesel(true);
      setEssence(false);
      setTabMode(true);
    } else if (type === "essence" || type === "1.2") {
      setEssence(true);
      setDiesel(false);
      setTabMode(true);
    }
    // যদি কোনো type parameter না থাকে, তাহলে default (Essence) থাকবে
  }, [searchParams]);

  const handleEssenceCalculatuer = () => {
    setEssence(true);
    setTabMode(true);
    setActiveTab("essence");
    setDiesel(false);

    // URL update করা যেন back/forward button কাজ করে
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", "essence");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleDieselCalculatuer = () => {
    setDiesel(true);
    setEssence(false);
    setTabMode(true);
    setActiveTab("diesel");
    // URL update করা যেন back/forward button কাজ করে
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", "diesel");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] mx-[15px]">
        <div className="container mx-auto">
          <Head>
            <title>Calculateur EDC pour Renault captur disponibililté</title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Calculateur Renault Captur 1.2 Essence</h1>
            <h2>Calculateur Renault Captur 1.5 Diesel</h2>
          </div>

          <div className="md:flex items-center gap-2 border border-gray-100 p-4 rounded-lg">
            <div className="md:w-1/4">
              <div className="my-3">
                <Image
                  unoptimized
                  width={300}
                  height={290}
                  src="https://laboiteautomatique.com/images/calculateur_DC4_Renault_Capture.webp"
                  className="mx-auto w-[300px] h-[170px] mb-4"
                  priority={true}
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-3/4 ">
              <div className="flex justify-between items-center">
                <div className="md:w-1/2">
                  <ReturnButton />
                  <h1 className="text-2xl mt-2 font-semibold  text-gray-700">
                    Renault Captur
                  </h1>
                </div>
              </div>

              <p className="text-justify text-[15px] my-3">
                Vérifiez la disponibilté de votre module (boite de vitesse à
                contrôler) pour votre boite automatique <strong>EDC</strong>{" "}
                Renault <strong>Captur</strong>. Celui-ci peut être livré vierge
                ou directement programmé (Plug & Play). L’{" "}
                <Link href="/prestation/installation">installation</Link> est
                possible en fonction de votre lieu géographique. Choisissez
                votre modèle pour Renault Captur:{" "}
                <Link href="/captur/essence" className="underline">
                  Essence
                </Link>{" "}
                ou{" "}
                <Link href="/captur/diesel" className="underline">
                  Diesel
                </Link>
                {"."} N’hésitez pas à nous contacter si vous souhaitez être
                absolument certain que cette pièce est bien à l’origine du
                problème. Pour plus d&apos;informations, vous pouvez consulter
                notre{" "}
                <Link href="/ressource/aide-en-ligne" className="underline">
                  aide en ligne
                </Link>
                {"."}
              </p>
              <div className="carsef grid  md:grid-cols-8 grid-cols-3 md:mt-0 mt-3  items-center justify-start">
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321488R">310321488R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321148R">310321148R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320891R">310320891R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320841R">310320841R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320756R">310320756R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320717R">310320717R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321706R">310321706R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321517R">310321517R </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto my-12 ">
          <div className="md:flex items-center gap-5 border  bg-gradient-to-r from-blue-50 to-blue-100  border-blue-200 p-4 rounded-lg">
            <div className="md:w-1/2">
              <div className="">
                {Essence && (
                  <>
                    <div className="">
                      <h1 className="text-lg text-gray-700 font-semibold flex items-center gap-2">
                        <PageLevelStock
                          modelName="Renault Captur"
                          carType="essence"
                          onStockChange={handleStockChange}
                        />
                        Calculateur Renault Captur 1.2 Essence
                      </h1>
                    </div>
                  </>
                )}
              </div>
              <div className="">
                {Diesel && (
                  <div className="">
                    <div className="">
                      <h1 className="text-lg text-gray-700 font-semibold flex items-center gap-2">
                        <PageLevelStock
                          modelName="Renault Captur"
                          carType="diesel"
                          onStockChange={handleStockChange}
                        />
                        Calculateur Renault Captur 1.5 Diesel
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2">
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

                        {/* Essence Button */}
                        <button
                          onClick={handleEssenceCalculatuer}
                          className={`relative z-10 py-3 rounded-full w-1/2 font-medium transition-all duration-300 ease-in-out ${
                            activeTab === "essence"
                              ? "text-white"
                              : "text-gray-600 hover:text-[#2C80EF]"
                          }`}
                        >
                          1.2 Essence
                        </button>

                        {/* Diesel Button */}
                        <button
                          onClick={handleDieselCalculatuer}
                          className={`relative z-10 py-3 rounded-full w-1/2 font-medium transition-all duration-300 ease-in-out ${
                            activeTab === "diesel"
                              ? "text-white"
                              : "text-gray-600 hover:text-[#2C80EF]"
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

        <div className="container mx-auto my-12">
          <div className="">
            {Essence && (
              <>
                <EssenceComp />
              </>
            )}
          </div>
          <div className="">
            {Diesel && (
              <div className="">
                <DieselComp />
              </div>
            )}
          </div>
        </div>
      </section>
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
