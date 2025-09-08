"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import { useState, useEffect } from "react";
import ModalForm from "./ModalClutch";

// Mock components (replace with your actual components)
const DynaProdStock = ({ carName }) => (
  <div className="text-green-600 text-sm font-medium">
    ● En stock - {carName}
  </div>
);

// Custom Image Slider Component
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock images for /images/luk directory
  const sliderImages = [
    "/images/Luk/1.webp",
    "/images/Luk/2.webp",
    "/images/Luk/3.webp",
    "/images/Luk/4.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="relative w-full md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full rounded-lg"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderImages.map((image, index) => (
          <div key={index} className="min-w-full h-full rounded-lg">
            <div className="w-full h-full border border-blue-400 flex items-center justify-center rounded-lg text-white font-bold text-xl">
              <Image
                width={650}
                height={500}
                src={image}
                alt={`Slide ${index + 1}`}
                className=" object-cover"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Car data
const carsData = [
  {
    name: "Renault Captur",
    year: "à partir de 2012",
    image: "/images/calculateur_DC4_Renault_Capture.webp",
    link: "/captur",
    engines: [
      { type: "essence", label: "1.2 Essence", link: "/captur?type=essence" },
      { type: "diesel", label: "1.5 Diesel", link: "/captur?type=diesel" },
    ],
  },
  {
    name: "Renault Clio IV",
    year: "à partir de 2012",
    image: "/images/calculateur_DC4_Renault_Clio4.webp",
    link: "/clio",
    engines: [
      { type: "essence", label: "1.2 Essence", link: "/clio?type=essence" },
      { type: "diesel", label: "1.5 Diesel", link: "/clio?type=diesel" },
    ],
  },
  {
    name: "Renault Mégane",
    year: "de 2008 to 2013",
    image: "/images/calculateur_DC4_renault-megane.webp",
    link: "/megane",
    engines: [
      { type: "essence", label: "1.2 Essence", link: "/megane?type=essence" },
      { type: "diesel", label: "1.5 Diesel", link: "/megane?type=diesel" },
    ],
  },
  {
    name: "Renault Scénic",
    year: "à partir de 2008",
    image: "/images/calculateur_DC4_renault_Senic.webp",
    link: "/scenic",
    engines: [
      { type: "diesel", label: "1.5 Diesel", link: "/scenic?type=diesel" },
    ],
  },
  {
    name: "Renault Fluence",
    year: "à partir de 2009",
    image: "/images/calculateur_DC4_renault-fluence.webp",
    link: "/fluence",
    engines: [
      { type: "diesel", label: "1.5 Diesel", link: "/fluence?type=diesel" },
    ],
  },
  {
    name: "Renault Clio RS",
    year: "à partir de 2010",
    image: "/images/calculateur_DC4_clioRS.webp",
    link: "/clio-rs",
    engines: [
      { type: "essence", label: "1.6 Essence", link: "/clio-rs?type=essence" },
    ],
  },
  {
    name: "Renault Megane 4",
    year: "à partir de 2015",
    image: "/images/megane_4_car.webp",
    link: "/megane-4",
    engines: [
      { type: "diesel", label: "1.5 Diesel", link: "/megane-4?type=diesel" },
    ],
  },
  {
    name: "Renault Clio 5",
    year: "à partir de 2015",
    image: "/images/clio_5.webp",
    link: "/clio-5",
    engines: [
      { type: "essence", label: "1.3 Essence", link: "/clio-5?type=essence" },
    ],
  },
  {
    name: "Renault Twingo 3",
    year: "à partir de 2016",
    image: "/images/twingo-3.webp",
    link: "/twingo-3",
    engines: [
      {
        type: "essence",
        label: "0.9 – 1.0 Essence",
        link: "/twingo-3?type=essence",
      },
    ],
  },
];

const Produits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <SubHeader />
      <Header />

      <section className="py-[60px] bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Page Title */}

          <div className="productTitle mx-auto bg-white/50">
            <div className="product border accent_color py-4 text-center rounded-md">
              <h1 className="headingText font-semibold  my-1 text-[#374151]">
                Kit Embrayage Renault boite EDC (DC4)
              </h1>
              <p className="font-semibold mt-2 text-[#374151]">Disponibilité</p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-12 my-16">
            {/* Left Section - Image Slider */}
            <div className="space-y-6">
              <ImageSlider />
            </div>

            {/* Right Section - Order Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <span className="text-gray-700">
                      Sélectionnez votre véhicule
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <span className="text-gray-700">
                      Choisissez le type de moteur
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <span className="text-gray-700">
                      Vérifiez la disponibilité
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  ✓ Avantages de nos produits
                </h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Livraison rapide 24-48h</li>
                  <li>• Support technique inclus</li>
                  <li>• Prix compétitifs</li>
                  <li>• Stock permanent</li>
                </ul>
              </div>
              <div className="">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
                >
                  Commander Maintenant
                </button>
              </div>
            </div>
          </div>

          {/* Available Cars Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Véhicules Disponibles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez notre gamme complète de calculateurs EDC pour les
                modèles Renault
              </p>
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
              {carsData.map((car, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Stock Status */}
                  <div className="p-4 pb-0">
                    <DynaProdStock carName={car.name} />
                  </div>

                  {/* Car Image */}
                  <div className="p-6 text-center">
                    <div className="w-2/3 h-[200px] mx-auto rounded-lg flex items-center justify-center">
                      <Image
                        width={250}
                        height={200}
                        src={car.image}
                        alt={`Slide ${index + 1}`}
                        className=" object-cover w-full"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Car Info */}
                  <div className="px-6 pb-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-sm text-gray-500">{car.year}</p>
                    </div>

                    {/* Engine Options */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Options disponibles:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {car.engines.map((engine, engineIndex) => (
                          <button
                            onClick={() => setIsModalOpen(true)}
                            key={engineIndex}
                            className="flex-1 min-w-0 py-2 px-3 text-sm border border-blue-300 rounded-lg text-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium"
                          >
                            {engine.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full mt-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg font-semibold hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-300 border border-gray-200"
                    >
                      Voir les détails
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cars={carsData}
      />

      <Footer />
    </main>
  );
};

export default Produits;
