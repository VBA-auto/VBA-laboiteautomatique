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

// JSON Product Data
const productData = {
  article_complementaire_info_1: "avec mécanisme d'embrayage",
  article_complementaire_info_2: "avec disque d'embrayage",
  type_entrainement: "Transmission à double embrayage",
  type_embrayage: "pour embrayage à sec",
  numero_article: "602 0016 00",
  notre_prix: "1484,21 €",
  fabricant: "LuK",
  numero_ean: "4014870368418",
  etat: "Neuf",
  payment_link: "https://buy.stripe.com/9AQ03E9O0cJx9qMeWw",
  stock: 5,
  images: [
    "https://a.allegroimg.com/s1080/11c6fa/44b881194702b1a95a3cd840b6c5/Zestaw-sprzegla-LUK-602-0016-00-Jakosc-czesci-zgodnie-z-GVO-Q-oryginal-z-logo-producenta-czesci-OEM-OES",
    "https://api-aftermarket.schaeffler.de/medias/csccProductDetail-602000300.webp?context=bWFzdGVyfHByb2R1Y3RpbWFnZXN8Njg4MzZ8aW1hZ2Uvd2VicHxwcm9kdWN0aW1hZ2VzL2g5OC9oMWIvOTMyMjEwODE1Nzk4Mi53ZWJwfDNiNGIwOTU3NGVlN2Y1Y2YyNDJkMTk3ODQwMjE2OWUxNjUxOWE4NGI0ZjI5YTdhMzBkMDc5MzJjZWU1YjY5YTI",
  ],
};

// SSR Function - This would typically be in getServerSideProps or getStaticProps
export async function getServerSideProps() {
  // In real implementation, you would fetch this data from API or database
  return {
    props: {
      productData: productData,
    },
  };
}

