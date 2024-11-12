// // useFetch.js
// import { useState, useEffect } from "react";

// const useFetch = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "  https://vba-blue-server.onrender.com/cars"
//         );
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         console.error(err.message);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data, loading, error };
// };

// export default useFetch;
import { useState, useEffect } from "react";

const useFetch = () => {
  const url = "https://vba-blue-server.onrender.com/cars";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve cached data if available
        const cachedData = sessionStorage.getItem(url);
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        // Fetch new data if not cached
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();

        // Save the fetched data in sessionStorage for future use
        sessionStorage.setItem(url, JSON.stringify(result));
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
