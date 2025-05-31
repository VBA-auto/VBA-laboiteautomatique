import { useState, useEffect } from "react";

const useNetworkStatus = () => {
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const [networkSpeed, setNetworkSpeed] = useState(null); // Store real speed

  useEffect(() => {
    // Check network speed
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      setNetworkSpeed(connection.downlink); // Get speed in Mbps
      if (connection.effectiveType.includes("2g")) {
        setIsSlowNetwork(true);
      }

      // Listen for network speed changes
      const updateNetworkSpeed = () => setNetworkSpeed(connection.downlink);
      connection.addEventListener("change", updateNetworkSpeed);

      return () => connection.removeEventListener("change", updateNetworkSpeed);
    }
  }, []);

  // Detect image errors
  useEffect(() => {
    const handleImageError = () => setHasImageError(true);
    document
      .querySelectorAll("img")
      .forEach((img) => img.addEventListener("error", handleImageError));

    return () => {
      document
        .querySelectorAll("img")
        .forEach((img) => img.removeEventListener("error", handleImageError));
    };
  }, []);

  // Function to refresh the page and clear cache
  const refreshPage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return { isSlowNetwork, hasImageError, networkSpeed, refreshPage };
};

export default useNetworkStatus;
