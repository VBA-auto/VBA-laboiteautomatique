"use client";
import { useState, useEffect } from "react";

const VehicleStockDisplay = ({ modelName, carType }) => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://vba-blue-server.onrender.com/cars";

  useEffect(() => {
    if (!modelName || !carType) {
      setError("Model name or car type is missing.");
      setLoading(false);
      return;
    }

    const fetchStock = async () => {
      try {
        const cachedData = sessionStorage.getItem(url);
        let data;

        // Use cached data if available, otherwise fetch from API
        if (cachedData) {
          data = JSON.parse(cachedData);
        } else {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
          data = await response.json();
          sessionStorage.setItem(url, JSON.stringify(data));
        }

        // Find the vehicle by matching the model name
        const vehicle = data.find(
          (car) =>
            car.model.trim().toLowerCase() === modelName.trim().toLowerCase()
        );

        if (vehicle && vehicle.types[carType.toLowerCase()]) {
          const typeData = vehicle.types[carType.toLowerCase()];
          setStock(parseInt(typeData.stock, 10));
        } else {
          setError("Vehicle or type not found.");
        }
      } catch (err) {
        setError(`Failed to fetch stock: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, [modelName, carType, url]);

  if (error) return <p>{error}</p>;

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

export default VehicleStockDisplay;
