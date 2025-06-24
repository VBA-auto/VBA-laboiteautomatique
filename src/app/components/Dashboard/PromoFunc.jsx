"use client";
import React, { useState, useEffect } from "react";

const PromoFunc = () => {
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [promoPrice, setPromoPrice] = useState(""); // Default price as string
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

        if (data?.price) {
          setPromoPrice(data.price.toString());
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

    if (!promoPrice || Number(promoPrice) <= 0 || isNaN(Number(promoPrice))) {
      alert("Enter a valid price");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/promo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: checked,
        date: selectedDate,
        price: Number(promoPrice),
      }),
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

      {/* PRICE INPUT */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-600">
          Promo discount amount (€):
        </label>
        <input
          type="number"
          className="input input-bordered w-60 border rounded-md p-2 bg-white"
          value={promoPrice}
          onChange={(e) => setPromoPrice(e.target.value)}
          min="1"
          placeholder="Enter discount amount"
        />
        <p className="text-xs text-gray-500">
          Current discount: €{promoPrice || "0"}
        </p>
      </div>

      {/* DATE PICKER */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-600">Select promo end date:</label>
        <input
          type="date"
          className="input input-bordered w-60 border rounded-md p-2 bg-white"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <p className="text-xs text-gray-500">
          Currently promo ends:{" "}
          {selectedDate
            ? new Date(selectedDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : "Not set"}
        </p>
      </div>

      {/* SAVE BUTTON + LOADER */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          className="border bg-blue-500 text-white p-2 rounded-md disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Promo Settings"}
        </button>

        {loading && (
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        )}
      </div>

      {/* PREVIEW */}
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-semibold mb-2">Preview:</h3>
        <p>
          Status:{" "}
          <span className={checked ? "text-green-600" : "text-red-600"}>
            {checked ? "Active" : "Inactive"}
          </span>
        </p>
        <p>
          Discount:{" "}
          <span className="font-bold text-blue-500">
            - €{promoPrice || "0"}
          </span>
        </p>
        <p>
          Valid until:{" "}
          <span className="text-green-600">
            {selectedDate
              ? new Date(selectedDate).toLocaleDateString("fr-FR")
              : "Not set"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PromoFunc;
