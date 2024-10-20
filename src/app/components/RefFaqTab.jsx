import React from "react";

const RefFaqTab = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Review"
        />
        <div role="tabpanel" className="tab-content py-2">
          <p className="text-[15px]">
            here we can show some review if we have.
          </p>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="About"
        />
        <div role="tabpanel" className="tab-content py-2">
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sit dolor cupiditate impedit dolores delectus.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="FAQ"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content py-2">
          <p className="text-[15px]">Q. Is this Product available?</p>
          <p className="text-[15px]">A. Yes!</p>
        </div>
      </div>
    </div>
  );
};

export default RefFaqTab;
