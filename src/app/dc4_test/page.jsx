"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import React from "react";

const tableData = [
  {
    title: "MEGANE / SCENIC / SCENIC LONG (1.5dci DC4000 / DC4001)",
    rows: [
      { software: "2535", version: "603", calibration: ["241", "140", "342"] },
      { software: "2535", version: "242", calibration: ["242", "141", "343"] },
      { software: "2535", version: "606", calibration: ["243", "143", "346"] },
      { software: "2535", version: "607", calibration: ["289", "188", "388"] },
    ],
  },
  {
    title: "CAPTUR / CLIO / CLIO GT (< 2015)",
    rows: [
      {
        software: "2536",
        version: "6000",
        calibration: ["1231", "2230", "2031", "1340"],
      },
      {
        software: "2536",
        version: "6100",
        calibration: ["1232", "2240", "1041 (1341 palette)", "1341"],
      },
      {
        software: "2536",
        version: "6200",
        calibration: ["1241", "2040", "1043", "1343"],
      },
    ],
  },
  {
    title: "CAPTUR / CLIO (> 2015)",
    rows: [
      {
        software: "3000",
        version: "3600",
        calibration: ["2671", "2781", "2881", "3481"],
      },
      {
        software: "3000",
        version: "3700",
        calibration: ["2680", "2790", "2580", "3482"],
      },
      {
        software: "3000",
        version: "3710",
        calibration: ["2682", "2800", "2882", "3483"],
      },
    ],
  },
];

const DataTable = () => {
  return (
    <div className="">
      <SubHeader />
      <Header />
      <div className="container mx-auto">
        {tableData.map((table, index) => (
          <div key={index} className="my-8">
            <h2 className="text-lg font-bold mb-2">{table.title}</h2>
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-2 py-1 bg-gray-200">
                    Software
                  </th>
                  <th className="border border-gray-300 px-2 py-1 bg-gray-200">
                    Version
                  </th>
                  <th
                    colSpan={table.rows[0].calibration.length}
                    className="border border-gray-300 px-2 py-1 bg-gray-200"
                  >
                    Calibration
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border border-gray-300 px-2 py-1">
                      {row.software}
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {row.version}
                    </td>
                    {row.calibration.map((cal, calIndex) => (
                      <td
                        key={calIndex}
                        className={`border border-gray-300 px-2 py-1 ${
                          cal.includes("palette") ? "text-red-500" : ""
                        }`}
                      >
                        {cal}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DataTable;
