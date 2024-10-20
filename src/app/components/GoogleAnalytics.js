"use client";
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Exclude PageSpeed Insights from GA tracking
    if (navigator.userAgent.indexOf("Speed Insights")) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-80T20RP4QR";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-80T20RP4QR");
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default GoogleAnalytics;
