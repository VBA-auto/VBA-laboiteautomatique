"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

const Purchase = () => {
  const { url } = useParams(); // Get the dynamic 'url' from the route
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    if (url) {
      const decodedUrl = decodeURIComponent(url); // Decode the URL if necessary
      setIframeUrl(decodedUrl); // Set the decoded URL to the iframe src
    }
  }, [url]);

  return (
    <div>
      <Header />
      <div className="container mx-auto text-center py-10">
        {iframeUrl ? (
          <iframe
            src={iframeUrl}
            width="100%" // Adjust width as necessary
            height="800px" // Adjust height based on your design
            style={{ border: "none" }}
            allow="payment"
          ></iframe>
        ) : (
          <p>Loading payment page...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
