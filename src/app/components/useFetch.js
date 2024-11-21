import { useState, useEffect } from "react";

const useFetch = () => {
  const url = "https://vba-blue-server.onrender.com/cars";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform the fetch operation
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
