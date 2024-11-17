"use client";
import { useEffect } from "react";

export default function ReferencePage() {
  useEffect(() => {
    // Redirect to home page
    window.location.href = "/";
  }, []);

  return null; // Return nothing as the user is redirected
}
