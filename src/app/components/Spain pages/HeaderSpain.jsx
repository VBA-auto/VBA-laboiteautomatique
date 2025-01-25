"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { FaAngleDown } from "react-icons/fa";

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
                <div className="lg:w-[290px]">
                  <Image
                    width={100}
                    height={100}
                    src="/images/VBAlogo.webp"
                    alt="Logo"
                    className="w-[90px] h-[60px]"
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
                    href="/"
                    className="block text-[15px] py-1 text-black hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    Inicio
                  </Link>
                  <Link
                    onClick={closeNavbar}
                    href="/produits"
                    className="block text-[15px] py-1 text-black hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    Productos
                  </Link>

                  {/* Desplegable de Prestación */}
                  <div ref={dropdownRef} className="relative group">
                    <button
                      onClick={handlePrestationToggle}
                      className="subMenuHeader text-[15px]  py-1 text-black hover:text-[#2C80EF] hover:bg-[#d7d7d745] rounded-md px-4 flex items-center"
                    >
                      Prestación <FaAngleDown className="ml-2" />
                    </button>

                    {prestationDropdown && (
                      <div className="navSubParent absolute mt-2 border bg-[#fff] rounded-md shadow-lg z-40">
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/prestation/programmation"
                            className="text-[15px] text-[#2C80EF] block p-4 py-2 font-normal"
                          >
                            Programación
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/prestation/installation"
                            className="text-[#2C80EF] text-[15px] block p-4 py-2 font-normal"
                          >
                            Instalación
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/prestation/reparation"
                            className="text-[#2C80EF] text-[15px] block p-4 py-2 font-normal"
                          >
                            Reparación
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Desplegable de Recurso */}
                  <div ref={dropdownRefResource} className="relative group">
                    <button
                      onClick={handleResourceToggle}
                      className="subMenuHeader text-[15px]  py-1 text-black hover:text-[#2C80EF] hover:bg-[#d7d7d745] rounded-md px-4 flex items-center"
                    >
                      Recurso <FaAngleDown className="ml-2" />
                    </button>

                    {resourceDropdown && (
                      <div className="navSubParent absolute mt-2 border bg-[#fff] rounded-md shadow-lg z-10">
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/aide-en-ligne"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Ayuda en línea
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/faq"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Preguntas Frecuentes
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/tutoriels"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Blog/Tutorial
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/articles"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Artículos
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    onClick={closeNavbar}
                    href="/contact"
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
    </main>
  );
};

export default HeaderSpain;
