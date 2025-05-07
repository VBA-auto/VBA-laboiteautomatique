import Head from "next/head";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import DynaStock from "@/components/DynaStock";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Renault Clio 4, calculateur boite automatique EDC pour Renault Clio 4 essence et Clio 4 Diesel voir stock";
const HeadingText = "Calculateur pour Renault Clio IV";

const RenaultClio = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] produits ">
        <div className="container mx-auto">
          <Head>
            <title>Calculateur EDC pour Renault Twingo 3 disponibililté</title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Calculateur pour Renault Twingo 3</h1>
          </div>
          <div className=" justify-center items-start gap-5 mb-5">
            <div className="xl:w-[800px] xl:min-h-[538px] mx-auto ">
              <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
                <div className="flex justify-between  relative">
                  <div className="absolute left-0">
                    <ReturnButton />
                  </div>
                  <div className="mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                      Renault Twingo 3
                    </h1>
                  </div>

                  <div className="absolute right-0">
                    <DynaStock carName="Renault Twingo 3" />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5">
                  Renault Twingo 3
                </h1>
                <div className="my-8">
                  <Image
                    unoptimized
                    width={300}
                    height={280}
                    src="https://laboiteautomatique.com/images/twingo-3.webp"
                    className="mx-auto w-[260px] h-[150px] mb-5"
                    priority={true}
                    alt=""
                  />
                </div>
                <p className="text-justify text-[15px]">
                  Vérifiez la disponibilté de votre module (boite de vitesse à
                  contrôler) pour votre <strong>boite</strong> automatique{" "}
                  <strong>EDC </strong>
                  Renault <strong>Twingo 3 (DC4/DC0)</strong>. Celui-ci peut
                  être livré vierge ou directement programmé (Plug & Play). L’
                  <Link href="/prestation/installation">installation</Link> est
                  possible en fonction de votre lieu géographique. Choisissez
                  votre modèle pour Renault Twingo 3:{" "}
                  <Link href="/twingo-3/essence" className="underline">
                    0.9Essence ou 1.0 Essence
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
                    <Link href="/reference/310321716R">310321716R</Link>
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
                      src="/images/megane4.webp"
                      alt="Calculateur avec carton"
                      className=""
                      priority={true}
                    />
                    <div className="text-start">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Renault Twingo 3
                      </h2>
                      <p className="text-[14px]">
                        Calculateur Twingo 3 pour Essence
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-0 mt-4">
                    <div className="flex justify-center gap-5">
                      <div className="">
                        <Link href="/twingo-3/essence" prefetch={true}>
                          <button className="rounded-md text-center border border-[#2C80EF] py-2 px-6 shadow-2xl hover:text-[#fff] hover:bg-[#2C80EF] text-[15px]">
                            0.9 – 1.0 Essence
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
