"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";
import ResponsiveSlider from "@/components/ResponsiveSlider";
import { BsCopy } from "react-icons/bs";

import Image from "next/image";
import VehicleRef from "@/components/VehicleRef";

const SingleSearchView = ({ params }) => {
  const [SearchSingleView, setSingleSearchView] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = params?.url;

  const [stock, setStock] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vba-blue-server.onrender.com/refs"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();

        // Find the vehicle matching the provided URL
        const vehicle = result.find((v) =>
          Object.values(v.types).some((type) => type.url === url)
        );

        if (vehicle) {
          // Find the matching type (e.g., diesel or essence)
          const typeKey = Object.keys(vehicle.types).find(
            (key) => vehicle.types[key].url === url
          );

          if (typeKey) {
            const selected = vehicle.types[typeKey];
            setSelectedType(selected); // Set the selected type
            setVehicleData(vehicle); // Set the entire vehicle data
            setStock(selected.stock); // Update the stock value
          }
        } else {
          console.error("Vehicle or type not found for the given URL.");
        }
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData(); // Fetch data on component mount
  }, [url]);

  useEffect(() => {
    console.log("Params object:", params); // Log params

    const fetchArticle = async () => {
      try {
        const response = await fetch("/searchData.json", {
          cache: "force-cache", // Added cache for performance
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Searching for article with ref:", params.ref);

        const foundArticle = data.find((article) => {
          console.log("Checking article ref:", article.ref);
          return article.ref === params.ref;
        });

        if (!foundArticle) {
          console.log("No article found with the given ref");
        }

        setSingleSearchView(foundArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [params]);

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="produits">
        {SearchSingleView ? (
          <>
            <Head>
              <title>
                {SearchSingleView.title} - {SearchSingleView.brand}
              </title>
              <meta name="description" content={SearchSingleView.description} />
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
                        {SearchSingleView.brand} &gt;
                      </span>{" "}
                      <span className="text-gray-400">Réf &gt;</span>{" "}
                      <span className="text-gray-700">
                        {SearchSingleView.ref}
                      </span>{" "}
                    </p>
                    <div className="md:w-full  mt-5">
                      <div className="md:w-full">
                        <ResponsiveSlider images={SearchSingleView?.images} />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[400px] bg-white rounded-tr-[5px] border-l-[1px] md:pb-0 pb-5">
                    <div className="flex justify-between items-center px-4 pt-4 pb-1">
                      <ReturnButton />
                      <div className="">
                        {/* Here will show the Vehicleref by matching ref code */}
                        <VehicleRef
                          modelName={SearchSingleView.title}
                          refCode={SearchSingleView.ref}
                        />
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="px-4 mb-2">
                        <p className="text-[14px] text-gray-400">Désignation</p>
                        <h1 className="text-[15px]">
                          {SearchSingleView.title}
                        </h1>
                      </div>
                      <div className="px-4 mb-2">
                        <p className="text-[14px] text-gray-400">Description</p>
                        <p className="text-[15px]">
                          {SearchSingleView.description}
                        </p>
                      </div>
                      <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">
                          Compatibilité
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {SearchSingleView.compatibility
                            .split(", ")
                            .map((car, index) => (
                              <button
                                key={index}
                                className="bg-gray-100  px-2 text-[14px] text-black mt-1 rounded"
                              >
                                {car}
                              </button>
                            ))}
                        </div>
                      </div>
                      <div className="px-4 mb-2">
                        <p className="text-[14px] text-gray-400">Garantie</p>
                        <p className="text-[15px]">
                          {SearchSingleView.warranty}
                        </p>
                      </div>
                      <div className="px-4 mb-2">
                        <p className="text-[14px] text-gray-400">Véhicule</p>
                        <p className="text-[15px]">
                          {SearchSingleView.vehicle}
                        </p>
                      </div>
                      <div className="px-4 mb-2">
                        <p className="text-[14px] text-gray-400">
                          Info complémentaire{" "}
                        </p>
                        <p className="text-[15px]">
                          {SearchSingleView?.Info_complémentaire}
                        </p>
                      </div>
                      <div className="px-4 mb-2">
                        <p className="text-[14px] text-gray-400">
                          Référence OE
                        </p>
                        <p className="text-[15px]">
                          {SearchSingleView?.OE_number}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border rounded-b-[5px] md:w-[800px] mx-auto md:pt-0 pt-5">
                  <div className="md:flex px-5 py-1 justify-between">
                    <div className="md:w-1/2 flex items-center gap-5">
                      <div className="border py-2 bg-white rounded-md">
                        <Image
                          src={SearchSingleView?.images[0]}
                          width={60}
                          height={50}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-[15px] text-gray-400">
                          {SearchSingleView.brand}
                        </p>
                        <h1 className="my-1">{SearchSingleView.title}</h1>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex items-center md:justify-end justify-center gap-5 ">
                      <div className="text-center">
                        {/* {Number(stock) <= 0 ? (
                          <>
                            <div className="md:flex gap-5 mt-3 md:mt-0 items-center">
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
                              document
                                .getElementById("my_modal_ref")
                                .showModal()
                            }
                            className=" bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
                          >
                            Commander
                          </button>
                        )} */}
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_ref").showModal()
                          }
                          className=" bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
                        >
                          Commander
                        </button>
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
                          src={SearchSingleView?.images[0]}
                          width={60}
                          height={50}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-[15px] text-gray-500">
                          {SearchSingleView.brand}
                        </p>
                        <h1 className="my-1">{SearchSingleView.title}</h1>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-3">
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600 text-[15px]">Prix </p>
                        <p className="text-[#2C80EF] text-[15px]">
                          {SearchSingleView.ogPrice} €
                        </p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600 text-[15px]">
                          Programmation{" "}
                        </p>
                        <p className="text-[#2C80EF] text-[15px]">
                          {" "}
                          {SearchSingleView.programationPrice} €
                        </p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600 text-[15px]">Transport </p>
                        <p className="text-[#2C80EF] text-[15px]">
                          {" "}
                          {SearchSingleView.transportPrice} €
                        </p>
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
                        >
                          Code de réduction disponible
                        </button>
                      )}

                      {showSpinner && (
                        <div className="flex justify-center mt-4">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-400"></div>
                        </div>
                      )}

                      {showCoupon && (
                        <div className="mt-2 flex flex-col items-center justify-center">
                          <div className="relative bg-white p-4 rounded-lg border shadow-lg w-[300px] ">
                            <div className="flex justify-between items-center">
                              <p className="text-white">X</p>
                              <p className="font-[500] text-center">
                                {SearchSingleView?.coupon}
                              </p>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    SearchSingleView?.coupon
                                  );
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
                                {SearchSingleView.finalPrice} €
                              </p>
                              <p className="text-[#2C80EF] text-[17px] bg-gray-50 px-2 rounded-md">
                                {SearchSingleView.finalPrice - 50} €
                              </p>
                            </div>
                          </>
                        ) : (
                          <p className="text-[#2C80EF] text-[15px]">
                            {SearchSingleView.finalPrice} €
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <Link target="_blank" href={SearchSingleView?.payLink}>
                        <button className="bg-[#2c80efcc] text-white text-[14px] px-2 py-2.5 rounded-md shadow-md">
                          Valider la commande
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </>
        ) : (
          <div className="h-[65vh] flex flex-col justify-center">
            <div className="w-1/2 mx-auto mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-lg text-white">Recherche en cours...</p>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default SingleSearchView;
