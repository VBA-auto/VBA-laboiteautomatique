import React from "react";

import ScenicSpainDiesel from "../ScenicDiesel";

const ScenicTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="tabScenic"
          role="tab"
          className="tab"
          aria-label="Scénic 1.5 Diesel"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <ScenicSpainDiesel />
        </div>
      </div>
    </div>
  );
};

export default ScenicTab;
