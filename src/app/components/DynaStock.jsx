"use client";
import { useEffect, useState } from "react";

const DynaStock = ({ carName }) => {
  const [stock, setStock] = useState(0); // Initialize stock to 0

  // 1. Fetch data and find matching stock
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch("/searchVehicule.json");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log("Fetched Data:", data); // Debug log

        // Initialize total stock
        let totalStock = 0;

        // Find and accumulate stock from matching car models
        data.forEach((car) => {
          if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
            console.log(`Matching Car: ${car.model}`); // Debug log
            Object.values(car.types || {}).forEach((type) => {
              totalStock += Number(type.stock) || 0; // Accumulate stock
            });
          }
        });

        console.log(`Total Stock for ${carName}: ${totalStock}`); // Debug log
        setStock(totalStock); // Set the final accumulated stock once
      } catch (error) {
        console.error("Error fetching stock data:", error); // Log any error
      }
    };

    fetchStockData();
  }, [carName]);

  // 2. Render the stock
  return (
    <div>
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
          {stock}
        </span>
      </p>
    </div>
  );
};

export default DynaStock;
