"use client";
import { useEffect, useState } from "react";
import { IoCarSport } from "react-icons/io5";
import { VscReferences } from "react-icons/vsc";
import { FaPowerOff } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import Header from "../Header";
import toast, { Toaster } from "react-hot-toast";

export default function StockManage({ handleLogout }) {
  const [cars, setCars] = useState([]);
  const [refs, setRefs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Cars");
  const [stockChanges, setStockChanges] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://vba-blue-server.onrender.com/cars"
        );
        const data = await response.json();
        if (Array.isArray(data)) setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    const fetchRefs = async () => {
      try {
        const response = await fetch(
          "https://vba-blue-server.onrender.com/refs"
        );
        const data = await response.json();
        if (Array.isArray(data)) setRefs(data);
      } catch (error) {
        console.error("Error fetching refs:", error);
      }
    };

    fetchCars();
    fetchRefs();
  }, []);

  // Handle stock change
  const handleStockChange = (model, type, newStock) => {
    setStockChanges((prev) => ({
      ...prev,
      [model]: { ...prev[model], [type]: newStock },
    }));
  };

  // Save stock changes (backend integration can be added here)
  const saveStockChanges = async (model, type) => {
    const newStock = stockChanges[model]?.[type];

    if (newStock === undefined || newStock === "") {
      alert("Please enter a valid stock value.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://vba-blue-server.onrender.com/cars/${model}/${type}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stock: parseInt(newStock, 10) }), // Ensure stock is a number
        }
      );

      if (response.ok) {
        const updatedCars = await response.json();
        toast.success("Stock Updated");
        // Optionally re-fetch cars to reflect changes immediately
        const carsData = await fetch(
          "https://vba-blue-server.onrender.com/cars"
        ).then((res) => res.json());
        setCars(carsData);
      } else {
        const { message } = await response.json();
        alert(message || "Failed to update stock.");
      }
    } catch (error) {
      console.error("Error updating stock:", error);
      alert("An error occurred while updating the stock.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold my-8">
            {selectedCategory} Stock Management
          </h1>

          <div className="overflow-y-auto">
            {selectedCategory === "Cars" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
                {cars.map((car) => (
                  <div
                    key={car.model}
                    className="bg-white p-6 rounded-lg shadow-lg border"
                  >
                    <h2 className="text-xl font-bold mb-4">{car.model}</h2>
                    {Object.entries(car.types).map(([type, details]) => (
                      <div key={type} className="mb-4">
                        <h3 className="font-semibold">
                          {details.carType} - Stock: {details.stock}
                        </h3>
                        <div className="w-full flex gap-2 items-center">
                          <div className="w-11/12">
                            <input
                              type="number"
                              value={
                                stockChanges[car.model]?.[type] ?? details.stock
                              }
                              onChange={(e) =>
                                handleStockChange(
                                  car.model,
                                  type,
                                  e.target.value
                                )
                              }
                              className="input input-bordered w-full max-w-xs bg-white"
                            />
                          </div>
                          <div className="w-1/5 border py-2.5  rounded-md  text-center">
                            {loading ? (
                              <div className="text-center mx-auto flex justify-center">
                                <svg
                                  className="animate-spin h-5 w-5 mr-2 text-[#2C80EF] text-center"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                  ></path>
                                </svg>
                              </div>
                            ) : (
                              <button
                                className="text-[#2C80EF]"
                                onClick={() =>
                                  saveStockChanges(car.model, type)
                                }
                              >
                                <FaSave />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {refs.map((ref) => (
                  <div
                    key={ref._id}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <h2 className="text-xl font-bold">{ref.ref}</h2>
                    <p>Stock: {ref.stock}</p>
                    <button className="btn btn-sm mt-4">Edit Stock</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0">
          <div className="flex justify-center gap-24 items-center h-16 md:w-1/3 mx-auto bg-gray-100 rounded-full">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedCategory("Cars")}
            >
              <IoCarSport className="text-2xl" />
              <p
                className={`text-sm ${
                  selectedCategory === "Cars" ? "font-bold" : ""
                }`}
              >
                Cars
              </p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedCategory("Refs")}
            >
              <VscReferences className="text-2xl" />
              <p
                className={`text-sm ${
                  selectedCategory === "Refs" ? "font-bold" : ""
                }`}
              >
                Ref codes
              </p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleLogout}
            >
              <FaPowerOff className="text-2xl text-red-500" />
              <p className="text-sm">Logout</p>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}
