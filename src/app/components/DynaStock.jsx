"use client";
import { useState, useEffect } from "react";
import useFetch from "./useFetch"; // Import the custom hook

const DynaStock = ({ carName = "" }) => {
  const [stock, setStock] = useState(0); // Initialize stock to 0

  // Use the custom useFetch hook to get cars data from the backend
  const { data: cars, loading, error } = useFetch();

  // Fetch and accumulate stock from matching car models
  useEffect(() => {
    if (loading || error || !cars || !carName) return; // Ensure data and carName exist

    let totalStock = 0;

    cars.forEach((car) => {
      if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
        Object.values(car.types || {}).forEach((type) => {
          totalStock += parseInt(type.stock, 10); // Accumulate stock
        });
      }
    });

    setStock(totalStock); // Update state with total stock
  }, [cars, loading, error, carName]); // Recalculate if data or carName changes

  if (loading)
    return (
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        {" "}
        <span className="md:w-[12px] md:h-[12px] w-[10px] h-[10px] bg-[#2aa31fc4] rounded-full block"></span>
        En stock: 0
      </p>
    );
  if (error) return <p>Error: {error}</p>;

  // Render the static stock with color indicators
  return (
    <div>
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        <span
          className={`md:w-[12px] md:h-[12px] w-[10px] h-[10px] ${
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
          {stock}
        </span>
      </p>
    </div>
  );
};

export default DynaStock;
