"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalCaptur from "./CapturSpain/CapturComps/ModalCapture";
import DynaStocksSpain from "./DynaStockSpain";
import ModalClio from "./ClioSpain/ClioComps/ModalClio";
import ModalMegane from "./MeganeSpain/MeganeComps/ModalMegane";
import ModalScenic from "./ScenicSpain/ScenicComps/ModalScenic";
import ModalFluence from "./FluenceSpain/FluenceComps/ModalFluence";
import CliorsSpainEseence from "./ClioRsSpain/ClioRsSpainEssence";
import ModalClioRs from "./ClioRsSpain/ClioRSComps/ModalClioRs";

const ProduitsSpain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // Toggle the state
  };

  return (
    <main id="Productos">
      <section className="pb-[40px] ">
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
                  <ModalClio />
                </div>

                {/* Produit 3 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <ModalMegane />
                </div>

                {/* Produit 4 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <ModalScenic />
                </div>

                {/* Produit 5 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <ModalFluence />
                </div>

                {/* Product 6 */}

                <div className="lg:w-full rounded-md  shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <ModalClioRs />
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
