"use client";
import DynaStock from "@/components/DynaStock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Calculateurs pour Renault Megane 1.5 Diesel, Renault scenic 1.5 Diesel,  Renault Captur 1.2 Essence et 1.5 Diesel, Renault Clio 4 1.2 Essence et 1.5 Diesel";
const HeadingText = "Types de calculateur boite automatique Renault ";

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
                vente et reprogrammation calculateur Renault DC4 6DCT250
              </title>
              <meta name="description" content={pageDescription} />
              <meta name="headline" content={HeadingText} />
              {/* <meta name="secondaryHeading" content={secondaryHeadingText} /> */}
            </Head>
            <div style={{ display: "none" }}>
              <h1>Types de calculateur boite automatique Renault</h1>
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
                  <Link href="/renault-captur">
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
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151]`}
                      >
                        Renault Captur
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-center gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/vehicule/renault-captur-essence"
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
                        href="/vehicule/renault-captur-diesel"
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
                  <Link href="/renault-clio">
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
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151]`}
                      >
                        Renault Clio IV
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-center gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/vehicule/renault-clio4-essence"
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
                        href="/vehicule/renault-clio4-diesel"
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
                  <Link href="/renault-megane">
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
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151]`}
                      >
                        Renault Mégane
                      </h2>
                    </div>
                  </Link>

                  <div className="flex justify-center gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        className=" hover:text-[#2C80EF] text-[15px]"
                        href="/vehicule/renault-megane-essence"
                      >
                        <h2>
                          1.2 <br />
                          Essence <br />à partir de 2012
                        </h2>
                      </Link>
                    </div>
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/vehicule/renault-megane-diesel"
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

                  <Link href="/renault-scenic">
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
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151]`}
                      >
                        Renault Scénic
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 ">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/vehicule/renault-scenic-diesel"
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
                  <Link href="/renault-fluence">
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
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151]`}
                      >
                        Renault Fluence
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/vehicule/renault-fluence-diesel"
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
                  <Link href="/renault-clio-rs">
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
                        className={`mt-3 text-[22px] font-medium text-center transition-transform text-[#374151]`}
                      >
                        Renault Clio RS
                      </h2>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 ">
                    <div className="w-1/2 accent_color rounded-md text-center py-2 px-2 shadow-sm">
                      <Link
                        href="/vehicule/renault-clio4-rs-essence"
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
