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
          <div className="md:w-3/5 mx-auto mt-8">
            <h2 className="text-lg text-gray-700 text-center mb-2 font-medium">
              Adaptation / Calibrage des points de touche
            </h2>
            <Image
              unoptimized
              width={300}
              height={200}
              className="w-full rounded-md "
              src="/images/BlogAdapt.webp"
              alt="calibrage image from VBA"
            />
          </div>

          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <p>
              Le calibrage des points de touche ou points de léchage de la boîte
              EDC (Efficient Dual Clutch) ou DC4 Renault est une étape
              importante pour éviter les à-coups et avoir des rapports fluides.
            </p>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                1. Adaptation des tambours de changement de vitesse (SHIFT DRUM)
              </h2>
              <p className="mt-2">
                Les tambours de changement de vitesse sont responsables du
                passage des rapports. Lorsqu’une batterie est déconnectée et
                reconnectée, ou après le remplacement du calculateur, une
                adaptation automatique des tambours est généralement effectuée.
                Cela se manifeste par un bruit{" "}
                <span className="font-[600] underline">
                  distinct d’environ cinq secondes
                </span>
                , signalant que le calculateur ajuste les tambours.
              </p>
              <p className="mt-2">
                En l’absence d’adaptation automatique, il est possible de lancer
                ce processus à l’aide d’un outil diagnostic (valise).
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                2. Réglage de la référence et de la course des embrayages
              </h2>
              <p className="mt-2">
                La <b>référence de l’embrayage</b> définit le point de départ de
                la course de l’embrayage. <b>L’amplitude de la course</b>{" "}
                détermine la distance maximale que l’embrayage peut parcourir.
                Ces réglages sont essentiels pour s’assurer que l’embrayage
                engage et désengage correctement.
              </p>
              <p className="mt-2">
                Ces paramètres peuvent également être ajustés manuellement à
                l’aide d’un outil diagnostic valise comme la « clip » de chez
                Renault ou autre.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">3. Test de couple</h2>
              <p className="mt-2">
                Le test de couple permet de vérifier la qualité de la géométrie
                du disque d’embrayage et la distance minimale à laquelle
                l’embrayage est désengagé. Ce test est réalisé à{" "}
                <b>4000 tours/minute</b> et garantit des changements de vitesse
                fluides. Un résultat satisfaisant au test de couple indique que
                l’embrayage est correctement calibré.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                4. Ajustement des points de touches des embrayages 1 et 2
              </h2>
              <p className="mt-2">
                Le test de couple permet de vérifier la qualité de la géométrie
                du disque d’embrayage et la distance minimale à laquelle
                l’embrayage est désengagé. Ce test est réalisé à{" "}
                <b>4000 tours/minute</b> et garantit des changements de vitesse
                fluides. Un résultat satisfaisant au test de couple indique que
                l’embrayage est correctement calibré.
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
                <p className="mt-2 mb-3">
                  Les points de touche (ou points de léchage) des embrayages
                  doivent être ajustés pour avoir un engagement fluide. Pour
                  l’embrayage 1 (rapports 1, 3, 5), la valeur recommandée est
                  <b> 8.5 mm</b> Pour l’embrayage 2 (rapports 2, 4, 6), elle est
                  légèrement supérieure, à <b>9.5 mm</b>.
                </p>
                <span className="my-2 bg-yellow-100">
                  La plage normale se situe entre <b>8 et 12 mm</b>.
                </span>
                <p className="mt-2 mb-3">
                  Pendant le processus d’adaptation, démarrez le moteur et
                  attendez que les tours se stabilisent. Ensuite, ajustez les
                  deux embrayages ou un seul, selon les besoins. Les erreurs
                  d’adaptation sont fréquentes et peuvent entraîner une
                  réinitialisation des points d’entrée à <b>3 mm</b>, empêchant
                  le véhicule de rouler: si c’est le cas, une nouvelle
                  adaptation est nécessaire.
                </p>
              </div>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                5. Problèmes fréquents et solutions
              </h2>
              <p className="mt-2">
                Une adaptation mal effectuée peut entraîner des réglages
                incorrects, comme des points d’entrée trop faibles (3 mm), qui
                empêchent l’embrayage de prendre et d’engager le rapport.
              </p>
              <p className="mt-2">
                Lors de l’adaptation, il est important de s’assurer que tous les
                paramètres du véhicule, tels que la température de l’embrayage
                et la stabilité du moteur, sont dans des plages normales. Une
                mauvaise adaptation peut également être causée par un mauvais
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
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <Comments />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Adaptation;
