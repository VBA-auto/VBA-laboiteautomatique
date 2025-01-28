import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section>
      <hr className="border border-[#c2c2c230]" />
      <div className="container mx-auto">
        <footer className="myFooter bg-[#ffffff] border-[#c9c9c9] text-black py-4">
          <div className="xl:flex flex-wrap justify-between gap-4">
            {/* Left Column */}
            <div>
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Paris (75)
                </span>
              </Link>
              <br />
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Marseille (13)
                </span>
              </Link>
              <br />
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Lyon (69)
                </span>
              </Link>
              <br />
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Toulouse (31)
                </span>
              </Link>
              <br />
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Nice (06)
                </span>
              </Link>
              <br />
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Rennes (35)
                </span>
              </Link>
              <br />
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Reims (51)
                </span>
              </Link>
              <br />
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  Calculateur Renault Grenoble (38)
                </span>
              </Link>
            </div>

            {/* Center Column */}
            <div className="text-center footerMid">
              <div>
                <Link
                  href="/produits"
                  className="hover:text-[#2C80EF] text-[15px]"
                >
                  Produits -
                </Link>
                <Link
                  href="/retours"
                  className="hover:text-[#2C80EF] text-[15px]"
                >
                  {" "}
                  Gestion Retours -
                </Link>
                <Link
                  href="/ressource/aide-en-ligne"
                  className="hover:text-[#2C80EF] text-[15px]"
                >
                  {" "}
                  Aide -
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-[#2C80EF] text-[15px]"
                >
                  {" "}
                  Contact
                </Link>
                {/* <Link
                  href="/selectionnez-votre-vehicule"
                  className="hover:text-[#2C80EF] text-[15px]"
                >
                  {" "}
                  Disponibilité
                </Link> */}
              </div>
              <h3 className="pt-1 text-[15px]">
                VBA |{" "}
                <Link
                  target="_blank"
                  href="https://wa.me/0145147254"
                  className="hover:text-[#2C80EF] text-[15px]"
                >
                  01 45 14 72 54
                </Link>
              </h3>
              <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                <span className="hover:text-[#2C80EF] text-[15px]">
                  110 rue de fontenay 94300 vincennes
                </span>
              </Link>
              <div>
                <Link
                  href="mailto:contact@laboiteautomatique.com"
                  className="hover:text-[#2C80EF] text-[15px]"
                >
                  contact@laboiteautomatique.com
                </Link>
                <div className="flex justify-center items-center mt-4 space-x-4">
                  <Link
                    href="https://www.linkedin.com/company/vba-calculateur/"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={20} className="text-[]" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61554187663999"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={20} className="text-[]" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/vbacalculateur/"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} className="text-[]" />
                  </Link>
                  <Link
                    href="https://www.pinterest.fr/vbacalculateur/"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaPinterest size={20} className="text-[]" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@vbacalculateur"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok size={20} className="text-[]" />
                  </Link>
                  <Link
                    href="https://twitter.com/vbacalculateur"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={20} className="text-[]" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCdW6FARqs2Sv6rzeBidaQsw"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={20} className="text-[]" />
                  </Link>
                </div>
              </div>
              <div className="pt-5 text-[15px]">
                <Link href="/mentions-legales" className="hover:text-[#2C80EF]">
                  Mentions Légales
                </Link>
                <span> | </span>
                <Link href="/sitemap" className="hover:text-[#2C80EF]">
                  Sitemap
                </Link>
              </div>
              <span className="hidden">
                Développé par{" "}
                <Link
                  className="text-[#2C80EF]"
                  href="https://clickandtrust.fr/"
                >
                  Click & Trust
                </Link>
              </span>
            </div>

            {/* Right Column */}
            <div>
              <div className="lg:ms-[30px] textCenter">
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Nantes (44)
                  </span>
                </Link>
                <br />
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Montpellier (34)
                  </span>
                </Link>
                <br />
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Strasbourg (67)
                  </span>
                </Link>
                <br />
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Bordeaux (33)
                  </span>
                </Link>
                <br />
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Lille (59)
                  </span>
                </Link>
                <br />
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Brest (29)
                  </span>
                </Link>
                <br />
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Toulon (83)
                  </span>
                </Link>
                <br />
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59" passHref>
                  <span className="hover:text-[#2C80EF] text-[15px]">
                    Calculateur Renault Le Havre (76)
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
