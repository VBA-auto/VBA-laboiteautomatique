// src/app/components/SimpleSlider.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SimpleSlider = () => {
  const images = ["/images/productImage.webp", "/images/prodPic.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      {/* Image Display */}
      <div className="w-full relative">
        <Image
          width={400}
          height={300}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          objectFit="cover"
          className="mx-auto"
        />
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={prevImage}
        aria-label="Previous Slide"
      >
        <FiChevronLeft className="text-gray-700" size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={nextImage}
        aria-label="Next Slide"
      >
        <FiChevronRight className="text-gray-700" size={24} />
      </button>
    </div>
  );
};

export default SimpleSlider;
