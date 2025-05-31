import React from "react";
import CapturSpainEssence from "../CapturSpainEssence";
import CapturSpainDiesel from "../CapturSpainDiesel";

const CapturTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="tabCaptur"
          role="tab"
          className="tab"
          aria-label="Captur 1.2 Essence"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <CapturSpainEssence />
        </div>

        <input
          type="radio"
          name="tabCaptur"
          role="tab"
          className="tab"
          aria-label="Captur 1.5 Diesel"
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <CapturSpainDiesel />
        </div>
      </div>
    </div>
  );
};

export default CapturTab;
