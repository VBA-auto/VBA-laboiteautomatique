import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReturnButton from "@/components/ReturnButton";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Commander ici votre calculateur pour boîte automatique EDC (DC4) pour Renault Captur 1.2 Essence";
const HeadingText = "Calculateur pour Renault Captur Essence";

const Page = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <div className="relative produits">
        <Head>
          <title>
            Calculateur boite automatique EDC Renault Captur essence
          </title>
          <meta name="description" content={pageDescription} />
          <meta name="headline" content={HeadingText} />
        </Head>

        <div style={{ display: "none" }}>
          <h1>
            Commander ici votre calculateur pour boîte automatique EDC (DC4)
            pour Renault Captur essence
          </h1>
        </div>

        <div className=" w-full items-center justify-center flex  flex-col z-20 relative">
          <div className="orderPrevPage group rounded-md shadow-2xl md:p-8 transition-color  bg-white/90 accent_color  md:w-3/5 lg:w-3/5 xl:w-5/12 text-center">
            <div className="flex justify-between  mb-5">
              <div className="md:w-5/12">
                <ReturnButton />
              </div>
              <div className="">
                <h4 className="text-gray-900 text-[15px] flex items-center gap-2">
                  <span className="bg-[#61dd1c] w-[10px] h-[10px] rounded-full block"></span>{" "}
                  3 en stock
                </h4>
              </div>
            </div>
            <Image
              width={300}
              height={300}
              src="/images/Calculateur_Renault_A2C30743000_01_K00.webp"
              alt="Calculateur avec carton"
              className="w-56 m-auto mb-4"
            />
            <h2 className="text-[30px]xl font-semibold pb-2">
              Calculateur Renault Captur
            </h2>
            <div className="text-center">
              <p className="mb-4">
                Module de commande (calculateur) pour boite automatique Renault
                Captur Essence Boite automatique DC4 (getrag 6DCT250)
              </p>
              <p className="mb-4 text-center text-sm text-black italic">
                310320749R 310320891R 310320756R 310321109R 310321488R
                310321517R 310320841R 310320717R 310320892R 310320721R
                310321520R 310321561R A4539006303 310321808R 310321150R
                310321421R 310321706R 310321716R 310321793R 310321662R
                310321524R 310321994R 310322059R 310F93913R 310321149R
                310321306R 310320553R 310321359R 310321488R 310321148R
              </p>
              <div className="flex justify-center">
                <div style={{ width: "140px" }} className="homeButtons">
                  <Link href="https://buy.stripe.com/dR65nYaS424T8mI9BC">
                    <button className="buttonsOrder hover:bg-[#f1b04e] hover:text-white">
                      Commander
                    </button>
                  </Link>
                </div>
                <div style={{ width: "140px" }} className="homeButtons">
                  <Link href="/contact">
                    <button className="buttonsBlueRound hover:bg-[#2C80EF] hover:text-white">
                      Contactez-nous
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
