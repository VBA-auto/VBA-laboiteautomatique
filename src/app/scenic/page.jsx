import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynaStock from "@/components/DynaStock";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Renault Scenic 3, calculateur boite automatique EDC pour Renault scenic 3 voir stock";
const HeadingText = "Calculateur pour Renault Scenic";

const RenaultScenic = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] produits">
        <div className="container mx-auto">
          <Head>
            <title>Calculateur EDC pour Renault Scenic disponibililté</title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>

          <div style={{ display: "none" }}>
            <h1>Calculateur pour Renault Scénic </h1>
          </div>

          <div className="justify-center items-start gap-5 mb-2.5">
            <div className="xl:w-[800px] xl:min-h-[538px] mx-auto ">
              <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
                <div className="flex justify-between relative">
                  <div className="absolute left-0">
                    <ReturnButton />
                  </div>
                  <div className="mx-auto">
                    {" "}
                    <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                      Renault Scénic
                    </h1>
                  </div>

                  <div className="absolute right-0">
                    <DynaStock carName="Renault Scenic" />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5">
                  Renault Scénic
                </h1>
                <div className="my-2.5">
                  <Image
                    width={290}
                    height={290}
                    src="https://laboiteautomatique.com/images/calculateur_DC4_renault_Senic.webp"
                    className="mx-auto w-[280px] h-[165px] mb-5"
                    priority={true}
                    alt=""
                  />
                </div>
                <p className="text-justify text-[15px]">
                  Vérifiez la disponibilté de votre module (boite de vitesse à
                  contrôler) pour votre boite automatique <strong>EDC</strong>{" "}
                  Renault <strong>Scénic 3</strong>. Celui-ci peut être livré
                  vierge ou directement programmé (Plug & Play). L’
                  <Link href="/prestation/installation">installation</Link> est
                  possible en fonction de votre lieu géographique. Il n’existe
                  qu’un modèle pour Renault Scénic 3:{" "}
                  <Link href="/scenic/diesel" className="underline">
                    Diesel
                  </Link>
                  {". "}
                  N’hésitez pas à nous contacter si vous souhaitez être
                  absolument certain que cette pièce est bien à l’origine du
                  problème. Pour plus d&apos;informations, vous pouvez consulter
                  notre{" "}
                  <Link href="/ressource/aide-en-ligne" className="underline">
                    aide en ligne
                  </Link>
                  {"."}
                </p>
                <div className="carsef grid md:grid-cols-8 grid-cols-3 md:mt-0 mt-3 items-center justify-start">
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
                <div className="md:flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <Image
                      width={100}
                      height={100}
                      src="https://i.ibb.co/k8C1Y2Y/Group-1074-removebg-preview.png"
                      alt="Calculateur avec carton"
                      className="w-[100px] h-[80px]"
                      priority={true}
                    />
                    <div className="text-start">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Renault Scénic
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Scénic pour Diesel
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-0 mt-4">
                    <div className="flex justify-center gap-5">
                      <div className="">
                        <Link href="/scenic/diesel" prefetch={true}>
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-9 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            1.5 Diesel
                          </button>
                        </Link>
                      </div>
                    </div>
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

export default RenaultScenic;
