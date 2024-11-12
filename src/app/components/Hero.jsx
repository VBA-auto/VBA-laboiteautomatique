"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SubHeader from "./SubHeader";
import Header from "./Header";
import "@/globals.css";
import HomeSearchVehicle from "./HomeSearchVehicle";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import Review from "./Review";

const Hero = () => {
  const pageDescription =
    "Société spécialisée dans la vente et la reprogrammation de calculateurs pour boite automatique DC4 (boite EDC) pour Renault clio 4 Captur megane et scenic";
  const HeadingText = "Vente et reprogrammation de calculateur Renault DC4";
  const secondaryHeadingText =
    "calculateur boite automatique Renault Captur, calculateur boite automatique Renault Clio 4, calculateur boite automatique Renault Mégane, calculateur boite automatique Renault scénic, calculateur boite automatique Renault fluence, calculateur boite automatique Ford Focus";
  console.log("this is from vercel");

  return (
    <>
      <Head>
        <title>
          vente calculateur Renault boite automatique DC4 (EDC) 6DCT250
        </title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
        <meta name="secondaryHeading" content={secondaryHeadingText} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <SubHeader />
      <Header />
      <section className="md:py-[70px] py-[15px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="bannerMain flex md:gap-5">
              <div className="lg:w-1/2">
                <div className="homeContentMain">
                  <h2 className="heroH1">Calculateur Renault (boite EDC)</h2>
                  <h2 className="text-[24px] font-semibold text-[#374151]">
                    Vente et reprogrammation
                  </h2>
                  <p className="text-[18px] text-[#374151]">
                    Garantie constructeur - satisfait ou remboursé
                  </p>
                </div>
                <div className="md:w-11/12 mt-5  mb-5 flex gap-2 px-2 md:px-0">
                  <div className="w-full">
                    <HomeSearchVehicle />
                  </div>
                </div>
                <div className="md:w-11/12">
                  <div className="grid grid-cols-2 gap-5 md:grid-cols-3 ">
                    {[
                      {
                        href: "/renault-captur",
                        src: "/images/calculateur_DC4_Renault_Capture.webp",
                        alt: "Renault Captur",
                        label: "Renault Captur",
                      },

                      {
                        href: "/renault-clio",
                        src: "/images/calculateur_DC4_Renault_Clio4.webp",
                        alt: "Renault Clio IV",
                        label: "Renault Clio IV",
                      },
                      {
                        href: "/renault-megane",
                        src: "/images/calculateur_DC4_renault-megane.webp",
                        alt: "Renault Megane",
                        label: "Renault Megane",
                      },
                      {
                        href: "/renault-scenic",
                        src: "/images/calculateur_DC4_renault_Senic.webp",
                        alt: "Renault Scenic",
                        label: "Renault Scenic",
                      },
                      {
                        href: "/renault-fluence",
                        src: "/images/calculateur_DC4_renault-fluence.webp",
                        alt: "Renault Fluence",
                        label: "Renault Fluence",
                      },
                      {
                        href: "/renault-clio-rs",
                        src: "/images/calculateur_DC4_clioRS.webp",
                        alt: "Ford Focus",
                        label: "Renault Clio RS",
                      },
                    ].map((car, index) => (
                      <div key={index} className="carsCard rounded-md">
                        <Link
                          rel="preload"
                          href={car.href}
                          className="text-[15px] text-center"
                        >
                          <Image
                            width={110}
                            height={100}
                            src={car.src}
                            alt={car.alt}
                            loading="lazy"
                            className="m-auto h-[70px] object-contain"
                          />
                          {car.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="homeButtonNew  mt-[25px] items-center hidden">
                  <div className="flex items-center">
                    <div className="homeButtons">
                      <Link href="/produits">
                        <button
                          style={{ width: "160px" }}
                          className="buttonCheckBlueHome"
                        >
                          <span>Voir les prix</span>
                        </button>
                      </Link>
                    </div>

                    <Link href="">
                      <button
                        style={{ width: "160px", marginLeft: "35px" }}
                        className="buttonCheckOrangeHome"
                      >
                        <span>Recherche</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="viddeo lg:w-1/2">
                <div className="homeContent">
                  <div className="mb-5">
                    <h2 className="text-[23px] text-[#374151] font-semibold">
                      Calculateur Renault (boite EDC)
                    </h2>
                    <p className="text-[20px] font-semibold text-[#374151]">
                      Vente et reprogrammation
                    </p>
                    <p className="text-[16px] text-[#374151] mt-1">
                      Garantie constructeur - satisfait ou remboursé
                    </p>
                  </div>
                  <div className="flex gap-5 justify-center ">
                    <div style={{ width: "150px" }} className="homeButtons">
                      <Link href="/aide-en-ligne">
                        <button className="buttonCheck">
                          <span>Aide en ligne</span>
                        </button>
                      </Link>
                    </div>
                    <div style={{ width: "150px" }} className="homeButtons">
                      <Link href="/selectionnez-votre-vehicule">
                        <button className="buttonCheckBlue">
                          <span>Disponibilité</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <video
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    className="myVideo rounded-md md:block hidden"
                  >
                    <source src="/images/videohome2.webm" type="video/webm" />
                  </video>
                  <Link
                    href="https://api.whatsapp.com/send?phone=0145147254"
                    target="_blank"
                  >
                    <div className="absolute bottom-5 right-5 bg-[#5dca54] rounded-full p-2 md:block hidden">
                      <FaWhatsapp className="text-white text-3xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-24">
          <Review />
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Hero;
