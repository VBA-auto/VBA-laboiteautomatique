import Head from "next/head";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import DynaStock from "@/components/DynaStock";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Infos sur le calculateur EDC de la Clio 5. Défauts connus et modèles compatibles.   ";
const HeadingText = "Calculateur Clio 5 – Boîte auto EDC Renault ";

const RenaultClio = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] produits ">
        <div className="container mx-auto">
          <Head>
            <title>Calculateur Clio 5 – Boîte auto EDC Renault </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Calculateur Clio 5 – Boîte auto EDC Renault </h1>
          </div>
          <div className=" justify-center items-start gap-5 mb-2.5">
            <div className="xl:w-[800px] xl:min-h-[538px] mx-auto ">
              <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
                <div className="flex justify-between  relative">
                  <div className="absolute left-0">
                    <ReturnButton />
                  </div>
                  <div className="mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                      Renault Clio V
                    </h1>
                  </div>

                  <div className="absolute right-0">
                    <DynaStock carName="Renault Clio 5" />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5">
                  Renault Clio V
                </h1>
                <div className="my-1.5">
                  <Image
                    unoptimized
                    width={300}
                    height={280}
                    src="https://laboiteautomatique.com/images/clio_5.webp"
                    className="mx-auto w-[280px] h-[170px] mb-5"
                    priority={true}
                    alt=""
                  />
                </div>
                <p className="text-justify text-[15px]">
                  Vérifiez la disponibilté de votre module (boite de vitesse à
                  contrôler) pour votre <strong>boite</strong> automatique{" "}
                  <strong>EDC </strong>
                  Renault <strong>Clio V (6DCT300)</strong>. Celui-ci peut être
                  livré vierge ou directement programmé (Plug & Play). L’
                  <Link href="/prestation/installation">installation</Link> est
                  possible en fonction de votre lieu géographique. Choisissez
                  votre modèle pour Renault Clio 5:{" "}
                  <Link href="/clio-5/essence" className="underline">
                    Essence (1.3).
                  </Link>{" "}
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
                    <Link href="/reference/310322059R">310322059R</Link>
                  </p>
                  <p className="text-[14px] text-gray-700 italic mt-2 underline">
                    <Link href="/reference/310321994R">310321994R </Link>
                  </p>
                  {/* <p className="text-[14px] text-gray-700 italic mt-2 underline">
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
                  </p> */}
                </div>
                <div className="md:flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <Image
                      unoptimized
                      width={100}
                      height={100}
                      src="/images/clio-5-plat.webp"
                      alt="Calculateur avec carton"
                      className=""
                      priority={true}
                    />
                    <div className="text-start">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Renault Clio V
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Clio V pour Essence
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-0 mt-4">
                    <div className="flex justify-center gap-5">
                      <div className="">
                        <Link href="/clio-5/essence" prefetch={true}>
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-6 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            1.3 Essence
                          </button>
                        </Link>
                      </div>
                      {/* <div className="">
                        <Link href="/clio/diesel" prefetch={true}>
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-8 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            1.5 Diesel
                          </button>
                        </Link>
                      </div> */}
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

export default RenaultClio;
