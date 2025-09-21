"use client";
import { useState, useEffect } from "react";

const RecondVehicleStockDisplay = ({ modelName, carType, onStockChange }) => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the Next.js backend API for reconditioned cars
  const url = "/api/recond-cars";

  useEffect(() => {
    const fetchStock = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();

        // Find the vehicle by model and carType
        const vehicle = data.find((car) => {
          const modelMatch =
            car.model.trim().toLowerCase() === modelName.trim().toLowerCase();

          // Check carType field directly
          const typeMatch =
            car.carType.trim().toLowerCase() === carType.trim().toLowerCase();

          return modelMatch && typeMatch;
        });

        if (vehicle) {
          const stockValue = parseInt(vehicle.stock, 10) || 0;
          setStock(stockValue);

          if (onStockChange) {
            onStockChange(stockValue);
          }
        } else {
          setStock(0);
          setError("Vehicle or type not found.");
          console.log(
            `No match found for model: ${modelName}, type: ${carType}`
          );
        }
      } catch (err) {
        setError(`Failed to fetch stock: ${err.message}`);
        console.error("Stock fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (modelName && carType) {
      fetchStock();
    }
  }, [modelName, carType, onStockChange]);

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

  if (error || stock === null) {
    return (
      <div className="">
        <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
          <span className="md:w-[10px] md:h-[10px] w-[10px] h-[10px] bg-gray-400 rounded-full block"></span>
          En stock: <span className="text-gray-400 font-[500]">0</span>
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        <span
          className={`md:w-[10px] md:h-[10px] w-[10px] h-[10px] ${
            stock <= 1
              ? "bg-[#BF0200]"
              : stock <= 3
              ? "bg-yellow-500"
              : "bg-[#128753]"
          } rounded-full block`}
        ></span>
        En stock:{" "}
        <span
          className={`${
            stock <= 1
              ? "text-[#BF0200]"
              : stock <= 3
              ? "text-yellow-500"
              : "text-[#128753]"
          } font-[500]`}
        >
          {stock}
        </span>
      </p>
    </div>
  );
};

export default RecondVehicleStockDisplay;
