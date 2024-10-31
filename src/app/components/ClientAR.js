"use client";

import { useEffect } from "react";

function setAutoRefresh(interval = 1 * 60 * 60 * 1000) {
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit || Date.now() - lastVisit > interval) {
    localStorage.setItem("lastVisit", Date.now());
    window.location.reload();
  } else {
    const timer = setTimeout(() => {
      localStorage.setItem("lastVisit", Date.now());
      window.location.reload();
    }, interval - (Date.now() - lastVisit));

    return () => clearTimeout(timer);
  }
}

const ClientAR = () => {
  useEffect(() => {
    const cleanup = setAutoRefresh();

    return cleanup;
  }, []);

  return null;
};

export default ClientAR;
