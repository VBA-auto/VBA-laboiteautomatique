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
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

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

  const isPhoneNumberValid = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsOk(false);
    setIsTel(false);

    if (!formData.phone || !isPhoneNumberValid(formData.phone)) {
      setIsTel(true);
      return;
    }

    if (!isVerified) {
      alert("Veuillez confirmer que vous n'êtes pas un robot.");
      return;
    }

    try {
      const response = await fetch("/api/installForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
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
        setIsVerified(false);

        setTimeout(() => setIsOk(false), 5000);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };

  const handleCheckboxChange = () => {
    if (isVerifying) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 1000);
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px]">
        <div className="container mx-auto">
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
                installation et montage Renault Clio 4 boite automatique EDC
              </h1>
              <h1>
                installation et montage Renault Clio RS boite automatique EDC
              </h1>
              <h1>
                installation et montage Renault Megane 3 boite automatique EDC
              </h1>
              <h1>
                installation et montage Renault Scenic 3 boite automatique EDC
              </h1>
              <h1>
                installation et montage Renault Fluence boite automatique EDC
              </h1>
            </div>

            <div className="installTitle text-2xl text-center mb-5 lg:mx-16 accent_color z-20 rounded-md p-3">
              <div className="instalLaptop text-[#374151]">
                <p className="text-[24px] font-semibold">
                  Installation - Montage - démontage
                </p>
                <a href="/produits" className="font-semibold text-[18px]">
                  Clio IV - Captur - Mégane - Scénic - Twingo
                </a>
              </div>
              <div className="instalMobile text-[#374151]">
                <p className="text-[24px] font-semibold">
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

            {/* FORM */}
            <div className="installForm">
              <form
                onSubmit={handleSubmit}
                className="h-full z-20 shadow-xl p-4 accent_color rounded-md"
              >
                {/* --- form fields --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Vehicle */}
                  <div className="mb-3">
                    <label className="block pl-2 text-sm font-medium text-gray-600">
                      Sélection du véhicule *
                    </label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    >
                      <option value="Renault Captur">Renault Captur</option>
                      <option value="Renault Megane">Renault Mégane 3</option>
                      <option value="Renault Megane4">Renault Mégane 4</option>
                      <option value="Renault Clio IV">Renault Clio 4</option>
                      <option value="Renault Clio V">Renault Clio 5</option>
                      <option value="Renault Scenic">Renault Scenic 3</option>
                      <option value="Renault Fluence">Renault Fluence</option>
                      <option value="Renault Twingo3">Renault Twingo 3</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  {/* Fuel */}
                  <div className="mb-3">
                    <label className="block pl-2 text-sm font-medium text-gray-600">
                      Carburant *
                    </label>
                    <select
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

                  {/* Service */}
                  <div className="mb-3">
                    <label className="block pl-2 text-sm font-medium text-gray-600">
                      Prestation *
                    </label>
                    <select
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

                {/* Region / Phone / Name */}
                <div className="md:flex gap-5 my-4">
                  <div className="mb-3 w-full">
                    <label className="block pl-2 text-sm font-medium text-gray-600">
                      Région *
                    </label>
                    <select
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
                      <option value="Bretagne">Bretagne</option>
                      <option value="Occitanie">Occitanie</option>
                      <option value="Provence Alpes Côte d'Azur">
                        Provence Alpes Côte d&apos;Azur
                      </option>
                      {/* ... other options */}
                    </select>
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block pl-2 text-sm font-medium text-gray-600">
                      Téléphone*
                    </label>
                    <input
                      placeholder="0123456789"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      className="forminputFields bg-white"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block pl-2 text-sm font-medium text-gray-600">
                      Nom prénom*
                    </label>
                    <input
                      placeholder="Jean Dupont"
                      type="text"
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
                  <label className="block pl-2 text-sm font-medium text-gray-600">
                    E-mail*
                  </label>
                  <input
                    placeholder="Votre adresse mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    className="forminputFields bg-white"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="block pl-2 text-sm font-medium text-gray-600">
                    Message*
                  </label>
                  <textarea
                    placeholder="Merci de préciser l'objet de votre demande..."
                    name="message"
                    rows="4"
                    value={formData.message}
                    required
                    className="forminputFields bg-white"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <p className="text-red-500">
                  {isTel &&
                    "Erreur lors de l'envoi du formulaire, vérifier votre numéro de téléphone"}
                </p>
                <p className="text-red-500">
                  {isError && "Erreur lors de l'envoi du formulaire"}
                </p>
                <p className="text-green-500">
                  {isOk && "Formulaire envoyé avec succès"}
                </p>

                {/* Submit + CAPTCHA inline */}
                <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleCheckboxChange}
                  >
                    <div
                      className={`w-6 h-6 border-2 rounded flex items-center justify-center ${
                        isVerified
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300"
                      }`}
                    >
                      {isVerifying ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-blue-500"></div>
                      ) : isVerified ? (
                        <svg
                          className="w-4 h-4 text-white"
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
                      ) : null}
                    </div>
                    <span className="text-sm text-gray-700 font-medium select-none">
                      Je ne suis pas un robot
                    </span>
                    {/* <Image
                      unoptimized
                      width={70}
                      height={100}
                      src={googleLogo}
                      alt="Google Logo"
                    /> */}
                  </div>
                  <button
                    type="submit"
                    className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-10 rounded-md hover:bg-[#2C80EF] hover:text-white"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AutreFormulaire;
