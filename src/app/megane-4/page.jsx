import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynaStock from "@/components/DynaStock";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Références de calculateurs pour Renault Megane 4. Modèles compatibles et symptômes connus.";
const HeadingText = "Calculateur Megane 4 Diesel – Boîte auto ";

const RenaultMegane = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] produits">
        <div className="container mx-auto">
          <Head>
            <title>Calculateur Megane 4 Diesel – Boîte auto </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>

          <div style={{ display: "none" }}>
            <h1>Calculateur pour Renault Megane IV</h1>
          </div>

          <div className="justify-center items-start gap-5 mb-7">
            <div className="xl:w-[800px] xl:min-h-[538px] mx-auto ">
              <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
                <div className="flex justify-between relative">
                  <div className="absolute left-0">
                    <ReturnButton />
                  </div>
                  <div className="mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                      Renault Mégane IV
                    </h1>
                  </div>

                  <div className="absolute right-0">
                    <DynaStock carName="Renault Megane 4" />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5">
                  Renault Mégane
                </h1>
                <div className="my-3">
                  <Image
                    unoptimized
                    width={290}
                    height={290}
                    src="https://laboiteautomatique.com/images/megane_4_car.webp"
                    className="mx-auto w-[280px] h-[185px] mb-5"
                    priority={true}
                    alt=""
                  />
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
                  {/* <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310320892R">310320892R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310320721R">310320721R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310320749R">310320749R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321488R">310321488R </Link>
                  </p> */}
                </div>
                <div className="md:flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <Image
                      unoptimized
                      width={100}
                      height={100}
                      src="/images/megane4.webp"
                      alt="Calculateur avec carton"
                      className=""
                      priority={true}
                    />
                    <div className="text-start">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Renault Mégane 4
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Mégane 4 pour Essence et Diesel
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-0 mt-4">
                    <div className="flex justify-center gap-5">
                      {/* <div className="">
                        <Link href="/megane/essence" prefetch={true}>
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-6 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            1.2 Essence
                          </button>
                        </Link>
                      </div> */}
                      <div className="">
                        <Link href="/megane-4/diesel" prefetch={true}>
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-8 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            1.5 Diesel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default RenaultMegane;
