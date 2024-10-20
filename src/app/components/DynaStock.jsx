import React from "react";

const DynaStock = ({ number, color }) => {
  return (
    <div className="">
      <div className=" flex justify-end">
        <h4
          className={`${color} text-white text-[15px] flex items-center gap-2 px-1 rounded-sm`}
        >
          <span className="bg-white w-[10px] h-[10px] rounded-full block"></span>{" "}
          {number} en stock
        </h4>
      </div>
    </div>
  );
};

export default DynaStock;
