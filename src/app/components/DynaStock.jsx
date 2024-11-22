"use client";
import { useState, useEffect } from "react";

const DynaStock = ({ carName = "" }) => {
  // const url = "https://vba-blue-server.onrender.com/cars";
  const url = "/api/cars";

  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch cars data");
        }
        const cars = await response.json();

        // Calculate stock for the given carName
        let totalStock = 0;
        cars?.forEach((car) => {
          if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
            Object.values(car.types || {}).forEach((type) => {
              totalStock += parseInt(type.stock, 10) || 0;
            });
          }
        });

        setStock(totalStock);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    }

    fetchCars();
  }, [carName, url]);

  if (loading) {
    return (
      <div className="flex items-center justify-between">
        <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
          <span className="md:w-[10px] md:h-[10px] w-[10px] h-[10px] bg-gray-300 rounded-full block"></span>
          En stock:
        </p>
        <span className="loading loading-ring loading-xs"></span>
      </div>
    );
  }
  return (
    <div>
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        <span
          className={`md:w-[10px] md:h-[10px] w-[10px] h-[10px] ${
            stock === null
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
            stock === null
              ? "text-gray-300"
              : stock <= 1
              ? "text-red-500"
              : stock <= 3
              ? "text-yellow-500"
              : "text-[#2aa31fc4]"
          } font-[500]`}
        >
          {stock === null ? "..." : stock}
        </span>
      </p>
    </div>
  );
};

export default DynaStock;
