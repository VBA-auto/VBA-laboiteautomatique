// Import statements

"use client";

import { useState } from "react";
import Link from "next/link";

const SelectOptionsSpain = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);

  const brands = ["Renault"];

  const models = {
    Renault: [
      {
        name: "Captur",
        years: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        versions: [
          "Essence 0.9L - 0.9 Tce",
          "Essence 1.2L - 1.2 Tce",
          "Diesel 1.5L - 1.5 dCi",
        ],
        hrefEssence: "/captur/essence",
        hrefDiesel: "/captur/diesel",
      },
      {
        name: "Clio IV",
        years: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        versions: [
          "Essence 0.9L - 0.9 Tce",
          "Essence 1.2L - 1.2 16v",
          "Essence 1.2L - 1.2 Tce",
          "Essence 1.6L - RS",
          "Diesel 1.5L - 1.5 dCi",
        ],
        hrefEssence: "/clio/essence",
        hrefDiesel: "/clio/diesel",
      },
      {
        name: "Renault Clio RS",
        years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        versions: ["Essence 1.6L"],
        hrefEssence: "/clio-rs/essence",
        hrefDiesel: "/clio-rs/essence",
      },
      {
        name: "Fluence",
        years: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
        ],
        versions: ["Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/fluence/diesel",
        hrefDiesel: "/fluence/diesel",
      },
      {
        name: "Scénic III",
        years: ["2009", "2010", "2011", "2012", "2013", "2014"],
        versions: ["Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/scenic/diesel",
        hrefDiesel: "/scenic/diesel",
      },
      {
        name: "Grand Scénic III",
        years: ["2009", "2010", "2011", "2012", "2013", "2014"],
        versions: ["Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/scenic/diesel",
        hrefDiesel: "/scenic/diesel",
      },
      {
        name: "Megane 3",
        years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/megane/essence",
        hrefDiesel: "/megane/diesel",
      },
      {
        name: "Megane 3 CC",
        years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/megane/essence",
        hrefDiesel: "/megane/diesel",
      },
      {
        name: "Megane 3 Coupé",
        years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/megane/essence",
        hrefDiesel: "/megane/diesel",
      },
    ],
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(null);
    setSelectedYear(null);
    setSelectedVersion(null);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setSelectedYear(null);
    setSelectedVersion(null);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedVersion(null);
  };

  const handleVersionChange = (version) => {
    setSelectedVersion(version);
  };

  return (
    <main>
      <section className="">
        <div className="container mx-auto">
          <div className="productTitle mx-auto bg-white/50">
            <div className="product border accent_color py-4 text-center rounded-md">
              <h1 className="headingText font-semibold  my-1 text-[#374151]">
                Encuentre su vehículo fácilmente
              </h1>
              <p className="font-semibold mt-2 text-[#374151]">
                Seleccione Su Vehículo
              </p>
            </div>
          </div>
          <div className="md:flex gap-5 my-12 ">
            <div className="md:w-1/2 border border-gray-200 rounded-md p-5">
              <h2 className="text-[22px] text-[#374151] my-3">
                Simplifique su búsqueda con nuestro menú desplegable
              </h2>
              <p className="text-[15px]">
                Utilice nuestro menú desplegable intuitivo para seleccionar su
                vehículo de manera rápida y precisa. Esta herramienta está
                diseñada para ayudarle a encontrar la información que necesita
                de forma eficiente.
              </p>
              <p className="mt-3 text-[15px]">
                Utilice nuestro menú desplegable intuitivo para seleccionar su
                vehículo de manera rápida y precisa. Esta herramienta está
                diseñada para ayudarle a encontrar la información que necesita
                de forma eficiente.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-[24px] text-center text-gray-700 mb-5">
                Seleccione Su Vehículo
              </h2>
              <div className="compareParent">
                <div className="compareCont">
                  <div className="labandsel">
                    <label className="formLabel">Marque:</label>
                    <select
                      className="formSelect custom-select-dropdown bg-white"
                      onChange={(e) => handleBrandChange(e.target.value)}
                      value={selectedBrand || ""}
                    >
                      <option value="" disabled>
                        Sélectionnez marque
                      </option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedBrand && (
                  <div className="compareCont">
                    <div className="labandsel">
                      <label className="formLabel">Modèle:</label>
                      <select
                        className="formSelect custom-select-dropdown bg-white"
                        onChange={(e) => handleModelChange(e.target.value)}
                        value={selectedModel || ""}
                      >
                        <option value="" disabled>
                          Sélectionnez modèle
                        </option>
                        {models[selectedBrand].map((model) => (
                          <option key={model.name} value={model.name}>
                            {model.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedModel && (
                      <div className="compareCont">
                        <div className="labandsel">
                          <label className="formLabel">Année:</label>
                          <select
                            className="formSelect custom-select-dropdown bg-white"
                            onChange={(e) => handleYearChange(e.target.value)}
                            value={selectedYear || ""}
                          >
                            <option value="" disabled>
                              Sélectionnez année
                            </option>
                            {models[selectedBrand]
                              .find((m) => m.name === selectedModel)
                              ?.years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                          </select>
                        </div>

                        {selectedYear && (
                          <div className="compareCont">
                            <div className="labandsel">
                              <label className="formLabel">Version:</label>
                              <select
                                className="formSelect custom-select-dropdown bg-white"
                                onChange={(e) =>
                                  handleVersionChange(e.target.value)
                                }
                                value={selectedVersion || ""}
                              >
                                <option value="" disabled>
                                  Sélectionnez version
                                </option>
                                {models[selectedBrand]
                                  .find((m) => m.name === selectedModel)
                                  ?.versions.map((version) => (
                                    <option key={version} value={version}>
                                      {version}
                                    </option>
                                  ))}
                              </select>
                            </div>

                            {selectedVersion && (
                              <div className="formBox">
                                <p className="text-[15px]">
                                  Véhicule sélectionné: {selectedBrand}{" "}
                                  {selectedModel} ({selectedYear})
                                </p>
                                <p className="mt-2 mb-2 text-[15px]">
                                  Version sélectionnée : {selectedVersion}
                                </p>
                                <div
                                  style={{ width: "140px" }}
                                  className="homeButtons"
                                >
                                  <Link
                                    href={
                                      selectedVersion ===
                                      "Diesel 1.5L - 1.5 dCi"
                                        ? models[selectedBrand].find(
                                            (m) => m.name === selectedModel
                                          )?.hrefDiesel
                                        : models[selectedBrand].find(
                                            (m) => m.name === selectedModel
                                          )?.hrefEssence
                                    }
                                  >
                                    <button className="text-[#2C80EF] border border-[#2C80EF] w-full py-2 text-[15px] rounded-md hover:bg-[#2C80EF] hover:text-white">
                                      Disponibilité
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SelectOptionsSpain;
