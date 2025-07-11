"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { FaAngleDown, FaWhatsapp } from "react-icons/fa";

const Header = () => {
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
        <div className="container mx-auto ">
          <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 headerMainCont">
              <div className="lg:w-[20%] flex items-center gap-5">
                <Link href="/" scroll={false}>
                  <div className=" relative w-[90px] h-[60px]">
                    <Image
                      src="/images/VBAlogo.webp"
                      alt="Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 90px, 290px"
                      unoptimized
                    />
                  </div>
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center text-[#2A81EC] p-2  justify-center text-sm  rounded-lg xl:hidden "
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={handleNavbarToggle}
              >
                <span className="sr-only">Open main menu</span>
                <div className="me-5">
                  <Link
                    href="https://api.whatsapp.com/send?phone=33631460333"
                    target="_blank"
                  >
                    <div className=" bg-[#5dca54] rounded-full p-2 md:hidden">
                      <FaWhatsapp className="text-white text-2xl" />
                    </div>
                  </Link>
                </div>
                <div className="border p-2 rounded-md">
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
                </div>
                {/* <p className="border px-2 rounded-md text-[#2C80EF]">Menu</p> */}
              </button>

              {/* Navbar Links */}
              <div
                className={`lg:w-[55%] w-full xl:w-auto ${
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
                    Accueil
                  </Link>
                  <Link
                    onClick={closeNavbar}
                    href="/produits"
                    className="block text-[15px] py-1 text-black hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    Produits
                  </Link>

                  {/* Prestation Dropdown */}
                  <div ref={dropdownRef} className="relative group">
                    <button
                      onClick={handlePrestationToggle}
                      className="subMenuHeader text-[15px]  py-1 text-black hover:text-[#2C80EF] hover:bg-[#d7d7d745] rounded-md px-4 flex items-center"
                    >
                      Prestation <FaAngleDown className="ml-2" />
                    </button>

                    {prestationDropdown && (
                      <div className="navSubParent absolute mt-2 border bg-[#fff] rounded-md shadow-lg z-40">
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/prestation/programmation"
                            className="text-[15px] text-[#2C80EF] block p-4 py-2 font-normal"
                          >
                            Programmation
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/prestation/installation"
                            className="text-[#2C80EF] text-[15px] block p-4 py-2 font-normal"
                          >
                            Installation
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/prestation/reparation"
                            className="text-[#2C80EF] text-[15px] block p-4 py-2 font-normal"
                          >
                            Réparation
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Ressource Dropdown */}
                  <div ref={dropdownRefResource} className="relative group">
                    <button
                      onClick={handleResourceToggle}
                      className="subMenuHeader text-[15px]  py-1 text-black hover:text-[#2C80EF] hover:bg-[#d7d7d745] rounded-md px-4 flex items-center"
                    >
                      Ressource <FaAngleDown className="ml-2" />
                    </button>

                    {resourceDropdown && (
                      <div className="navSubParent absolute mt-2 border bg-[#fff] rounded-md shadow-lg z-10">
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/aide-en-ligne"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Aide en ligne
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/faq"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            FAQ
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/tutoriels"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Blog/Tutoriel
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/articles"
                            className="text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Articles
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
                    Contact
                  </Link>
                </div>
              </div>

              {/* Buttons */}
              <div className="lg:w-[25%] flex gap-3 md:gap-5 headButton">
                <div className="homeButtons">
                  <Link href="/ressource/aide-en-ligne">
                    <button className="buttonCheck">
                      <span>Aide en ligne</span>
                    </button>
                  </Link>
                </div>
                <div className="homeButtons">
                  <Link href="/selectionnez-votre-vehicule">
                    <button className="buttonCheckBlue">
                      <span>Disponibilité</span>
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

export default Header;
