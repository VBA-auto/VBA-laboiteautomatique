import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";
import Comments from "@/components/Blogs/Comments";
const pageDescription =
  "informations calculateur boite automatique EDC Renault version diag, etalonage, numero calibrage, numero vdiag, version logiciel";
const CalibragePage = () => {
  const dynamicComments = [
    {
      id: "1cali",
      author: "User98",
      text: "Excellent article sur l'importance du calibrage ! C'est un rappel crucial pour la précision et la fiabilité. Merci pour ces informations claires et concises, très utile pour tous les professionnels.",
      timestamp: "2h",
      likes: 8,
      avatar: true,
    },
    {
      id: "2cali",
      author: "Duke",
      text: "Merci de souligner à quel point le calibrage est vital. Votre explication des conséquences d'un mauvais calibrage est très pertinente. C'est un sujet essentiel pour garantir la qualité des mesures.",
      timestamp: "3d",
      likes: 3,
      avatar: true,
    },
  ];
  return (
    <main className="">
      <SubHeader />
      <Header />
      <section className="article-content relative">
        <Head>
          <title>Calibrage paramétrage calculateur Renault</title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="container mx-auto mt-[60px] px-6 md:px-0">
          <div className="flex justify-between ">
            <div className="w-1/2">
              <ReturnButton />
            </div>
            <div className="">
              <p className="md:text-sm text-[12px]">
                <Link className="text-gray-400" href="/">
                  Home /
                </Link>{" "}
                <Link className="text-gray-400" href="/ressource/blogs">
                  Ressource /
                </Link>{" "}
                <Link className="text-gray-400" href="#">
                  Blog - Tutoriel /
                </Link>{" "}
                <Link className="text-blue-400" href="#">
                  Calibrage
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="md:flex gap-8">
            <div className="md:w-[65%]">
              <Image
                unoptimized
                width={700}
                height={200}
                className="w-full mt-8 rounded-md "
                src="/images/blog-calib.webp"
                alt="calibrage image from VBA"
              />
              <h2 className="text-2xl text-gray-700 text-start mt-6 font-medium">
                Exemple d’information calculateur
              </h2>
              <div className="mt-5 mb-8">
                <p>
                  Vous trouverez ici un exemple où trouver les informations
                  relatives au calculateur. <br /> Version du diag - du logiciel
                  – numéro de calibrage ou étalonnage
                </p>
                <div className=" mx-auto">
                  <Image
                    unoptimized
                    width={500}
                    height={500}
                    className="w-full mt-4 rounded-md "
                    src="/images/blog-2.webp"
                    alt="calibrage image from VBA"
                  />
                </div>
                <p className="mt-5 text-justify">
                  Chaque calculateur possède un « soft » ou « programme ». Il y
                  un numéro fournisseur qui est souvent le même, un numéro de
                  VDIAG, un numéro de programme, un numéro fournisseur, numéro
                  programme, version logiciel et un numéro de{" "}
                  <span className="bg-yellow-100">calibration</span> ou d’
                  <span className="bg-yellow-100">étalonnage</span>. Ci dessus,
                  vous trouverez un exemple avec une valise « CLIP » de chez
                  Renault ainsi que Delphi. Vous trouverez également un exemple
                  des différents « software » pour Renault sur cette page :{" "}
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

            <div className="md:w-[35%] mt-6 mb-16 ">
              <div className="sticky top-24">
                <Comments slug="calibrage" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CalibragePage;
