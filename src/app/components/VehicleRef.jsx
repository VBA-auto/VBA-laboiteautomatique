"use client";
import { useState, useEffect } from "react";

const VehicleRef = ({ modelName, refCode }) => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://vba-express-server.vercel.app/refs";
  // const url = "https://vba-blue-server.onrender.com/refs";

  useEffect(() => {
    if (!modelName || !refCode) {
      setError("Model name or ref code is missing.");
      setLoading(false);
      return;
    }

    const fetchStock = async () => {
      try {
        const cachedData = sessionStorage.getItem(url);
        let data;

        // Show cached data temporarily while fetching new data
        if (cachedData) {
          const cachedParsed = JSON.parse(cachedData);
          const ref = cachedParsed.find(
            (item) =>
              item.title.trim().toLowerCase() ===
                modelName.trim().toLowerCase() && item.ref === refCode
          );

          if (ref) setStock(parseInt(ref.stock, 10));
        }

        // Fetch fresh data to ensure it’s up-to-date
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        data = await response.json();

        // Update cache with fresh data
        sessionStorage.setItem(url, JSON.stringify(data));

        // Find and update the stock for the specific ref code
        const ref = data.find(
          (item) =>
            item.title.trim().toLowerCase() ===
              modelName.trim().toLowerCase() && item.ref === refCode
        );

        if (ref) {
          const stockValue = parseInt(ref.stock, 10); // Ensure numeric value
          setStock(stockValue);
        } else {
          setError("Vehicle not found for ref code.");
          setStock(0); // Default to 0 if not found
        }
      } catch (err) {
        setError(`Failed to fetch stock: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStock(); // Fetch stock on mount
  }, [modelName, refCode, url]);

  if (loading) {
    return (
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[14px]"></p>
    );
  }

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

export default VehicleRef;
