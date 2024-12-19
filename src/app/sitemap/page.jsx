"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Link from "next/link";

const Sitemap = () => {
  const sections = [
    {
      title: "General",
      links: [
        { href: "/", label: "Home" },
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
      <div className="my-16">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sitemap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h3 className="text-normal font-semibold text-gray-700 border-b border-gray-300 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
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

          {/* Car Models Section */}
          <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
            Car Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carModels.map((model, index) => (
              <div key={index} className="">
                {/* Parent Link */}
                <h4 className="text-[16px] font-medium text-gray-800 mb-2">
                  <Link
                    href={model.parentLink || "#"} // Default to "#" if no parentLink is provided
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {model.label}
                  </Link>
                </h4>
                {/* Child Links */}
                <ul className="space-y-2">
                  {model.children.map((child, childIndex) => (
                    <li key={childIndex}>
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
      <Footer />
    </>
  );
};

export default Sitemap;
