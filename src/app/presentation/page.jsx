"use client";
import React from "react";

export default function PDFViewerImage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <object
        data="/images/pdf.pdf"
        type="application/pdf"
        width="100%"
        height="1200"
      >
        <p>
          Your browser does not support PDFs.
          <a href="/images/pdf.pdf">Download PDF</a>.
        </p>
      </object>
    </div>
  );
}
