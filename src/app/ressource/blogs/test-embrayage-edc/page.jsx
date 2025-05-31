import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";
import Comments from "@/components/Blogs/Comments";

const pageDescription =
  "video explicative comment tester et voir si l'embrayage d'une boite automatique Renault EDC est toujours en bon état (limite tolérance)";

const TestEmbrayageEdc = () => {
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
    <main>
      <SubHeader />
      <Header />
      <section className="article-content relative">
        <Head>
          <title>comment tester embrayage EDC </title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="container mx-auto mt-[60px] px-6 md:px-0">
          <div className="flex justify-between ">
            <div className="md:w-1/2">
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
                <Link className="text-gray-400" href="/ressource/blogs">
                  Blogs /
                </Link>{" "}
                <Link className="text-blue-400" href="#">
                  Test-Embrayage-EDC
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="md:flex gap-8">
            <div className="md:w-[65%]">
              <iframe
                className="w-full md:h-[397px] mt-8 rounded-md"
                src="https://www.youtube.com/embed/crmyBO1TaK0?autohide=1&controls=1&showinfo=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h2 className="text-2xl text-gray-700 mt-6 font-medium">
                Vérifier l’état de l’embrayage EDC
              </h2>
              <div className="mt-5 mb-16">
                <h1 className="text-[17px] font-semibold my-3">
                  Comment vérifier l&apos;état de l&apos;embrayage sur une boite
                  EDC pour Captur, Scenic 3, Clio 4, Megane 3.
                </h1>
                <p className="mb-5 text-justify">
                  Cette vidéo, disponible sur notre site laboiteautomatique.com,
                  concerne uniquement les boîtes automatiques à double embrayage
                  EDC (ou DC4) équipant les modèles Renault, notamment les
                  Renault Captur, Renault Clio IV, Renault Scénic III, Mégane
                  III et Clio RS. Spécialisés dans les boîtes de vitesses à
                  double embrayage, nous vous montrons ici comment vérifier
                  l&apos;état de l&apos;embrayage. Cette vérification est
                  importante pour déterminer si l&apos;embrayage est encore en
                  bon état. Avez vous un problème d&apos;embrayage ou de
                  calculateur ou de moteur d&apos;embrayage. Il existe aussi des
                  données sur les tolérances d&apos;embrayage (important à
                  vérifier - données en général en mm). Vérifier d&apos;abord
                  sur{" "}
                  <Link
                    href="/ressource/aide-en-ligne"
                    className="text-blue-400"
                  >
                    https://laboiteautomatique.com/ressource/aide-en-ligne
                  </Link>{" "}
                  vos codes défauts.
                </p>
                <p className="text-justify">
                  Dans cette vidéo, nous expliquons comment, à l&apos;aide
                  d&apos;un tournevis, contrôler l&apos;état du ressort présent
                  dans cet embrayage spécifique. Cette méthode permet de
                  s&apos;assurer du bon fonctionnement de l&apos;embrayage et
                  sur la valise aussi vous pouvez contrôler les tolerances
                  d&apos;embrayage.
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
                <Comments slug="test-embrayage-edc" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TestEmbrayageEdc;
