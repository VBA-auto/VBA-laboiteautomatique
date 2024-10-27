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
  "Vérifiez la disponibilté de votre module de commande de boite de vitesse automatique pour votre boite automatique EDC Renault clio 4";
const HeadingText = "Calculateur pour  Renault Clio IV ";

const RenaultClioRS = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] produits ">
        <div className="container mx-auto">
          <Head>
            <title>
              Calculateur, boîte automatique Renault Clio 4 EDC (DC4)
            </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>

          <div style={{ display: "none" }}>
            <h1>Calculateur pour Renault Clio IV </h1>
          </div>
          <div className=" justify-center items-start gap-5 ">
            <div className="md:w-[800px] md:min-h-[538px] mx-auto ">
              <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
                <div className="flex justify-between relative">
                  <div className="absolute left-0">
                    <ReturnButton />
                  </div>
                  <div className="mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                      Renault Clio RS
                    </h1>
                  </div>
                  <div className="absolute right-0">
                    <DynaStock carName="Clio 4 RS" />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5">
                  Renault Clio RS
                </h1>
                <div className="my-3">
                  <Image
                    width={320}
                    height={290}
                    src="/images/calculateur_DC4_clioRS.webp"
                    className="mx-auto"
                    alt=""
                  />
                </div>
                <p className="text-justify text-[15px] mt-2">
                  Vérifiez la disponibilté de votre module (boite de vitesse à
                  contrôler) pour votre boite automatique <strong>EDC</strong>{" "}
                  Renault <strong>Clio RS</strong>. Celui-ci peut être livré
                  vierge ou directement programmé (Plug & Play). L’
                  <Link href="/installation">installation</Link> est possible en
                  fonction de votre lieu géographique. Il n’existe qu’un modèle
                  pour Renault Clio 4 RS:{" "}
                  <Link href="/vehicule/renault-clio4-rs-essence">
                    <span className="underline">Essence</span> (1.6).
                  </Link>{" "}
                  N’hésitez pas à nous contacter si vous souhaitez être
                  absolument certain que cette pièce est bien à l’origine du
                  problème. Pour plus d&apos;informations, vous pouvez consulter
                  notre{" "}
                  <Link href="/aide-en-ligne" className="underline">
                    aide en ligne
                  </Link>
                  {"."}
                </p>
                <div className="grid md:grid-cols-8 grid-cols-3 md:mt-0 mt-3 items-center justify-center">
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310321517R ">310321517R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310320718R">310320718R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310320553R">310320553R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310321488R">310321488R </Link>
                  </p>
                </div>
                <div className="md:flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <Image
                      width={100}
                      height={100}
                      src="https://i.ibb.co/k8C1Y2Y/Group-1074-removebg-preview.png"
                      alt="Calculateur avec carton"
                      className=""
                      loading="lazy"
                    />
                    <div className="text-start">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Renault Clio RS
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Clio RS pour Essence
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-0 mt-4">
                    <div className="flex justify-center gap-5">
                      <div className="">
                        <Link href="/vehicule/renault-clio4-rs-essence">
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-6 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            1.6 Essence
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

export default RenaultClioRS;
