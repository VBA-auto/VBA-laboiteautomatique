"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function DynamicPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [loading, setLoading] = useState(true);

  // Countdown calculation
  const calculateTimeLeft = (targetDate) => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) return null;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const res = await fetch("/api/promo");
        const data = await res.json();

        if (!data || !data.active || !data.date) {
          setIsVisible(false);
          setLoading(false);
          return;
        }

        const promoDate = new Date(data.date);
        promoDate.setHours(23, 59, 59, 999); // End of the day

        const initialTime = calculateTimeLeft(promoDate.getTime());

        if (initialTime) {
          setTimeLeft(initialTime);
          setIsVisible(true);

          const interval = setInterval(() => {
            const updated = calculateTimeLeft(promoDate.getTime());
            if (!updated) {
              clearInterval(interval);
              setIsVisible(false);
            } else {
              setTimeLeft(updated);
            }
          }, 1000);

          return () => clearInterval(interval);
        }
      } catch (error) {
        console.error("Error fetching promo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromo();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (loading || !isVisible || !timeLeft) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <IoClose className="w-6 h-6 text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              PROMO SPECIALE se termine dans!
            </h2>
            <p className="text-gray-600 mt-1">
              Ne manquez pas cette offre exclusive
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-yellow-50 py-3 px-4 rounded-lg text-center mb-4 font-semibold text-[#c33e1d]">
            {/* Time remaining:{" "} */}
            <p className="text-4xl">{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
          </div>

          <div className="flex justify-center my-4">
            <Image
              src="/images/cal-normal-3.webp"
              alt="Special Offer"
              width={300}
              height={200}
              unoptimized
              className="rounded-lg object-cover"
            />
          </div>

          <Link href="/promo">
            <button
              onClick={handleClose}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mt-4"
            >
              PROMO CODE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
