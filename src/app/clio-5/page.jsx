"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import ReturnButton from "@/components/ReturnButton";
import Head from "next/head";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import { useRouter, useSearchParams } from "next/navigation";

import EssenceCompClioV from "./components/EssenceCompClioV";

const pageDescription =
  "Infos sur le calculateur EDC de la Clio 5. Défauts connus et modèles compatibles.   ";
const HeadingText = "Calculateur Clio 5 – Boîte auto EDC Renault ";

const TabCat = () => {
  const [TabMode, setTabMode] = useState(true);
  const [Diesel, setDiesel] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  // URL query parameter থেকে initial state set করার জন্য useEffect
  useEffect(() => {
    const type = searchParams.get("type");

    if (type === "essence" || type === "1.6") {
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
    params.set("type", "essence");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] mx-[15px]">
        <div className="container mx-auto">
          <Head>
            <title>Calculateur Clio 5 – Boîte auto EDC Renault </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Calculateur Clio 5 – Boîte auto EDC Renault </h1>
          </div>

          <div className="md:flex items-center gap-5">
            <div className="md:w-1/4">
              <div className="my-3">
                <Image
                  unoptimized
                  width={300}
                  height={290}
                  src="https://laboiteautomatique.com/images/clio_5.webp"
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
                    Renault Clio V
                  </h1>
                </div>

                <div className="md:w-1/9">
                  <ReturnButton />
                </div>
              </div>

              <p className="text-justify text-[15px]">
                Vérifiez la disponibilté de votre module (boite de vitesse à
                contrôler) pour votre <strong>boite</strong> automatique{" "}
                <strong>EDC </strong>
                Renault <strong>Clio V (6DCT300)</strong>. Celui-ci peut être
                livré vierge ou directement programmé (Plug & Play). L’
                <Link href="/prestation/installation">installation</Link> est
                possible en fonction de votre lieu géographique. Choisissez
                votre modèle pour Renault Clio 5:{" "}
                <Link href="/clio-5/essence" className="underline">
                  Essence (1.3).
                </Link>{" "}
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
                  <Link href="/reference/310322059R">310322059R</Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321994R">310321994R </Link>
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
                    1.3 Essence
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* <div className="">{Essence && <>{<EssenceCompClio />}</>}</div> */}
          <div className="">
            {Diesel && (
              <div className="">
                <EssenceCompClioV />
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TabCat;
