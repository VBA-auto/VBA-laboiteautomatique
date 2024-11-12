"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReturnButton from "@/components/ReturnButton";
import SubHeader from "@/components/SubHeader";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResponsiveSlider from "@/components/ResponsiveSlider";
import Head from "next/head";
import Image from "next/image";
import { BsCopy } from "react-icons/bs";
import VehicleStockDisplay from "@/components/VehicleStockDisplay";
import { FaArrowRight } from "react-icons/fa";

const SingleVehicleView = ({ params: paramsPromise }) => {
  const [params, setParams] = useState(null); // Initialize params state
  const [vehicleData, setVehicleData] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);
  const [stock, setStock] = useState(0);

  // Unwrap params with useEffect and set it to state
  useEffect(() => {
    (async () => {
      const unwrappedParams = await paramsPromise;
      setParams(unwrappedParams); // Set the resolved params
    })();
  }, [paramsPromise]);

  const url = params?.url;

  // Fetch vehicle data based on the URL once params are resolved
  useEffect(() => {
    if (!url) return; // Ensure `url` is defined before fetching data

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vba-blue-server.onrender.com/cars",
          {
            cache: "no-store",
          }
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
          console.error("Vehicle or type not found for the given URL:", url);
        }
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData(); // Fetch data on component mount when URL is available
  }, [url]);

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="produits ">
        <div className="">
          {selectedType ? (
            <div className="container mx-auto">
              <Head>
                <title>
                  {selectedType.title} - {selectedType.marque}
                </title>
                <meta name="description" content={selectedType.description} />
              </Head>
              <div className="md:w-3/4 mx-auto md:min-h-[538px]">
                <div className="md:flex  justify-center">
                  <div className="md:w-[400px] p-4  bg-white rounded-tl-[5px] ">
                    <div className="md:flex items-center">
                      <div className="md:w-[400px]   rounded-s-md ">
                        <p className="text-[14px] mt-1">
                          <Link href="/">
                            <span className="text-gray-400">Home </span>&gt;
                          </Link>
                          <span className="text-gray-400 hover:underline">
                            {" "}
                            {selectedType.marque}
                          </span>{" "}
                          &gt;
                          <span className="text-gray-400 hover:underline">
                            {" "}
                            {selectedType.carModel}
                          </span>{" "}
                          &gt;
                          <span className="text-gray-700 hover:underline">
                            {" "}
                            {selectedType.carType}
                          </span>{" "}
                        </p>
                        <div className="w-full mt-5">
                          <div className="">
                            <ResponsiveSlider images={selectedType?.images} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ///////////////////////////////// */}
                  <div className="md:w-[400px] bg-white rounded-tr-[5px] border-l-[1px] md:pb-0 pb-1">
                    <div className="flex justify-between items-center px-4 pt-4 pb-1">
                      <ReturnButton />
                      <div className="">
                        <VehicleStockDisplay
                          modelName={vehicleData?.model}
                          carType={
                            selectedType
                              ? Object.keys(vehicleData.types).find(
                                  (key) =>
                                    vehicleData.types[key] === selectedType
                                )
                              : ""
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="px-4 mb-2">
                        <p className="text-[14px] text-gray-400">Désignation</p>
                        <h1 className="text-[15px]">{selectedType?.title}</h1>
                      </div>

                      <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">Description</p>
                        <p className="text-[15px]">
                          {selectedType?.description}
                        </p>
                      </div>
                      <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">
                          Compatibilité
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedType?.compatibility
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
                      <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">Garantie</p>
                        <p className="text-[15px]">{selectedType?.garantie}</p>
                      </div>
                      <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">Véhicule</p>
                        <p className="text-[15px]">{selectedType?.vehicule}</p>
                      </div>
                      <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">
                          Info complémentaire
                        </p>
                        <p className="text-[15px]">
                          {selectedType?.compliment}
                        </p>
                      </div>
                      <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">
                          Référence OE
                        </p>
                        <p className="text-[15px]">{selectedType?.numeroOE}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ////////////////////////// */}

                <div className="bg-white border rounded-b-[5px] md:w-[800px] mx-auto md:pt-0 pt-5">
                  <div className="md:flex md:px-5 px-4 py-1 justify-between">
                    <div className="md:w-1/2 flex items-center gap-5">
                      <div className="border py-2 bg-white rounded-md">
                        <Image
                          src={selectedType?.images[0]}
                          width={60}
                          height={50}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-[15px] text-gray-500">
                          {selectedType.marque}
                        </p>
                        <h1 className="my-1">{selectedType.vehicule}</h1>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex items-center md:justify-end justify-center gap-5">
                      <div className="text-center">
                        {Number(stock) <= 0 ? (
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
                              document.getElementById("my_modal_3").showModal()
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
                          src={selectedType?.images[0]}
                          width={60}
                          height={50}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-[15px] text-gray-500">
                          {selectedType.marque}
                        </p>
                        <h1 className="my-1">{selectedType.vehicule}</h1>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-3">
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600 text-[15px]">Prix </p>
                        <p className="text-[#2C80EF] text-[15px]">
                          {" "}
                          {selectedType.prix} €
                        </p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600 text-[15px]">
                          Programmation{" "}
                        </p>
                        <p className="text-[#2C80EF] text-[15px]">
                          {selectedType.programmation} €
                        </p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600 text-[15px]">Transport </p>
                        <p className="text-[#2C80EF] text-[15px]">
                          {selectedType.transport} €
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
                          Code de réduction
                        </button>
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
                              <p className="font-[500] text-center">
                                {selectedType?.coupon}
                              </p>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    selectedType?.coupon
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
                                {selectedType?.finalPrice} €
                              </p>
                              <p className="text-[#2C80EF] text-[17px] bg-gray-50 px-2 rounded-md">
                                {selectedType.finalPrice - 50} €
                              </p>
                            </div>
                          </>
                        ) : (
                          <p className="text-[#2C80EF] text-[15px]">
                            {selectedType.finalPrice} €
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <Link target="_blank" href={selectedType?.payLink}>
                        <button className="bg-[#2c80efcc] text-white text-[14px] px-2 py-2.5 rounded-md shadow-md">
                          Valider la commande
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          ) : (
            <>
              <div className="h-[538px] flex flex-col justify-center">
                <div className="w-1/2 mx-auto mt-8 text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                  <p className="text-lg text-white">Recherche en cours...</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SingleVehicleView;
