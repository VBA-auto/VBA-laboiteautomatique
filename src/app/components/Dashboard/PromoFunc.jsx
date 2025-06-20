"use client";
import React, { useState, useEffect } from "react";

const PromoFunc = () => {
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false); // Save button loading
  const [initialLoading, setInitialLoading] = useState(true); // GET loading

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const res = await fetch("/api/promo");
        const data = await res.json();

        if (data?.active !== undefined) {
          setChecked(data.active);
        }

        if (data?.date) {
          const formattedDate = new Date(data.date).toISOString().split("T")[0];
          setSelectedDate(formattedDate);
        }
      } catch (error) {
        console.error("Failed to fetch promo config", error);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchPromo();
  }, []);

  const handleSave = async () => {
    if (!selectedDate) {
      alert("Select Date First");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/promo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ active: checked, date: selectedDate }),
    });

    if (res.ok) {
      alert("Promo info saved!");
    } else {
      alert("Save failed");
    }

    setLoading(false);
  };

  // ⏳ Initial loading spinner
  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-xl font-bold">Promo Management</h1>

      {/* TOGGLE */}
      <label className="flex items-center gap-3 cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="sr-only"
          />
          <div
            className={`w-12 h-6 rounded-full transition-colors duration-300 ${
              checked ? "bg-green-500" : "bg-gray-300"
            }`}
          />
          <div
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
              checked ? "translate-x-6" : ""
            }`}
          />
        </div>
        <span className="text-gray-700">
          {checked ? "Promo On" : "Promo Off"}
        </span>
      </label>

      <p>
        Currently promo date{" "}
        {selectedDate
          ? new Date(selectedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "Not set"}
      </p>

      {/* DATE PICKER */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-600">Select promo end date:</label>
        <input
          type="date"
          className="input input-bordered w-60 "
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* SAVE BUTTON + LOADER */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          className="border bg-blue-500 text-white p-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Promo Settings"}
        </button>

        {loading && (
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        )}
      </div>
    </div>
  );
};

export default PromoFunc;
