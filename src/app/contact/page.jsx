"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
const googleLogo = "/images/Cloud.png";
const pageDescription =
  "Contactez-nous via cette page, en laissant vos coordonnées et indiquez votre type de véhicule Renault ";

const Contact = () => {
  const [isError, setIsError] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
    category: "Renault Captur", // Ajout de la catégorie
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si c'est le menu déroulant, mettez à jour la valeur dans l'objet formData
    if (name === "category") {
      setFormData((prevData) => ({ ...prevData, category: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
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
    setShowModal(true);
  };

  // handleCheckboxChange function যোগ করুন (handleSubmit এর পরে)
  const handleCheckboxChange = async () => {
    const newVerifiedState = !isVerified;
    setIsVerified(newVerifiedState);

    // If checkbox is checked, send the form
    if (newVerifiedState) {
      setTimeout(async () => {
        setShowModal(false);
        try {
          const response = await fetch("/api/contactForm", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            setIsOk(true);

            setIsVerified(false); // Reset checkbox
          } else {
            setIsError(true);
          }
        } catch (error) {
          setIsError(true);
        }
      }, 500);
    }
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className=" py-[60px] md:px-0 px-5">
        <div className="relative">
          <div className="flex flex-col items-center ">
            <Head>
              <title>contacter nous VBA calcualteur Renault</title>
              <meta name="description" content={pageDescription} />
            </Head>

            <div className="conatctTitleBody accent_color text-[#374151] md:w-[846px] py-5 text-center rounded-md mb-5">
              <h1 className="font-semibold text-[24px]">Contactez-nous</h1>
            </div>

            <div className="contactForm md:w-[846px]">
              <form
                onSubmit={handleSubmit}
                className="w-full z-20 shadow-xl accent_color p-4 rounded-md"
              >
                {/* <h1 className="text-2xl text-center text-[#090909]s font-bold mb-4">
                Contactez-nous
              </h1> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nom et Prénom */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Nom / Prénom *
                    </label>
                    <input
                      placeholder="Nom Prénom"
                      type="text"
                      id="name"
                      name="name"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Adresse Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      E-mail*
                    </label>
                    <input
                      placeholder="adresse@mail.com"
                      type="email"
                      id="email"
                      name="email"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
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
                      required
                    />
                  </div>

                  {/* Catégories (Menu déroulant) */}
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Objet de la demande*
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="forminputFields bg-white"
                      required
                      onChange={handleChange} // Ajout de la gestion du changement
                    >
                      {/* Remplacez les options par vos propres catégories */}
                      <option value="Renault Captur">Renault Captur</option>
                      <option value="Renault Megane3">Renault Megane 3</option>
                      <option value="Renault Megane4">Renault Megane 4</option>
                      <option value="Renault Clio 4">Renault Clio 4</option>
                      <option value="Renault Clio 5">Renault Clio 5</option>
                      <option value="Renault Scenic3">Renault Scenic 3</option>
                      <option value="Renault Fluence">Renault Fluence</option>
                      <option value="Renault Twingo3">Renault Twingo 3</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-4">
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
                <div className="mt-4">
                  <button
                    type="submit"
                    className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-10 rounded-md hover:bg-[#2C80EF] hover:text-white block mx-auto"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl md:w-1/4 border border-gray-200">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm text-center text-gray-600 font-medium">
                Confirmez que vous êtes humain
              </h3>
            </div>

            {/* Main Content */}
            <div className="p-4 flex gap-8 items-center justify-between">
              {/* Checkbox Section */}
              <div className="flex items-center gap-3 relative">
                <input
                  type="checkbox"
                  checked={isVerified}
                  onChange={handleCheckboxChange}
                  className="w-6 h-6 border-2 border-gray-300 rounded cursor-pointer accent-blue-600"
                />
                {isVerified && (
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
                <span className="text-sm text-gray-700 font-medium">
                  Je ne suis pas un robot
                </span>
              </div>

              {/* Cloudflare Logo */}
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

export default Contact;
