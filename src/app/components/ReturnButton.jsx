"use client";
import { IoArrowBackSharp } from "react-icons/io5";

const ReturnButton = () => {
  return (
    <div>
      <div className="">
        <button
          className="flex items-center rounded-md"
          onClick={() => window.history.back()}
        >
          <IoArrowBackSharp className="text-[#2C80EF] text-md mr-1" />
          <p className="text-[#2C80EF] text-[15px]">retour</p>
        </button>
      </div>
    </div>
  );
};

export default ReturnButton;
