"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const RefrerenceCheckerComp = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/searchData.json")
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });

    // Close results if clicked outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle dynamic search as the user types
  const handleSearch = (term) => {
    setSearchTerm(term); // Update search term state
    if (term.length > 0) {
      setShowResults(true);
      setIsSearching(true);

      const filtered = searchData.filter((item) =>
        item.ref.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  return (
    <div ref={searchRef}>
      <div className="relative">
        <h2 className="text-[24px] text-center text-white mb-5">
          Recherche par références
        </h2>
        <div className="text-center mt-5">
          {/* Search input */}
          <input
            type="text"
            className="border border-[#2C80EF] rounded-md w-full py-2 px-3 bg-white"
            name="search"
            placeholder="Recherche par référence"
            value={searchTerm} // Controlled input
            onChange={(e) => handleSearch(e.target.value)} // Trigger search on input change
          />
        </div>

        {isSearching ? (
          <div className="w-full mx-auto mt-8 text-center bg-white p-2 rounded-md">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-lg">Recherche en cours...</p>
          </div>
        ) : (
          showResults &&
          (searchResults.length > 0 ? (
            <div className="absolute top-20 w-full bg-white rounded-md p-2 mx-auto mt-8">
              <h3 className="text-[15px] font-semibold mb-3">
                Résultats de recherche:
              </h3>
              <div className="h-[200px] overflow-y-scroll">
                {searchResults.map((item, index) => (
                  <Link key={index} href={`/reference/${item.ref}`}>
                    <div className="flex items-center border p-2 rounded-md hover:bg-gray-100 transition-colors mb-3">
                      <div className="w-1/6">
                        <Image
                          width={80}
                          height={50}
                          src={item.images[0]}
                          alt=""
                        />
                      </div>
                      <div className="w-3/4">
                        <div className=" ">
                          <p className="font-medium">{item.ref}</p>
                          <p className="text-sm text-gray-600">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-2 bg-white mt-5 rounded-md">
              <p className="text-red-600 text-[15px]">Aucun produit trouvé.</p>
              <div className="mt-2">
                <h2 className="font-semibold text-[15px]">
                  Cliquez sur le lien ci dessous pour trouver votre produit:
                </h2>
                <div className="homeButtons mt-2">
                  <Link href="/produits">
                    <button className="text-[15px] text-blue-600">
                      <span>All Produits</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Suggested references section */}
        <div className="w-full mx-auto mt-8">
          <p className="text-[15px] text-white">Références populaires </p>
          {isLoading ? (
            <div className="text-center mt-5 text-white">Loading...</div>
          ) : searchData.length > 0 ? (
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-5">
              <Link href="/reference/310321488R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310321488R</span>
                </div>
              </Link>
              <Link href="/reference/310320749R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310320749R</span>
                </div>
              </Link>
              <Link href="/reference/310320721R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310320721R</span>
                </div>
              </Link>
              <Link href="/reference/310320756R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310320756R</span>
                </div>
              </Link>
              <Link href="/reference/310321808R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310321808R</span>
                </div>
              </Link>
              <Link href="/reference/310321306R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310321306R</span>
                </div>
              </Link>
              <Link href="/reference/310320254R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310320254R</span>
                </div>
              </Link>
              <Link href="/reference/310321517R">
                <div className="border px-2 text-center rounded-md border-blue-200 bg-white">
                  <span className="text-[15px]">310321517R</span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="text-center mt-5">No data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RefrerenceCheckerComp;
