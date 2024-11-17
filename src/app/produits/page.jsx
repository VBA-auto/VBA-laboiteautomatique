"use client";
import DynaStock from "@/components/DynaStock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Vous trouverez ici les différents modèles et le stock pour les  calculateurs boites automatiques EDC Renault clio 4, clio RS, Captur, megane 3 et scenic 3.";

const Produits = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[60px] bg-[#f7f7f7]">
        <div className="container mx-auto">
          <div className="product3rdCont">
            <Head>
              <title>
                Les différents calculateur boite automatique EDC renault
                véhicule
              </title>
              <meta name="description" content={pageDescription} />
            </Head>
            <div style={{ display: "none" }}>
              <h1>stock produits Calculateur EDC Renault Captur</h1>
              <h1>stock produits Calculateur EDC Renault Clio 4</h1>
              <h1>stock produits Calculateur EDC Renault Megane 3</h1>
              <h1>stock produits Calculateur EDC Renault Scenic 3</h1>
              <h1>stock produits Calculateur EDC Renault Fluence</h1>
              <h1>stock produits Calculateur EDC Renault Clio RS</h1>
              <h2>
                stock référence Calculateur EDC Renault Captur 1.2 Essence
              </h2>
              <h2>stock référence Calculateur EDC Renault Captur 1.5 Diesel</h2>
              <h2>
                stock référence Calculateur EDC Renault Clio 4 1.2 Essence
              </h2>
              <h2>stock référence Calculateur EDC Renault Clio 4 1.5 Diesel</h2>
              <h2>
                stock référence Calculateur EDC Renault Megane 3 1.2 Essence
              </h2>
              <h2>
                stock référence Calculateur EDC Renault Megane 3 1.5 Diesel
              </h2>
              <h2>
                stock référence Calculateur EDC Renault Scenic 3 1.5 Diesel
              </h2>
              <h2>
                stock référence Calculateur EDC Renault Fluence 1.5 Diesel
              </h2>
              <h2>
                stock référence Calculateur EDC Renault Clio RS 1.6 Essence
              </h2>
            </div>
            <main className="flex  flex-col z-20 relative">
              <div className="productTitle mx-auto bg-white/50">
                <div className="product border accent_color py-4 text-center rounded-md">
                  <h1 className="headingText font-semibold  my-1 text-[#374151]">
                    Calculateur Renault boite EDC (DC4)
                  </h1>
                  <p className="font-semibold mt-2 text-[#374151]">
                    Disponibilité
                  </p>
                </div>
              </div>

              <div className="productscards grid grid-cols-3 justify-center gap-5 mt-5">
                {/* Produits */}
                <div className="lg:w-full rounded-md shadow-sm p-5 singleProductCard accent_color bg-white/50">
                  <div className="">
                    <DynaStock carName="Renault Captur" />
                  </div>
                  <Link href="/captur">
                    <div className="">
                      {" "}
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
                      <h2
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151] hover:text-blue-400`}
                      >
                        Renault Captur
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-center gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/captur/essence"
                        className=" hover:text-[#2C80EF] text-[15px]"
                      >
                        <h2>
                          1.2 <br /> Essence <br />à partir de 2012
                        </h2>
                      </Link>
                    </div>
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        className=" hover:text-[#2C80EF] text-[15px]"
                        href="captur/diesel"
                      >
                        <h2>
                          1.5 <br /> Diesel <br />à partir de 2012
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 2 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <DynaStock carName="Renault Clio" />
                  </div>
                  <Link href="/clio">
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
                      <h2
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151] hover:text-blue-400`}
                      >
                        Renault Clio IV
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-center gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="clio/essence"
                        className=" hover:text-[#2C80EF] text-[15px]"
                      >
                        <h2>
                          1.2 <br /> Essence <br />à partir de 2012
                        </h2>
                      </Link>
                    </div>
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        className=" hover:text-[#2C80EF] text-[15px]"
                        href="/clio/diesel"
                      >
                        <h2>
                          1.5 <br /> Diesel <br />à partir de 2012
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 3 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <DynaStock carName="Renault megane" />
                  </div>
                  <Link href="/megane">
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
                      <h2
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151] hover:text-blue-400`}
                      >
                        Renault Mégane
                      </h2>
                    </div>
                  </Link>

                  <div className="flex justify-center gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        className=" hover:text-[#2C80EF] text-[15px]"
                        href="/megane/essence"
                      >
                        <h2>
                          1.2 <br />
                          Essence <br />à partir de 2012
                        </h2>
                      </Link>
                    </div>
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/megane/diesel"
                        className=" hover:text-[#2C80EF] text-[15px]"
                      >
                        <h2>
                          1.5
                          <br /> Diesel <br />à partir de 2008
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 4 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <DynaStock carName="Renault Scenic" />
                  </div>

                  <Link href="/scenic">
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
                      <h2
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151] hover:text-blue-400`}
                      >
                        Renault Scénic
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 ">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/scenic/diesel"
                        className=" hover:text-[#2C80EF] text-[15px]"
                      >
                        <h2>
                          1.5
                          <br /> Diesel <br />à partir de 2008
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 5 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <DynaStock carName="Renault Fluence" />
                  </div>
                  <Link href="/fluence">
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
                      <h2
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151] hover:text-blue-400`}
                      >
                        Renault Fluence
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/fluence/diesel"
                        className=" hover:text-[#2C80EF] text-[15px]"
                      >
                        <h2>
                          1.5
                          <br />
                          Diesel
                          <br />à partir de 2009
                        </h2>
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                {/* Product 6 */}

                <div className="lg:w-full rounded-md  shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <DynaStock carName="Clio 4 RS" />
                  </div>
                  <Link href="/clio-rs">
                    {" "}
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
                      <h2
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151] hover:text-blue-400`}
                      >
                        Renault Clio RS
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 ">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/clio-rs/essence"
                        className=" hover:text-[#2C80EF] text-[15px]"
                      >
                        <h2>
                          1.6 <br /> Essence <br />à partir de 2010
                        </h2>
                      </Link>
                    </div>

                    {/* <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        className=" hover:text-[#2C80EF] text-[15px]"
                        href="/ford-focus/diesel"
                      >
                        <h2>
                          1.6 <br /> Diesel <br />à partir de 2008
                        </h2>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Produits;
