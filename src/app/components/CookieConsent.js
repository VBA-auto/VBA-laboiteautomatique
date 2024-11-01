"use client";
import { useState, useEffect } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const CookieConsent = () => {
  // Set initial state to true so the banner shows
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = () => setIsVisible(false); // Close button function

  const openModal = () => {
    document.getElementById("my_modal_3").showModal(); // Open modal
  };

  if (!isVisible) return null; // Hide banner if not visible

  return (
    <>
      <div
        className="md:w-1/4"
        style={{
          position: "fixed",
          bottom: "20px",
          zIndex: 1000,
        }}
      >
        <div className=" mx-8 border rounded-md bg-white p-5">
          <div className="flex justify-between items-start">
            <div className="w-full">
              <h2 className="text-md mb-3">Ce site utilise des cookies</h2>
            </div>
            <div className="">
              {/* Close Button */}
              <button
                onClick={closeBanner} // Call closeBanner on click
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "17px",
                  lineHeight: "20px",
                }}
              >
                ✕
              </button>
            </div>
          </div>

          <p className="cokkiP ">
            Ce site utilise des cookies. En utilisant notre site, vous consentez
            à l&apos;utilisation de tous les cookies conformément à notre
            politique en matière de cookies.
          </p>

          <div className="gap-5 my-3">
            <label className="text-[13px] mb-2 flex items-center">
              <input type="checkbox" style={{ marginRight: "10px" }} />
              PERFORMANCE
            </label>
            <label className="text-[13px] mb-2 flex items-center">
              <input type="checkbox" style={{ marginRight: "10px" }} /> CIBLAGE
            </label>
            <label className="text-[13px] mb-2 flex items-center">
              <input type="checkbox" style={{ marginRight: "10px" }} />
              FONCTIONNALITÉ
            </label>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            <button
              onClick={closeBanner}
              style={{
                backgroundColor: "#007bff",
                fontSize: "12px",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              ACCEPTER TOUT
            </button>
            <button
              onClick={closeBanner}
              style={{
                fontSize: "12px",
                color: "#2C80EF",
                border: "1px solid #2C80EF",
                padding: "8px 18px",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              REFUSER TOUT
            </button>
          </div>

          <div className="">
            <button
              style={{
                fontSize: "12px",
                color: "#555555",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={openModal}
            >
              <div className="mt-3 flex justify-center gap-2 items-center">
                <IoSettingsSharp /> <span>AFFICHER LES DÉTAILS</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Déclaration"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-white border-base-300 rounded-box p-6"
            >
              <h3 className="font-bold text-lg">DÉCLARATION</h3>
              <p className="py-2">
                Les cookies de performance sont utilisés pour voir comment les
                visiteurs utilisent le site Web, par exemple les cookies
                d&apos;analyse.
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Cookies"
            />
            <div
              role="tabpanel"
              className="tab-content bg-white border-base-300 rounded-box p-6"
            >
              <h3 className="font-bold text-lg">COOKIES</h3>
              <p className="py-2">
                Les cookies de ciblage sont utilisés pour identifier les
                visiteurs sur différents sites Web, par exemple les partenaires
                de contenu.
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CookieConsent;
