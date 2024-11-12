// // useFetch.js

import { useState, useEffect } from "react";

const useFetch = () => {
  const url = "https://vba-blue-server.onrender.com/cars";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if we're in the browser environment before accessing sessionStorage
        if (typeof window !== "undefined") {
          // Check if data is available in sessionStorage
          const cachedData = sessionStorage.getItem(url);
          if (cachedData) {
            setData(JSON.parse(cachedData));
            setLoading(false);
            return; // Early return if cached data is found
          }
        }

        // If no cached data or running on the server, proceed with fetching
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();

        // Save the fetched data in sessionStorage for future use (client-side only)
        if (typeof window !== "undefined") {
          sessionStorage.setItem(url, JSON.stringify(result));
        }

        setData(result);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-fetch if the URL changes

  return { data, loading, error };
};

export default useFetch;
