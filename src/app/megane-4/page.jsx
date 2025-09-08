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

const pageDescription =
  "Références de calculateurs pour Renault Megane 4. Modèles compatibles et symptômes connus.";
const HeadingText = "Calculateur Megane 4 Diesel – Boîte auto ";

const TabCatContent = () => {
  const [TabMode, setTabMode] = useState(true);
  const [Diesel, setDiesel] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

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

          <div className="md:flex items-center gap-5">
            <div className="md:w-1/4">
              <div className="my-3">
                <Image
                  unoptimized
                  width={300}
                  height={290}
                  src="https://laboiteautomatique.com/images/megane_4_car.webp"
                  className="mx-auto w-[300px] h-[170px] mb-4"
                  priority={true}
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-3/4 ">
              <div className="flex justify-between items-center">
                <div className="md:w-1/2">
                  <h1 className="text-2xl font-semibold  text-gray-700">
                    Renault Mégane IV
                  </h1>
                </div>

                <div className="md:w-1/9">
                  <ReturnButton />
                </div>
              </div>

              <p className="text-justify text-[15px] mt-2">
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
                N’hésitez pas à nous contacter si vous souhaitez être absolument
                certain que cette pièce est bien à l’origine du problème. Pour
                plus d&apos;informations, vous pouvez consulter notre{" "}
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
            {TabMode && (
              <div className="">
                <div className="mt-8 flex gap-5">
                  <button
                    onClick={handleDieselCalculatuer}
                    className="bg-[#2C80EF] text-white py-3 rounded-full w-1/2 hover:bg-blue-400 transition-all"
                  >
                    1.5 Diesel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* <div className="">{Essence && <>{<EssenceCompClio />}</>}</div> */}
          <div className="">
            {Diesel && (
              <div className="">
                <DieselCompMegane4 />
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