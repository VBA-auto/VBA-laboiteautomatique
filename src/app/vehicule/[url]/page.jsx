"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReturnButton from "@/components/ReturnButton";
import SubHeader from "@/components/SubHeader";
import Link from "next/link";
import { useEffect, useState, useCallback, useMemo } from "react";
import ResponsiveSlider from "@/components/ResponsiveSlider";
import Head from "next/head";
import Image from "next/image";
import { BsCopy } from "react-icons/bs";

const SingleVehicleView = ({ params }) => {
  const [vehicleData, setVehicleData] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = params?.url;

  const [stock, setStock] = useState(0);
  useEffect(() => {
    if (selectedType) {
      setStock(selectedType.stock);
    }
  }, [selectedType]);

  const updateStock = useCallback(() => {
    setStock((prevStock) => (prevStock <= 0 ? 7 : prevStock - 1)); // Reset to 7 if 1, otherwise decrement
  }, []);

  useEffect(() => {
    const interval = setInterval(updateStock, 12 * 60 * 60 * 1000);
    // For testing, change 18 hours to 1000ms (1 second):
    // const interval = setInterval(updateStock, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [updateStock]);

  // 3. Memoize stock formatting to optimize performance
  const formatStock = useMemo(
    () => (value) => value.toString().padStart(2, "0"),
    []
  );

  useEffect(() => {
    if (!url) {
      console.error("URL is undefined or null");
      return;
    }

    // Fetch vehicle data with error handling and performance improvement
    const fetchVehicle = async () => {
      try {
        const response = await fetch("/searchVehicule.json", {
          cache: "force-cache", // Cache strategy for better performance
        });
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
          console.error("Fetched data is not an array or is empty");
          return;
        }

        const vehicle = data.find((vehicle) =>
          Object.values(vehicle.types).some((type) => type.url === url)
        );

        if (vehicle) {
          const type = Object.keys(vehicle.types).find(
            (key) => vehicle.types[key].url === url
          );
          if (type) {
            setSelectedType(vehicle.types[type]);
            setVehicleData(vehicle);
          }
        } else {
          console.error("Vehicle not found for URL:", url);
        }
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };

    fetchVehicle();
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
              <div className="md:w-3/4 mx-auto">
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
                        <p className="text-gray-700 py-1 text-center rounded-md flex justify-center items-center gap-2 text-[15px]">
                          <span
                            className={`w-[12px] h-[12px] ${
                              stock <= 1
                                ? "bg-red-500"
                                : stock <= 3
                                ? "bg-yellow-500"
                                : "bg-[#2aa31fc4]"
                            } rounded-full block`}
                          ></span>
                          En stock:{" "}
                          <span
                            className={`${
                              stock <= 1
                                ? "text-red-500"
                                : stock <= 3
                                ? "text-yellow-500"
                                : "text-[#2aa31fc4]"
                            } font-[500]`}
                          >
                            {formatStock(stock)}
                          </span>
                        </p>
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
                      {/* <div className="px-4 mb-3">
                        <p className="text-[14px] text-gray-400">Marque</p>
                        <p className="text-[15px]">{selectedType?.marque}</p>
                      </div> */}
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
                          Code reduction ci-dessous
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
                          Code de reduction disponible
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
                        <button className="bg-[#2c80efcc] text-white text-[15px] px-5 py-3 rounded-md shadow-md">
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
              <div className="h-[65vh] flex flex-col justify-center">
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
