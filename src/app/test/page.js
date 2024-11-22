"use client";

import { useEffect, useState } from "react";

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch("/api/refsCode");
        if (!response.ok) {
          throw new Error("Failed to fetch cars data");
        }
        const data = await response.json();
        setCars(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <strong>Model:</strong> {car.ref} <br />
            <strong>Type:</strong> {car.type} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
