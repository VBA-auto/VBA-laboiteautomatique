import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";
const pageDescription =
  "informations calculateur boite automatique EDC Renault version diag, etalonage, numero calibrage, numero vdiag, version logiciel";
const CalibragePage = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="article-content">
        <Head>
          <title>exemple informations calcualteur EDC renault</title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="container mx-auto mt-[60px] px-6 md:px-0">
          <div className="md:w-3/5 mx-auto flex justify-between ">
            <div className="w-1/2">
              <ReturnButton />
            </div>
            <div className="">
              <p className="md:text-sm text-[12px]">
                <Link className="text-gray-400" href="/">
                  Home /
                </Link>{" "}
                <Link className="text-gray-400" href="/ressource/blogs">
                  Tuto - Blog /
                </Link>{" "}
                <Link className="text-blue-400" href="#">
                  Calibrage
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="md:w-3/5 mx-auto">
            <Image
              width={300}
              height={200}
              className="w-full mt-8 rounded-md "
              src="/images/calib-blog.webp"
              alt="calibrage image from VBA"
            />
          </div>

          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <h1 className="text-[24px] font-semibold my-3">
              Exemple d’information calculateur
            </h1>
            <p>
              Vous trouverez ici un exemple où trouver les informations
              relatives au calcualteur. <br /> Version du diag - du logiciel –
              numéro de calibrage ou étalonnage
            </p>
            <div className=" mx-auto">
              <Image
                width={500}
                height={500}
                className="w-full mt-8 rounded-md md:h-[432px]"
                src="/images/blog-2.webp"
                alt="calibrage image from VBA"
              />
            </div>
            <p className="mt-5">
              Chaque calculateur possède un « soft » ou « programme ». Il y un
              numéro fournisseur qui est souvent le même, un numéro de VDIAG, un
              numéro de programme, un numéro fournisseur, numéro programme,
              version logiciel et un numéro de calibration ou d’étalonnage. Ci
              dessus, vous trouverez un exemple avec une valise « CLIP » de chez
              Renault ainsi que Delphi. Vous trouverez également un exemple des
              différents « software » pour Renault sur cette page :{" "}
              <Link className="text-[#2C80EF]" href="/dc4_soft">
                https://laboiteautomatique.com/dc4_soft
              </Link>
            </p>
            <div className="mt-[35px]">
              <Link href="/contact">
                <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-3 rounded-md hover:bg-[#2C80EF] hover:text-white block">
                  <span>Contactez-nous</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CalibragePage;
