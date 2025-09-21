
import { useState, useEffect } from 'react';

async function api(path) {
  const res = await fetch(path, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }
  return res.json();
}

export function useVehicleStock(model, type) {
  const [stock, setStock] = useState({ new: null, reconditioned: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStock() {
      try {
        setLoading(true);
        const [newCars, reconditionedCars] = await Promise.all([
          api('/api/cars'),
          api('/api/recond-cars')
        ]);

        const newCarStock = newCars
          .find(car => car.model === model)?.types[type]?.stock;

        const reconditionedCarStock = reconditionedCars
          .find(car => car.model === model && car.engineType === type)?.stock;

        setStock({ new: newCarStock, reconditioned: reconditionedCarStock });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (model && type) {
      fetchStock();
    }
  }, [model, type]);

  return { stock, loading, error };
}
