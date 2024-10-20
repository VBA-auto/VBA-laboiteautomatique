import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import Link from "next/link";
export default function Renault() {
  return (
    <main>
      <SubHeader />
      <Header />
      <div className="relative produits">
        <div className="w-full items-center justify-center flex  flex-col lg:p-24 z-20 relative">
          <div className="orderPrevPage group rounded-xl shadow-2xl md:p-8 transition-color borderClass bg-white/90  md:w-3/5 lg:w-3/5 xl:w-5/12 text-center">
            <div className="flex justify-between  ">
              <h4 className="text-gray-900 text-[15px] flex items-center gap-2">
                <span className="bg-red-500 w-[10px] h-[10px] rounded-full block"></span>{" "}
                0 en stock
              </h4>
              <h2 className="text-2xl"></h2>
            </div>
            <Image
              width={300}
              height={300}
              src="/images/Calculateur_Renault_A2C30743000_01_K00.webp"
              alt="Calculateur avec carton"
              className="w-56 m-auto mb-4"
            />
            <h2 className="text-[30px]xl font-semibold pb-2">
              Calculateur Renault Scénic
            </h2>
            <div className="text-center">
              <p className="mb-4">
                Module de commande (calculateur) pour boite automatique Renault
                Scénic Essence Boite automatique DC4 (getrag 6DCT250)
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
                  <Link href="https://buy.stripe.com/5kA03E9O06l98mI5kB">
                    <button className="buttonsOrder">Commander</button>
                  </Link>
                </div>
                <div style={{ width: "140px" }} className="homeButtons">
                  <Link href="/contact">
                    <button className="buttonsBlueRound">Contactez-nous</button>
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
}
