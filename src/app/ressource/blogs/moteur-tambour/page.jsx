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
                  Moteur tambour
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="xl:flex gap-8 singleBlog">
            <div className="md:w-[65%] singleBlog1">
              <iframe
                className="w-full md:h-[397px] mt-8 rounded-md"
                src="https://www.youtube.com/embed/z75hwSu4M-Y?si=7WySTnWnuBmmhugv"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h2 className="text-2xl text-gray-700 text-start mt-6 font-medium">
                Calibrage moteur tambour de sélection – Réinitialisation
              </h2>
              <div className="mt-5 mb-16">
                <p className="mt-2 text-justify">
                  Lors de l’installation ou du remplacement d’un calculateur de
                  boîte EDC/DC4, il est normal d’entendre un bruit de
                  “clac-clac” pendant environ 6 secondes.
                </p>

                <div className="mb-5">
                  <p className="mt-2">
                    Ce bruit correspond à la 
                    <strong>
                      réinitialisation et au calibrage du moteur de tambour de
                      sélection s
                    </strong>
                    . C’est une phase simple mais essentielle : elle permet au
                    calculateur de reconnaître correctement les positions du
                    tambour et d’assurer un passage fluide des vitesses.
                  </p>
                  <p className="mt-2">
                    En règle générale, ce calibrage se fait automatiquement dès
                    qu’un nouveau calculateur est monté, sans intervention
                    supplémentaire. Cependant,{" "}
                    <strong className="text-blue-500 underline">
                      il est toujours intéressant de relancer manuellement cette
                      procédure si un autre calibrage a échoué
                    </strong>{" "}
                    (embrayage, points de touche, adaptation de déplacement,
                    etc.). Cela permet de repartir sur une base “neuve” et
                    d’éviter des erreurs cumulées.
                  </p>
                  <p className="mt-2">
                    L’important est donc de bien vérifier que le bruit de
                    “clac-clac” est présent : c’est la preuve que la
                    réinitialisation et le calibrage se font correctement.
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
                <Comments slug="moteur-tambour" />
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
