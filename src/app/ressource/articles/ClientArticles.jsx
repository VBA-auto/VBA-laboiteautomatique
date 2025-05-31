"use client"; // Mark this as a client component
import { useState } from "react";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ClientArticles({ cars }) {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <section>
      <SubHeader />
      <Header />
      <main className="container mx-auto pt-[60px] pb-[80px]">
        <h1 className="text-[24px] font-semibold text-[#374151] text-center mb-8">
          Articles
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <article
              key={car.id}
              className=" bg-white rounded-md shadow-md cursor-pointer"
              onClick={() => setSelectedCar(car)} // Set the selected car
            >
              <figure>
                <Image
                  unoptimized
                  src={car.image}
                  alt={car.title}
                  width={500}
                  height={400}
                  className="w-full md:h-40 rounded-md object-cover"
                />
              </figure>
              <div className="p-2">
                <h2 className="text-base capitalize font-semibold">
                  {car.title}
                </h2>
                <p className="text-sm">
                  {car.excerpt}...{" "}
                  <span className="text-blue-500">lire plus</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {selectedCar && (
          <dialog id="articlePopup" className="modal modal-open">
            <div className="modal-box w-12/12 max-w-6xl bg-white">
              <div className="modal-action mt-0 mb-5">
                <button
                  className="border px-2 rounded-md text-sm text-blue-500"
                  onClick={() => setSelectedCar(null)} // Close the modal
                >
                  X
                </button>
              </div>
              <div className="w-full md:h-[600px]">
                <Image
                  unoptimized
                  src={selectedCar.image}
                  alt={selectedCar.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h2 className="text-xl font-bold my-4 capitalize">
                {selectedCar.title}
              </h2>
              <div
                className="prose text-justify"
                dangerouslySetInnerHTML={{ __html: selectedCar.paragraph }}
              ></div>
              <div className="text-start mt-5">
                <Link href="/contact">
                  <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-3 rounded-md hover:bg-[#2C80EF] hover:text-white block">
                    <span>Contactez-nous</span>
                  </button>
                </Link>
              </div>
            </div>
          </dialog>
        )}
      </main>
      <Footer />
    </section>
  );
}
