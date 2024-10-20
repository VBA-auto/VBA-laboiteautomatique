"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageDescription =
  "Les différents codes defaults qu&apos;il peut y avoir concernant le calculateur de boite automatique Renault (boite EDC)";
const HeadingText = "Aide en ligne code defaut renault boite automatique";

const MiseEnLigne = () => {
  const MAX_RESULTS = 20;

  const initialCodes = [
    {
      code: "DTC940811",
      description: "Circuit temoin . Court-circuit à la masse",
      subTitle: "default with the drum ",
      aide: "Vérifier l'état de la batterie",
    },
    {
      code: "DTC17431C",
      description: "Circuit moteur embrayage 1",
      subTitle: "Clutch 1 motor circuit supply voltage",
      aide: "Vérifier l'état de la batterie",
    },
    {
      code: "DTC1525F3",
      description:
        "Incohérences information multiplexées pour rv/lv/Régulateur vitesse non conforme",
      subTitle: "consistent multiple signals for CC/SL Could not clear",
      aide: "Vérifier l'état de la batterie",
    },
    {
      code: "DTC174301",
      description:
        "Circuit moteur embrayage 1. Panne electrique non identifiée. Problème sur le calculateur",
      subTitle: "Clutch 1 motor circuit , Short circuit to earth",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC174311",
      description: "Circuit moteur embrayage 1. Court-circuit à la masse",
      subTitle:
        "P0741 - Torque Converter Clutch Circuit Performance or Stuck Off",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC174401",
      description:
        "Circuit moteur embrayage 2. Panne eléctrique non identifiée",
      subTitle: "clutch 2 motor circuit",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC174411",
      description: "Circuit moteur embrayage 2. Court-circuit à la masse",
      subTitle:
        "P0741 - Torque Converter Clutch Circuit Performance or Stuck Off",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC17441C",
      description:
        "Circuit moteur embrayage 2 problème calculateur et/ou embrayage",
      subTitle: "clutch 2  motor circuit short circuit to earth",
      aide: "problème calculateur et/ou embrayage",
    },
    {
      code: "DTC180401",
      description:
        "Tension alimentation calculateur/ Mauvaise tension batterie",
      subTitle: "P0562 - System Voltage Low",
      subTitle: "P0705 - Transmission Range Sensor Circuit (PRNDL Input)",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC180714",
      description:
        "Circuit contacteur position levier. Circuit ouvert ou court-circuit à la masse.",
      subTitle: "P0705 - Transmission Range Sensor Circuit (PRNDL Input)",
      aide: "Vérifier l'état de la batterie + effectuer un calibrage du sélecteur + vérifier le programme",
    },
    {
      code: "DTC180962",
      description: "Circuit contacteur position levier. Signal constant.",
      subTitle: "P0705 - Transmission Range Sensor Circuit (PRNDL Input)",
      aide: "Vérifier l'état de la batterie + effectuer un calibrage du sélecteur + vérifier le programme",
    },
    {
      code: "DTC181516",
      description: "Tension batterie 12v. Basse tension",
      subTitle: "P0562 - System Voltage Low",
      aide: "Vérifier l'état de la batterie",
    },
    {
      code: "DTC183892",
      description:
        "Tambour de selection de vitesse 1. Signal hors limite basse ou haute",
      subTitle: "P0730 - Incorrect Gear Ratio",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC185111",
      description: "Signal moteur embrayage 2. Court circuit à la masse",
      subTitle:
        "P0741 - Torque Converter Clutch Circuit Performance or Stuck Off",
      aide: "Problème calculateur",
    },
    {
      code: "DTC185562",
      description: "Signal moteur embrayage 2. Signal non plausible",
      subTitle:
        "P0741 - Torque Converter Clutch Circuit Performance or Stuck Off",
      aide: "Problème calculateur",
    },
    {
      code: "DTC185764",
      description: "Moteur embrayage 2. Incohérence signal",
      subTitle:
        "P0741 - Torque Converter Clutch Circuit Performance or Stuck Off",
      aide: "Problème calculateur",
    },
    {
      code: "DTC187298",
      description: "Embrayage 2. Température mesurée trop forte",
      subTitle:
        "Temperature measured for the clutch of gear 2 is too high, possibly due to overheating",

      aide: "Problème calculateur et/ou embrayage",
    },
    {
      code: "DTC189311",
      description: "Drum 2 moteur. Court circuit à la masse",
      subTitle: "Short to ground in the motor for the drum of gear 2",
      aide: "Problème calculateur",
    },
    {
      code: "DTC189412",
      description:
        "Circuit moteur tambour de selection vitesse 1. Court-circuit au + 12 volts",
      subTitle:
        "Short circuit to the positive voltage in the motor circuit for the gear selection drum of gear 1",
      aide: "Problème calculateur",
    },
    {
      code: "DTC191211",
      description:
        "Circuit capteur regime entrée 1 boite. Court-circuit à la masse",
      subTitle:
        "Short to ground in the sensor circuit for gear entry 1 in the transmission.",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique",
    },
    {
      code: "DTC191311",
      description:
        "Circuit capteur régime entrée 2 boite. Court circuit à la masse",
      subTitle: "Similar to DTC191211, for gear entry 2.",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique",
    },
    {
      code: "DTC404086",
      description:
        "Info multiplexée pédale de frein uch invalide. Contacteur de frein invalide",
      subTitle: "Invalid multiplexed information from the brake pedal switch",
      aide: "Vérifier l'état de la batterie + capteur de pédale de frein",
    },
    {
      code: "DTC500886",
      description:
        "Information multiplexée temerature exterieure. Incohérence du signal",
      subTitle: "P0071 - Ambient Air Temperature Sensor Range/Performance",
      aide: "Vérifier l'état de la batterie + capteur de température",
    },
    {
      code: "DTC500887",
      description:
        "Information multiplexée temperatere exterieure. Absence de signal",
      subTitle: "P0070 - Ambient Air Temperature Sensor Circuit",
      aide: "Vérifier l'état de la batterie + capteur de température",
    },
    {
      code: "DTCAAAB47",
      description: "Calculateur. Anomalie électronique interne",
      subTitle: "Indicates an internal electrical fault, similar to DTCAAAB47.",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique. Effectuer un calibrage.",
    },
    {
      code: "DTCAAB047",
      description: "Panne electrique interne",
      subTitle:
        "Absence of signal from the secondary brake contact, potentially affecting brake light communication",
      aide: "Problème calculateur. Contrôler le programme de la boite automatique",
    },
    {
      code: "DTCC41787",
      description: "Information multiplexée contact frein secondaire",
      subTitle:
        "Indicates an inconsistent signal from the right front wheel, possibly from the wheel speed sensor.",
      aide: "Vérifier l'état de la batterie + Capteur de pédale de frein",
    },
    {
      code: "DTCD22186",
      description: "Signal multiplexe roue avant gauche.",
      subTitle: "Similar to DTCD22086, but for the left front wheel",
      aide: "Vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTCD22086",
      description: "Signal multiplexe roue avant droite.",
      subTitle:
        "Indicates an inconsistent signal from the right front wheel, possibly from the wheel speed sensor.",
      aide: "Incohérence signal vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DF441",
      description:
        "circuit moteur - tambour de sélection vitesses 2 - circuit ouvert",
      subTitle:
        "Suggests an open circuit in the motor for the gear selection drum of gear 2.",
      aide: "problème calculateur",
    },
    {
      code: "DF442",
      description:
        "circuit moteur tambour de selection vitesse 2 - tension d'alimentation hors tolérance",
      subTitle:
        "Points to a voltage supply issue that is out of tolerance for the motor of the gear selection drum for gear 2",
      aide: "vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DF436",
      description:
        "Tambour de selection de vitesse 2 - detection signal hors limite basse ou haute",
      subTitle:
        "gear 2 selection signal detection that is out of the expected range, either too high or too low",
      aide: "vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DF435",
      description:
        "Tambour de selection de vitesses 2 - Detection signal hors limite basse ou haute ",
      subTitle: "related to gear 2 selection signal detection",
      aide: "problème calculateur",
    },
    {
      code: "DF232",
      description: "Calculateur - Anomalie électronique interne",
      subTitle: "P0606 - PCM Processor Fault",
      aide: "problème calculateur",
    },
    {
      code: "DF421",
      description: "Tension batterie - sous tension ",
      subTitle: "P0560 - System Voltage Malfunction",
      aide: "vérifier l'état de la batterie + peut être problème calculateur",
    },
    {
      code: "DTC191001",
      description:
        "Circuit capteur regime entrée 1 boite - Anomalie électronique interne-",
      subTitle:
        "Internal electronic anomaly in the sensor for gear entry in the transmission.",
      aide: "problème calculateur. Controler le programme de la boite automatique",
    },
    {
      code: "DTC1525F3",
      description: "Cohérence informations multiplexées pour RV/LV",
      subTitle:
        "Internal electronic anomaly in the sensor for gear entry in the transmission.",
      aide: "Vérifier capteur pédale de frein ou capteur ABS et fusibles (peut-être aussi un problème de calculateur)",
    },
    {
      code: "DTCC40200",
      description: "Informations multiplexées BVA invalides",
      subTitle:
        "Internal electronic anomaly in the sensor for gear entry in the transmission.",
      aide: "Vérifier capteur pédale de frein ou capteur ABS et fusibles (peut-être aussi un problème de calculateur)",
    },
    {
      code: "DTC174092",
      description:
        "Tambour de sélection de vitesses détection signal hors limite basse ou haute",
      subTitle:
        "Internal electronic anomaly in the sensor for gear entry in the transmission.",
      aide: "Vérifier capteur pédale de frein ou capteur ABS + petits moteurs embrayage (peut-être aussi un problème de calculateur)",
    },
  ];

  const generateH2Tags = () => {
    return initialCodes.map((code, index) => (
      <h2 className="hidden" key={index}>
        {code.code}
      </h2>
    ));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCodes, setFilteredCodes] = useState([]);

  // const handleSearch = () => {
  //   const searchTermLowerCase = searchTerm.toLowerCase();
  //   const filtered = initialCodes
  //     .filter(
  //       (code) =>
  //         code.code.toLowerCase().includes(searchTermLowerCase) ||
  //         code.description.toLowerCase().includes(searchTermLowerCase)
  //     )
  //     .slice(0, MAX_RESULTS);
  //   setFilteredCodes(filtered);
  // };

  const handleSearch = (searchTerm) => {
    const searchTermLowerCase = searchTerm.toLowerCase().trim();

    const filtered = initialCodes
      .filter((code) => {
        // If the user has typed the exact code, show only the exact match
        if (searchTermLowerCase === code.code.toLowerCase()) {
          return true;
        }
        // While the user is typing, show any results that start with the search term
        if (code.code.toLowerCase().startsWith(searchTermLowerCase)) {
          return true;
        }
        return false;
      })
      .slice(0, MAX_RESULTS); // Limit the number of results

    setFilteredCodes(filtered);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    handleSearch(searchValue); // Trigger search on input change
  };

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   handleSearch();
  // };

  const [selectedCode, setSelectedCode] = useState(null);

  // Fonction pour gérer le clic sur la recommandation
  const toggleRecommendation = (code) => {
    setSelectedCode(selectedCode === code ? null : code);
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="md:px-0 px-5">
        <div className="">
          {/* Conteneur principal */}
          <div className="relative">
            {/* Configuration de la page */}
            <Head>
              <title>
                Code default boite EDC lié au calcualateur 6DCT250 GETRAG
              </title>
              <meta name="description" content={pageDescription} />
              <meta name="headline" content={HeadingText} />
            </Head>
            <div style={{ display: "none" }}>
              <h1>
                Aide en ligne code defaut renault boite automatique. Moteur /
                tambour embrayage
              </h1>

              <h2>court circuit à la masse moteur embrayage 1</h2>
              <h2>court circuit à la masse moteur embrayage 2</h2>
              <h2>tambour embrayage 1</h2>
              <h2>tambour embrayage 2</h2>
              <h2>défault calculateur interne</h2>
              <h2>court circuit à la masse</h2>
              <h2>panne éléctrique</h2>
            </div>

            {/* Partie gauche - Texte initial */}
            <main className="py-[60px]">
              <div className="container mx-auto">
                <div className=" mb-5  text-center">
                  <p className="text-[24px] font-semibold text-[#374151]">
                    Aide en ligne
                  </p>
                </div>
                <div className="md:flex md:gap-10 gap-5 mt-8 flexdirection">
                  <div className="md:w-1/2">
                    <div className="accent_color p-3 rounded-md">
                      <p className="mb-6 text-justify text-[15px]">
                        Les boites automatiques (modèles DC4 et 6DCT250)
                        couramment installées dans les véhicules
                        <a
                          className="font-bold text-[#374151]"
                          href="/produits"
                        >
                          {" "}
                          Renault Captur, Mégane, Scénic, Clio 4, Fluence{" "}
                        </a>{" "}
                        se composent principalement :
                      </p>

                      <ul className=" mb-6 text-[15px]">
                        <li>
                          - d&apos;un double embrayage à sec et d&apos;un volant
                          moteur
                        </li>
                        <li>
                          - de 2 petits moteurs d&apos;embrayage et de capteurs
                        </li>
                        <li>- de synchros</li>
                        <li>- d&apos;un calculateur</li>
                      </ul>

                      <p className="text-justify text-[15px]">
                        Ces calculateurs peuvent présenter des défaillances en
                        général en dessous de 120 000 km. De plus, il est
                        fréquent que le{" "}
                        <a className="font-bold cursor-text text-[#374151]">
                          double embrayage
                        </a>{" "}
                        et le{" "}
                        <a className="font-bold cursor-text text-[#374151]">
                          volant moteur
                        </a>{" "}
                        commencent à montrer des signes d&apos;usure à partir de
                        150 000 km. Pour anticiper et résoudre ces problèmes,
                        nous avons la possibilité de{" "}
                        <a className="font-bold cursor-text text-[#374151]">
                          vérifier l&apos;état d&apos;usure de l&apos;embrayage
                        </a>{" "}
                        grâce aux{" "}
                        <a className="font-bold  cursor-text text-[#374151]">
                          &apos;points de touche&apos;
                        </a>{" "}
                        et / ou{" "}
                        <a className="font-bold  cursor-text text-[#374151]">
                          &apos;points de friction&apos;.
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="">
                      {/* Barre de recherche */}
                      <div className="">
                        <p className="text-[15px]">Chercher un code défault:</p>
                        <div className="">
                          <input
                            type="text"
                            placeholder="Code erreur ou description"
                            value={searchTerm}
                            onChange={handleChange}
                            className="w-full py-3 px-2 rounded-md bg-transparent accent_color my-5"
                          />

                          <div className="researchBitton mt-1">
                            <button
                              onClick={handleSearch}
                              className="text-[#2C80EF]  bg-white border border-[#2c80ef] text-[15px] py-[8px] px-[25px] rounded-md hover:bg-[#2c80ef] hover:text-white"
                            >
                              Rechercher
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Résultats de la recherche */}
                      {searchTerm.length >= 3 ? (
                        <div className="bg-white mt-5 p-4 rounded-lg shadow-xl  text-lg overflow-y-auto serchResult">
                          {filteredCodes.length > 0 ? (
                            <div>
                              {/* Affichage des codes filtrés */}
                              {filteredCodes.map((code) => (
                                <div
                                  key={code.code}
                                  className="mb-4 p-4 border rounded-lg border-orangevba"
                                >
                                  <p className="font-bold text-md text-[16px] text-[#374151]">
                                    {code.code}
                                  </p>
                                  <p
                                    className="mb-2 mt-1 text-[15px] "
                                    style={{ lineHeight: "22px" }}
                                  >
                                    {code.description}
                                  </p>
                                  <p className="mb-2 italic text-[14px] text-gray-500">
                                    {code.subTitle}
                                  </p>
                                  <span className="text-[15px]">
                                    Cliquer{" "}
                                    <a
                                      href="#"
                                      className="text-[#2c80ef]"
                                      onClick={() =>
                                        toggleRecommendation(code.code)
                                      }
                                    >
                                      ici
                                    </a>{" "}
                                    pour obtenir de l&apos;aide
                                  </span>

                                  {selectedCode === code.code && (
                                    <span className="text-[14px]">
                                      <br />
                                      <p
                                        className="text-[#e43f3f]"
                                        style={{
                                          lineHeight: "22px",
                                          marginTop: "5px",
                                        }}
                                      >
                                        {code.aide}
                                      </p>
                                    </span>
                                  )}
                                  {/* <p className="mt-5 text-[16px]">
                            Pour plus d&apos;informations, merci de nous
                          </p> */}
                                  <div className="text-start mt-5 mb-2">
                                    <Link
                                      className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-2 rounded-md hover:bg-[#2C80EF] hover:text-white "
                                      href="/contact"
                                    >
                                      Contactez-nous
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            // Aucun code trouvé
                            <div className="text-center p-5">
                              <p className="text-[20px] font-semibold mb-2">
                                CODE DÉFAUT INCONNU
                              </p>
                              <p>Le code défaut saisi est inconnu</p>
                              <p className="mb-4">
                                Pour plus d&apos;informations, merci de nous
                                contacter
                              </p>
                              <div className="text-center">
                                <Link
                                  className="bg-[#2C80EF] text-[15px] text-white p-[10px] mb-5 rounded-md hover:bg-[#2c80efb2]"
                                  href="/contact"
                                >
                                  Contactez-nous
                                </Link>
                              </div>
                              {generateH2Tags()}
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="mt-5 italic text-[14px]">
                          * Codes défault a titre indicatif uniquement
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MiseEnLigne;
