import React from "react";
import CliorsSpainEseence from "../ClioRsSpainEssence";

const ClioRsTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="tabClioRs"
          role="tab"
          className="tab"
          aria-label="Clio RS 1.6 Essence"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <CliorsSpainEseence />
        </div>
      </div>
    </div>
  );
};

export default ClioRsTab;
