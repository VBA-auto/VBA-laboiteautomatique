"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Link from "next/link";

const Sitemap = () => {
  const sections = [
    {
      title: "Général",
      links: [
        { href: "/", label: "Acceuil" },
        { href: "/contact", label: "Contact" },
        { href: "/ressource/aide-en-ligne", label: "Aide en Ligne" },
        { href: "/selectionnez-votre-vehicule", label: "Disponibilité" },
      ],
    },
    {
      title: "Produits & Prestation",
      links: [
        { href: "/produits", label: "Produits" },
        { href: "/prestation/programmation", label: "Programmation" },
        { href: "/prestation/installation", label: "Installation" },
        { href: "/prestation/reparation", label: "Réparation" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { href: "/ressource/aide-en-ligne", label: "Aide en Ligne" },
        { href: "/ressource/faq", label: "FAQ" },
        { href: "/ressource/blogs", label: "Tuto-Blog" },
      ],
    },
  ];

  const carModels = [
    {
      title: "Modéles Véhicules",
      label: "Captur",
      parentLink: "/captur",
      children: [
        { href: "/captur/essence", label: "Essence" },
        { href: "/captur/diesel", label: "Diesel" },
      ],
    },
    {
      label: "Clio 4",
      parentLink: "/clio",
      children: [
        { href: "/clio/essence", label: "Essence" },
        { href: "/clio/diesel", label: "Diesel" },
      ],
    },
    {
      label: "Mégane",
      parentLink: "/megane",
      children: [
        { href: "/megane/essence", label: "Essence" },
        { href: "/megane/diesel", label: "Diesel" },
      ],
    },
    {
      label: "Scénic",
      parentLink: "/scenic",
      children: [{ href: "/scenic/diesel", label: "Diesel" }],
    },
    {
      label: "Fluence",
      parentLink: "/fluence",
      children: [{ href: "/fluence/diesel", label: "Diesel" }],
    },
    {
      label: "Clio RS",
      parentLink: "/clio-rs",
      children: [{ href: "/clio-rs/essence", label: "Essence" }],
    },
  ];

  return (
    <>
      <SubHeader />
      <Header />
      <div className="my-16 bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-6xl mx-auto">
        <div className=" max-w-4xl mx-auto">
          <h3 className="text-2xl  font-semibold text-gray-700 mb-4">
            Sitemap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-normal font-semibold text-gray-700 mb-4 ">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-[15px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6">
            <h3 className="text-normal font-semibold text-gray-700 mb-4">
              Modéles Véhicules
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {carModels.map((model, index) => (
                <div key={index}>
                  <h4 className="text-[16px] font-medium text-gray-800 mb-2">
                    <Link
                      href={model.parentLink || "#"}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {model.label}
                    </Link>
                  </h4>
                  <ul className="space-y-2">
                    {model.children.map((child, i) => (
                      <li key={i}>
                        <Link
                          href={child.href}
                          className="text-blue-600 hover:text-blue-800 hover:underline text-[15px]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
