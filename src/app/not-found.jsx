"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <p>
        Site is updated. You will be redirected to the home page in 2 seconds...
      </p>
    </div>
  );
}
