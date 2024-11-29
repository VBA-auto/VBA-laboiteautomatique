"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { FaAngleDown } from "react-icons/fa";

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
      <section className="bg-white/90  headerSection ">
        <div className="container mx-auto">
          <nav className="">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 headerMainCont">
              <Link rel="preload" href="/" className="">
                <div className="w-[290px]">
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

              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center bg-[#2C80EF] p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#2C80EF] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-[#2C80EF]dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={handleNavbarToggle}
              >
                <span className="sr-only">Open main menu</span>
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
              </button>

              <div
                className={`w-full md:w-auto md:block ${
                  navbar ? "block" : "hidden"
                } `}
                id="navbar-default"
              >
                <div className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row  md:mt-0 md:border-0">
                  <Link
                    onClick={closeNavbar}
                    href="/"
                    className="block text-[15px] py-1 text-black  hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={closeNavbar}
                    href="/produits"
                    className="block text-[15px] py-1 text-black  hover:bg-[#d7d7d745] hover:text-[#2C80EF] rounded-md px-4"
                  >
                    Produits
                  </Link>

                  <div ref={dropdownRef} className="relative group">
                    <button
                      style={{
                        display: "flex",

                        alignItems: "center",
                      }}
                      onClick={handlePrestationToggle}
                      className="subMenuHeader text-[15px] block py-1 text-black hover:text-[#2C80EF] hover:bg-[#d7d7d745] rounded-md px-4"
                    >
                      Prestation{" "}
                      <span
                        style={{
                          display: "inline-block",

                          marginLeft: "3px",
                        }}
                      >
                        <FaAngleDown />
                      </span>
                    </button>

                    {prestationDropdown && (
                      <div className="navSubParent absolute mt-2 border bg-[#fff] rounded-md shadow-lg z-40">
                        <div className="subHeadList">
                          {" "}
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

                  <div ref={dropdownRefResource} className="relative group">
                    <button
                      style={{
                        display: "flex",

                        alignItems: "center",
                      }}
                      onClick={handleResourceToggle}
                      className="subMenuHeader text-[15px] block py-1 text-black hover:text-[#2C80EF] hover:bg-[#d7d7d745] rounded-md px-4"
                    >
                      Ressource
                      <span
                        style={{
                          display: "inline-block",

                          marginLeft: "3px",
                        }}
                      >
                        <FaAngleDown />
                      </span>
                    </button>

                    {resourceDropdown && (
                      <div className="navSubParent w-max absolute mt-2  border bg-[#fff] rounded-md shadow-lg z-10">
                        <div className="subHeadList">
                          {" "}
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/aide-en-ligne"
                            className=" text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Aide en ligne
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/faq"
                            className=" text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            FAQ
                          </Link>
                        </div>
                        <div className="subHeadList">
                          <Link
                            onClick={closeNavbar}
                            href="/ressource/blogs"
                            className=" text-[15px] block p-4 py-2 font-normal text-[#2C80EF]"
                          >
                            Tuto - Blog
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

              <div className="flex gap-5 homeButtonsParent headButton  justify-end">
                <div style={{ width: "140px" }} className="homeButtons">
                  <Link href="/ressource/aide-en-ligne">
                    <button className="buttonCheck">
                      <span>Aide en ligne</span>
                    </button>
                  </Link>
                </div>
                <div style={{ width: "140px" }} className="homeButtons">
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
