import Link from "next/link";
import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import SingleSearchView from "./Content";
import NewVehicleRef from "@/components/NewVehicleRef";
import Image from "next/image";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Calculateur Mégane, calculateur boite automatique EDC pour Calculateur Mégane essence et Calculateur Mégane Diesel voir stock";
const HeadingText = "Calculateur pour Calculateur Mégane";

const TabCatContent = () => {
  return (
    <main className="">
      <SubHeader />
      <Header />
      <div className="bg-[#f7f7f7]">
        <section className="py-[60px] md:mx-0 mx-[15px] ">
          <div className="container mx-auto">
            <Head>
              <title>
                Calculateur EDC pour Calculateur Mégane disponibililté
              </title>
              <meta name="description" content={pageDescription} />
              <meta name="headline" content={HeadingText} />
            </Head>
            <div style={{ display: "none" }}>
              <h1>Calculateur Calculateur Mégane 1.2 Essence</h1>
              <h2>Calculateur Calculateur Mégane 1.5 Diesel</h2>
            </div>

            <div className="bg-white/50">
              <div className="flex justify-between items-center gap-5 border border-gray-200 px-4 py-7 rounded-lg">
                <div className="md:w-1/2">
                  <div className="">
                    <>
                      <div className="">
                        <h1 className="md:text-lg text-base text-gray-700 font-semibold flex items-center gap-2">
                          310322059R{" "}
                          <span className="hidden md:block">
                            - Calculateur Clio V
                          </span>
                        </h1>
                      </div>
                    </>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className=" mx-auto">
                    <div className="w-full mx-auto">
                      <div className="flex justify-between">
                        {/* Container for the toggle */}
                        <div className="relative  rounded-full px-6 w-full flex justify-end gap-5">
                          <NewVehicleRef
                            modelName="Calculateur Clio V"
                            refCode="310322059R"
                          />
                        </div>
                      </div>
                    </div>
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
                    src="https://laboiteautomatique.com/images/plat-1.webp"
                    className="mx-auto w-[280px]  mb-4"
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
                      310322059R
                    </h1>
                  </div>
                </div>

                <p className="text-justify text-[15px] my-3">
                  Vous trouverez ici le calculateur Renault 310322059R, un
                  module de commande pour boîte automatique EDC prévu pour la
                  Clio V Essence à partir de 2020. Il est compatible avec le
                  moteur H5H470 et la boîte DW5007, ainsi qu’avec le moteur 1.3
                  TCe 130 16V. Ce calculateur peut être fourni vierge ou déjà
                  programmé (Plug & Play) à partir du numéro de châssis (VIN) ou
                  de l’immatriculation, prêt à être monté. Référence d’origine
                  garantie 12 mois. Instructions de montage si besoin : 
                  <Link
                    href="https://youtu.be/6X72SXZhZ44"
                    className="text-blue-500"
                  >
                    https://youtu.be/6X72SXZhZ44
                  </Link>
                </p>
                <div className="carsef grid  md:grid-cols-8 grid-cols-3 md:mt-0 mt-3  items-center justify-start">
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321994R">310321994R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321808R">310321808R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321716R">310321716R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321706R">310321706R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310F93913R">310F93913R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/A2C30743000">A2C30743000 </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321662R">310321662R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321561R">310321561R </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto my-12">
            <div className="">
              <SingleSearchView />
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
    <Suspense fallback={<div></div>}>
      <TabCatContent />
    </Suspense>
  );
};

export default TabCat;
