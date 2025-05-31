import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Nous pouvons programmer et cloner les calculateurs Renault boite automatique EDC pour clio 4, clio RS, Captur, megane 3, megane 4, scenic 3, Kadjar, Scenic 4";

const Programmation = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="installation">
        <div className="relative">
          <Head>
            <title>
              garage Programation calculateur pour boite automatique EDC Renault
            </title>
            <meta name="description" content={pageDescription} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>programmation clonage Renault Captur boite automatique EDC </h1>
            <h1>programmation clonage Renault Clio 4 boite automatique EDC </h1>
            <h1>
              programmation clonage Renault Megane 3 boite automatique EDC{" "}
            </h1>
            <h1>
              programmation clonage Renault Scenic 3 boite automatique EDC{" "}
            </h1>
            <h1>
              programmation clonage Renault Fluence boite automatique EDC{" "}
            </h1>
            <h1>
              programmation clonage Renault Clio RS boite automatique EDC{" "}
            </h1>
            <h1>
              programmation clonage Renault Megane 4 boite automatique EDC{" "}
            </h1>
            <h1>
              programmation clonage Renault Scenic 4 boite automatique EDC{" "}
            </h1>
            <h1>programmation clonage Renault Kadjar boite automatique EDC </h1>
            <h1>
              programmation clonage Renault twingo III boite automatique EDC{" "}
            </h1>
          </div>
          {/* Texte au-dessus de l'image */}
          <main className="py-[60px]">
            <div className="container mx-auto">
              <div className=" mb-5  text-center">
                <p className="text-[24px] font-semibold text-[#374151]">
                  Programmation - Clonage
                </p>
              </div>
              <div className="xl:flex md:gap-5 gap-5 mt-8 flexdirection">
                <div className="xl:w-[53%]">
                  <div className="accent_color p-3 rounded-md">
                    <div className="mb-2 text-lg">
                      <p className="text-justify text-[15px]">
                        Nous proposons des services de reprogrammation et de
                        clonage pour boîtes automatiques avec la valise
                        constructeur pour les modèles de véhicules suivants :
                      </p>
                      <ul className="grid md:grid-cols-5 grid-cols-2 gap-5  font-[500] mt-2 text-[14px]">
                        <div className="w-full">
                          <Link href="/captur">
                            <p className="bg-gray-100 rounded-md text-center ">
                              Captur
                            </p>
                          </Link>
                        </div>
                        <div className="">
                          <Link href="/clio">
                            <p className="bg-gray-100 rounded-md text-center  ">
                              Clio IV
                            </p>
                          </Link>
                        </div>
                        <div className="">
                          <Link href="/megane">
                            <p className="bg-gray-100 rounded-md text-center  ">
                              Megane
                            </p>
                          </Link>
                        </div>

                        <div className="w-full">
                          <Link href="/scenic">
                            <p className="bg-gray-100 rounded-md text-center  ">
                              Scenic
                            </p>
                          </Link>
                        </div>
                        <div className="w-full">
                          <Link href="/clio-rs">
                            <p className="bg-gray-100 rounded-md text-center  px-2">
                              Clio 4 Rs
                            </p>
                          </Link>
                        </div>
                      </ul>
                    </div>
                    <p className="my-3 text-[15px]">Références compatibles:</p>
                    <div className=" ">
                      <div className="grid gap-3 grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 text-gray-600 text-[15px] max-w-5xl mx-auto">
                        <Link href="/reference/310321488R">310321488R</Link>
                        <Link href="/reference/310321517R">310321517R</Link>
                        <Link href="/reference/310320841R">310320841R</Link>
                        <Link href="/reference/310320717R">310320717R</Link>
                        <Link href="/reference/310320892R">310320892R</Link>
                        <Link href="/reference/310320721R">310320721R</Link>
                        <Link href="/reference/310321561R">310321561R</Link>

                        <Link href="/reference/310321808R">310321808R</Link>
                        <Link href="/reference/310321706R">310321706R</Link>
                        <Link href="/reference/310321716R">310321716R</Link>
                        <Link href="/reference/310321662R">310321662R</Link>
                        <Link href="/reference/310321994R">310321994R</Link>
                        <Link href="/reference/310322059R">310322059R</Link>
                        <Link href="/reference/310F93913R">310F93913R</Link>

                        <Link href="/reference/310321149R">310321149R</Link>
                        <Link href="/reference/310321306R">310321306R</Link>
                        <Link href="/reference/310320553R">310320553R</Link>
                        <Link href="/reference/310320749R">310320749R</Link>
                        <Link href="/reference/310320891R">310320891R</Link>
                        <Link href="/reference/310320756R">310320756R</Link>
                        <Link href="/reference/310321109R">310321109R</Link>

                        <Link href="/reference/310321354R">310321354R</Link>
                        <Link href="/reference/310321148R">310321148R</Link>
                        <Link href="/reference/310320192R">310320192R</Link>
                        <Link href="/reference/310320139R">310320139R</Link>
                        <Link href="/reference/310320468R">310320468R</Link>
                        <Link href="/reference/310320408R">310320408R</Link>
                        <Link href="#" className="cursor-default">
                          310321520R
                        </Link>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 text-gray-600 text-[15px] mt-2">
                        <Link
                          className="truncate"
                          href="/reference/A2C30743000"
                        >
                          A2C30743000
                        </Link>
                        <Link
                          className="truncate"
                          href="/reference/A2C53374830"
                        >
                          A2C53374830
                        </Link>
                        <Link className="truncate cursor-default" href="#">
                          A2C30743100
                        </Link>
                        <Link className="truncate cursor-default" href="#">
                          A2C73768907
                        </Link>
                        <Link className="truncate cursor-default" href="#">
                          A4539006303
                        </Link>
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
                <div className="xl:w-[45%]">
                  <div className="xl:h-[396px]">
                    <Image
                      unoptimized
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
