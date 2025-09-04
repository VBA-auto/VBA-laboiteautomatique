"use client";
import Image from "next/image";
import React, { useState } from "react";
import CapturTab1 from "./CapturTab1";
import CapturTabEssence from "./CaptureTabEssence";
import CapessenceClutch from "./CapEssenceClutch";

const TabCat = () => {
  const [TabMode, setTabMode] = useState(true);
  const [CluthTab, setCluthTab] = useState(false);
  const [Essence, setEssence] = useState(true);
  const [Diesel, setDiesel] = useState(false);

  const handleTabMode = () => {
    setTabMode(true);
    setCluthTab(false);
  };
  const handleCluthTab = () => {
    setTabMode(true);
    setCluthTab(true);
  };

  const handleEssenceCalculatuer = () => {
    setEssence(true);
    setTabMode(true);
    setCluthTab(false);
    setDiesel(false);
  };

  const handleDieselCalculatuer = () => {
    setDiesel(true);
    setEssence(false);
    setTabMode(true);
    setCluthTab(false);
  };

  return (
    <div className="container mx-auto my-8">
      {/* name of each tab group should be unique */}
      <div className="">
        <div className="">
          <div className="accent_color p-5 bg-white rounded-md">
            <div className="">
              <div className="md:flex justify-between items-center gap-5">
                <button
                  onClick={handleTabMode}
                  className="md:w-1/2 border border-blue-400 rounded-lg hover:bg-gray-100 flex justify-end items-center gap-5"
                >
                  <div className="flex justify-end items-center gap-5">
                    <div className="text-end">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Renault Captur Calculateur
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Captur pour Essence et Diesel
                      </p>
                    </div>
                    <Image
                      unoptimized
                      width={100}
                      height={100}
                      src="https://i.ibb.co/k8C1Y2Y/Group-1074-removebg-preview.png"
                      alt="Calculateur avec carton"
                      className="w-[100px] h-[80px] me-2"
                      priority={true}
                    />
                  </div>
                </button>
                <button
                  onClick={handleCluthTab}
                  className="md:w-1/2 border border-blue-400 rounded-lg hover:bg-gray-100 flex items-center gap-5"
                >
                  <div className="flex items-center gap-5">
                    <Image
                      unoptimized
                      width={100}
                      height={100}
                      src="https://a.allegroimg.com/s1080/11c6fa/44b881194702b1a95a3cd840b6c5/Zestaw-sprzegla-LUK-602-0016-00-Jakosc-czesci-zgodnie-z-GVO-Q-oryginal-z-logo-producenta-czesci-OEM-OES"
                      alt="Calculateur avec carton"
                      className="w-[100px] h-[80px] ms-2"
                      priority={true}
                    />
                    <div className="text-start">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Clutch kit
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Captur pour Essence et Diesel
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {TabMode && (
          <div className="">
            <div className="mt-8 flex gap-5">
              <button
                onClick={handleEssenceCalculatuer}
                className="bg-[#2C80EF] text-white py-3 rounded-full w-1/2 hover:bg-blue-400 transition-all"
              >
                1.2 Essence
              </button>
              <button
                onClick={handleDieselCalculatuer}
                className="bg-[#2C80EF] text-white py-3 rounded-full w-1/2 hover:bg-blue-400 transition-all"
              >
                1.5 Diesel
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="">
        {Essence && (
          <>
            <CapturTabEssence />
            <CapessenceClutch />
          </>
        )}
      </div>
      <div className="">
        {Diesel && (
          <div className="">
            <CapturTab1 />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabCat;
