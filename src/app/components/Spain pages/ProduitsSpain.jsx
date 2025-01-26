"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalCaptur from "./CapturSpain/CapturComps/ModalCapture";
import DynaStocksSpain from "./DynaStockSpain";

const ProduitsSpain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // Toggle the state
  };

  return (
    <main id="Productos">
      <section className="py-[90px] ">
        <div className="container mx-auto">
          <div className="product3rdCont">
            <main className="flex  flex-col z-20 relative">
              <div className="productTitle mx-auto bg-white/50">
                <div className="product border accent_color py-4 text-center rounded-md">
                  <h1 className="headingText font-semibold  my-1 text-[#374151]">
                    Calculadora Renault caja EDC (DC4)
                  </h1>
                  <p className="font-semibold mt-2 text-[#374151]">
                    Disponibilidad
                  </p>
                </div>
              </div>

              <div className="productscards grid xl:grid-cols-3  justify-center gap-6 mt-5">
                {/* Produits */}
                <div className="lg:w-full rounded-md shadow-sm p-5 singleProductCard accent_color bg-white/50 cursor-pointer">
                  <ModalCaptur />
                </div>

                {/* Produit 2 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <div className="h-[30px]">
                      <DynaStocksSpain carName="Renault Clio" />
                    </div>
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src="/images/productDefault.webp"
                      alt=""
                      objectFit="cover"
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/clio">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px]  hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src="/images/calculateur_DC4_Renault_Clio4.webp"
                          alt="calculateur_DC4_Renault_Capture"
                          loading="lazy"
                          className=" h-[70px] object-contain ms-3"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className=" text-[22px] font-medium text-strt  text-[#374151]">
                          Renault Clio IV
                        </h2>
                        <p className="text-sm">à partir de 2012 </p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-center gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="clio/essence" className=" text-[15px]">
                        <h2>1.2 Essence</h2>
                      </Link>
                    </div>
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link className=" text-[15px]" href="/clio/diesel">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 3 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <div className="h-[30px]">
                      <DynaStocksSpain carName="Renault Megane" />
                    </div>
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src="/images/productMegane.webp"
                      alt=""
                      objectFit="cover"
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/megane">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px]  hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src="/images/calculateur_DC4_renault-megane.webp"
                          alt="calculateur_DC4_Renault_Capture"
                          loading="lazy"
                          className=" h-[70px] object-contain"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151]">
                          Renault Mégane
                        </h2>
                        <p className="text-sm">de 2008 to 2013 </p>
                      </div>
                    </div>
                  </Link>

                  <div className="flex justify-center gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link className="  text-[15px]" href="/megane/essence">
                        <h2>1.2 Essence</h2>
                      </Link>
                    </div>
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/megane/diesel" className="  text-[15px]">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 4 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaStocksSpain carName="Renault Scenic" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src="/images/productScenic.webp"
                      alt=""
                      objectFit="cover"
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/scenic">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src="/images/calculateur_DC4_renault_Senic.webp"
                          alt="calculateur_DC4_Renault_Capture"
                          loading="lazy"
                          className=" h-[65px] ms-3 object-contain"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Scénic
                        </h2>
                        <p className="text-sm">à partir de 2008</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/scenic/diesel" className="  text-[15px]">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 5 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaStocksSpain carName="Renault Fluence" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src="/images/productDefault.webp"
                      alt=""
                      objectFit="cover"
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/fluence">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src="/images/calculateur_DC4_renault-fluence.webp"
                          alt="calculateur_DC4_Renault_Capture"
                          loading="lazy"
                          className=" h-[65px] ms-3 object-contain"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Fluence
                        </h2>
                        <p className="text-sm">à partir de 2009</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/fluence/diesel" className="  text-[15px]">
                        <h2>1.5 Diesel</h2>
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                {/* Product 6 */}

                <div className="lg:w-full rounded-md  shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaStocksSpain carName="Clio 4 RS" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src="/images/productDefault.webp"
                      alt=""
                      objectFit="cover"
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/clio-rs">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src="/images/calculateur_DC4_clioRS.webp"
                          alt="calculateur_DC4_Renault_Capture"
                          loading="lazy"
                          className=" h-[65px] ms-3 object-contain"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Clio RS
                        </h2>
                        <p className="text-sm">à partir de 2010</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/clio-rs/essence" className=" text-[15px]">
                        <h2>1.6 Essence</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProduitsSpain;
