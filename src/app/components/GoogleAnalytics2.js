"use client";
import { useEffect } from "react";

const GoogleAnalytics2 = () => {
  useEffect(() => {
    // Google Tag Manager (head script)
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-PVVG6XNH`;

    // Append script to head
    document.head.appendChild(script);

    return () => {
      // Clean up on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PVVG6XNH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export default GoogleAnalytics2;
