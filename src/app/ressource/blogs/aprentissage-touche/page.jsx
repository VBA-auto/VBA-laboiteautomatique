import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";
import Comments from "@/components/Blogs/Comments";
const pageDescription =
  "Étapes d&apos;adaptation et de calibrage d&apos;un calculateur DC4 après remplacement ou reprogrammation";
const Adaptation = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="article-content relative">
        <Head>
          <title>Adaptation et calibrage calculateur DC4</title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="container mx-auto mt-[60px] px-6 md:px-0">
          <div className="flex justify-between ">
            <div className="w-1/2">
              <ReturnButton />
            </div>
            <div className="">
              <p className="md:text-sm text-[10px]">
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
                  Aprentissage-touche
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="xl:flex gap-8 singleBlog">
            <div className="md:w-[65%] singleBlog1">
              <iframe
                className="w-full md:h-[397px] mt-8 rounded-md"
                src="https://www.youtube.com/embed/Hgh2QWswPuc?si=PdMScwFE0QOli5JI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h2 className="text-2xl text-gray-700 text-start mt-6 font-medium">
                Calibrage ou aprentissage des points de touche
              </h2>
              <div className="mt-5 mb-16">
                <p className="mt-2 text-justify">
                  Comment calibrer les points de touche sur une boîte EDC/DC4
                  pour assurer un déplacement au ralenti (ou rampage) correct :
                  avance seule en D, recule seul en R.
                </p>

                <div className="mb-5">
                  <p className="mt-2">
                    Cette vidéo vous montre, pas à pas, comment réaliser le
                    calibrage des points de touche de l’embrayage. C’est une
                    étape essentielle pour éviter les à-coups ou les messages
                    “boîte de vitesses à contrôler”. Si les points de touche
                    sont trop faibles, la boîte peut se mettre en défaut ; s’ils
                    sont trop forts, le véhicule ne se déplace plus tout seul en
                    D ou en R. L’objectif est d’obtenir un 
                    <strong>
                      déplacement au ralenti (ou rampage) fluide et régulier
                    </strong>{" "}
                    et ne pas avoir de jeu entre le tambour et les embrayages.
                  </p>
                  <p className="mt-2">
                    Nous utilisons ici une valise <strong>Autel</strong>, mais
                    le calibrage fonctionne avec la plupart des outils de
                    diagnostic : 
                    <strong>Launch, Icarsoft, Delphi, Renault Clip</strong>,
                    etc. En général, toute valise qui propose la fonction
                    “apprentissage/calibrage des points de touche” est adaptée.
                  </p>
                  <p className="mt-2">
                    Dans cette démonstration, nous expliquons étape par étape :
                    connexion de la valise, sélection de la fonction
                    d’apprentissage, conditions à respecter, puis contrôle final
                    du déplacement au ralenti (ou rampage) en marche avant (D)
                    et en marche arrière (R).
                  </p>
                </div>

                <div className="mt-[35px]">
                  <Link href="/contact">
                    <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-3 rounded-md hover:bg-[#2C80EF] hover:text-white block">
                      <span>Contactez-nous</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-[35%] singleBlog2 mt-6 mb-16 ">
              <div className="sticky top-24">
                <Comments slug="aprentissage-touche" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Adaptation;
