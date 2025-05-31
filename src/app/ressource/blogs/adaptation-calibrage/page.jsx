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
                  Adaptation
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="md:flex gap-8">
            <div className="md:w-[65%]">
              <Image
                unoptimized
                width={300}
                height={200}
                className="w-full mt-8 rounded-md "
                src="/images/BlogAdapt.webp"
                alt="calibrage image from VBA"
              />
              <h2 className="text-2xl text-gray-700 text-start mt-6 font-medium">
                Adaptation / Calibrage des points de touche
              </h2>
              <div className="mt-5 mb-16">
                <p className="mt-2 text-justify">
                  Le calibrage des points de touche ou points de léchage de la
                  boîte EDC (Efficient Dual Clutch) ou DC4 Renault est une étape
                  importante pour éviter les à-coups et avoir des rapports
                  fluides.
                </p>

                <div className="mb-5">
                  <h2 className="mt-5 font-[600]">
                    1. Adaptation des tambours de changement de vitesse (SHIFT
                    DRUM)
                  </h2>
                  <p className="mt-2">
                    Les tambours de changement de vitesse sont responsables du
                    passage des rapports. Lorsqu&apos;une batterie est
                    déconnectée et reconnectée, ou après le remplacement du
                    calculateur, une adaptation automatique des tambours est
                    généralement effectuée. Cela se manifeste par un bruit{" "}
                    <span className="font-[600] underline">
                      distinct d&apos;environ cinq secondes
                    </span>
                    , signalant que le calculateur ajuste les tambours.
                  </p>
                  <p className="mt-2">
                    En l&apos;absence d&apos;adaptation automatique, il est
                    possible de lancer ce processus à l&apos;aide d&apos;un
                    outil diagnostic (valise).
                  </p>
                </div>

                <div className="mb-5">
                  <h2 className="mt-5 font-[600]">
                    2. Réglage de la référence et de la course des embrayages
                  </h2>
                  <p className="mt-2 text-justify">
                    La <b>référence de l&apos;embrayage</b> définit le point de
                    départ de la course de l&apos;embrayage.{" "}
                    <b>L&apos;amplitude de la course</b> détermine la distance
                    maximale que l&apos;embrayage peut parcourir. Ces réglages
                    sont essentiels pour s&apos;assurer que l&apos;embrayage
                    engage et désengage correctement.
                  </p>
                  <p className="mt-2">
                    Ces paramètres peuvent également être ajustés manuellement à
                    l&apos;aide d&apos;un outil diagnostic valise comme la «
                    clip » de chez Renault ou autre.
                  </p>
                </div>

                <div className="mb-5">
                  <h2 className="mt-5 font-[600]">3. Test de couple</h2>
                  <p className="mt-2 text-justify">
                    Le test de couple permet de vérifier la qualité de la
                    géométrie du disque d&apos;embrayage et la distance minimale
                    à laquelle l&apos;embrayage est désengagé. Ce test est
                    réalisé à <b>4000 tours/minute</b> et garantit des
                    changements de vitesse fluides. Un résultat satisfaisant au
                    test de couple indique que l&apos;embrayage est correctement
                    calibré.
                  </p>
                </div>

                <div className="mb-5">
                  <h2 className="mt-5 font-[600]">
                    4. Ajustement des points de touches des embrayages 1 et 2
                  </h2>
                  <p className="mt-2 text-justify">
                    Le test de couple permet de vérifier la qualité de la
                    géométrie du disque d&apos;embrayage et la distance minimale
                    à laquelle l&apos;embrayage est désengagé. Ce test est
                    réalisé à <b>4000 tours/minute</b> et garantit des
                    changements de vitesse fluides. Un résultat satisfaisant au
                    test de couple indique que l&apos;embrayage est correctement
                    calibré.
                  </p>
                  <div className="my-5">
                    <Image
                      unoptimized
                      width={300}
                      height={200}
                      className="w-full rounded-md "
                      src="/images/BlogAdaptChild.webp"
                      alt="calibrage image from VBA"
                    />
                    <p className="mt-2 mb-3 text-justify">
                      Les points de touche (ou points de léchage) des embrayages
                      doivent être ajustés pour avoir un engagement fluide. Pour
                      l&apos;embrayage 1 (rapports 1, 3, 5), la valeur
                      recommandée est
                      <b> 8.5 mm</b> Pour l&apos;embrayage 2 (rapports 2, 4, 6),
                      elle est légèrement supérieure, à <b>9.5 mm</b>.
                    </p>
                    <span className="my-2 bg-yellow-100">
                      La plage normale se situe entre <b>8 et 12 mm</b>.
                    </span>
                    <p className="mt-2 mb-3 text-justify">
                      Pendant le processus d&apos;adaptation, démarrez le moteur
                      et attendez que les tours se stabilisent. Ensuite, ajustez
                      les deux embrayages ou un seul, selon les besoins. Les
                      erreurs d&apos;adaptation sont fréquentes et peuvent
                      entraîner une réinitialisation des points d&apos;entrée à{" "}
                      <b>3 mm</b>, empêchant le véhicule de rouler: si
                      c&apos;est le cas, une nouvelle adaptation est nécessaire.
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="mt-5 font-[600]">
                    5. Problèmes fréquents et solutions
                  </h2>
                  <p className="mt-2 text-justify">
                    Une adaptation mal effectuée peut entraîner des réglages
                    incorrects, comme des points d&apos;entrée trop faibles (3
                    mm), qui empêchent l&apos;embrayage de prendre et
                    d&apos;engager le rapport.
                  </p>
                  <p className="mt-2 text-justify">
                    Lors de l&apos;adaptation, il est important de
                    s&apos;assurer que tous les paramètres du véhicule, tels que
                    la température de l&apos;embrayage et la stabilité du
                    moteur, sont dans des plages normales. Une mauvaise
                    adaptation peut également être causée par un mauvais
                    programme ou un embrayage en mauvais état (embrayage +{" "}
                    <span className="underline">butée</span>).
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

            <div className="md:w-[35%] mt-6 mb-16 ">
              <div className="sticky top-24">
                <Comments slug="adaptation-calibrage" />
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
