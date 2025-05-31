"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReturnButton from "@/components/ReturnButton";
import SubHeader from "@/components/SubHeader";
import Link from "next/link";
import { useState } from "react";
import ResponsiveSlider from "@/components/ResponsiveSlider";
import Head from "next/head";
import Image from "next/image";
import { BsCopy } from "react-icons/bs";
import VehicleStockDisplay from "@/components/VehicleStockDisplay";
import { FaArrowRight } from "react-icons/fa";
import PricngPop890 from "@/components/PricngPop890";
import VehicleImages from "@/components/Cal-NormalImg";

// const imagesSlide = [
//   "https://laboiteautomatique.com/images/cal-normal-0.webp",
//   "https://laboiteautomatique.com/images/cal-normal-1.webp",
//   "https://laboiteautomatique.com/images/cal-normal-2.webp",
//   "https://laboiteautomatique.com/images/cal-normal-3.webp",
//   "https://laboiteautomatique.com/images/cal-normal-4.webp",
//   "https://laboiteautomatique.com/images/cal-normal-5.webp",
//   "https://laboiteautomatique.com/images/cal-normal-6.webp",
//   "https://laboiteautomatique.com/images/cal-normal-7.webp",
// ];
const imagesSlide = VehicleImages();
const SingleVehicleViewCapturEssence = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [data, setData] = useState([]);
  const [copied, setCopied] = useState(false);
  const [stock, setStock] = useState(null);

  const handleStockChange = (currentStock) => {
    setStock(currentStock);
  };

  return (
    <main>
      <Head>
        <title>Calculateur Renault Captur 1.2 Essence</title>
        <meta name="title" content="Calculateur Renault Captur 1.2 Essence" />
        <meta
          name="description"
          content="Trouver ici votre calculateur pour boite automatique pour Renault Captur 1.2 Essence programmation incluse "
        />
      </Head>
      <SubHeader />
      <Header />
      <section className="produits ">
        <div className="">
          <div className="container mx-auto mb-2.5">
            <div className="xl:w-3/4 mx-auto xl:min-h-[538px]">
              <div className="xl:flex  justify-center">
                <div className="xl:w-[400px] p-4  bg-white rounded-tl-[5px] ">
                  <div className="xl:flex items-center">
                    <div className="xl:w-[400px]   rounded-s-md ">
                      <p className="text-[14px] mt-1">
                        <Link href="/">
                          <span className="text-gray-400">Home </span>&gt;
                        </Link>
                        <span className="text-gray-400 hover:underline">
                          {" "}
                          Renault
                        </span>{" "}
                        &gt;
                        <span className="text-gray-400 hover:underline">
                          {" "}
                          Captur
                        </span>{" "}
                        &gt;
                        <span className="text-gray-700 hover:underline">
                          {" "}
                          1.2 Essence
                        </span>{" "}
                      </p>
                      <div className="w-full mt-5">
                        <div className="max-h-[280px]">
                          <ResponsiveSlider images={imagesSlide} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ///////////////////////////////// */}
                <div className="xl:w-[400px] bg-white rounded-tr-[5px] border-l-[1px] md:pb-0 pb-1 ">
                  <div className="flex justify-between items-center px-4 pt-4 pb-1 singretur">
                    <ReturnButton />
                    <div className="">
                      <VehicleStockDisplay
                        modelName="Renault Captur"
                        carType="essence"
                        onStockChange={handleStockChange}
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="px-4 mb-2">
                      <p className="text-[14px] text-gray-400">Désignation</p>
                      <h1 className="text-[15px]">
                        Calculateur Renault Captur 1.2 Essence
                      </h1>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Description</p>
                      <p className="text-[15px]">
                        Module de commande (calculateur) Renault Captur Essence
                      </p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Compatibilité</p>
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-gray-100  px-2 text-[14px] text-black mt-1 rounded">
                          Captur
                        </button>
                      </div>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Garantie</p>
                      <p className="text-[15px]">12 mois neuf</p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Véhicule</p>
                      <p className="text-[15px]">Captur 1.2 Essence</p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">
                        Info complémentaire
                      </p>
                      <p className="text-[15px]">Captur à partir de 2012</p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Référence OE</p>
                      <p className="text-[15px]">A2C30743000 - 01 K00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ////////////////////////// */}

              <div className="bg-white border rounded-b-[5px] xl:w-[800px] mx-auto md:pt-0 pt-5">
                <div className="md:flex md:px-5 px-4 py-1 justify-between">
                  <div className="md:w-1/2 flex items-center gap-5">
                    <div className="border py-2 bg-white rounded-md">
                      <Image
                        unoptimized
                        src={imagesSlide[0]}
                        width={60}
                        height={50}
                        className="w-[60px] h-[40px]"
                        priority={true}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <p className="text-[15px] text-gray-500">Renault</p>
                      <h1 className="my-1">Captur 1.2 Essence</h1>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex items-center md:justify-end justify-center gap-5">
                    <div className="text-center">
                      {stock === 0 ? (
                        <>
                          <div className="md:flex gap-5 mt-3 md:mt-0 items-center">
                            <div className="flex gap-3 items-center mb-3 md:mb-0">
                              <FaArrowRight className="text-[14px] text-[#2C80EF] animate-slide-arrow" />
                              <p className="text-[15px] text-[#5BB853]">
                                Bientôt disponible
                              </p>
                            </div>
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
                            document.getElementById("my_modal_3").showModal()
                          }
                          className=" bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
                        >
                          Commander
                        </button>
                      )}
                      {/* <button
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        className=" bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
                      >
                        Commander
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL */}
            <dialog id="my_modal_3" className="modal">
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
                        unoptimized
                        src={imagesSlide[0]}
                        width={60}
                        height={50}
                        className=""
                        priority={true}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <p className="text-[15px] text-gray-500">Renault</p>
                      <h1 className="my-1">Captur 1.2 Essence</h1>
                    </div>
                  </div>
                  <hr />
                  <div className="mt-3">
                    <PricngPop890 />
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
                        <div className="relative bg-white px-4 py-2.5 rounded-lg border shadow-lg w-[230px] ">
                          <div className="flex justify-between items-center">
                            <p className="text-white">X</p>
                            <p className="font-[500] text-center">PROG2023</p>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(PROG2023);
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
                            <p className="text-gray-300 text-[15px] prices line-through">
                              1139.00 €
                            </p>
                            <p className="text-[#2C80EF] text-[17px] bg-gray-50 px-2 rounded-md">
                              {1139 - 50} €
                            </p>
                          </div>
                        </>
                      ) : (
                        <p className="text-[#2C80EF] text-[15px] prices">
                          1139.00 €
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      target="_blank"
                      href="https://buy.stripe.com/9AQ03E9O0cJx9qMeWw"
                    >
                      <button className="orderButton">Valider</button>
                    </Link>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SingleVehicleViewCapturEssence;
