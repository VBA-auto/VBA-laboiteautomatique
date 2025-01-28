"use client";
import Image from "next/image";
import React from "react";
import DynaStocksSpain from "../../DynaStockSpain";
import MeganeModal from "./MeganeModal";

const ModalMegane = () => {
  return (
    <>
      <div
        className=""
        onClick={() =>
          document.getElementById("ModalSpainMeganeParent").showModal()
        }
      >
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

        <div className="flex items-center border rounded-md gap-3 mt-[20px]  hover:bg-gray-100 hover:cursor-pointer">
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

        <div className="flex justify-center gap-5 mt-5">
          <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
            <div className=" text-[15px]">
              <h2>1.2 Essence</h2>
            </div>
          </div>
          <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
            <div className=" text-[15px]" href="captur/diesel">
              <h2>1.5 Diesel</h2>
            </div>
          </div>
        </div>
      </div>
      <dialog id="ModalSpainMeganeParent" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          {/* -------------------------------- */}
          <div className="modal-action mt-0">
            <form method="dialog">
              {/* Close button triggers closeModal */}
              <button className="">x</button>
            </form>
          </div>
          <MeganeModal />
        </div>
      </dialog>
    </>
  );
};

export default ModalMegane;
