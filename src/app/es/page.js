import ContactSpain from "@/components/Spain pages/ContactSpain";
import FaqSpain from "@/components/Spain pages/FAQSpain";
import HeroSpain from "@/components/Spain pages/HeroSpain";
import ProduitsSpain from "@/components/Spain pages/ProduitsSpain";
import SelectOptionsSpain from "@/components/Spain pages/SelectOptionsSpain";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSpain />
      <ProduitsSpain />
      {/* <FaqSpain /> */}
      <ContactSpain />
      {/* <SelectOptionsSpain /> */}
    </div>
  );
};

export default page;
