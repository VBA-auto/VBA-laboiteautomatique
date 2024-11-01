// Import statements

"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RefrerenceCheckerComp from "@/components/RefSearch";

const pageDescription =
  "Trouver ici la référence de votre calculateur Renault: A2C30743000 01 K00 - A2C53374830 03 K01 - A2C30743100 - A2C73768907 00 K00 ";
const HeadingText = "Trouver en fonction du véhicule le calculateur compatible";

const ComparePage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);

  const brands = ["Renault"];

  const models = {
    Renault: [
      {
        name: "Captur",
        years: [
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: [
          "Essence 0.9L - 0.9 Tce",
          "Essence 1.2L - 1.2 Tce",
          "Diesel 1.5L - 1.5 dCi",
        ],
        hrefEssence: "/vehicule/renault-captur-essence",
        hrefDiesel: "/vehicule/renault-captur-diesel",
      },
      {
        name: "Clio IV",
        years: [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: [
          "Essence 0.9L - 0.9 Tce",
          "Essence 1.2L - 1.2 16v",
          "Essence 1.2L - 1.2 Tce",
          "Essence 1.6L - RS",
          "Diesel 1.5L - 1.5 dCi",
        ],
        hrefEssence: "/vehicule/renault-clio4-essence",
        hrefDiesel: "/vehicule/renault-clio4-diesel",
      },
      {
        name: "Renault Clio RS",
        years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        versions: ["Essence 1.6L"],
        hrefEssence: "/vehicule/renault-clio4-rs-essence",
        hrefDiesel: "/vehicule/renault-clio4-rs-essence",
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
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/vehicule/renault-fluence-diesel",
        hrefDiesel: "/vehicule/renault-fluence-diesel",
      },
      {
        name: "Scénic III",
        years: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/vehicule/renault-scenic-diesel",
        hrefDiesel: "/vehicule/renault-scenic-diesel",
      },
      {
        name: "Grand Scénic III",
        years: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/vehicule/renault-scenic-diesel",
        hrefDiesel: "/vehicule/renault-scenic-diesel",
      },
      {
        name: "Megane 3",
        years: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/vehicule/renault-megane-essence",
        hrefDiesel: "/vehicule/renault-megane-diesel",
      },
      {
        name: "Megane 3 CC",
        years: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/vehicule/renault-megane-essence",
        hrefDiesel: "/vehicule/renault-megane-diesel",
      },
      {
        name: "Megane 3 Coupé",
        years: [
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/vehicule/renault-megane-essence",
        hrefDiesel: "/vehicule/renault-megane-diesel",
      },
    ],
    // Ford: [
    //   {
    //     name: "Ford Focus",
    //     years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    //     versions: ["Essence 1.6L - 1.6 Tce", "Diesel 1.5L - 1.5 dCi"],
    //     hrefEssence: "/ford-focus/essence",
    //     hrefDiesel: "/ford-focus/diesel",
    //   },
    // ],
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
      <SubHeader />
      <Header />
      <section className="compare">
        <div className="container mx-auto">
          <Head>
            <title>
              Identifier la référence de votre calculateur Renault ici
            </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>

          <div style={{ display: "none" }}>
            <h1>Trouver en fonction du véhicule le calculateur compatible</h1>
          </div>
          <div className="md:flex gap-12">
            <div className="md:w-1/2">
              <h2 className="text-[24px] text-center text-white mb-5">
                Sélectionnez Votre Véhicule
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
            <div className="hidden md:block">
              <div className="flex justify-center items-center ">
                <span className="h-[300px] mt-[55px] w-[1px] bg-white"></span>
              </div>
            </div>
            <div className="md:w-1/2 md:px-0 px-3 md:mt-0 mt-12">
              <RefrerenceCheckerComp />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ComparePage;
