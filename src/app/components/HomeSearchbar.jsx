"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const HomeSearchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

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

    // Add click event listener to close search results when clicking outside
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

  const handleSearch = (term) => {
    setSearchTerm(term);
    setShowResults(true);
    setIsSearching(true);

    const filtered = searchData.filter((item) =>
      item.ref.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filtered);
    setIsSearching(false);
  };

  return (
    <div className="" ref={searchRef}>
      <div className="flex items-center">
        <div className="relative w-full mx-auto">
          <input
            type="text"
            className="border border-[#2C80EF] rounded-md w-full py-2 px-3 pr-10 bg-white"
            name="search"
            placeholder="recherche par reference"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      {/* Search results with loading animation */}
      {showResults && (
        <div className="absolute z-[9999999] bg-white w-[40%] border rounded-md">
          {isSearching ? (
            <div className="w-1/2 mx-auto mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-lg">Recherche en cours...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-5">
              <h3 className="text-[15px] font-semibold mb-3">
                Résultats de recherche:
              </h3>
              <div className="h-[250px] overflow-y-scroll">
                {searchResults.map((item, index) => (
                  <Link key={index} href={`/${item.ref}`}>
                    <div className="flex items-center border p-2 rounded-md hover:bg-gray-100 transition-colors">
                      <div className="w-1/6">
                        <Image
                          width={80}
                          height={50}
                          src={item.images[0]}
                          alt="Product Image"
                        />
                      </div>
                      <div className="w-3/4">
                        <div className="">
                          <p className="font-medium">{item.ref}</p>
                          <p className="text-sm text-gray-600">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="mt-5">
                  <h2 className="font-semibold text-[15px]">
                    Cliquez sur le lien ci dessous pour trouver votre produit:
                  </h2>

                  <div className="homeButtons mt-2">
                    <Link href="/selectionnez-votre-vehicule">
                      <button className="text-[15px] text-blue-600">
                        <span>Disponibilité</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-5">
              <p className="text-red-600 text-[15px]">Aucun produit trouvé.</p>
              <div className="mt-5">
                <h2 className="font-semibold text-[15px]">
                  Cliquez sur le lien ci dessous pour trouver votre produit:
                </h2>
                <div className="homeButtons mt-2">
                  <Link href="/selectionnez-votre-vehicule">
                    <button className="text-[15px] text-blue-600">
                      <span>Disponibilité</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeSearchbar;
