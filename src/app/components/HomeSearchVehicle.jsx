"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const HomeSearchVehicle = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchRefData, setSearchRefData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    fetch("/searchVehicule.json")
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
    fetch("/searchData.json")
      .then((res) => res.json())
      .then((data) => {
        setSearchRefData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });

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
    const searchTermTrimmed = term.trim();
    const searchTermLower = searchTermTrimmed.toLowerCase();

    // Modify only the reference search logic (allow partial matches for ref codes)
    const isRefSearch = /^[a-zA-Z0-9]+$/.test(searchTermTrimmed);

    if (isRefSearch) {
      // Search by reference code (allow partial matches from the start of the ref)
      const refResults = searchRefData.filter((item) =>
        item.ref.toLowerCase().startsWith(searchTermLower)
      );
      // If results found for the reference code, display them
      if (refResults.length > 0) {
        setSearchResults(refResults);
        setIsSearching(false);
        return; // Stop here if we are handling reference code search
      }
    }

    // The car model and type search logic remains untouched
    const searchTerms = searchTermLower.split(" ");
    const filtered = searchData.filter((item) => {
      const { model, types } = item;
      const combinedData = [
        model.toLowerCase(),
        ...Object.keys(types).map((type) => type.toLowerCase()),
        ...Object.values(types).map((typeData) =>
          [
            typeData.title.toLowerCase(),
            typeData.description.toLowerCase(),
            typeData.compatibility.toLowerCase(),
          ].join(" ")
        ),
      ].join(" ");

      return searchTerms.every((term) => combinedData.includes(term));
    });

    const results = filtered.flatMap((item) => {
      const typeFiltered = Object.keys(item.types).filter((type) =>
        searchTerms.some((term) => type.toLowerCase().includes(term))
      );

      if (typeFiltered.length === 0) {
        return Object.keys(item.types).map((type) => ({
          ...item.types[type],
          model: item.model,
          type: type,
        }));
      }

      return typeFiltered.map((type) => ({
        ...item.types[type],
        model: item.model,
        type: type,
      }));
    });

    // Set the search results from the model/type data
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
    setShowResults(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setShowResults(true);
    handleSearch(searchTerm);
  };

  return (
    <div className="" ref={searchRef}>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <div className="relative w-full mx-auto">
          <input
            type="text"
            className="border border-[#2C80EF] rounded-md w-full py-2 px-3 pr-10 bg-white"
            name="search"
            placeholder="Recherchez votre modèle ici "
            value={searchTerm}
            onChange={handleInputChange}
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </form>
      {/* Search results with loading animation */}
      {showResults && (
        <div className="md:absolute z-[9999999] bg-white md:w-[40%] border rounded-md mx-3 md:mx-0">
          {isSearching ? (
            <div className="md:w-1/2 mx-auto mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-lg">Recherche en cours...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="md:p-5 p-3 text-start">
              <h3 className="text-[15px] font-semibold mb-3">
                Résultats de recherche:
              </h3>
              <div className="overflow-y-auto max-h-[250px]">
                {searchResults.map((item, index) => (
                  <Link
                    key={index}
                    href={
                      item.ref
                        ? `/reference/${item.ref}`
                        : `/${item.preUrl}/${item.url}`
                    }
                  >
                    <div className="flex items-center border p-2 rounded-md hover:bg-gray-100 transition-colors mb-3 gap-3 md:gap-0">
                      <div className="md:w-1/6">
                        <Image
                          width={80}
                          height={50}
                          src={item?.images[0] || "/images/searchP1.webp"}
                          alt=""
                        />
                      </div>
                      <div className="md:w-3/4">
                        <div className="">
                          <p className="font-medium">
                            {item.model ? (
                              <>
                                {item.model} -{" "}
                                <span className="capitalize">{item.type}</span>
                              </>
                            ) : (
                              item.ref
                            )}
                          </p>
                          <p className="text-sm text-gray-600">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="mt-5">
                  <h2 className=" text-[14px]">
                    Cliquez sur le lien ci dessous pour trouver votre produit:
                  </h2>
                  <div className="homeButtons">
                    <Link href="/selectionnez-votre-vehicule">
                      <button className="text-[14px] text-blue-600">
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
                <h2 className=" text-[14px]">
                  Cliquez sur le lien ci dessous pour trouver votre produit:
                </h2>
                <div className="homeButtons mt-3">
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

export default HomeSearchVehicle;
