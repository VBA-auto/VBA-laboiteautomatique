"use client";
import { useEffect, useState } from "react";

const STOCK_INTERVAL_HOURS = 12;
const MAX_STOCK = 7;

const DynaStock = ({ carName }) => {
  const [stock, setStock] = useState(0); // Initialize stock to 0

  // Function to calculate elapsed hours and adjust stock
  const calculateStock = (initialStock, lastUpdateTime) => {
    const now = Date.now();
    const hoursElapsed = Math.floor((now - lastUpdateTime) / (1000 * 60 * 60)); // Convert milliseconds to hours
    const intervalsPassed = Math.floor(hoursElapsed / STOCK_INTERVAL_HOURS);

    let newStock = initialStock - intervalsPassed;
    if (newStock < 0) {
      newStock = MAX_STOCK + (newStock % (MAX_STOCK + 1)); // Loop back to 7 if needed
    }
    return newStock;
  };

  // Fetch and accumulate stock from all matching car models
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch("/searchVehicule.json");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        let totalStock = 0;

        // Loop through all vehicles and accumulate stock
        data.forEach((car) => {
          if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
            Object.values(car.types || {}).forEach((type) => {
              const savedStock = localStorage.getItem(`${type.url}-stock`);
              const savedTime = localStorage.getItem(`${type.url}-timestamp`);

              const initialStock = savedStock
                ? parseInt(savedStock, 10)
                : type.stock; // Use saved stock or default from JSON
              const lastUpdateTime = savedTime
                ? parseInt(savedTime, 10)
                : Date.now(); // Use saved time or now

              // Calculate and accumulate the adjusted stock
              totalStock += calculateStock(initialStock, lastUpdateTime);
            });
          }
        });

        setStock(totalStock); // Set the total stock
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, [carName]); // Refetch if the carName changes

  // Render the dynamic stock with colors based on value
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
