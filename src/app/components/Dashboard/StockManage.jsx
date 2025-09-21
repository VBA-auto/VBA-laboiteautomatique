"use client";
import { useEffect, useState } from "react";
import { IoCarSport } from "react-icons/io5";
import { VscReferences } from "react-icons/vsc";
import { FaPowerOff } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import Header from "../Header";
import toast, { Toaster } from "react-hot-toast";
import { FaComments } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import PromoFunc from "./PromoFunc";
import CarsManage from "./CarsDB/CarsManage";
import ReconditionedCarsManage from "./CarsDB/RecondiCars";

/** ছোট হেল্পার: একই origin এর Next.js API কল */
async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  let data = null;
  try {
    data = await res.json();
  } catch (_) {}
  if (!res.ok) {
    const msg = data?.error || data?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return data;
}

export default function StockManage({ handleLogout }) {
  const [refs, setRefs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Cars");
  const [refStockChanges, setRefStockChanges] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  // initial load
  useEffect(() => {
    const fetchRefs = async () => {
      try {
        const data = await api("/api/dashboard/refs");
        if (Array.isArray(data)) setRefs(data);
      } catch (error) {
        console.error("Error fetching refs:", error);
        toast.error(error.message || "Failed to fetch refs");
      }
    };

    fetchRefs();
  }, []);

  // comments load (তোমার আগের রাউটই রেখেছি)
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoadingComments(true);
        const data = await api(`/api/commentsAll`);
        setComments(data.comments || []);
      } catch (err) {
        console.error("Error fetching comments:", err);
        toast.error("Failed to load comments");
      } finally {
        setLoadingComments(false);
      }
    };
    if (selectedCategory === "Blogs") {
      fetchComments();
    }
  }, [selectedCategory]);

  // ref stock change (local state)
  const handleRefStockChange = (id, newStock) => {
    const parsed = newStock === "" ? "" : parseInt(newStock, 10);
    setRefStockChanges((prev) => ({ ...prev, [id]: parsed }));
  };

  // save ref stock → PUT /api/dashboard/refs/:id
  const saveRefStockChanges = async (id) => {
    const newStock = refStockChanges[id];

    if (newStock === undefined || newStock === "") {
      alert("Please enter a valid stock value.");
      return;
    }

    try {
      setLoading(true);
      await api(`/api/dashboard/refs/${id}`, {
        method: "PUT",
        body: { stock: parseInt(newStock, 10) },
      });

      toast.success("Ref stock updated successfully!");

      // refresh list
      const updatedRefs = await api("/api/dashboard/refs");
      setRefs(updatedRefs);
    } catch (error) {
      console.error("Error updating ref stock:", error);
      toast.error(error.message || "Failed to update ref stock.");
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
          <h1 className="text-2xl my-8">{selectedCategory} Management</h1>

          <div className="overflow-y-auto">
            {selectedCategory === "Cars" && (
              <>
                <CarsManage />
                <ReconditionedCarsManage />
              </>
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
                        disabled={loading}
                        className="text-[#2C80EF] disabled:opacity-60"
                        onClick={() => saveRefStockChanges(ref._id)}
                        title="Save"
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

        {selectedCategory === "Promo" && (
          <div className="mb-28">
            <PromoFunc />
          </div>
        )}

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0">
          <div className="flex justify-center gap-24 items-center h-16 md:w-2/3 mx-auto bg-gray-100 rounded-full">
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
              onClick={() => setSelectedCategory("Promo")}
            >
              <GrAnnounce className="text-2xl" />
              <p
                className={`text-sm ${
                  selectedCategory === "Promo" ? "font-bold" : ""
                }`}
              >
                Promo
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
