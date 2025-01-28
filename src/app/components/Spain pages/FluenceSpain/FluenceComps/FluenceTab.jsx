import React from "react";
import FluenceSpainDiesel from "../FluenceSpainDiesel";

const FluenceTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="tabFluence"
          role="tab"
          className="tab"
          aria-label="Fluence 1.5 Diesel"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <FluenceSpainDiesel />
        </div>
      </div>
    </div>
  );
};

export default FluenceTab;
