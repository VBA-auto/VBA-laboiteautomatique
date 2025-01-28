import React from "react";

import MeganeSpainEssence from "../MeganeSpainEssence";
import MeganeSpainDiesel from "../MeganeSpainDiesel";

const MeganeTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="tabMegane"
          role="tab"
          className="tab"
          aria-label="Mégane 1.2 Essence"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <MeganeSpainEssence />
        </div>

        <input
          type="radio"
          name="tabMegane"
          role="tab"
          className="tab"
          aria-label="Mégane 1.5 Diesel"
        />
        <div role="tabpanel" className="tab-content px-0 py-8">
          <MeganeSpainDiesel />
        </div>
      </div>
    </div>
  );
};

export default MeganeTab;
