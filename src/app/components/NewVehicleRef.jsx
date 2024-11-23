"use client";
import { useState, useEffect } from "react";

const NewVehicleRef = ({ modelName, refCode, onStockChange }) => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the Next.js backend API
  const url = "/api/refsCode"; // Local Next.js API route

  useEffect(() => {
    if (!modelName || !refCode) {
      setError("Model name or ref code is missing.");
      setLoading(false);
      return;
    }

    const fetchStock = async () => {
      try {
        setLoading(true);

        // Fetch data from the backend API
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();

        // Find and update the stock for the specific ref code
        const ref = data.find(
          (item) =>
            item.title.trim().toLowerCase() ===
              modelName.trim().toLowerCase() && item.ref === refCode
        );

        if (ref) {
          const stockValue = parseInt(ref.stock, 10); // Ensure numeric value
          setStock(stockValue);

          // Pass the stock value to the parent component via the callback
          if (onStockChange) {
            onStockChange(stockValue);
          }
        } else {
          setError("Vehicle not found for ref code.");
          setStock(0); // Default to 0 if not found
          if (onStockChange) {
            onStockChange(0);
          }
        }
      } catch (err) {
        setError(`Failed to fetch stock: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStock(); // Fetch stock on mount
  }, [modelName, refCode, onStockChange, url]);

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
    <div className="">
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        <span
          className={`md:w-[10px] md:h-[10px] w-[10px] h-[10px] ${
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

export default NewVehicleRef;
