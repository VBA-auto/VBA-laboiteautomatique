"use client";
import { useState, useEffect } from "react";
import useFetchRef from "./useFetchRef";

const VehicleRef = ({ modelName, refCode }) => {
  const { data, loading, error } = useFetchRef(); // Fetch ref codes
  const [stock, setStock] = useState(null);

  useEffect(() => {
    if (!data || !modelName || !refCode) return;

    // Find the matching vehicle ref code
    const vehicle = data.find(
      (car) =>
        car.title.trim().toLowerCase() === modelName.trim().toLowerCase() &&
        car.ref === refCode
    );

    if (vehicle) {
      const stockValue = parseInt(vehicle.stock, 10); // Ensure stock is numeric
      setStock(stockValue);
    } else {
      console.error("Vehicle not found for ref:", refCode);
      setStock(0); // Default to 0 if not found
    }
  }, [data, modelName, refCode]);

  if (loading) return <p>Loading stock...</p>;
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

export default VehicleRef;
