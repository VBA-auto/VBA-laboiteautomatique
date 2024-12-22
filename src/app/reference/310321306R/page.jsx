"use client";

import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";
import ResponsiveSlider from "@/components/ResponsiveSlider";
import { BsCopy } from "react-icons/bs";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import NewVehicleRef from "@/components/NewVehicleRef";

const imagesSlide = [
  "/images/plat-1.webp",
  "/images/plat-2.webp",
  "/images/plat-3.webp",
  "/images/plat-4.webp",
  "/images/plat-5.webp",
  "/images/plat-6.webp",
];

const SingleSearchView = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);
  const [stock, setStock] = useState();

  const handleStockChange = (currentStock) => {
    setStock(currentStock);
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="produits">
        <Head>
          <title>
            Calculateur boîte automatique EDC Renault référence 310321306R
          </title>
          <meta
            name="description"
            content="Commandez ici votre Calculateur pour boîte automatique EDC Renault référence 310321306R, programmation incluse. Vérifiez disponibilité."
          />
        </Head>
        <div className="container mx-auto">
          <div className="md:w-3/4 mx-auto ">
            <div className="md:flex  justify-center ">
              <div className="md:w-[400px] p-4  bg-white rounded-tl-[5px]">
                <p className="text-[14px] mt-1">
                  <Link href="/">
                    <span className="text-gray-400">Home &gt;</span>
                  </Link>
                  <span className="text-gray-400 hover:underline">
                    {" "}
                    Renault &gt;
                  </span>{" "}
                  <span className="text-gray-400">Réf &gt;</span>{" "}
                  <span className="text-gray-700">310321306R</span>{" "}
                </p>
                <div className="md:w-full  mt-5">
                  <div className="md:w-full">
                    <ResponsiveSlider images={imagesSlide} />
                  </div>
                </div>
              </div>
              <div className="md:w-[400px] bg-white rounded-tr-[5px] border-l-[1px] md:pb-0 pb-5">
                <div className="flex justify-between items-center px-4 pt-4 pb-1">
                  <ReturnButton />
                  <div className="">
                    <NewVehicleRef
                      modelName="Calculateur Renault"
                      refCode="310321306R"
                      onStockChange={handleStockChange}
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="px-4 mb-2">
                    <p className="text-[14px] text-gray-400">Désignation</p>
                    <h1 className="text-[15px]">Calculateur Renault</h1>
                  </div>
                  <div className="px-4 mb-2">
                    <p className="text-[14px] text-gray-400">Description</p>
                    <p className="text-[15px]">
                      Module de commande (calculateur) pour boite automatique
                      DW5006
                    </p>
                  </div>
                  <div className="px-4 mb-3">
                    <p className="text-[14px] text-gray-400">Compatibilité</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-gray-100  px-2 text-[14px] text-black mt-1 rounded">
                        Scenic IV
                      </button>
                      <button className="bg-gray-100  px-2 text-[14px] text-black mt-1 rounded">
                        Espace V
                      </button>
                      <button className="bg-gray-100  px-2 text-[14px] text-black mt-1 rounded">
                        Megane IV
                      </button>
                    </div>
                  </div>
                  <div className="px-4 mb-2">
                    <p className="text-[14px] text-gray-400">Garantie</p>
                    <p className="text-[15px]">12 mois neuf</p>
                  </div>
                  <div className="px-4 mb-2">
                    <p className="text-[14px] text-gray-400">Véhicule</p>
                    <p className="text-[15px]">
                      Scenic IV, Espace V, Megane IV
                    </p>
                  </div>
                  <div className="px-4 mb-2">
                    <p className="text-[14px] text-gray-400">
                      Info complémentaire{" "}
                    </p>
                    <p className="text-[15px]">
                      Scenic IV (JFA - RFA), Espace V (JFC), Megane IV (LFF)
                    </p>
                  </div>
                  <div className="px-4 mb-2">
                    <p className="text-[14px] text-gray-400">Référence OE</p>
                    <p className="text-[15px]">310321306R - 320106643R</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-b-[5px] md:w-[800px] mx-auto md:pt-0 pt-5">
              <div className="md:flex px-5 py-1 justify-between">
                <div className="md:w-1/2 flex items-center gap-5">
                  <div className="border py-2 bg-white rounded-md">
                    <Image
                      src={imagesSlide[0]}
                      width={60}
                      height={50}
                      className="w-[60px] h-[40px]"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-[15px] text-gray-400">Renault</p>
                    <h1 className="my-1">Calculateur Renault</h1>
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center md:justify-end justify-center gap-5 ">
                  <div className="text-center">
                    {stock === 0 ? (
                      <>
                        <div className="md:flex gap-5 mt-3 md:mt-0 items-center">
                          <FaArrowRight className="text-[14px] text-[#2C80EF] animate-slide-arrow" />
                          <p className="text-[15px] text-[#5BB853]">
                            Bientôt disponible
                          </p>
                          <Link href="/contact">
                            {" "}
                            <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-2 rounded-md hover:bg-[#2C80EF] hover:text-white block mx-auto">
                              Contactez-nous
                            </button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_ref").showModal()
                        }
                        className=" bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
                      >
                        Commander
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MODAL */}
          <dialog id="my_modal_ref" className="modal">
            <div className="modal-box bg-white">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="">
                <div className=" flex items-center gap-5 mb-5">
                  <div className="border py-2 bg-white rounded-md">
                    <Image
                      src={imagesSlide[0]}
                      width={60}
                      height={50}
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-[15px] text-gray-500">Renault</p>
                    <h1 className="my-1">Calculateur Renault</h1>
                  </div>
                </div>
                <hr />
                <div className="mt-3">
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-600 text-[15px]">Prix </p>
                    <p className="text-[#2C80EF] text-[15px]">1050 €</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-600 text-[15px]">Programmation </p>
                    <p className="text-[#2C80EF] text-[15px]">0 €</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-600 text-[15px]">Transport </p>
                    <p className="text-[#2C80EF] text-[15px]"> 19 €</p>
                  </div>
                </div>
                <div className="mt-5">
                  {showCoupon ? (
                    <p className="font-[500] text-normal text-center">
                      Code réduction ci-dessous
                    </p>
                  ) : (
                    ""
                  )}

                  {!showCoupon && ( // Add this condition to hide the button when the coupon is shown
                    <button
                      onClick={async () => {
                        setShowSpinner(true);
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        ); // Show spinner for 1 second
                        setShowSpinner(false);
                        setShowCoupon(true); // Show coupon after spinner
                      }}
                      className="text-blue-400 hover:text-blue-200  rounded-sm transition-transform duration-300 mt-4 mx-auto block text-[15px]"
                    ></button>
                  )}

                  {showSpinner && (
                    <div className="flex justify-center mt-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-400"></div>
                    </div>
                  )}

                  {showCoupon && (
                    <div className="mt-2 flex flex-col items-center justify-center">
                      <div className="relative bg-white px-4 py-2.5 rounded-lg border shadow-lg w-[230px]">
                        <div className="flex justify-between items-center">
                          <p className="text-white">X</p>
                          <p className="font-[500] text-center">PROG2023</p>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText("PROG2023");
                              setCopied(true);
                              setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
                            }}
                            className=" text-[#2C80EF] text-[15px] bg-gray-100 p-1 rounded-md"
                          >
                            <BsCopy />
                          </button>
                        </div>
                      </div>

                      {copied && (
                        <p className="mt-2 text-[#2C80EF] text-sm">
                          code copié!
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <hr />
                  <div className="flex justify-between my-2 ">
                    <p className="text-gray-600 text-[15px]">Total </p>
                    {showCoupon ? (
                      <>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-300 text-[15px] line-through">
                            1069 €
                          </p>
                          <p className="text-[#2C80EF] text-[17px] bg-gray-50 px-2 rounded-md">
                            1019 €
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-[#2C80EF] text-[15px]">1069 €</p>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    target="_blank"
                    href="https://buy.stripe.com/7sI8Aa5xKgZN5awaGq"
                  >
                    <button className="orderButton">Valider</button>
                  </Link>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SingleSearchView;
