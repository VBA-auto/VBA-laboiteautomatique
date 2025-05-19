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
const Adaptation = () => {
  const dynamicComments = [
    {
      id: "1boite",
      author: "Olivier D.",
      text: "Très bon article qui démystifie les différentes versions de la boîte DC4 ! C'est souvent une source de confusion pour les propriétaires et techniciens. Cette explication claire sur les spécificités de chaque type est extrêmement utile pour le diagnostic et l'entretien. Merci pour ce guide détaillé !",
      timestamp: "2d",
      likes: 6,
      avatar: true,
    },
    {
      id: "2boite",
      author: "Isabelle G.",
      text: "Merci beaucoup pour ces précieuses informations sur les boîtes DC4 ! Il est rare de trouver un comparatif aussi précis. Pourriez-vous envisager un article similaire sur les points de vigilance lors de l'achat d'un véhicule équipé de ces boîtes ? Cela serait très utile pour les futurs acquéreurs.",
      timestamp: "8h",
      likes: 1,
      avatar: true,
    },
  ];
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
              <p className="md:text-sm text-[10px]">
                <Link className="text-gray-400" href="/">
                  Home /
                </Link>{" "}
                <Link className="text-gray-400" href="/ressource/tutoriels">
                  Ressource /
                </Link>{" "}
                <Link className="text-gray-400" href="/ressource/tutoriels">
                  Blog - Tutoriel /
                </Link>{" "}
                <Link className="text-blue-400" href="#">
                  Différentes DC4
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="md:w-3/5 mx-auto mt-8">
            <h2 className="text-lg text-gray-700 text-center mb-2 font-medium">
              Références DC4 par modèle de véhicule
            </h2>
            <Image
              unoptimized
              width={300}
              height={200}
              className="w-full rounded-md "
              src="/images/blog6.webp"
              alt="calibrage image from VBA"
            />
          </div>

          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            {/* Number 1 */}
            <div className="">
              <Link href="/megane">
                {" "}
                <p className="text-lg font-[600] mb-5">
                  1. <span className="underline text-gray-700">Mégane 3</span>:
                  DC4-000
                </p>
              </Link>
              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  8201178918
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  8201210927
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320100979R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320100997R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320101005R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320103216R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320104538R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320106422R
                </p>
              </div>
            </div>

            {/* Number 2 */}
            <div className="mt-8">
              <Link href="/scenic">
                {" "}
                <p className="text-lg font-[600] mb-5">
                  2. <span className="underline text-gray-700">Scénic 3</span>:
                  DC4-001
                </p>
              </Link>
              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  8201178920
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  8201210928
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320102432R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320104101R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320104865R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320105337R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320106600R
                </p>
              </div>
            </div>

            {/* Number 3 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                3.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/clio">
                    Clio 4
                  </Link>{" "}
                  ou{" "}
                  <Link className="underline" href="/captur/diesel">
                    Captur diesel
                  </Link>{" "}
                  ≤ 2015
                </span>
                : DC4-005
              </p>

              <div className="md:flex gap-5">
                <div className="">
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320108074R → jusqu’à 02/2013
                  </p>
                </div>
                <div className="md:grid grid-cols-2 text-center gap-5">
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320104170R
                  </p>
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320104756R
                  </p>
                </div>
              </div>
            </div>

            {/* Number 4 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                4.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/clio">
                    Clio 4
                  </Link>{" "}
                  ou{" "}
                  <Link className="underline" href="/captur/essence ">
                    Captur essence
                  </Link>{" "}
                  ≤ 2015
                </span>
                : DC4-006
              </p>

              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320104062R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320104382R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320106664R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320107726R
                </p>
              </div>
            </div>

            {/* Number 5 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                5.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/clio">
                    Clio 4
                  </Link>{" "}
                  ou{" "}
                  <Link className="underline" href="/captur/diesel  ">
                    Captur diesel
                  </Link>{" "}
                  ≥ 2016
                </span>
                : DC4-015
              </p>

              <div className="md:flex gap-5">
                <div className="">
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320105762R → à partir de 10/2015
                  </p>
                </div>
                <div className="md:grid grid-cols-2 text-center gap-5">
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320108777R
                  </p>
                </div>
              </div>
            </div>
            {/* Number 6 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                6.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/clio">
                    Clio 4
                  </Link>{" "}
                  ou{" "}
                  <Link className="underline" href="/captur/essence   ">
                    Captur essence
                  </Link>{" "}
                  ≥ 2016
                </span>
                : DC4-016
              </p>

              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320100996R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320108895R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320109767R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320105872R
                </p>
              </div>
            </div>

            {/* Number 7 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                7.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/clio-rs">
                    Clio 4 RS
                  </Link>{" "}
                  ≤ 2015
                </span>
                : DC4-004
              </p>

              <div className="md:flex gap-5">
                <div className="">
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320101369R → à partir de 10/2015
                  </p>
                </div>
                <div className="md:grid grid-cols-2 text-center gap-5">
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320106552R
                  </p>
                </div>
              </div>
            </div>

            {/* Number 8 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                8.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/megane">
                    Mégane 3 (1.2 essence)
                  </Link>
                </span>
                : DC4-010
              </p>

              <div className="md:flex gap-5">
                <div className="md:grid grid-cols-2 text-center gap-5">
                  <p className="border border-gray-300 px-5 py-1 rounded-md mt-1">
                    320104983R
                  </p>
                </div>
              </div>
            </div>

            {/* Number 9 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                9.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/megane">
                    Mégane 3
                  </Link>{" "}
                  (dernier modèle)
                </span>
                : DC4-011
              </p>

              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320100438R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320104130R
                </p>
              </div>
            </div>

            {/* Number 10 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                10.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="#">
                    Kadjar / Talisman
                  </Link>{" "}
                  (2e génération)
                </span>
                : DC4-013
              </p>

              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320100496R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320105410R
                </p>
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320106136R
                </p>
              </div>
            </div>

            {/* Number 11 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                11.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="#">
                    Kadjar / Talisman
                  </Link>{" "}
                  (2e génération)
                </span>
                : DC4-007
              </p>

              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320109402R
                </p>
              </div>
            </div>
            {/* Number 12 */}
            <div className="mt-8">
              <p className="text-lg font-[600] mb-5">
                11.{" "}
                <span className=" text-gray-700">
                  <Link className="underline" href="/megane-4">
                    Mégane 4
                  </Link>{" "}
                  / Duster (2e génération)
                </span>
                : DC4-019
              </p>

              <div className="md:grid grid-cols-5 text-center gap-5">
                <p className="border border-gray-300 px-2 py-1 rounded-md mt-1">
                  320109402R
                </p>
              </div>
            </div>

            <div className="mt-[35px]">
              <Link href="/contact">
                <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-3 rounded-md hover:bg-[#2C80EF] hover:text-white block">
                  <span>Contactez-nous</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <Comments initialComments={dynamicComments} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Adaptation;
