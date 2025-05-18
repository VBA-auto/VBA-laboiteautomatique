import Image from "next/image";
import Link from "next/link";
import { FaTruck, FaCheckCircle } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Flyer = () => {
  return (
    <div className="bg-white text-black max-w-3xl mx-auto font-sans md:p-2 p-2 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between  py-2">
        <div className="">
          <Link
            href="/"
            className="lg:w-[290px] flex items-center"
            scroll={false}
          >
            <div className=" relative w-[90px] h-[60px]">
              <Image
                src="/images/VBAlogo.webp"
                alt="Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90px, 290px"
                unoptimized
              />
            </div>
          </Link>
        </div>
        <div className="text-sm text-right">
          <div className="flex gap-2 items-center">
            <IoCall className="text-blue-500" />
            <p className="text-blue-500">01 45 14 72 54</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLogoWhatsapp className="text-green-400" />
            <p className="text-green-400">Whatsapp: 06 31 46 03 33</p>
          </div>
          <p className="text-blue-500 underline">www.laboiteautomatique.com</p>
        </div>
      </div>

      {/* Top Banner */}

      <div
        className="relative text-white rounded-md overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/flyer.webp)",
          minHeight: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 bg-gradient-to-r from-black/70 via-black/0 to-transparent rounded-md"></div>

        <div className="h-[300px] md:ms-0">
          <div className="relative z-10 flex items-center h-full">
            <div className="md:max-w-sm bg-blue-500 h-full">
              {" "}
              <div className="p-6">
                <h2 className="text-xl md:text-xl lg:text-xl font-semibold mb-3 H2">
                  Calculateur déjà programmé
                </h2>
                <p className="text-[12px] mb-3 H2 ">
                  Nous proposons des calculateurs pour boîtes automatiques
                  Renault et Audi (dsg7.fr).
                </p>
                <p className="text-[12px] mb-3 H2 ">
                  Vous nous fournissez l&apos;immatriculation du véhicule, nous
                  vous expédions le calculateur :
                </p>
                <ul className="list-disc list-inside pl-1 mt-2 text-[12px] H2">
                  <li>
                    <b>Livraison rapide</b> (24 à 48 heures France)
                  </li>
                  <li>
                    <b>Déjà programmé</b>
                  </li>
                  <li>
                    <b>Garantie 1 an</b>
                  </li>
                </ul>
                <p className="mt-3 text-[12px] H2">
                  Diagnostic par téléphone possible.
                </p>
                <a
                  href="https://laboiteautomatique.com/ressource/aide-en-ligne"
                  className="text-white hover:text-sky-300 underline font-semibold text-[12px] H2 mt-2 inline-block"
                >
                  Aide en ligne disponible
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl  z-50 relative">
        <div className="md:w-1/2">
          <h2 className="text-2xl ms-5 md:mt-10 mt-2 text-blue-500 font-bold mb-3 H2 md:text-start text-center">
            VBA CALCULATEUR RENAULT
          </h2>
        </div>
        <div className="md:mt-[-330px] md:mb-0 mb-2 md:w-1/2 ms-auto">
          {/* Icons */}
          <div className="flex justify-around items-center text-center my-3">
            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl">
                <FaTruck className="md:text-white text-blue-500" />
              </div>
              <p className="text-[12px] font-semibold md:text-white text-black">
                LIVRAISON <br /> RAPIDE
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl">
                <FaCheckCircle className="md:text-white text-blue-500" />
              </div>
              <p className="text-[12px] font-semibold md:text-white text-black">
                DÉJÀ <br /> PROGRAMMÉ
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl">
                <AiFillSafetyCertificate className="md:text-white text-blue-500" />
              </div>
              <p className="text-[12px] font-semibold md:text-white text-black">
                GARANTIE <br /> 1 AN
              </p>
            </div>
          </div>
          <img
            src="/images/cal-normal-3.webp"
            alt="Logo"
            className="md:ms-auto  md:w-96 w-[250px] rounded-lg image border border-blue-500 mb-5 shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-6">
        {[
          {
            name: "RENAULT CAPTUR",
            src: "/images/calculateur_DC4_Renault_Capture.webp",
            url: "/captur",
          },
          {
            name: "RENAULT CLIO IV",
            src: "/images/calculateur_DC4_Renault_Clio4.webp",
            url: "/clio",
          },
          {
            name: "RENAULT MÉGANE",
            src: "/images/calculateur_DC4_renault-megane.webp",
            url: "/megane",
          },
          {
            name: "RENAULT SCÉNIC",
            src: "/images/calculateur_DC4_renault_Senic.webp",
            url: "/scenic",
          },
          {
            name: "RENAULT CLIO V",
            src: "/images/clio_5.webp",
            url: "/clio-5",
          },
          {
            name: "RENAULT MEGANE IV",
            src: "/images/megane_4_car.webp",
            url: "/megane-4",
          },
        ].map((car, idx) => (
          <div key={idx} className="text-center">
            <Link href={car?.url}>
              <Image
                src={car.src}
                alt={car.name}
                width={100}
                height={120}
                className="mx-auto rounded"
              />
              <p className="mt-2 text-[12px] H2 font-medium ">{car.name}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Common Errors Section */}
      <div className="bg-gray-100 p-2 rounded-md">
        <h3 className="md:text-[15px] text-[12px] font-bold mb-2">
          ERREURS SOUVENT RENCONTRÉES SUR L&apos;UNITÉ DE COMMANDE :
        </h3>
        <ul className="list-none  text-sm md:flex gap-5 H2">
          <div className="">
            <li className="flex items-center gap-2">
              <IoIosArrowDroprightCircle className="text-blue-500" />{" "}
              <p className="text-[12px]">
                Boîte de vitesses à contrôler / Calculateur illisible
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowDroprightCircle className="text-blue-500" />{" "}
              <p className="text-[12px]">
                Moteur d’embrayage 1 ou 2 en court-circuit à la masse
              </p>
            </li>
          </div>
          <div className="">
            <li className="flex items-center gap-2">
              {" "}
              <IoIosArrowDroprightCircle className="text-blue-500" />{" "}
              <p className="text-[12px]">
                {" "}
                Problèmes avec les vitesses paires ou impaires
              </p>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <IoIosArrowDroprightCircle className="text-blue-500" />{" "}
              <p className="text-[12px]">Pas de marche arrière</p>
            </li>
          </div>
        </ul>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-sm mb-5">
        <p className="font-semibold H2">Une question ? Besoin d’un devis ?</p>
        <ul className="list-none  text-sm flex justify-center gap-5 H2">
          <div className="md:flex gap-5">
            <li className="flex items-center gap-2">
              <IoCall className="text-blue-500" /> <p>01 45 14 72 54</p>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-blue-500" />{" "}
              <p>contact@laboiteautomatique.com</p>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <IoLogoWhatsapp className="text-green-400" />{" "}
              <p>Whatsapp: 06 31 46 03 33</p>
            </li>
          </div>
        </ul>
        <a
          href="https://www.laboiteautomatique.com"
          className="text-blue-700 underline H2"
        >
          www.laboiteautomatique.com
        </a>
      </div>
    </div>
  );
};

export default Flyer;
