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
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const pageDescription =
    "Vente et reprogrammation de calculateurs pour boite automatique DC4 (boite EDC) pour Renault clio 4, clio RS, Captur, megane 3 et scenic 3.";
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
      <div className="hidden">
        <h1>Vente Calculateur boite automatique EDC Renault neuf</h1>
        <h1>Vente Calculateur boite automatique EDC Renault reconditionné</h1>
        <h1>réparation Calculateur boite automatique EDC Renault</h1>
        <h1>reprogrammation Calculateur boite automatique Renault EDC</h1>
        <h1>boite de vitesse à controler aide en ligne </h1>
        <h2>Calculateur boite automatique EDC Renault Captur</h2>
        <h2>Calculateur boite automatique EDC Renault Clio 4</h2>
        <h2>Calculateur boite automatique EDC Renault Megane 3</h2>
        <h2>Calculateur boite automatique EDC Renault Scenic 3 1.5 diesel</h2>
        <h2>Calculateur boite automatique EDC Renault Clio RS 1.6 essence</h2>
        <h2>Calculateur boite automatique EDC Renault Fluence</h2>
        <h3>Calculateur boite automatique EDC Renault Captur 1.2 Essence</h3>
        <h3>Calculateur boite automatique EDC Renault Captur 1.5 Diesel</h3>
        <h3>Calculateur boite automatique EDC Renault Clio 4 1.2 Essence</h3>
        <h3>Calculateur boite automatique EDC Renault Megane 3 1.5 Diesel</h3>
        <h3>Calculateur boite automatique EDC Renault Megane 3 1.2 Essence</h3>
      </div>
      <SubHeader />
      <Header />
      <section className="xl:pt-[70px] pt-[15px] heroSection">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="bannerMain flex md:gap-5">
              <div className="xl:w-1/2 carssearch">
                <div className="homeContentMain">
                  <h2 className="heroH1">Calculateur Renault (boite EDC)</h2>
                  <h2 className="text-[24px] font-semibold text-[#374151]">
                    Vente et reprogrammation
                  </h2>
                  <p className="text-[18px] text-[#374151]">
                    Garantie constructeur - satisfait ou remboursé
                  </p>
                </div>
                <div className="md:w-11/12 md:mt-5 mt-0  mb-5 flex gap-2  md:px-0 searchFilte">
                  <div className="w-full">
                    <HomeSearchVehicle />
                  </div>
                </div>
                <div className="md:w-11/12 carss">
                  <div className="grid grid-cols-2 gap-5 md:grid-cols-3 ">
                    {[
                      {
                        href: "/captur",
                        src: "/images/calculateur_DC4_Renault_Capture.webp",
                        alt: "Renault Captur",
                        label: "Renault Captur",
                      },

                      {
                        href: "/clio",
                        src: "/images/calculateur_DC4_Renault_Clio4.webp",
                        alt: "Renault Clio IV",
                        label: "Renault Clio IV",
                      },
                      {
                        href: "/megane",
                        src: "/images/calculateur_DC4_renault-megane.webp",
                        alt: "Renault Megane",
                        label: "Renault Mégane",
                      },
                      {
                        href: "/scenic",
                        src: "/images/calculateur_DC4_renault_Senic.webp",
                        alt: "Renault Scenic",
                        label: "Renault Scénic",
                      },
                      {
                        href: "/fluence",
                        src: "/images/calculateur_DC4_renault-fluence.webp",
                        alt: "Renault Fluence",
                        label: "Renault Fluence",
                      },
                      {
                        href: "/clio-rs",
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

                {/* <div className="homeButtonNew  mt-[25px] items-center ">
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
                </div> */}
              </div>

              <div className="viddeo lg:w-1/2">
                <div className="homeContent">
                  <div className="flex gap-5 justify-between mb-5">
                    <div className="homeButtons">
                      <Link href="/ressource/aide-en-ligne">
                        <button className="buttonCheckRedHidden">
                          <span>Aide en ligne</span>
                        </button>
                      </Link>
                    </div>
                    <div className="homeButtons">
                      <Link href="/selectionnez-votre-vehicule">
                        <button className="buttonCheckBlueHidden">
                          <span>Disponibilité</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h2 className="text-[23px] text-[#374151] font-semibold">
                      Calculateur Renault (boite EDC)
                    </h2>
                    {/* <p className="text-[20px] font-semibold text-[#374151]">
                      Vente et reprogrammation
                    </p>
                    <p className="text-[16px] text-[#374151] mt-1">
                      Garantie constructeur - satisfait ou remboursé
                    </p> */}
                    <div>
                      <div className="flex items-center justify-center gap-4 mt-3">
                        <Image
                          width={80}
                          height={100}
                          src="/images/glogo.webp"
                          alt="hkjhj"
                          loading="lazy"
                          className=""
                        />
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-2 mt-3  w-1/2 mx-auto bg-blue-50 py-1 rounded-md">
                        <Image
                          width={20}
                          height={100}
                          src="/images/gicon.webp"
                          alt="hkjhj"
                          loading="lazy"
                          className=""
                        />
                        <h2 className="text-sm font-medium">
                          5.0/5.0 sur Google
                        </h2>
                      </div>
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
        <div className="md:my-[60px] my-[30px] md:px-0 px-6">
          <Review />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
