import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";
const pageDescription =
  "informations calculateur boite automatique EDC Renault version diag, etalonage, numero calibrage, numero vdiag, version logiciel";
const Verification = () => {
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
              Verification parametrage EDC (DC4)
            </h2>
            <Image
              width={300}
              height={200}
              className="w-full rounded-md "
              src="/images/BlogVeri.webp"
              alt="calibrage image from VBA"
            />
          </div>

          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <p>
              La vérification régulière des embrayages du 6DCT250 Renault est
              essentielle pour garantir des performances optimales et prévenir
              des dysfonctionnements. Cette opération repose sur deux paramètres
              clés : les points de touche (touch points) et le coefficient de
              friction.
            </p>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                1. Comprendre les paramètres clés
              </h2>
              <p className="mt-2">
                Les <b>« points de touche » ou « point de léchage »</b> mesurent
                la distance à laquelle l’embrayage commence à transmettre la
                puissance. Ils reflètent directement l’état de l’embrayage.
              </p>
              <p className="mt-2">
                Le coefficient de friction (moins souvent utilisé) indique la
                qualité de l’embrayage.
              </p>
              <p className="mt-2">Ces deux éléments sont étroitement liés.</p>
              <p className="mt-2">
                Après une adaptation, le coefficient de friction est
                réinitialisé à <b>0.27</b>, une valeur neutre. Un embrayage neuf
                affiche une friction entre <b>0.45 et 0.55</b>, tandis qu’un
                embrayage défectueux tombe sous <b>0.20</b>, signalant des
                glissements et des a coups.{" "}
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                2. Analyse des températures et des courants
              </h2>
              <p className="mt-2">
                La <b>température des embrayages (Temp C)</b> est une donnée
                virtuelle calculée par le TCM (Transmission Control Module) en
                fonction de la charge et des capteurs. Une augmentation
                inhabituelle à <b>250-300 °C</b> est souvent le signe d’un
                embrayage défectueux ou d’un FCM (Friction Clutch Module)
                endommagé.
              </p>
              <p className="mt-2">
                Le <b>courant d&apos;alimentation (Curr A)</b> mesure
                l’électricité fournie aux embrayages. Une valeur normale se
                situe autour de <b>10A</b>, avec des pics jusqu’à <b>25A</b>{" "}
                lors de changements rapides.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                3. Positions des tambours de changement de vitesse (Drums)
              </h2>
              <p className="mt-2">
                Les tambours <b>DRUM1 et DRUM2</b> contrôlent les rapports :
              </p>
              <ul className="mt-3 list-disc ms-5">
                <li>
                  <b>DRUM1</b>: Rapports 1-3-5.
                </li>
                <li>
                  <b>DRUM2</b>: Rapports R-2-4-6.
                </li>
              </ul>
              <p className="mt-2">
                Les positions des tambours sont exprimées en degrés et sont
                strictement fixes : par exemple,{" "}
                <b>
                  1° pour la première vitesseet 280° pour la sixième vitesse
                </b>
                . Lors de changements rapides, le courant peut varier entre{" "}
                <b>10A et 35A</b>.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                4. Identifier la qualité de l’embrayage avec le coefficient de
                friction (facultatif)
              </h2>
              <p className="mt-2">
                La qualité d’un embrayage peut être évaluée à partir du
                coefficient de friction. Un embrayage fonctionnel présente une
                friction comprise entre <b>0.3 et 0.4</b>. Au-delà de <b>0.4</b>
                , l’embrayage est en excellent état. En revanche, une friction
                inférieure à <b>0.2</b> révèle un embrayage usé ou glissant,
                nécessitant une intervention rapide.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                5. Ajuster les points de touche
              </h2>
              <p className="mt-2">
                Les points d’engagement standard recommandés (valeur usine)
                sont:
              </p>
              <p className="mt-2">
                Lors de l’adaptation, il est important de s’assurer que tous les
                paramètres du véhicule, tels que la température de l’embrayage
                et la stabilité du moteur, sont dans des plages normales. Une
                mauvaise adaptation peut également être causée par un mauvais
                programme ou un embrayage en mauvais état (embrayage + butée).
              </p>
              <p className="mt-2">
                <b>8.5 mm</b> pour l’embrayage 1 (K1), qui contrôle les rapports
                1, 3 et 5.
              </p>
              <p className="mt-2">
                <b>9.5 mm</b> pour l’embrayage 2 (K2), qui gère les rapports 2,
                4 et 6.
              </p>
              <p className="mt-2">
                Avec le temps, ces points peuvent augmenter jusqu’à{" "}
                <b>11 ou 12 mm</b>, signalant une usure avancée. Après une
                mauvaise adaptation, ils peuvent être réinitialisés à{" "}
                <b>3 ou 7 mm</b>, rendant le véhicule inutilisable. Ces valeurs
                nécessitent une correction immédiate.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                6. Réaliser un test de conduite
              </h2>
              <p className="mt-2">
                Après ajustement, effectuez un test de conduite sur une distance
                de <b>5 à 10 km</b>. Pendant ce test, surveillez les variations
                des paramètres en temps réel : points de touche. Si vous n’avez
                pas fait de calibrage des points de touche, ceux-ci doivent
                fluctuer naturellement et augmenter au-delà de 8.5 mm pour
                l’embrayage 1 et au-delà de 9.5 mm pour l’embrayage 2.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mt-5 font-[600]">
                7. Exemple de mauvais réglages
              </h2>
              <p className="mt-2">
                Un embrayage mal calibré présente souvent des points de touche à
                <b> 3 mm</b> Avec des points de touche à 3 mm La voiture ne va
                pas engager les vitesses.
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
      </section>
      <Footer />
    </main>
  );
};

export default Verification;
