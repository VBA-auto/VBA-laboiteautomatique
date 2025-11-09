"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const googleLogo = "/images/Cloud.png";

const pageDescription =
  "Diagnostic, Installaltion et montage de votre calculateur boite automatique EDC Renault pour clio 4, clio RS, Captur, megane 3, scenic 3.";

const AutreFormulaire = () => {
  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // verification states
  const [isVerified, setIsVerified] = useState(false); // true after captcha completed
  const [isVerifying, setIsVerifying] = useState(false); // spinner state

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

  // Submit handler: if not verified -> show modal; if verified -> send form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsOk(false);
    setIsTel(false);

    if (!formData.phone || !isPhoneNumberValid(formData.phone)) {
      setIsTel(true);
      return;
    }

    // if not verified, open modal to verify
    if (!isVerified) {
      setShowModal(true);
      return;
    }

    // if verified, send the form
    try {
      const response = await fetch("/api/installForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);

        // reset form fields
        setFormData({
          vehicle: "Renault Captur",
          fuel: "Diesel",
          service: "Module seul",
          region: "Ile-de-France",
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setIsVerified(false); // require verification again for next submission

        // hide success after 5s
        setTimeout(() => setIsOk(false), 5000);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    }
  };

  // Checkbox handler: only verifies (with spinner) and closes modal.
  // It DOES NOT submit the form. User must click Envoyer again to send.
  const handleCheckboxChange = () => {
    // If already verifying, ignore
    if (isVerifying) return;

    // Start spinner and simulate verification delay
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      setShowModal(false);
    }, 1000); // 2 seconds spinner
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px]">
        <div className="container mx-auto">
          <div className="relative">
            <div className="flex flex-col z-20 items-center md:px-0 px-[15px]">
              <Head>
                <title>
                  Installation et montage calculateur boite EDC Renault
                </title>
                <meta name="description" content={pageDescription} />
              </Head>

              {/* Hidden SEO H1s */}
              <div style={{ display: "none" }}>
                <h1>
                  installation et montage Renault Captur boite automatique EDC
                </h1>
                <h1>
                  installation et montage Renault Clio 4 boite automatique EDC{" "}
                </h1>
                <h1>
                  installation et montage Renault Clio RS boite automatique EDC{" "}
                </h1>
                <h1>
                  installation et montage Renault Megane 3 boite automatique EDC{" "}
                </h1>
                <h1>
                  installation et montage Renault Scenic 3 boite automatique EDC{" "}
                </h1>
                <h1>
                  installation et montage Renault Fluence boite automatique EDC{" "}
                </h1>
              </div>

              <div className="installTitle text-2xl text-center mb-5 lg:mx-16 accent_color z-20 rounded-md p-3">
                <div className="instalLaptop text-[#374151]">
                  <p className="text-[24px] font-semibold text-[#374151]">
                    Installation - Montage - démontage
                  </p>
                  <a href="/produits" className="font-semibold text-[18px]">
                    Clio IV - Captur - Mégane - Scénic - Twingo
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
                      className="hover:text-bleuvba font-bold"
                      href="tel:0756944719"
                    >
                      07 56 94 47 19
                    </a>
                  </span>
                </div>
              </div>

              {/* FORMULAIRE */}
              <div className="installForm">
                <form
                  onSubmit={handleSubmit}
                  className="h-full z-20 shadow-xl p-4 accent_color rounded-md"
                >
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
                        value={formData.vehicle}
                        className="forminputFields bg-white"
                        onChange={handleChange}
                        required
                      >
                        <option value="Renault Captur">Renault Captur</option>
                        <option value="Renault Megane">Renault Mégane 3</option>
                        <option value="Renault Megane4">
                          Renault Mégane 4
                        </option>
                        <option value="Renault Clio IV">Renault Clio 4</option>
                        <option value="Renault Clio V">Renault Clio 5</option>
                        <option value="Renault Scenic">Renault Scenic 3</option>
                        <option value="Renault Fluence">Renault Fluence</option>
                        <option value="Renault Twingo3">
                          Renault Twingo 3
                        </option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>

                    {/* Carburant */}
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
                        value={formData.fuel}
                        required
                        className="forminputFields bg-white"
                        onChange={handleChange}
                      >
                        <option value="Diesel">Diesel</option>
                        <option value="Essence">Essence</option>
                      </select>
                    </div>

                    {/* Prestation */}
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
                        value={formData.service}
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
                  </div>

                  {/* Région, Téléphone, Nom */}
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
                        value={formData.region}
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
                        <option value="Hauts-de-France">Hauts-de-France</option>
                        <option value="Normandie">Normandie</option>
                        <option value="Nouvelle-Aquitaine">
                          Nouvelle-Aquitaine
                        </option>
                        <option value="Occitanie">Occitanie</option>
                        <option value="Pays de la Loire">
                          Pays de la Loire
                        </option>
                        <option value="Provence Alpes Côte d'Azur">
                          Provence Alpes Côte d&apos;Azur
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
                        value={formData.phone}
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
                        value={formData.name}
                        className="forminputFields bg-white"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3 md:w-2/3">
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
                      value={formData.email}
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
                      value={formData.message}
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
      </section>

      {/* CAPTCHA Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl md:w-1/4 border border-gray-200">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm text-center text-gray-600 font-medium">
                Confirmez que vous êtes humain
              </h3>
            </div>

            <div className="p-4 flex gap-8 items-center justify-between">
              {/* Checkbox Section */}
              <div className="flex items-center gap-2 relative">
                <div className="relative w-6 h-6">
                  {!isVerifying ? (
                    <input
                      type="checkbox"
                      checked={isVerified}
                      onChange={handleCheckboxChange}
                      className="w-6 h-6 border-2 border-gray-300 rounded cursor-pointer accent-blue-600"
                    />
                  ) : (
                    // Spinner animation (2s)
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {isVerified && !isVerifying && (
                    <svg
                      className="absolute left-1 top-1 w-4 h-4 text-white pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>

                <span className="text-sm text-gray-700 font-medium">
                  Je ne suis pas un robot
                </span>
              </div>

              {/* Cloudflare / Google Logo */}
              <div className="flex flex-col items-end">
                <Image
                  unoptimized
                  width={70}
                  height={100}
                  src={googleLogo}
                  alt="Google Reviews"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default AutreFormulaire;
