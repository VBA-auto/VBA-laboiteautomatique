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
  "Commander ici votre calculateur pour boîte automatique EDC (DC4) pour Ford focus boite GETRAG 6DCT250 ";
const HeadingText = "Calculateur, boîte automatique Ford focus EDC (DC4)";

const RenaultFord = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="carsCategory">
        <Head>
          <title>Calculateur, boîte automatique Ford focus EDC (DC4)</title>
          <meta name="description" content={pageDescription} />
          <meta name="headline" content={HeadingText} />
        </Head>

        <div style={{ display: "none" }}>
          <h1>Calculateur, boîte automatique Ford focus EDC (DC4)</h1>
        </div>
        <div className="container mx-auto">
          <div className="md:flex justify-center items-start gap-5">
            <div className="md:w-1/2">
              <div className="md:w-[400px] md:h-[530px] ms-auto bg-[#f5f4f4e3] py-5 rounded-md  p-5 accent_color">
                <h1 className="text-2xl font-semibold text-center text-gray-700">
                  Ford Focus
                </h1>
                <Image
                  style={{ width: "340px", height: "178px" }}
                  width={500}
                  height={300}
                  src="/images/calculateur_DC4_clioRS.webp"
                  className="mx-auto"
                  alt="ford focus"
                />
                <p className="text-justify mt-5">
                  Vérifiez la disponibilté de votre module de commande
                  défectueux (boite de vitesse à contrôler) pour votre{" "}
                  <span className="font-bold">boite automatique EDC</span> pour
                  votre <span className="font-bold">Ford Focus</span> :{" "}
                  <span className="font-bold">vierge ou programmé </span>avec{" "}
                  installation possible. Choisissez votre modèle de calclulateur
                  de <span className="font-bold">Renault Ford Focus</span>,
                  uniquement pour moteur Essence 1.6. Pour commander en ligne,
                  merci de cliquer sur le lien correspondant.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 capture">
              <div className="md:w-[400px] md:h-[530px] bg-[#f5f4f4e3] rounded-md shadow-2xl p-5  accent_color">
                <div className="flex justify-between">
                  <div className="">
                    <ReturnButton />
                  </div>
                  <div className="">
                    <DynaStock number={0} color="danger" />
                  </div>
                </div>
                <div className="">
                  <Image
                    width={300}
                    height={300}
                    src="https://i.ibb.co/k8C1Y2Y/Group-1074-removebg-preview.png" // Remplacez par le bon chemin de l'image
                    alt="Calculateur avec carton"
                    className="m-auto"
                    loading="lazy"
                  />
                </div>
                <div className="flex  mb-3  justify-center">
                  <h2 className="text-2xl font-semibold text-center text-gray-700">
                    Ford Focus
                  </h2>
                </div>
                <div className="flex justify-start gap-5 ">
                  <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link href="/ford-focus/essence">
                      <h2 className="hover:text-[#2c80ef]">
                        1.2 <br /> Essence <br />à partir de 2010
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link href="/ford-focus/diesel">
                      <h2 className="hover:text-[#2c80ef]">
                        1.6 <br /> Diesel <br />à partir de 2008
                      </h2>
                    </Link>
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

export default RenaultFord;
