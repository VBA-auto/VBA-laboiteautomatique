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
  "Vérifiez la disponibilté de votre module de commande de boite de vitesse automatique pour votre boite automatique EDC Renault Megane";
const HeadingText = "Calculateur pour Renault Megane";

const RenaultMegane = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] produits">
        <div className="container mx-auto">
          <Head>
            <title>
              Calculateur pour Renault Megane Calculateur vierge ou programmé
            </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>

          <div style={{ display: "none" }}>
            <h1>Calculateur pour Renault Megane</h1>
          </div>

          <div className="justify-center items-start gap-5">
            <div className="md:w-[800px] mx-auto ">
              <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
                <div className="flex justify-between">
                  <div className="">
                    <ReturnButton />
                  </div>
                  <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                    Renault Mégane
                  </h1>

                  <div className="">
                    <DynaStock number={2} color="warning" />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5">
                  Renault Mégane
                </h1>
                <Image
                  width={300}
                  height={290}
                  src="/images/calculateur_DC4_renault-megane.webp"
                  className="mx-auto"
                  alt=""
                />
                <p className="text-justify text-[15px] mt-2">
                  Vérifiez la disponibilté de votre module (boite de vitesse à
                  contrôler) pour votre boite automatique <strong>EDC</strong>{" "}
                  Renault <strong>Mégane 3</strong>. Celui-ci peut être livré
                  vierge ou directement programmé (Plug & Play). L’
                  <Link href="/installation">installation</Link> est possible en
                  fonction de votre lieu géographique. Choisissez votre modèle
                  pour Renault Mégane 3:{" "}
                  <Link
                    href="/vehicule/renault-megane-essence"
                    className="underline"
                  >
                    Essence
                  </Link>{" "}
                  ou{" "}
                  <Link
                    href="/vehicule/renault-megane-diesel"
                    className="underline"
                  >
                    Diesel.
                  </Link>{" "}
                  N’hésitez pas à nous contacter si vous souhaitez être
                  absolument certain que cette pièce est bien à l’origine du
                  problème. Pour plus d&apos;informations, vous pouvez consulter
                  notre{" "}
                  <Link href="/aide-en-ligne" className="underline">
                    aide en ligne.
                  </Link>{" "}
                </p>
                <div className="grid md:grid-cols-8 grid-cols-3 md:mt-0 mt-3 items-center justify-start">
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310F93913R">310F93913R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310320892R">310320892R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310320721R">310320721R </Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/310320749R">310320749R </Link>
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
                        Renault Mégane
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Mégane pour Essence et Diesel
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-0 mt-4">
                    <div className="flex justify-center gap-5">
                      <div className="">
                        <Link href="/vehicule/renault-megane-essence">
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-6 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            1.2 Essence
                          </button>
                        </Link>
                      </div>
                      <div className="">
                        <Link href="/vehicule/renault-megane-diesel">
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
