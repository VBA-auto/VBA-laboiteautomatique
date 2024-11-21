"use client";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const DynaStock = ({ carName = "" }) => {
  // const url = "https://vba-blue-server.onrender.com/cars";
  const url = "https://vba-express-server.vercel.app/cars";

  // Initialize stock with `null` to indicate no data is loaded initially
  const [stock, setStock] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  const { data: cars, loading } = useFetch();

  useEffect(() => {
    setHasMounted(true); // Indicate that client-side code has run

    // Retrieve stock from cache if available

    const cachedData = sessionStorage.getItem(url);
    if (cachedData && carName) {
      const parsedData = JSON.parse(cachedData);
      let initialStock = 0;
      parsedData?.forEach((car) => {
        if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
          Object.values(car.types || {}).forEach((type) => {
            initialStock += parseInt(type.stock, 10) || 0;
          });
        }
      });
      setStock(initialStock); // Set initial stock value from cache
    }
  }, [carName, url]);

  // Update stock when fresh data is fetched
  useEffect(() => {
    let totalStock = 0;
    cars?.forEach((car) => {
      if (car?.model?.toLowerCase().includes(carName.toLowerCase())) {
        Object.values(car.types || {}).forEach((type) => {
          totalStock += parseInt(type.stock, 10) || 0;
        });
      }
    });

    setStock(totalStock);

    sessionStorage.setItem(url, JSON.stringify(cars));
  }, [cars, carName]);

  // Prevent rendering on the server and until client-side mounting
  if (!hasMounted) {
    return null;
  }
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
            stock === null
              ? "bg-gray-300"
              : stock <= 1
              ? "bg-red-500"
              : stock <= 3
              ? "bg-yellow-500"
              : "bg-[#2aa31fc4]"
          } rounded-full block`}
        ></span>
        En stock:
        <span
          className={`${
            stock === null
              ? "text-gray-300"
              : stock <= 1
              ? "text-red-500"
              : stock <= 3
              ? "text-yellow-500"
              : "text-[#2aa31fc4]"
          } font-[500]`}
        >
          {stock === null ? "..." : stock}
        </span>
      </p>
    </div>
  );
};

export default DynaStock;
