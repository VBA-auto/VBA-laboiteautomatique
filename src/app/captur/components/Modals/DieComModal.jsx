"use client";
import PricngPop890 from "@/components/PricngPop890";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DieComModal = ({ imagesSlide }) => {
  return (
    <dialog id="my_modal_3" className="modal bg-black/60">
      <div className="modal-box bg-white max-w-4xl w-full">
        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Header Section */}
        <div className="flex items-center gap-5 mb-6">
          <div className="border p-2 bg-white rounded-md">
            <Image
              unoptimized
              src={imagesSlide[0]}
              width={70}
              height={60}
              priority={true}
              alt="Renault Captur 1.2 Essence"
              className="rounded"
            />
          </div>
          <div>
            <p className="text-[15px] text-gray-500">Renault</p>
            <h1 className="font-semibold text-lg">Captur 1.2 Essence</h1>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reconditionné */}
          <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Reconditionné
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Produit remis à neuf, testé et garanti 6 mois
            </p>
            <div className="mb-4">
              <div>
                <div className="flex items-end justify-between mb-2">
                  <p className="text-gray-600 text-[15px]">Prix</p>
                  <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
                  <p className="text-[#5BB853] text-[15px] prices">790.00 €</p>
                </div>
                <div className="flex items-end justify-between mb-2">
                  <p className="text-gray-600 text-[15px]">Programmation</p>
                  <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
                  <p className="text-[#5BB853] text-[15px] prices">230.00 €</p>
                </div>
                <div className="flex items-end justify-between mb-2">
                  <p className="text-gray-600 text-[15px]">Transport</p>
                  <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
                  <p className="text-[#5BB853] text-[15px] prices">19.00 €</p>
                </div>
              </div>
            </div>
            <Link
              target="_blank"
              href="https://buy.stripe.com/test_recondition"
            >
              <button className="w-full bg-[#5BB853] text-white rounded-md py-2 hover:bg-[#4da146] transition">
                Commander Reconditionné
              </button>
            </Link>
          </div>
          {/* Neuf */}
          <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Neuf</h2>
            <p className="text-gray-500 text-sm mb-4">
              Produit 100% neuf avec 12 mois de garantie
            </p>
            <div className=" mb-4">
              <PricngPop890 />
            </div>
            <Link
              target="_blank"
              href="https://buy.stripe.com/9AQ03E9O0cJx9qMeWw"
            >
              <button className="w-full bg-[#2C80EF] text-white rounded-md py-2 hover:bg-[#256ad1] transition">
                Commander Neuf
              </button>
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DieComModal;