const CapessenceClutch = ({ productData: data = productData }) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);
  const [stock, setStock] = useState(data.stock);

  const handleStockChange = (currentStock) => {
    setStock(currentStock);
  };

  // Parse price for calculations
  const basePrice = parseFloat(
    data.notre_prix.replace("€", "").replace(",", ".")
  );
  const discountedPrice = basePrice - 50;

  return (
    <main>
      <Head>
        <title>
          {data.fabricant} {data.type_embrayage}
        </title>
        <meta
          name="title"
          content={`${data.fabricant} ${data.type_embrayage}`}
        />
        <meta
          name="description"
          content={`${data.article_complementaire_info_1} ${data.article_complementaire_info_2} - ${data.type_entrainement}`}
        />
      </Head>

      <div className="mt-8 text-center">
        <h1 className="textlg font-semibold">
          LuK 602 0016 00 Kit d&apos;embrayage - Renault Captur 1.2 Essence
        </h1>
      </div>

      <section className="produits rounded-lg mt-8">
        <div className="">
          <div className="container mx-auto mb-2.5">
            <div className="xl:w-3/4 mx-auto xl:min-h-[538px]">
              <div className="xl:flex justify-center">
                <div className="xl:w-[600px] p-4 bg-white rounded-tl-[5px]">
                  <div className="xl:flex items-center">
                    <div className="xl:w-[400px] rounded-s-md">
                      <p className="text-[14px] mt-1">
                        <Link href="/">
                          <span className="text-gray-400">Home </span>&gt;
                        </Link>
                        <span className="text-gray-400 hover:underline">
                          {" "}
                          {data.fabricant}
                        </span>{" "}
                        &gt;
                        <span className="text-gray-400 hover:underline">
                          {" "}
                          Embrayage
                        </span>{" "}
                        &gt;
                        <span className="text-gray-700 hover:underline">
                          {" "}
                          {data.numero_article}
                        </span>{" "}
                      </p>
                      <div className="w-full mt-5">
                        <div className="max-h-[280px]">
                          <ResponsiveSlider images={data.images} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="xl:w-[600px] bg-white rounded-tr-[5px] border-l-[1px] md:pb-0 pb-1">
                  <div className="flex justify-between items-center px-4 pt-4 pb-1 singretur">
                    <ReturnButton />
                    <div className="">
                      <VehicleStockDisplay
                        modelName={data.fabricant}
                        carType="embrayage"
                        stock={data.stock}
                        onStockChange={handleStockChange}
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="px-4 mb-2">
                      <p className="text-[14px] text-gray-400">Désignation</p>
                      <h1 className="text-[15px]">
                        {data.fabricant} {data.type_embrayage}
                      </h1>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Description</p>
                      <p className="text-[15px]">
                        {data.type_entrainement} -{" "}
                        {data.article_complementaire_info_1}
                      </p>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">
                        Article complémentaire
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-gray-100 px-2 text-[14px] text-black mt-1 rounded">
                          {data.article_complementaire_info_1}
                        </button>
                        <button className="bg-gray-100 px-2 text-[14px] text-black mt-1 rounded">
                          {data.article_complementaire_info_2}
                        </button>
                      </div>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Garantie</p>
                      <p className="text-[15px]">
                        12 mois {data.etat.toLowerCase()}
                      </p>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">
                        Type d&apos;entraînement
                      </p>
                      <p className="text-[15px]">{data.type_entrainement}</p>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">
                        Type d&apos;embrayage
                      </p>
                      <p className="text-[15px]">{data.type_embrayage}</p>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">
                        Numéro d&apos;article
                      </p>
                      <p className="text-[15px]">{data.numero_article}</p>
                    </div>
                    {/* 
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Numéro EAN</p>
                      <p className="text-[15px]">{data.numero_ean}</p>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">État</p>
                      <p className="text-[15px]">{data.etat}</p>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="bg-white border rounded-b-[5px] xl:w-full mx-auto md:pt-0 pt-5">
                <div className="md:flex md:px-5 px-4 py-1 justify-between">
                  <div className="md:w-1/2 flex items-center gap-5">
                    <div className="border py-2 bg-white rounded-md">
                      <Image
                        unoptimized
                        src={data.images[0]}
                        width={60}
                        height={50}
                        className="w-[60px] h-[40px]"
                        priority={true}
                        alt={data.fabricant}
                      />
                    </div>
                    <div className="">
                      <p className="text-[15px] text-gray-500">
                        {data.fabricant}
                      </p>
                      <h1 className="my-1">{data.type_embrayage}</h1>
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
                              <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-2 rounded-md hover:bg-[#2C80EF] hover:text-white block mx-auto">
                                Contactez-nous
                              </button>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            document
                              .getElementById("CapturClutchEsence")
                              .showModal()
                          }
                          className="bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
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
            <dialog id="CapturClutchEsence" className="modal">
              <div className="modal-box bg-white">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="border py-2 bg-white rounded-md">
                      <Image
                        unoptimized
                        src={data.images[0]}
                        width={60}
                        height={50}
                        className=""
                        priority={true}
                        alt={data.fabricant}
                      />
                    </div>
                    <div className="">
                      <p className="text-[15px] text-gray-500">
                        {data.fabricant}
                      </p>
                      <h1 className="my-1">{data.type_embrayage}</h1>
                    </div>
                  </div>
                  <hr />

                  {/* <div className="mt-5">
                    {showCoupon ? (
                      <p className="font-[500] text-normal text-center">
                        Code réduction ci-dessous
                      </p>
                    ) : (
                      ""
                    )}

                    {!showCoupon && (
                      <button
                        onClick={async () => {
                          setShowSpinner(true);
                          await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                          );
                          setShowSpinner(false);
                          setShowCoupon(true);
                        }}
                        className="text-blue-400 hover:text-blue-200 rounded-sm transition-transform duration-300 mt-4 mx-auto block text-[15px]"
                      >
                        Obtenir un code de réduction
                      </button>
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
                                setTimeout(() => setCopied(false), 1500);
                              }}
                              className="text-[#2C80EF] text-[15px] bg-gray-100 p-1 rounded-md"
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
                  </div> */}

                  <div className="mt-5">
                    <hr />
                    <div className="flex justify-between my-2">
                      <p className="text-gray-600 text-[15px]">Total </p>
                      {showCoupon ? (
                        <>
                          <div className="flex items-center gap-2">
                            <p className="text-gray-300 text-[15px] prices line-through">
                              {data.notre_prix}
                            </p>
                            <p className="text-[#2C80EF] text-[17px] bg-gray-50 px-2 rounded-md">
                              {discountedPrice.toFixed(2).replace(".", ",")} €
                            </p>
                          </div>
                        </>
                      ) : (
                        <p className="text-[#2C80EF] text-[15px] prices">
                          {data.notre_prix}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <Link target="_blank" href={data.payment_link}>
                      <button className="orderButton bg-[#2C80EF] text-white py-2 px-6 rounded-md hover:bg-[#2c80efd7] transition-colors">
                        Valider
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CapessenceClutch;
