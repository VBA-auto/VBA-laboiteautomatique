"use client";
import React from "react";

const PDF = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-full md:max-w-[50%] ">
        {" "}
        {/* This container controls the 80% width */}
        <object
          data="/images/pdf.pdf"
          type="application/pdf"
          width="100%" // Takes full width of its container
          height="1200"
          className="w-full" // Ensures object respects container width
        >
          <p className="text-center">
            Your browser does not support PDFs.{" "}
            <a href="/images/pdf.pdf" className="text-blue-500 hover:underline">
              Download PDF
            </a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default PDF;
