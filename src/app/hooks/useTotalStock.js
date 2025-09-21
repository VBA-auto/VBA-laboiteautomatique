import { useState, useEffect, useCallback } from "react";

export const useVehicleStock = (modelName, carType) => {
  const [stockData, setStockData] = useState({
    newStock: 0,
    recondStock: 0,
    totalStock: 0,
    specificStock: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVehicleStock = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Parallel API calls
      const [newCarsResponse, recondCarsResponse] = await Promise.all([
        fetch("/api/cars"),
        fetch("/api/recond-cars"),
      ]);

      if (!newCarsResponse.ok) {
        throw new Error(`New cars API error: ${newCarsResponse.statusText}`);
      }
      if (!recondCarsResponse.ok) {
        throw new Error(
          `Recond cars API error: ${recondCarsResponse.statusText}`
        );
      }

      const [newCarsData, recondCarsData] = await Promise.all([
        newCarsResponse.json(),
        recondCarsResponse.json(),
      ]);

      let newStock = 0;
      let recondStock = 0;
      let specificStock = 0;

      // Find stock in new cars
      const newVehicle = newCarsData.find(
        (car) =>
          car.model.trim().toLowerCase() === modelName.trim().toLowerCase()
      );

      if (
        newVehicle &&
        newVehicle.types &&
        newVehicle.types[carType.toLowerCase()]
      ) {
        newStock =
          parseInt(newVehicle.types[carType.toLowerCase()].stock, 10) || 0;
      }

      // Find stock in reconditioned cars
      const recondVehicle = recondCarsData.find(
        (car) =>
          car.model.trim().toLowerCase() === modelName.trim().toLowerCase()
      );

      if (
        recondVehicle &&
        recondVehicle.types &&
        recondVehicle.types[carType.toLowerCase()]
      ) {
        recondStock =
          parseInt(recondVehicle.types[carType.toLowerCase()].stock, 10) || 0;
      }

      // Calculate total and specific stock
      const totalStock = newStock + recondStock;

      // If both modelName and carType are provided, show specific stock
      // Otherwise show total stock
      if (modelName && carType) {
        specificStock = totalStock;
      }

      setStockData({
        newStock,
        recondStock,
        totalStock,
        specificStock: specificStock || totalStock,
      });
    } catch (err) {
      setError(`Failed to fetch stock: ${err.message}`);
      setStockData({
        newStock: 0,
        recondStock: 0,
        totalStock: 0,
        specificStock: 0,
      });
    } finally {
      setLoading(false);
    }
  }, [modelName, carType]);

  useEffect(() => {
    if (modelName) {
      fetchVehicleStock();
    }
  }, [fetchVehicleStock, modelName]);

  // Function to get stock color based on quantity
  const getStockColor = useCallback((stock) => {
    if (stock <= 1) return "#BF0200"; // Red
    if (stock <= 3) return "#F59E0B"; // Yellow
    return "#128753"; // Green
  }, []);

  // Function to get stock status
  const getStockStatus = useCallback((stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock <= 1) return "Low Stock";
    if (stock <= 3) return "Limited Stock";
    return "In Stock";
  }, []);

  return {
    stockData,
    loading,
    error,
    getStockColor,
    getStockStatus,
    refetch: fetchVehicleStock,
  };
};
