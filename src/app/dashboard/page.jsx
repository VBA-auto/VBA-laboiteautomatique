"use client";
import { useState, useEffect } from "react";
import StockManage from "@/components/Dashboard/StockManage";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Logout function to clear the state
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear state from localStorage
    setIsLoggedIn(false); // Reset login state
  };

  // Check login state on component mount
  useEffect(() => {
    const loginState = localStorage.getItem("isLoggedIn");
    if (loginState === "true") {
      setIsLoggedIn(true); // Stay logged in if state is found in localStorage
    }
    setIsLoading(false); // Stop loading
  }, []);

  // Loading indicator during state check
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Render login form or stock management component based on login state
  return (
    <div>
      {!isLoggedIn ? (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg md:w-1/4 p-8 w-full m-5">
            <h1 className="text-2xl font-semibold text-center mb-6">
              Welcome Back
            </h1>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsLoading(true); // Start loading

                try {
                  const response = await fetch(
                    "  https://vba-blue-server.onrender.com/login",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        email: e.target.email.value.trim(), // Get email
                        pass: e.target.password.value.trim(), // Get password
                      }),
                    }
                  );

                  if (response.ok) {
                    const data = await response.json();
                    console.log(data.message); // Debug: Login successful
                    localStorage.setItem("isLoggedIn", "true"); // Save login state
                    setIsLoggedIn(true); // Set login state to true
                  } else {
                    alert("Invalid email or password");
                  }
                } catch (error) {
                  console.error("Login failed:", error);
                  alert("An error occurred. Please try again.");
                } finally {
                  setIsLoading(false); // Stop loading
                }
              }}
            >
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 bg-white py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <StockManage handleLogout={handleLogout} />
      )}
    </div>
  );
}
