import Script from "next/script";
import React from "react";

const Review = () => {
  return (
    <div>
      <Script src="https://static.elfsight.com/platform/platform.js" async />
      <div
        className="elfsight-app-3b7ee0f8-61d4-4bd6-9362-699ac98a86b4"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default Review;
