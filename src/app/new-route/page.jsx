import Head from "next/head";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import DynaStock from "@/components/DynaStock";
import ReturnButton from "@/components/ReturnButton";
import TabCat from "./Components/TabCat";

const pageDescription =
  "Renault Captur, calculateur boite automatique EDC pour Renault Captur essence et Renault Captur Diesel voir stock";
const HeadingText = "Calculateur pour Renault Captur";

const RenaultCapture = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] ">
        <div className="container mx-auto">
          <Head>
            <title>Calculateur EDC pour Renault captur disponibililté</title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Calculateur Renault Captur 1.2 Essence</h1>
            <h2>Calculateur Renault Captur 1.5 Diesel</h2>
          </div>

          <div className="md:flex items-center gap-5">
            <div className="md:w-1/4">
              <div className="my-3">
                <Image
                  unoptimized
                  width={300}
                  height={290}
                  src="https://laboiteautomatique.com/images/calculateur_DC4_Renault_Capture.webp"
                  className="mx-auto w-[300px] h-[170px] mb-4"
                  priority={true}
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-3/4 ">
              <div className="flex justify-between items-center">
                <div className="md:w-1/2">
                  <h1 className="text-2xl font-semibold  text-gray-700">
                    Renault Captur
                  </h1>
                </div>

                <div className="md:w-1/9">
                  <ReturnButton />
                </div>
              </div>

              <p className="text-justify text-[15px] my-3">
                Vérifiez la disponibilté de votre module (boite de vitesse à
                contrôler) pour votre boite automatique <strong>EDC</strong>{" "}
                Renault <strong>Captur</strong>. Celui-ci peut être livré vierge
                ou directement programmé (Plug & Play). L’
                <Link href="/prestation/installation">installation</Link> est
                possible en fonction de votre lieu géographique. Choisissez
                votre modèle pour Renault Captur:{" "}
                <Link href="/captur/essence" className="underline">
                  Essence
                </Link>{" "}
                ou{" "}
                <Link href="/captur/diesel" className="underline">
                  Diesel
                </Link>
                {"."} N’hésitez pas à nous contacter si vous souhaitez être
                absolument certain que cette pièce est bien à l’origine du
                problème. Pour plus d&apos;informations, vous pouvez consulter
                notre{" "}
                <Link href="/ressource/aide-en-ligne" className="underline">
                  aide en ligne
                </Link>
                {"."}
              </p>
              <div className="carsef grid  md:grid-cols-8 grid-cols-3 md:mt-0 mt-3  items-center justify-start">
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321488R">310321488R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321148R">310321148R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320891R">310320891R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320841R">310320841R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320756R">310320756R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310320717R">310320717R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321706R">310321706R </Link>
                </p>
                <p className="text-[14px] text-gray-700 italic mt-2 underline">
                  <Link href="/reference/310321517R">310321517R </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <TabCat />
      </section>
      <Footer />
    </main>
  );
};

export default RenaultCapture;
