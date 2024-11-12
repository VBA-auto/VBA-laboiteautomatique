"use client";

import { useState, useEffect } from "react";
import useFetch from "./useFetch"; // Import the custom hook

const DynaStock = ({ carName = "" }) => {
  const url = "https://vba-blue-server.onrender.com/cars";
  const { data: cars, error } = useFetch();

  // Initialize stock state with cached data if available
  const initialStock = (() => {
    const cachedData = sessionStorage.getItem(url);
    if (cachedData && carName) {
      const parsedData = JSON.parse(cachedData);
      let totalStock = 0;
      parsedData.forEach((car) => {
        if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
          Object.values(car.types || {}).forEach((type) => {
            totalStock += parseInt(type.stock, 10) || 0;
          });
        }
      });
      return totalStock;
    }
    return 0; // Default stock value if no cached data
  })();

  const [stock, setStock] = useState(initialStock);

  // Update stock when fresh data is fetched
  useEffect(() => {
    if (error || !cars || !carName) return;

    let totalStock = 0;

    cars.forEach((car) => {
      if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
        Object.values(car.types || {}).forEach((type) => {
          totalStock += parseInt(type.stock, 10) || 0;
        });
      }
    });

    setStock(totalStock); // Update state with total stock
  }, [cars, error, carName]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        <span
          className={`md:w-[12px] md:h-[12px] w-[10px] h-[10px] ${
            stock <= 0
              ? "bg-gray-300"
              : stock <= 1
              ? "bg-red-500"
              : stock <= 3
              ? "bg-yellow-500"
              : "bg-[#2aa31fc4]"
          } rounded-full block`}
        ></span>
        En stock:
        <span
          className={`${
            stock <= 0
              ? "text-gray-300"
              : stock <= 1
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
