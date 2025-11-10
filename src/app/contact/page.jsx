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
  const [isVerified, setIsVerified] = useState(false);
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
    category: "Renault Captur",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isPhoneNumberValid = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsTel(false);
    setIsOk(false);

    if (!formData.phone || !isPhoneNumberValid(formData.phone)) {
      setIsTel(true);
      return;
    }

    // Block if CAPTCHA not verified
    if (!isVerified) {
      alert("Veuillez confirmer que vous n'êtes pas un robot.");
      return;
    }

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
        setFormData({
          email: "",
          phone: "",
          name: "",
          message: "",
          category: "Renault Captur",
        });
        setIsVerified(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  // Handle CAPTCHA checkbox click
  const handleCheckboxChange = () => {
    if (isVerified || isLoadingCaptcha) return;
    setIsLoadingCaptcha(true);

    // Simulate verification delay
    setTimeout(() => {
      setIsLoadingCaptcha(false);
      setIsVerified(true);
    }, 1000);
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] md:px-0 px-5">
        <div className="relative">
          <div className="flex flex-col items-center">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      value={formData.name}
                      required
                    />
                  </div>

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
                      value={formData.email}
                      required
                    />
                  </div>

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
                      value={formData.phone}
                      required
                    />
                  </div>

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
                      value={formData.category}
                      onChange={handleChange}
                    >
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
                    value={formData.message}
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

                {/* Captcha and Button Side by Side */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* CAPTCHA Section */}
                  <div
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={handleCheckboxChange}
                  >
                    <div
                      className={`w-6 h-6 border-2 rounded flex items-center justify-center ${
                        isVerified
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300"
                      }`}
                    >
                      {isLoadingCaptcha ? (
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
                    <span className="text-sm text-gray-700 font-medium">
                      Je ne suis pas un robot
                    </span>
                    {/* <Image
                      unoptimized
                      width={60}
                      height={80}
                      src={googleLogo}
                      alt="Google"
                    /> */}
                  </div>

                  {/* Submit Button */}
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

export default Contact;
