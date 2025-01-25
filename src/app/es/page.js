import HeroSpain from "@/components/Spain pages/HeroSpain";
import InstallationSpain from "@/components/Spain pages/InstallationSpain";
import ProduitsSpain from "@/components/Spain pages/ProduitsSpain";
import SelectOptionsSpain from "@/components/Spain pages/SelectOptionsSpain";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSpain />
      <ProduitsSpain />
      <SelectOptionsSpain />
      <InstallationSpain />
    </div>
  );
};

export default page;
