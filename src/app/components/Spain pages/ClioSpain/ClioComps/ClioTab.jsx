import React from "react";
import ClioSpainEssence from "../ClioSpainEssence";
import ClioSpainDiesel from "../ClioSpainDiesel";

const ClioTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="tabClio"
          role="tab"
          className="tab"
          aria-label="Clio IV 1.2 Essence"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <ClioSpainEssence />
        </div>

        <input
          type="radio"
          name="tabClio"
          role="tab"
          className="tab"
          aria-label="Clio IV 1.5 Diesel"
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <ClioSpainDiesel />
        </div>
      </div>
    </div>
  );
};

export default ClioTab;
