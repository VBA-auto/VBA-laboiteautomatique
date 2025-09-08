"use client";
import { useState } from "react";

const ModalForm = ({ isOpen, onClose, cars }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    engine: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const selectedCar = cars.find((c) => c.name === formData.car);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/sendFormClutch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(
          "✅ Merci ! Votre demande a bien été envoyée. Nous vous contacterons bientôt."
        );
        setFormData({ name: "", email: "", phone: "", car: "", engine: "" });
      } else {
        setError("❌ Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ Impossible d'envoyer le formulaire pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl text-center font-semibold mb-4 text-gray-700">
          Réservez votre embrayage
        </h2>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 bg-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Téléphone *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 bg-white"
            />
          </div>

          {/* Car Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Véhicule *
            </label>
            <select
              name="car"
              required
              value={formData.car}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 bg-white"
            >
              <option value="">-- Sélectionnez un véhicule --</option>
              {cars.map((car, idx) => (
                <option key={idx} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          {/* Engine Select */}
          {selectedCar && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Catégorie *
              </label>
              <select
                name="engine"
                required
                value={formData.engine}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 bg-white"
              >
                <option value="">-- Choisissez une catégorie --</option>
                {selectedCar.engines.map((eng, idx) => (
                  <option key={idx} value={eng.label}>
                    {eng.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Envoi en cours..." : "Envoyer la demande"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
