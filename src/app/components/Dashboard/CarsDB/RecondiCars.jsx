import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdOutlinePayment } from "react-icons/md";
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

export default function ReconditionedCarsManage() {
  const [reconditionedCars, setReconditionedCars] = useState([]);
  const [carStockChanges, setCarStockChanges] = useState({});
  const [paymentLinks, setPaymentLinks] = useState({});
  const [loadingStates, setLoadingStates] = useState({});

  useEffect(() => {
    const fetchReconditionedCars = async () => {
      try {
        const cars = await api("/api/recond-cars");
        setReconditionedCars(cars);

        // Initialize payment links
        const initialPaymentLinks = {};
        cars.forEach((car) => {
          if (car.paymentLink) {
            if (!initialPaymentLinks[car.model]) {
              initialPaymentLinks[car.model] = {};
            }
            initialPaymentLinks[car.model][car.engineType] = car.paymentLink;
          }
        });
        setPaymentLinks(initialPaymentLinks);
      } catch (error) {
        console.error("Error fetching reconditioned cars:", error);
        toast.error(error.message || "Failed to fetch reconditioned cars");
      }
    };
    fetchReconditionedCars();
  }, []);

  const handleChange = (model, engineType, field, value) => {
    if (field === "stock") {
      setCarStockChanges((prev) => ({
        ...prev,
        [`${model}-${engineType}`]: value,
      }));
    } else if (field === "paymentLink") {
      setPaymentLinks((prev) => ({
        ...prev,
        [model]: { ...prev[model], [engineType]: value },
      }));
    }
  };

  const saveChanges = async (
    model,
    engineType,
    currentStock,
    currentPaymentLink
  ) => {
    const newStock = carStockChanges[`${model}-${engineType}`];
    const newPaymentLink = paymentLinks[model]?.[engineType];

    const stockToUpdate =
      newStock !== undefined && newStock !== ""
        ? parseInt(newStock, 10)
        : currentStock;

    if (stockToUpdate === undefined || isNaN(stockToUpdate)) {
      alert("Please enter a valid stock value.");
      return;
    }

    setLoadingStates((prev) => ({ ...prev, [`${model}-${engineType}`]: true }));

    try {
      const payload = {
        stock: stockToUpdate,
        paymentLink:
          newPaymentLink !== undefined ? newPaymentLink : currentPaymentLink,
      };

      await api(
        `/api/recond-cars/${encodeURIComponent(model)}/${encodeURIComponent(
          engineType
        )}`,
        {
          method: "PUT",
          body: payload,
        }
      );

      toast.success("Reconditioned car details updated successfully!");

      // Refresh data
      const cars = await api("/api/recond-cars");
      setReconditionedCars(cars);
    } catch (error) {
      console.error("Error updating reconditioned car details:", error);
      toast.error(error.message || "Failed to update car details.");
    } finally {
      setLoadingStates((prev) => ({
        ...prev,
        [`${model}-${engineType}`]: false,
      }));
    }
  };

  // Group cars by model
  const groupedCars = reconditionedCars.reduce((acc, car) => {
    if (!acc[car.model]) {
      acc[car.model] = [];
    }
    acc[car.model].push(car);
    return acc;
  }, {});

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">
        Reconditioned Types
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
        {Object.entries(groupedCars).map(([model, cars]) => (
          <div
            key={model}
            className="bg-white p-6 rounded-lg shadow-lg border border-green-200"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-700">{model}</h2>
            {cars.map((car) => {
              const loading = loadingStates[`${car.model}-${car.engineType}`];

              return (
                <div
                  key={`${car.model}-${car.engineType}`}
                  className="mb-4 p-4 rounded-md border bg-green-50"
                >
                  <h3 className="font-semibold text-lg mb-3 text-gray-700">
                    {car.engineType}
                  </h3>

                  <div className="flex items-center gap-2 mb-2">
                    <FaCarBattery className="text-green-500" />
                    <p className="text-gray-700">
                      Current Stock:{" "}
                      <span className="font-semibold">{car.stock}</span>
                    </p>
                  </div>

                  <div className="w-full flex gap-2 items-center mb-4">
                    <input
                      type="number"
                      value={
                        carStockChanges[`${car.model}-${car.engineType}`] ??
                        car.stock
                      }
                      onChange={(e) =>
                        handleChange(
                          car.model,
                          car.engineType,
                          "stock",
                          e.target.value
                        )
                      }
                      className="input input-bordered w-full bg-white"
                      placeholder="Update Stock"
                    />
                  </div>

                  <div className="mb-4 hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <MdOutlinePayment className="text-green-500" />
                      <p className="text-gray-700">Payment Link</p>
                    </div>
                    <div className="w-full flex gap-2 items-center">
                      <input
                        type="text"
                        value={
                          paymentLinks[car.model]?.[car.engineType] ??
                          car.paymentLink ??
                          ""
                        }
                        onChange={(e) =>
                          handleChange(
                            car.model,
                            car.engineType,
                            "paymentLink",
                            e.target.value
                          )
                        }
                        className="input input-bordered w-full bg-white"
                        placeholder="https://example.com/payment"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      disabled={loading}
                      className="btn btn-success btn-sm text-white disabled:opacity-60"
                      onClick={() =>
                        saveChanges(
                          car.model,
                          car.engineType,
                          car.stock,
                          car.paymentLink
                        )
                      }
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
