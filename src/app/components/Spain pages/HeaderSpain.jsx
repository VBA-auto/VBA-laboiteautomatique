"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { RxCross1 } from "react-icons/rx";
import FaqSpain from "./FAQSpain";

const HeaderSpain = () => {
  const [navbar, setNavbar] = useState(false);
  const [prestationDropdown, setPrestationDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRefResource = useRef(null);

  const handleNavbarToggle = useCallback(() => setNavbar(!navbar), [navbar]);
  const handlePrestationToggle = useCallback(
    () => setPrestationDropdown(!prestationDropdown),
    [prestationDropdown]
  );
  const handleResourceToggle = useCallback(
    () => setResourceDropdown(!resourceDropdown),
    [resourceDropdown]
  );

  const handleDocumentClick = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setPrestationDropdown(false);
    }
    if (
      dropdownRefResource.current &&
      !dropdownRefResource.current.contains(event.target)
    ) {
      setResourceDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [handleDocumentClick]);

  const closeNavbar = useCallback(() => {
    setNavbar(false);
    setPrestationDropdown(false);
    setResourceDropdown(false);
  }, []);

  return (
    <main className="sticky top-[-5px] w-full z-50">
      <hr className="border border-[#c2c2c230]" />
      <section className="bg-white/90 headerSection">
        <div className="container mx-auto lg:px-4">
          <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 headerMainCont">
              {/* Logo */}
              <Link rel="preload" href="/" className="flex items-center">
                <div className="lg:w-[320px]">
                  <Image
                    width={130}
                    height={100}
                    src="/images/logoSpain.webp"
                    alt="Logo"
                    className=""
                    priority
                  />
                </div>
              </Link>

              {/* Botón de Hamburguesa para Móvil */}
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center text-[#2A81EC] border p-2  justify-center text-sm  rounded-lg xl:hidden "
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={handleNavbarToggle}
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                {/* <p className="border px-2 rounded-md text-[#2C80EF]">Menú</p> */}
              </button>

              {/* Enlaces de la Barra de Navegación */}
              <div
                className={`w-full xl:w-auto ${
                  navbar ? "block" : "hidden"
                } xl:block`}
                id="navbar-default"
              >
                <div className="navItemss flex flex-col md:flex-row md:items-center md:space-x-4 p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg md:border-0">
                  <Link
                    onClick={closeNavbar}
                    href="/es"
                    className="block text-[15px] py-1 text-black hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    Inicio
                  </Link>
                  <Link
                    onClick={closeNavbar}
                    href="#Productos"
                    className="block text-[15px] py-1 text-black hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    Productos
                  </Link>
                  <Link
                    onClick={closeNavbar}
                    href=""
                    className="block text-[15px] py-1 text-black hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    <button
                      onClick={() =>
                        document.getElementById("FAQModal").showModal()
                      }
                    >
                      FAQ
                    </button>
                  </Link>

                  <Link
                    onClick={closeNavbar}
                    href="#contact"
                    className="block text-[15px] py-1 text-black hover:bg-[#d7d7d745] hover:text-[#2C80EF] px-4 rounded-md"
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              {/* Botones */}
              <div className="flex gap-3 md:gap-5 headButton">
                <div className="homeButtons">
                  <Link href="/ressource/aide-en-ligne">
                    <button className="buttonCheck">
                      <span>Ayuda en línea</span>
                    </button>
                  </Link>
                </div>
                <div className="homeButtons">
                  <Link href="/selectionnez-votre-vehicule">
                    <button className="buttonCheckBlue">
                      <span>Disponibilidad</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <hr className="border border-[#c2c2c230]" />
      </section>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="FAQModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          <div className="modal-action my-0">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button>
                <p className="text-sm text-blue-500 border px-2 rounded-md mb-3">
                  X
                </p>
              </button>
            </form>
          </div>
          <FaqSpain />
        </div>
      </dialog>
    </main>
  );
};

export default HeaderSpain;
