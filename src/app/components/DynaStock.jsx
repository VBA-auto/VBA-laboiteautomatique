"use client";
import { useEffect, useState, useCallback, useMemo } from "react";

const DynaStock = ({ number, color }) => {
  const [stock, setStock] = useState(7);
  const updateStock = useCallback(() => {
    setStock((prevStock) => (prevStock <= 1 ? 7 : prevStock - 1));
  }, []);
  useEffect(() => {
    const interval = setInterval(updateStock, 18 * 60 * 60 * 1000); // 18 hours
    return () => clearInterval(interval); // Cleanup interval
  }, [updateStock]);

  // Memoize stock formatting to avoid recalculating on each render
  const formatStock = useMemo(
    () => (stock) => stock.toString().padStart(2, "0"),
    []
  );
  return (
    <div className="">
      {/* <div className=" flex justify-end">
        <h4
          className={`${color} text-white text-[15px] flex items-center gap-2 px-1 rounded-sm`}
        >
          <span className="bg-white w-[10px] h-[10px] rounded-full block"></span>{" "}
          {number} en stock
        </h4>
      </div> */}
      <div className="">
        <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
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
  );
};

export default DynaStock;
