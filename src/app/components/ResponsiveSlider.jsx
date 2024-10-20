"use client";
import Image from "next/image";
import React, { useState } from "react";

const ResponsiveSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track main image index
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0); // Track thumbnail view index
  const thumbnailsToShow = 3;

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Update main image to match the thumbnail clicked
  };

  const slideThumbnails = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;

      // Calculate new thumbnail start index based on new main image
      const newStartIndex =
        Math.floor(newIndex / thumbnailsToShow) * thumbnailsToShow;

      setThumbnailStartIndex(
        Math.max(0, Math.min(newStartIndex, images.length - thumbnailsToShow))
      );

      return newIndex;
    });
  };

  return (
    <div className="mx-auto">
      {/* Main Image */}
      <div className="main-image">
        <div className="md:h-[280px] h-[180px] md:mt-5 flex flex-col items-center justify-center">
          <Image
            className="mx-auto md:w-[320px] w-[220px] object-cover"
            width={400}
            height={100}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
      </div>

      {/* Thumbnails Controls */}
      <div className="thumbnail-controls mt-5 flex items-center">
        {/* Left Button */}
        <button
          onClick={() => slideThumbnails(-1)}
          disabled={currentIndex === 0}
          className="bg-white h-[60px] px-1 rounded-md text-[#2C80EF]"
        >
          &lt;
        </button>

        {/* Thumbnails Container */}
        <div
          className="thumbnails flex overflow-hidden"
          style={{
            width: "260px", // Ensure container fits 3 thumbnails (3 * thumbnail width + margins)
          }}
        >
          {/* Thumbnails with slide animation */}
          <div
            className="h-[51px] w-[70px]"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out", // Smooth sliding animation
              transform: `translateX(-${thumbnailStartIndex * (80 + 10)}px)`, // Calculate slide distance
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={180}
                height={65}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                className="mx-2 cursor-pointer rounded object-cover md:min-w-[65px]"
                style={{
                  border:
                    currentIndex === index
                      ? "1px solid #2C80EF"
                      : "1px solid #cfcfcf", // Apply blue border for active thumbnail
                  padding: "5px",
                  transition: "border 0.3s ease-in-out", // Smooth border transition when changing
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => slideThumbnails(1)}
          disabled={currentIndex === images.length - 1}
          className="bg-white h-[60px] px-1 rounded-md text-[#2C80EF]"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
