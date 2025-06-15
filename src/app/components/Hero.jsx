"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SubHeader from "./SubHeader";
import Header from "./Header";
import "@/globals.css";
import HomeSearchVehicle from "./HomeSearchVehicle";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import Footer from "./Footer";
import Review from "./Review";
import useNetworkStatus from "./useImageMonitor";

// Importing Images
const capturImage = "/images/calculateur_DC4_Renault_Capture.webp";
const clioImage = "/images/calculateur_DC4_Renault_Clio4.webp";
const meganeImage = "/images/calculateur_DC4_renault-megane.webp";
const scenicImage = "/images/calculateur_DC4_renault_Senic.webp";
const fluenceImage = "/images/calculateur_DC4_renault-fluence.webp";
const clioRSImage = "/images/calculateur_DC4_clioRS.webp";
const googleLogo = "/images/glogo.webp";
const googleIcon = "/images/gicon.webp";
const videoHome = "/images/videohome2.webm";

const Hero = () => {
  const { isSlowNetwork, hasImageError, networkSpeed, refreshPage } =
    useNetworkStatus();

  const pageDescription =
    "Vente et reprogrammation de calculateurs pour boite automatique DC4 (boite EDC) pour Renault clio 4, clio RS, Captur, megane 3 et scenic 3.";

  const HeadingText = "Vente et reprogrammation de calculateur Renault DC4";

  const cars = [
    {
      href: "/captur",
      src: capturImage,
      alt: "Renault Captur",
      label: "Renault Captur",
    },
    {
      href: "/clio",
      src: clioImage,
      alt: "Renault Clio IV",
      label: "Renault Clio IV",
    },
    {
      href: "/megane",
      src: meganeImage,
      alt: "Renault Megane",
      label: "Renault Mégane III",
    },
    {
      href: "/scenic",
      src: scenicImage,
      alt: "Renault Scenic",
      label: "Renault Scénic III",
    },
    {
      href: "/fluence",
      src: fluenceImage,
      alt: "Renault Fluence",
      label: "Renault Fluence",
    },
    {
      href: "/clio-rs",
      src: clioRSImage,
      alt: "Renault Clio RS",
      label: "Renault Clio RS",
    },
  ];

  return (
    <>
      {isSlowNetwork || hasImageError ? (
        <div className="bg-red-100 text-red-700 p-3 rounded-md text-center mb-4">
          <p>Slow network or image loading issue detected!</p>
          <button
            onClick={refreshPage}
            className="bg-red-600 text-white px-4 py-2 mt-2 rounded-md"
          >
            Refresh
          </button>
        </div>
      ) : null}

      <Head>
        <title>
          Vente Calculateur Renault boite automatique DC4 (EDC) 6DCT250
        </title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

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

                <div className="md:w-11/12 md:mt-5 mt-0 mb-5 flex gap-2 md:px-0 searchFilte">
                  <div className="w-full">
                    <HomeSearchVehicle />
                  </div>
                </div>

                <div className="md:w-11/12 carss">
                  <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                    {cars?.map((car, index) => (
                      <div key={index} className="carsCard rounded-md">
                        <Link
                          rel="preload"
                          href={car.href}
                          className="text-[15px] text-center"
                        >
                          <Image
                            unoptimized
                            width={110}
                            height={100}
                            src={car.src}
                            alt={car.alt}
                            priority={true}
                            style={{ width: "auto", height: "70px" }}
                            className="m-auto "
                          />
                          {car.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
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
                    <Link href="https://g.co/kgs/NKECBdC">
                      <div className="flex items-center justify-center gap-4 mt-3">
                        <Image
                          unoptimized
                          width={80}
                          height={100}
                          src={googleLogo}
                          alt="Google Reviews"
                        />
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-2 mt-3 w-1/2 mx-auto bg-blue-50 py-1 rounded-md">
                        <Image
                          unoptimized
                          width={20}
                          height={100}
                          src={googleIcon}
                          alt="Google Icon"
                        />
                        <h2 className="text-sm font-medium">
                          5.0/5.0 sur Google
                        </h2>
                      </div>
                    </Link>
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
                    <source src={videoHome} type="video/webm" />
                  </video>
                  <Link
                    href="https://api.whatsapp.com/send?phone=33631460333"
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
