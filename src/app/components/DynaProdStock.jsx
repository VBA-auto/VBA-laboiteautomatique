"use client";
import { useState, useEffect } from "react";

const DynaProdStock = ({ carName = "" }) => {
  const neufUrl = "/api/cars"; // Neuf API
  const recondUrl = "/api/recond-cars"; // Recondition API

  const [totalStock, setTotalStock] = useState(null);
  const [neufStock, setNeufStock] = useState(0);
  const [recondStock, setRecondStock] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const [neufRes, recondRes] = await Promise.all([
          fetch(neufUrl),
          fetch(recondUrl),
        ]);

        if (!neufRes.ok || !recondRes.ok) {
          throw new Error("Failed to fetch cars data");
        }

        const neufCars = await neufRes.json();
        const recondCars = await recondRes.json();

        let nStock = 0;
        let rStock = 0;

        // ✅ Neuf stock হিসাব
        neufCars.forEach((car) => {
          if (car?.model?.toLowerCase() === carName.toLowerCase()) {
            Object.values(car.types || {}).forEach((type) => {
              nStock += parseInt(type.stock, 10) || 0;
            });
          }
        });

        // ✅ Recondition stock হিসাব
        recondCars.forEach((car) => {
          if (car?.model?.toLowerCase() === carName.toLowerCase()) {
            rStock += parseInt(car?.stock, 10) || 0;
          }
        });

        setNeufStock(nStock);
        setRecondStock(rStock);
        setTotalStock(nStock + rStock);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    }

    fetchCars();
  }, [carName]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span className="loading loading-ring loading-xs"></span>
        Chargement du stock...
      </div>
    );
  }

  // ✅ Color classes for total stock
  const getStockColor = (stock) => {
    if (stock === null) return "text-gray-400";
    if (stock <= 1) return "text-[#BF0200]"; // red
    if (stock <= 3) return "text-yellow-500"; // yellow
    return "text-[#128753]"; // green
  };

  return (
    <div className="text-gray-700 text-sm text-center">
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <p className="text-gray-700 py-1 text-center rounded-md flex items-center gap-2 text-[15px]">
            <span
              className={`w-[10px] h-[10px] ${
                totalStock === null
                  ? "bg-gray-300"
                  : totalStock <= 1
                  ? "bg-[#BF0200]"
                  : totalStock <= 3
                  ? "bg-yellow-500"
                  : "bg-[#128753]"
              } rounded-full block`}
            ></span>
            En stock:
            <span
              className={`${
                totalStock === null
                  ? "text-gray-300"
                  : totalStock <= 1
                  ? "text-[#BF0200]"
                  : totalStock <= 3
                  ? "text-yellow-500"
                  : "text-[#128753]"
              } font-[500]`}
            >
              {totalStock === null ? "..." : totalStock}
            </span>
          </p>
        </div>

        <div className="w-1/2 flex gap-2 justify-end">
          <p>Neuf: {neufStock}</p>
          <p>Reconditionné: {recondStock}</p>
        </div>
      </div>
    </div>
  );
};

export default DynaProdStock;
