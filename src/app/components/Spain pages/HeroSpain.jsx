"use client";
import Image from "next/image";
import Link from "next/link";

import "@/globals.css";
import { FaWhatsapp } from "react-icons/fa";

import Review from "@/components/Review";
import SearchBarHomeSpain from "./SearchBarHomeSpain";

const HeroSpain = () => {
  return (
    <>
      <section className="xl:pt-[70px] pt-[15px] heroSection">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="bannerMain flex md:gap-5">
              <div className="xl:w-1/2 carssearch">
                <div className="homeContentMain">
                  <h2 className="heroH1">Calculadora Renault (caja EDC)</h2>
                  <h2 className="text-[24px] font-semibold text-[#374151]">
                    Venta reprogramación
                  </h2>
                  <p className="text-[18px] text-[#374151]">
                    Garantía del fabricante - satisfecho o reembolsado
                  </p>
                </div>
                <div className="md:w-11/12 md:mt-5 mt-0  mb-5 flex gap-2  md:px-0 searchFilte">
                  <div className="w-full">
                    <SearchBarHomeSpain />
                  </div>
                </div>
                <div className="md:w-11/12 carss">
                  <div className="grid grid-cols-2 gap-5 md:grid-cols-3 ">
                    {[
                      {
                        href: "/captur",
                        src: "/images/calculateur_DC4_Renault_Capture.webp",
                        alt: "Renault Captur",
                        modal: "ModalSpainCapturParent",
                        label: "Renault Captur",
                      },

                      {
                        href: "/clio",
                        src: "/images/calculateur_DC4_Renault_Clio4.webp",
                        alt: "Renault Clio IV",
                        modal: "ModalSpainClioParent",
                        label: "Renault Clio IV",
                      },
                      {
                        href: "/megane",
                        src: "/images/calculateur_DC4_renault-megane.webp",
                        alt: "Renault Megane",
                        modal: "ModalSpainMeganeParent",
                        label: "Renault Mégane",
                      },
                      {
                        href: "/scenic",
                        src: "/images/calculateur_DC4_renault_Senic.webp",
                        alt: "Renault Scenic",
                        modal: "ModalSpainScenicParent",
                        label: "Renault Scénic",
                      },
                      {
                        href: "/fluence",
                        src: "/images/calculateur_DC4_renault-fluence.webp",
                        alt: "Renault Fluence",
                        modal: "ModalSpainFluenceParent",
                        label: "Renault Fluence",
                      },
                      {
                        href: "/clio-rs",
                        src: "/images/calculateur_DC4_clioRS.webp",
                        alt: "Ford Focus",
                        modal: "ModalSpainClioRSParent",
                        label: "Renault Clio RS",
                      },
                    ].map((car, index) => (
                      <div key={index} className="carsCard rounded-md">
                        <button
                          onClick={() =>
                            document.getElementById(`${car?.modal}`).showModal()
                          }
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
                        </button>
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
                    <p className="text-[20px] font-semibold text-[#374151]">
                      Vente et reprogrammation
                    </p>
                    <p className="text-[16px] text-[#374151] mt-1">
                      Garantie constructeur - satisfait ou remboursé
                    </p>
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
        <div className="md:my-[40px] my-[30px] md:px-0 px-6">
          <Review />
        </div>
      </section>
    </>
  );
};

export default HeroSpain;
