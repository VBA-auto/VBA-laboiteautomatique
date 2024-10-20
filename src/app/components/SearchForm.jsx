"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <div className="relative w-full mx-auto">
          <input
            type="text"
            className="rounded-md w-full py-[10px] px-3 pr-10"
            name="search"
            placeholder="recherche par reference"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
