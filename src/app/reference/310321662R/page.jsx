import Image from "next/image";
import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import ReturnButton from "@/components/ReturnButton";
import Head from "next/head";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import SingleSearchView from "./Content";
import NewVehicleRef from "@/components/NewVehicleRef";

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
              <div className="md:flex items-center gap-5 border border-gray-200 px-4 py-7 rounded-lg">
                <div className="md:w-1/2">
                  <div className="">
                    <>
                      <div className="">
                        <h1 className="md:text-lg text-base md:mb-0 mb-2 text-gray-700 font-semibold flex items-center gap-2">
                          310321662R - Calculateur Kadjar
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
                            modelName="Calculateur Kadjar"
                            refCode="310321662R"
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
                      310321662R
                    </h1>
                  </div>
                </div>

                <p className="text-justify text-[15px] my-3">
                  Calculateur <strong>EDC crossover évolué</strong> pour Renault{" "}
                  <strong>Kadjar</strong> haut de gamme. Ce{" "}
                  <strong>module intelligent</strong> intègre les technologies
                  les plus avancées pour SUV familial. Compatible moteurs{" "}
                  <strong>essence TCE</strong>
                  et <strong>diesel dCi</strong> avec transmission{" "}
                  <strong>All-Mode 4x4-i</strong>. Gestion{" "}
                  <strong>terrain variable</strong> avec modes Auto, 2WD et
                  Lock. Installation <strong>Plug & Play premium</strong> avec
                  calibrage SUV spécialisé.{" "}
                  <strong>Garantie étendue 12 mois</strong> tous terrains.
                  Support technique expert SUV et 4x4 disponible.
                </p>
                <div className="carsef grid  md:grid-cols-8 grid-cols-3 md:mt-0 mt-3  items-center justify-start">
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321195R">310321195R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321306R">310321306R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321474R">310321474R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321706R">310321706R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321808R">310321808R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321994R">310321994R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310322059R">310322059R </Link>
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
