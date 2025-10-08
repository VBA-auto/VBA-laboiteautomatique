"use client";
import { useState, useEffect } from "react";

async function api(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return res.json();
}

const PageLevelStock = ({ modelName, carType, onStockChange }) => {
  const [stock, setStock] = useState({ new: 0, reconditioned: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStock() {
      try {
        setLoading(true);

        const [newCars, reconditionedCars] = await Promise.all([
          api("/api/cars"),
          api("/api/recond-cars"),
        ]);

        // 🔹 Find new cars
        const newCarStock = newCars.find(
          (car) =>
            car.model.trim().toLowerCase() === modelName.trim().toLowerCase()
        )?.types[carType.toLowerCase()]?.stock;

        // 🔹 Find reconditioned cars (match by model + carType)
        const reconditionedCarStock = reconditionedCars.find(
          (car) =>
            car.model.trim().toLowerCase() === modelName.trim().toLowerCase() &&
            car.carType.trim().toLowerCase() === carType.trim().toLowerCase()
        )?.stock;

        setStock({
          new: parseInt(newCarStock || 0, 10),
          reconditioned: parseInt(reconditionedCarStock || 0, 10),
        });

        if (onStockChange) {
          onStockChange(
            parseInt(newCarStock || 0, 10) +
              parseInt(reconditionedCarStock || 0, 10)
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (modelName && carType) {
      fetchStock();
    }
  }, [modelName, carType, onStockChange]);

  const totalStock = (stock.new || 0) + (stock.reconditioned || 0);

  if (loading) {
    return (
      <div className="flex items-center justify-between">
        <p className="text-gray-700 py-1 flex items-center gap-0 text-[15px]">
          {/* <span className="w-[10px] h-[10px] bg-gray-300 rounded-full block"></span> */}
        </p>
        <span className="loading loading-ring loading-xs"></span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600 text-sm"></p>;
  }

  return (
    <div>
      {/* Total stock */}
      <p className="text-gray-700 py-1 flex items-center gap-2 text-[15px]">
        <span
          className={`w-[10px] h-[10px] ${
            totalStock <= 1
              ? "bg-[#BF0200]"
              : totalStock <= 3
              ? "bg-yellow-500"
              : "bg-[#128753]"
          } rounded-full block`}
        ></span>

        <span
          className={`${
            totalStock <= 1
              ? "text-[#BF0200]"
              : totalStock <= 3
              ? "text-yellow-500"
              : "text-[#128753]"
          } font-[500]`}
        ></span>
      </p>
    </div>
  );
};

export default PageLevelStock;
