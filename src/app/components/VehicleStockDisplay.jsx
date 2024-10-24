"use client";
import { useState, useEffect } from "react";

const VehicleStockDisplay = ({ modelName, carType }) => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!modelName || !carType) {
      setError("Model name or car type is missing.");
      setLoading(false);
      return;
    }

    const fetchStock = async () => {
      try {
        const response = await fetch(
          "  https://vba-blue-server.onrender.com/cars"
        );
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();

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
  }, [modelName, carType]);

  if (loading)
    return (
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        {" "}
        <span className="w-[12px] h-[12px] bg-[#2aa31fc4] rounded-full block"></span>
        En stock: 0
      </p>
    );
  if (error) return <p>{error}</p>;

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

export default VehicleStockDisplay;
