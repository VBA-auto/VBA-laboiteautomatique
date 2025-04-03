"use client";
import DynaProdStock from "@/components/DynaProdStock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Importing Images
const capturImage = "/images/productDefault.webp";
const Megane4 = "/images/megane4.webp";
const Renault_Capture = "/images/calculateur_DC4_Renault_Capture.webp";
const Renault_Clio4 = "/images/calculateur_DC4_Renault_Clio4.webp";
const renaultMegane = "/images/calculateur_DC4_renault-megane.webp";
const renaultScenic = "/images/calculateur_DC4_renault_Senic.webp";
const renaultFluence = "/images/calculateur_DC4_renault-fluence.webp";
const renaultClioRS = "/images/calculateur_DC4_clioRS.webp";
const megane4Car = "/images/megane_4_car.webp";
const Clio5Plat = "/images/clio-5-plat.webp";
const Clio5PlatChild = "/images/clio_5.webp";
const Twingo = "/images/twingo-3.webp";

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
              <p>checking from laptop for connection with github</p>
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

              <div className="productscards grid xl:grid-cols-3  justify-center gap-6 mt-5">
                {/* Produits */}
                <div className="lg:w-full rounded-md shadow-sm p-5 singleProductCard accent_color bg-white/50">
                  <div className="">
                    <div className="h-[30px]">
                      {/* <DynaStock carName="Renault Captur" /> */}
                      <DynaProdStock carName="Renault Captur" />
                    </div>
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src={capturImage}
                      alt=""
                      priority={true}
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/captur">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px]  hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={Renault_Capture}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "70px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start text-[#374151]">
                          Renault Captur
                        </h2>
                        <p className="text-sm">à partir de 2012 </p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-center gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/captur/essence" className=" text-[15px]">
                        <h2>1.2 Essence</h2>
                      </Link>
                    </div>
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link className=" text-[15px]" href="captur/diesel">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 2 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <div className="h-[30px]">
                      <DynaProdStock carName="Renault Clio" />
                    </div>
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src={capturImage}
                      alt=""
                      priority={true}
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/clio">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px]  hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={Renault_Clio4}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "70px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className=" text-[22px] font-medium text-strt  text-[#374151]">
                          Renault Clio IV
                        </h2>
                        <p className="text-sm">à partir de 2012 </p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-center gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="clio/essence" className=" text-[15px]">
                        <h2>1.2 Essence</h2>
                      </Link>
                    </div>
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link className=" text-[15px]" href="/clio/diesel">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 3 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="">
                    <div className="h-[30px]">
                      <DynaProdStock carName="Renault Megane" />
                    </div>
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src={capturImage}
                      alt=""
                      priority={true}
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/megane">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px]  hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={renaultMegane}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "65px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151]">
                          Renault Mégane
                        </h2>
                        <p className="text-sm">de 2008 to 2013 </p>
                      </div>
                    </div>
                  </Link>

                  <div className="flex justify-center gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link className="  text-[15px]" href="/megane/essence">
                        <h2>1.2 Essence</h2>
                      </Link>
                    </div>
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/megane/diesel" className="  text-[15px]">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 4 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaProdStock carName="Renault Scenic" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src={capturImage}
                      alt=""
                      priority={true}
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/scenic">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={renaultScenic}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "65px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Scénic
                        </h2>
                        <p className="text-sm">à partir de 2008</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/scenic/diesel" className="  text-[15px]">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Produit 5 */}
                <div className="lg:w-full rounded-md shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaProdStock carName="Renault Fluence" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src={capturImage}
                      alt=""
                      priority={true}
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/fluence">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={renaultFluence}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "65px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Fluence
                        </h2>
                        <p className="text-sm">à partir de 2009</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/fluence/diesel" className="  text-[15px]">
                        <h2>1.5 Diesel</h2>
                      </Link>{" "}
                    </div>
                  </div>
                </div>

                {/* Product 6 */}

                <div className="lg:w-full rounded-md  shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaProdStock carName="Clio 4 RS" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={400}
                      height={300}
                      src={capturImage}
                      alt=""
                      priority={true}
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/clio-rs">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={renaultClioRS}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "65px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Clio RS
                        </h2>
                        <p className="text-sm">à partir de 2010</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/clio-rs/essence" className=" text-[15px]">
                        <h2>1.6 Essence</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product 7 */}

                <div className="lg:w-full rounded-md  shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaProdStock carName="Renault Megane 4" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={300}
                      height={300}
                      src={Megane4}
                      alt=""
                      priority={true}
                      className="mx-auto mb-8"
                    />
                  </div>
                  <Link href="/megane-4">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={megane4Car}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "65px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Megane 4
                        </h2>
                        <p className="text-sm">à partir de 2015</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/megane-4/diesel" className=" text-[15px]">
                        <h2>1.5 Diesel</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product 8 */}

                <div className="lg:w-full rounded-md  shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaProdStock carName="Renault Clio 5" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={700}
                      height={300}
                      src={Clio5Plat}
                      alt=""
                      priority={true}
                      className="mx-auto w-[400px] h-[141px]"
                    />
                  </div>
                  <Link href="/clio-5">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={Clio5PlatChild}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "65px" }}
                          className="  ms-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Clio 5
                        </h2>
                        <p className="text-sm">à partir de 2015</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-2 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/clio-5/essence" className=" text-[15px]">
                        <h2>1.3 Essence</h2>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product 9 */}

                <div className="lg:w-full rounded-md  shadow-sm p-5 bg-white/50 singleProductCard accent_color">
                  <div className="h-[30px]">
                    <DynaProdStock carName="Renault Twingo 3" />
                  </div>
                  <div className="px-4 mt-3">
                    <Image
                      width={300}
                      height={300}
                      src={Megane4}
                      alt=""
                      priority={true}
                      className="mx-auto mb-8"
                    />
                  </div>
                  <Link href="/twingo-3">
                    <div className="flex items-center border rounded-md gap-3 mt-[20px] hover:bg-gray-100">
                      <div className="w-1/3">
                        <Image
                          width={110}
                          height={100}
                          src={Twingo}
                          alt="calculateur_DC4_Renault_Capture"
                          priority={true}
                          style={{ width: "auto", height: "55px" }}
                          className="  ms-2 my-2"
                        />
                      </div>
                      <div className="w-2/3">
                        <h2 className="text-[22px] font-medium text-start transition-transform text-[#374151] ">
                          Renault Twingo 3
                        </h2>
                        <p className="text-sm">à partir de 2016</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-start gap-5 mt-5">
                    <div className="w-1/2 border border-blue-300 rounded-md text-center py-2 px-0 shadow-sm hover:bg-[#2C80EF] hover:text-white">
                      <Link href="/twingo-3/essence" className=" text-[15px]">
                        <h2>0.9 – 1.0 Essence</h2>
                      </Link>
                    </div>
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
