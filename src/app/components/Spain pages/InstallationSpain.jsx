"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import { useState } from "react";

const pageDescription =
  "Diagnostic, Installaltion et montage de votre calculateur boite automatique EDC Renault pour clio 4, clio RS, Captur, megane 3, scenic 3.";

const InstallationSpain = () => {
  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isTel, setIsTel] = useState(false);

  const [formData, setFormData] = useState({
    vehicle: "Renault Captur",
    fuel: "Diesel",
    service: "Module seul",
    region: "Ile-de-France",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone || !isPhoneNumberValid(formData.phone)) {
      setIsTel(true);
      return;
    }

    try {
      const response = await fetch("/api/installForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <main>
      <section className="my-[60px]">
        <div className="container mx-auto">
          <div className="productTitle mx-auto bg-white/50 mb-8">
            <div className="product border accent_color py-4 text-center rounded-md">
              <h1 className="headingText font-semibold  my-1 text-[#374151]">
                Encuentre su vehículo fácilmente
              </h1>
              <p className="font-semibold mt-2 text-[#374151]">
                Seleccione Su Vehículo
              </p>
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="md:w-1/2">
              <div className="border border-gray-200 rounded-md p-5">
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
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="flex flex-col z-20 items-center md:px-0 px-[15px]">
                  <div className="w-full text-2xl text-center mb-5 lg:mx-16  accent_color  z-20 rounded-md p-3">
                    <div className=" text-[#374151]">
                      <p className="text-[24px] font-semibold text-[#374151]">
                        Installation - Montage - démontage
                      </p>
                      <a href="/produits" className="font-semibold text-[18px]">
                        Clio IV - Captur - Mégane - Scénic
                      </a>
                    </div>
                    <div className="instalMobile text-[#374151]">
                      <p className="text-[24px] font-semibold text-[#374151]">
                        Installation - Montage <br /> démontage
                      </p>
                      <a href="/produits" className="font-semibold text-[16px]">
                        Clio IV, Captur , Mégane, Scénic
                      </a>
                      <span className="block mt-2 text-[16px]">
                        Contactez-nous via le formulaire ou bien par tél. <br />
                        <a
                          className="hover:text-bleuvba  font-bold"
                          href="tel:0756944719"
                        >
                          07 56 94 47 19
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <form
                      onSubmit={handleSubmit}
                      className="h-full z-20 shadow-xl p-4 accent_color rounded-md"
                    >
                      <h1 className="sr-only">
                        Montage démontage installation calculateur boîte
                        automatique Renault
                      </h1>

                      <h2 className="sr-only text-[22px] font-semibold text-gray-700  text-center  mb-3 ">
                        Installation
                      </h2>
                      <h2 className="sr-only">
                        Montage calculateur de boîte automatique Renault
                      </h2>
                      <h2 className="sr-only">
                        Démontage calculateur de boîte automatique Renault
                      </h2>
                      <h2 className="sr-only">
                        Installation calculateur de boîte automatique Renault
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Sélection du véhicule */}
                        <div className="mb-3">
                          <label
                            htmlFor="vehicle"
                            className="block pl-2 text-sm font-medium text-gray-600"
                          >
                            Sélection du véhicule *
                          </label>
                          <select
                            id="vehicle"
                            name="vehicle"
                            className="forminputFields bg-white"
                            onChange={handleChange}
                            required
                          >
                            <option value="Renault Captur">
                              Renault Captur
                            </option>
                            <option value="Renault Megane">
                              Renault Mégane
                            </option>
                            <option value="Renault Clio IV">
                              Renault Clio IV
                            </option>
                            <option value="Renault Scenic">
                              Renault Scenic
                            </option>
                            <option value="Renault Fluence">
                              Renault Fluence
                            </option>
                          </select>
                        </div>

                        {/* Diesel ou Essence */}
                        <div className="mb-3">
                          <label
                            htmlFor="fuel"
                            className="block pl-2 text-sm font-medium text-gray-600"
                          >
                            Carburant *
                          </label>
                          <select
                            id="fuel"
                            name="fuel"
                            required
                            className="forminputFields bg-white"
                            onChange={handleChange}
                          >
                            <option value="Diesel">Diesel</option>
                            <option value="Essence">Essence</option>
                          </select>
                        </div>

                        {/* Sélection de la prestation */}
                        <div className="mb-3">
                          <label
                            htmlFor="service"
                            className="block pl-2 text-sm font-medium text-gray-600"
                          >
                            Prestation *
                          </label>
                          <select
                            id="service"
                            name="service"
                            className="forminputFields bg-white"
                            required
                            onChange={handleChange}
                          >
                            <option value="Module seul">Module seul</option>
                            <option value="Module + Installation">
                              Module + Installation
                            </option>
                          </select>
                        </div>

                        {/* Sélection de la région */}
                      </div>

                      {/* Numéro de téléphone */}
                      <div className="md:flex gap-5 my-4">
                        <div className="mb-3 w-full">
                          <label
                            htmlFor="region"
                            className="block pl-2 text-sm font-medium text-gray-600"
                          >
                            Région *
                          </label>
                          <select
                            id="region"
                            name="region"
                            className="forminputFields bg-white"
                            required
                            onChange={handleChange}
                          >
                            <option value="Ile-de-France">Ile-de-France</option>
                            <option value="Auvergne-Rhône-Alpes">
                              Auvergne-Rhône-Alpes
                            </option>
                            <option value="Bourgogne-Franche-Comté">
                              Bourgogne-Franche-Comté
                            </option>
                            <option value="Bretagne">Bretagne</option>
                            <option value="Centre-Val de Loire">
                              Centre-Val de Loire
                            </option>
                            <option value="Corse">Corse</option>
                            <option value="Grand Est">Grand Est</option>
                            <option value="Hauts-de-France">
                              Hauts-de-France
                            </option>
                            <option value="Normandie">Normandie</option>
                            <option value="Nouvelle-Aquitaine">
                              Nouvelle-Aquitaine
                            </option>
                            <option value="Occitanie">Occitanie</option>
                            <option value="Pays de la Loire">
                              Pays de la Loire
                            </option>
                            <option value="Provence Alpes Côte d’Azur">
                              Provence Alpes Côte d’Azur
                            </option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guyane">Guyane</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Réunion">Réunion</option>
                          </select>
                        </div>
                        <div className="mb-3 w-full">
                          <label
                            htmlFor="tel"
                            className="block pl-2 text-sm font-medium text-gray-600"
                          >
                            Téléphone*
                          </label>
                          <input
                            placeholder="0123456789"
                            type="tel"
                            id="phone"
                            name="phone"
                            className="forminputFields bg-white"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3 w-full">
                          <label
                            htmlFor="email"
                            className="block pl-2 text-sm font-medium text-gray-600"
                          >
                            Nom prénom*
                          </label>
                          <input
                            placeholder="Jean Dupont"
                            type="text"
                            id="name"
                            name="name"
                            className="forminputFields bg-white"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      {/* Adresse Email */}
                      <div className="mb-3 w-2/3">
                        <label
                          htmlFor="email"
                          className="block pl-2 text-sm font-medium text-gray-600"
                        >
                          E-mail*
                        </label>
                        <input
                          placeholder="Votre adresse mail"
                          type="email"
                          id="email"
                          name="email"
                          className="forminputFields bg-white"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Message */}
                      <div className="mb-3">
                        <label
                          htmlFor="message"
                          className="block pl-2 text-sm font-medium text-gray-600"
                        >
                          Message*
                        </label>
                        <textarea
                          placeholder="Merci de préciser l'objet de votre demande. Nous nous engageons à vous répondre sous 24 heures."
                          id="message"
                          name="message"
                          rows="4"
                          required
                          className="forminputFields bg-white"
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <p className="text-red-500">
                        {isTel
                          ? "Erreur lors de l'envoi du formulaire, vérifier votre numéro de téléphone"
                          : ""}
                      </p>
                      <p className="text-red-500">
                        {isError ? "Erreur lors de l'envoi du formulaire" : ""}
                      </p>
                      <p className="text-green-500">
                        {isOk ? "Formulaire envoyé avec succès" : ""}
                      </p>

                      {/* Bouton Envoyer */}
                      <button
                        type="submit"
                        className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-10 rounded-md hover:bg-[#2C80EF] hover:text-white block mx-auto"
                      >
                        Envoyer
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InstallationSpain;
