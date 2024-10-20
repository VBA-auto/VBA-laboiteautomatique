import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Main page URLs	https://laboiteautomatique.com/		vente calculateur Renault boite automatique DC4 (EDC) 6DCT250	Société spécialisée dans la vente et la reprogrammation de calculateurs pour boite automatique DC4 (boite EDC) pour Renault clio 4 Captur megane et scenic 																					";
const HeadingText = "Programation calculateur boite automatique Renault";

const Programmation = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="installation">
        <div className="relative">
          <Head>
            <title>
              Programmation et clonage calculateur Renault DC4 (EDC) 6DCT250
            </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Programation calculateur boite automatique Renault</h1>
          </div>
          {/* Texte au-dessus de l'image */}
          <main className="py-[60px]">
            <div className="container mx-auto">
              <div className=" mb-5  text-center">
                <p className="text-[24px] font-semibold text-[#374151]">
                  Programmation - Clonage
                </p>
              </div>
              <div className="md:flex md:gap-5 gap-5 mt-8 flexdirection">
                <div className="md:w-[53%]">
                  <div className="accent_color p-3 rounded-md">
                    <div className="mb-2 text-lg">
                      <p className="text-justify text-[15px]">
                        Nous proposons des services de reprogrammation et de
                        clonage pour boîtes automatiques avec la valise
                        constructeur pour les modèles de véhicules suivants :
                      </p>
                      <ul className="grid md:grid-cols-5 grid-cols-2 gap-5  font-[500] mt-2 text-[14px]">
                        <div className="w-full">
                          <Link href="/renault-captur">
                            <p className="bg-gray-100 rounded-md text-center ">
                              Captur
                            </p>
                          </Link>
                        </div>
                        <div className="">
                          <Link href="/renault-clio">
                            <p className="bg-gray-100 rounded-md text-center  ">
                              Clio IV
                            </p>
                          </Link>
                        </div>
                        <div className="">
                          <Link href="/renault-clio">
                            <p className="bg-gray-100 rounded-md text-center  ">
                              Megane
                            </p>
                          </Link>
                        </div>

                        <div className="w-full">
                          <Link href="/renault-scenic">
                            <p className="bg-gray-100 rounded-md text-center  ">
                              Scenic
                            </p>
                          </Link>
                        </div>
                        <div className="w-full">
                          <Link href="/renault-clio-rs">
                            <p className="bg-gray-100 rounded-md text-center  px-2">
                              Clio 4 Rs
                            </p>
                          </Link>
                        </div>
                      </ul>
                    </div>
                    <p className="my-3 text-[15px]">Références compatibles :</p>
                    <div className=" ">
                      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-gray-600 text-[15px]">
                        {[
                          "310321488R",
                          "310321517R",
                          "310320841R",
                          "310320717R",
                          "310320892R",
                          "310320721R",
                          "310321520R",
                          "310321561R",
                          "310321808R",
                          "310321150R",
                          "310321421R",
                          "310321706R",
                          "310321716R",
                          "310321793R",
                          "310321662R",
                          "310321524R",
                          "310321994R",
                          "310322059R",
                          "310F93913R",
                          "310321149R",
                          "310321306R",
                          "310320553R",
                          "310321359R",

                          "310320749R",
                          "310320891R",
                          "310320756R",
                          "310321109R",
                          "A2C30743000",
                          "A2C53374830",
                        ].map((code) => (
                          <a
                            key={code}
                            href={`/${encodeURIComponent(code)}`}
                            className="hover:underline"
                          >
                            {code}
                          </a>
                        ))}
                      </div>
                      <div className="">
                        <p className="text-[15px] mt-2">
                          A2C30743000 01 K00, A2C53374830 03 K01, A2C30743100,
                          A2C73768907, A4539006303
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-justify text-[15px]">
                      Avec notre expertise, nous sommes en mesure d’effectuer la
                      reprogrammation ou le clonage de votre calculateur.
                      Livraison: toute la France.
                      <br />
                      Démontage ou installation: uniquement en IDF ou en région
                      voisine.
                    </p>
                  </div>
                </div>
                <div className="md:w-[45%]">
                  <div className="md:h-[415px]">
                    <Image
                      width={500}
                      height={500}
                      className="h-full w-full rounded-md"
                      src="/images/programation.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="text-start mt-5">
                <Link href="/contact">
                  <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-3 rounded-md hover:bg-[#2C80EF] hover:text-white block">
                    <span>Contactez-nous</span>
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Programmation;
