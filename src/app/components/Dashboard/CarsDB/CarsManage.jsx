import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaCarBattery } from "react-icons/fa6";

async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  let data = null;
  try {
    data = await res.json();
  } catch (_) {}
  if (!res.ok) {
    const msg = data?.error || data?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return data;
}

export default function CarsManage() {
  const [newCars, setNewCars] = useState([]);
  const [carStockChanges, setCarStockChanges] = useState({});
  const [loadingStates, setLoadingStates] = useState({});

  useEffect(() => {
    const fetchNewCars = async () => {
      try {
        const cars = await api("/api/cars");
        setNewCars(cars);
      } catch (error) {
        console.error("Error fetching new cars:", error);
        toast.error(error.message || "Failed to fetch new cars");
      }
    };
    fetchNewCars();
  }, []);

  const handleStockChange = (model, type, value) => {
    setCarStockChanges((prev) => ({
      ...prev,
      [model]: { ...prev[model], [type]: value },
    }));
  };

  const saveChanges = async (model, type) => {
    const newStock = carStockChanges[model]?.[type];

    if (newStock === undefined || newStock === "") {
      alert("Please enter a valid stock value.");
      return;
    }

    setLoadingStates((prev) => ({ ...prev, [`${model}-${type}`]: true }));

    try {
      await api(
        `/api/dashboard/cars/${encodeURIComponent(model)}/${encodeURIComponent(
          type
        )}`,
        {
          method: "PUT",
          body: { stock: parseInt(newStock, 10) },
        }
      );

      toast.success("Stock updated successfully!");

      // Refresh data
      const cars = await api("/api/cars");
      setNewCars(cars);
    } catch (error) {
      console.error("Error updating stock:", error);
      toast.error(error.message || "Failed to update stock.");
    } finally {
      setLoadingStates((prev) => ({ ...prev, [`${model}-${type}`]: false }));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">New Types</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
        {newCars.map((car) => (
          <div
            key={car.model}
            className="bg-white p-6 rounded-lg shadow-lg border border-blue-200"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              {car.model}
            </h2>
            {Object.entries(car.types || {}).map(([type, details]) => {
              const loading = loadingStates[`${car.model}-${type}`];

              return (
                <div
                  key={type}
                  className="mb-4 p-4 rounded-md border bg-blue-50"
                >
                  <h3 className="font-semibold capitalize text-lg mb-3 text-gray-600">
                    {type}
                  </h3>

                  <div className="flex items-center gap-2 mb-2">
                    <FaCarBattery className="text-blue-500" />
                    <p className="text-gray-700">
                      Current Stock:{" "}
                      <span className="font-semibold">{details.stock}</span>
                    </p>
                  </div>

                  <div className="w-full flex gap-2 items-center mb-4">
                    <input
                      type="number"
                      value={
                        carStockChanges[car.model]?.[type] ?? details.stock
                      }
                      onChange={(e) =>
                        handleStockChange(car.model, type, e.target.value)
                      }
                      className="input input-bordered w-full bg-white"
                      placeholder="Update Stock"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      disabled={loading}
                      className="btn btn-primary btn-sm text-white disabled:opacity-60"
                      onClick={() => saveChanges(car.model, type)}
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        <FaSave />
                      )}
                      {loading ? "Saving..." : "Save"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
