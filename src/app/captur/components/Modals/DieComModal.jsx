import PricngPop890 from "@/components/PricngPop890";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DieComModal = (imagesSlide) => {
  return (
    <div>
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
              <hr />
              <div className="flex justify-between my-2 ">
                <p className="text-gray-600 text-[15px]">Total </p>
                <p className="text-[#2C80EF] text-[15px] prices">1139.00 €</p>
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
  );
};

export default DieComModal;
