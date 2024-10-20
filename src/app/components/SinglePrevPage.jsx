import Head from "next/head";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import DynaStock from "@/components/DynaStock";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Commander ici votre calculateur pour boîte automatique, Renault Captur boîte EDC (DC4))";
const HeadingText = "Calculateur pour Renault Captur";

const RenaultCapture = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="carsCategory">
        <div className="container mx-auto">
          <Head>
            <title>
              Calculateur, boîte automatique Renault Captur EDC (DC4)
            </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Calculateur pour Renault Captur</h1>
          </div>
          <div className="md:flex justify-center items-start gap-5">
            <div className="md:w-1/2">
              <div className="md:w-[400px] md:h-[530px] ms-auto bg-[#f5f4f4e3] accent_color py-5 rounded-md  p-5">
                <h1 className="text-2xl font-semibold text-center text-gray-700">
                  Renault Captur
                </h1>
                <Image
                  width={300}
                  height={290}
                  src="/images/calculateur_DC4_Renault_Capture.webp"
                  className="mx-auto"
                  alt=""
                />
                <p className="text-justify text-[15px]">
                  Vérifiez la disponibilté de votre module (boite de vitesse à
                  contrôler) pour votreboite automatique EDC Renault Captur.
                  Celui-ci peut être livré vierge ou directement programmé (Plug
                  & Play). L’installationest possible en fonction de votre lieu
                  géographique. Choisissez votre modèle pour Renault Captur :
                  Essence ou Diesel. N’hésitez pas à nous contacter si vous
                  souhaitez être absolument certain que cette pièce est bien à
                  l’origine du problème. Pour plus d&apos;informations, vous
                  pouvez consulter notre aide en ligne.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 capture ">
              <div className="md:w-[400px] md:h-[530px] accent_color rounded-md shadow-2xl p-5 bg-[#f5f4f4e3]">
                <div className="flex justify-between">
                  <div className="">
                    <ReturnButton />
                  </div>
                  <div className="">
                    <DynaStock number={6} color="enStock" />
                  </div>
                </div>
                <div className="">
                  <Image
                    width={300}
                    height={300}
                    src="https://i.ibb.co/k8C1Y2Y/Group-1074-removebg-preview.png" // Remplacez par le bon chemin de l'image
                    alt="Calculateur avec carton"
                    className="m-auto"
                    loading="lazy"
                  />
                </div>

                <div className="flex  mb-3  justify-center">
                  <h2 className="text-2xl font-semibold text-center text-gray-700">
                    Renault Captur
                  </h2>
                </div>

                <div className="flex justify-center gap-5">
                  <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link href="/vehicule/renault-captur-essence">
                      <h2 className="hover:text-[#2c80ef]">
                        1.2 <br /> Essence <br />à partir de 2012
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link href="/vehicule/renault-captur-diesel">
                      <h2 className="hover:text-[#2c80ef]">
                        1.5 <br /> Diesel <br />à partir de 2012
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default RenaultCapture;
