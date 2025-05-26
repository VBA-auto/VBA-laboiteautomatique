"use client";
import { useEffect, useState } from "react";
import { IoCarSport } from "react-icons/io5";
import { VscReferences } from "react-icons/vsc";
import { FaPowerOff } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import Header from "../Header";
import toast, { Toaster } from "react-hot-toast";
import { FaComments } from "react-icons/fa6";

export default function StockManage({ handleLogout }) {
  const [cars, setCars] = useState([]);
  const [refs, setRefs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Cars");
  const [carStockChanges, setCarStockChanges] = useState({});
  const [refStockChanges, setRefStockChanges] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://vba-blue-server.onrender.com/cars"
        );
        const data = await response.json();
        if (Array.isArray(data)) setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    const fetchRefs = async () => {
      try {
        const response = await fetch(
          "https://vba-blue-server.onrender.com/refs"
        );
        const data = await response.json();
        if (Array.isArray(data)) setRefs(data);
      } catch (error) {
        console.error("Error fetching refs:", error);
      }
    };

    fetchCars();
    fetchRefs();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoadingComments(true);
        const res = await fetch(`/api/commentsAll`);
        const data = await res.json();
        setComments(data.comments || []);
      } catch (err) {
        console.error("Error fetching comments:", err);
      } finally {
        setLoadingComments(false);
      }
    };

    if (selectedCategory === "Blogs") {
      fetchComments();
    }
  }, [selectedCategory]);

  // Handle car stock change
  const handleCarStockChange = (model, type, newStock) => {
    setCarStockChanges((prev) => ({
      ...prev,
      [model]: { ...prev[model], [type]: newStock },
    }));
  };

  // Save car stock changes
  const saveCarStockChanges = async (model, type) => {
    const newStock = carStockChanges[model]?.[type];

    if (newStock === undefined || newStock === "") {
      alert("Please enter a valid stock value.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        ` https://vba-blue-server.onrender.com/cars/${model}/${type}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stock: parseInt(newStock, 10) }),
        }
      );

      if (response.ok) {
        toast.success("Car stock updated successfully!");
        const updatedCars = await fetch(
          "https://vba-blue-server.onrender.com/cars"
        ).then((res) => res.json());
        setCars(updatedCars);
      } else {
        const { message } = await response.json();
        alert(message || "Failed to update car stock.");
      }
    } catch (error) {
      console.error("Error updating car stock:", error);
      alert("An error occurred while updating car stock.");
    } finally {
      setLoading(false);
    }
  };

  // Handle ref stock change
  const handleRefStockChange = (id, newStock) => {
    const parsedStock = newStock === "" ? "" : parseInt(newStock, 10); // Allow empty value

    setRefStockChanges((prev) => ({
      ...prev,
      [id]: parsedStock, // Ensure it updates correctly with numbers or empty value
    }));
  };

  // Save ref stock changes
  const saveRefStockChanges = async (id) => {
    const newStock = refStockChanges[id];

    if (newStock === undefined || newStock === "") {
      alert("Please enter a valid stock value.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        ` https://vba-blue-server.onrender.com/refs/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stock: newStock }), // Send as a number
        }
      );

      if (response.ok) {
        toast.success("Ref stock updated successfully!");

        const updatedRefs = await fetch(
          "https://vba-blue-server.onrender.com/refs"
        ).then((res) => res.json());
        setRefs(updatedRefs);
      } else {
        const { message } = await response.json();
        alert(message || "Failed to update ref stock.");
      }
    } catch (error) {
      console.error("Error updating ref stock:", error);
      alert("An error occurred while updating ref stock.");
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/deleteComments/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Comment deleted!");
        setComments((prev) => prev.filter((c) => c._id !== id));
      } else {
        toast.error("Failed to delete comment.");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("An error occurred while deleting.");
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <div className="flex-grow">
          <h1 className="text-2xl my-8">{selectedCategory} Stock Management</h1>

          <div className="overflow-y-auto">
            {selectedCategory === "Cars" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
                {cars.map((car) => (
                  <div
                    key={car.model}
                    className="bg-white p-6 rounded-lg shadow-lg border"
                  >
                    <h2 className="text-xl font-bold mb-4">{car.model}</h2>
                    {Object.entries(car.types).map(([type, details]) => (
                      <div key={type} className="mb-4">
                        <h3 className="font-semibold">
                          {details.carType} - Stock: {details.stock}
                        </h3>
                        <div className="w-full flex gap-2 items-center">
                          <input
                            type="number"
                            value={
                              carStockChanges[car.model]?.[type] ??
                              details.stock
                            }
                            onChange={(e) =>
                              handleCarStockChange(
                                car.model,
                                type,
                                e.target.value
                              )
                            }
                            className="input input-bordered w-full bg-white"
                          />
                          <button
                            className="text-[#2C80EF]"
                            onClick={() => saveCarStockChanges(car.model, type)}
                          >
                            <FaSave />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedCategory === "Refs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
                {refs.map((ref) => (
                  <div
                    key={ref._id}
                    className="bg-white p-6 rounded-lg shadow-lg border"
                  >
                    <h2 className="text-xl font-bold mb-4">{ref.ref}</h2>
                    <div className="w-full flex gap-2 items-center">
                      <input
                        type="number"
                        value={refStockChanges[ref._id] ?? ref.stock}
                        onChange={(e) =>
                          handleRefStockChange(ref._id, e.target.value)
                        }
                        className="input input-bordered w-full bg-white"
                      />
                      <button
                        className="text-[#2C80EF]"
                        onClick={() => saveRefStockChanges(ref._id)}
                      >
                        <FaSave />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedCategory === "Blogs" && (
          <div className="mb-28">
            <h2 className="text-xl font-bold mb-4">User Comments</h2>
            {loadingComments ? (
              <p>Loading comments...</p>
            ) : comments.length === 0 ? (
              <p>No comments found.</p>
            ) : (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="bg-white p-4 rounded-lg shadow border"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="">
                        <h3 className="font-semibold">{comment.author}</h3>
                        <h3 className="font-semibold">
                          Page name: {comment.pageSlug}
                        </h3>
                      </div>

                      <span className="text-xs text-gray-500">
                        {new Date(comment.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800">{comment.text}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {comment.email}
                    </p>
                    <button
                      onClick={() => deleteComment(comment._id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0">
          <div className="flex justify-center gap-24 items-center h-16 md:w-1/3 mx-auto bg-gray-100 rounded-full">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedCategory("Cars")}
            >
              <IoCarSport className="text-2xl" />
              <p
                className={`text-sm ${
                  selectedCategory === "Cars" ? "font-bold" : ""
                }`}
              >
                Cars
              </p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedCategory("Refs")}
            >
              <VscReferences className="text-2xl" />
              <p
                className={`text-sm ${
                  selectedCategory === "Refs" ? "font-bold" : ""
                }`}
              >
                Ref codes
              </p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedCategory("Blogs")}
            >
              <FaComments className="text-2xl" />
              <p
                className={`text-sm ${
                  selectedCategory === "Blogs" ? "font-bold" : ""
                }`}
              >
                Blogs
              </p>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleLogout}
            >
              <FaPowerOff className="text-2xl text-red-500" />
              <p className="text-sm">Logout</p>
            </div>
          </div>
        </div>

        <Toaster />
      </div>
    </>
  );
}
