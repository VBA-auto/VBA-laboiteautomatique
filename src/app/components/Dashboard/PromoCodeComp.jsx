import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Save,
  X,
} from "lucide-react";

const carModels = ["CAPTUR", "CLIO", "MEGANE", "SCENIC", "FLUENCE", "CLIORS"];

const AdminPromoCodeManager = () => {
  const [promoCodes, setPromoCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPromoCode, setNewPromoCode] = useState({
    price: "",
    codes: Object.fromEntries(carModels.map((model) => [model, ""])),
    status: false,
  });

  const fetchPromoCodes = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/promoCode");
      const data = await response.json();
      setPromoCodes(data);
    } catch (error) {
      console.error("Error fetching promo codes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromoCodes();
  }, []);

  const handleAddPromoCode = async () => {
    try {
      // Step 1: If the new promo is set to active, deactivate all first
      if (newPromoCode.status) {
        await fetch("/api/promoCode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "toggle-status",
            data: { _id: null, status: false }, // force all to inactive
          }),
        });
      }

      // Step 2: Add the new promo code
      const response = await fetch("/api/promoCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add",
          data: newPromoCode,
        }),
      });

      if (response.ok) {
        setNewPromoCode({
          price: "",
          codes: Object.fromEntries(carModels.map((model) => [model, ""])),
          status: false,
        });
        setShowAddForm(false);
        fetchPromoCodes();
      }
    } catch (error) {
      console.error("Error adding promo code:", error);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const response = await fetch("/api/promoCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "toggle-status",
          data: { _id: id, status: !currentStatus },
        }),
      });

      if (response.ok) fetchPromoCodes();
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this promo code?")) {
      try {
        const response = await fetch("/api/promoCode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "delete",
            data: { _id: id },
          }),
        });

        if (response.ok) fetchPromoCodes();
      } catch (error) {
        console.error("Error deleting promo code:", error);
      }
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch("/api/promoCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update",
          data: { _id: id, ...updatedData },
        }),
      });

      if (response.ok) {
        setEditingId(null);
        fetchPromoCodes();
      }
    } catch (error) {
      console.error("Error updating promo code:", error);
    }
  };

  if (loading) {
    return (
      <div className="">
        <div className="animate-pulse space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Promo Code Management
        </h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} /> Add New Promo Code
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-200">
          <h2 className="text-xl font-semibold mb-4">Add New Promo Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="text"
                value={newPromoCode.price}
                onChange={(e) =>
                  setNewPromoCode({ ...newPromoCode, price: e.target.value })
                }
                className="w-full p-3 border bg-white border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <button
                onClick={() =>
                  setNewPromoCode({
                    ...newPromoCode,
                    status: !newPromoCode.status,
                  })
                }
                className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                  newPromoCode.status
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {newPromoCode.status ? (
                  <ToggleRight size={20} />
                ) : (
                  <ToggleLeft size={20} />
                )}
                {newPromoCode.status ? "Active" : "Inactive"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {carModels.map((car) => (
              <div key={car}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {car} Code
                </label>
                <input
                  type="text"
                  value={newPromoCode.codes[car]}
                  onChange={(e) =>
                    setNewPromoCode({
                      ...newPromoCode,
                      codes: {
                        ...newPromoCode.codes,
                        [car]: e.target.value,
                      },
                    })
                  }
                  className="w-full p-3 border bg-white border-gray-300 rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleAddPromoCode}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Save size={20} /> Save Promo Code
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <X size={20} /> Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {promoCodes.map((promo) => (
          <PromoCodeCard
            key={promo._id}
            promo={promo}
            editingId={editingId}
            setEditingId={setEditingId}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

const PromoCodeCard = ({
  promo,
  editingId,
  setEditingId,
  onToggleStatus,
  onDelete,
  onUpdate,
}) => {
  const [editData, setEditData] = useState({});

  const isEditing = editingId === promo._id;

  const startEditing = () => {
    setEditingId(promo._id);
    setEditData({
      price: promo.price,
      codes: { ...promo.codes },
      status: promo.status,
    });
  };

  const saveEdit = () => onUpdate(promo._id, editData);

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md border-2 ${
        promo.status ? "border-green-200" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          {isEditing ? (
            <input
              type="text"
              value={editData.price}
              onChange={(e) =>
                setEditData({ ...editData, price: e.target.value })
              }
              className="text-xl font-bold bg-white p-2 border border-gray-300 rounded"
            />
          ) : (
            <h2 className="text-xl font-bold text-gray-800">€{promo.price}</h2>
          )}

          <button
            onClick={() => onToggleStatus(promo._id, promo.status)}
            className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              promo.status
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {promo.status ? (
              <ToggleRight size={18} />
            ) : (
              <ToggleLeft size={18} />
            )}
            {promo.status ? "Active" : "Inactive"}
          </button>
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={saveEdit}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
              >
                <Save size={18} />
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg"
              >
                <X size={18} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={startEditing}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => onDelete(promo._id)}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
              >
                <Trash2 size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(promo.codes).map(([car, code]) => (
          <div key={car} className="bg-gray-50 p-3 rounded-lg">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              {car} Code
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.codes[car] || ""}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    codes: {
                      ...editData.codes,
                      [car]: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border bg-white border-gray-300 rounded"
              />
            ) : (
              <p className="font-mono text-sm bg-white p-2 rounded border">
                {code}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPromoCodeManager;
