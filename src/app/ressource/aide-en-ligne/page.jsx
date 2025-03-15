import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AideenLigneSearch from "@/components/AideenLigneSearch";
import Link from "next/link";
import SeoErrorCodes from "@/components/SeoErrorCodes";

const pageDescription =
  "Vous trouverez ici tous les codes default correspondant à bote de vitesse a controller (clio 4, clio RS, Captur, megane 3, scenic 3)";

const MiseEnLigne = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="md:px-0 px-5">
        <div className="">
          <div className="relative">
            <Head>
              <title>
                boite de vitesse a controler code defaut aide en ligne
              </title>
              <meta name="description" content={pageDescription} />
            </Head>
            <div className="hidden">
              <h1>remplacement calculateur </h1>
              <h1>remplacement moteur embrayage</h1>
              <h1>remplacement embrayage</h1>
            </div>

            {/* Partie gauche - Texte initial */}
            <main className="py-[60px]">
              <div className="container mx-auto">
                <div className=" mb-5  text-center">
                  <p className="text-[24px] font-semibold text-[#374151]">
                    Aide en ligne
                  </p>
                </div>
                <div className="">
                  <SeoErrorCodes />
                </div>
                <div className="md:flex md:gap-10 gap-5 mt-8 flexdirection">
                  <div className="xl:w-1/2">
                    <div className="accent_color p-3 rounded-md">
                      <p className="mb-6 text-justify text-[15px]">
                        Les boites automatiques (modèles DC4 et 6DCT250)
                        couramment installées dans les véhicules Renault{" "}
                        <Link
                          href="/captur"
                          className="text-blue-400 underline"
                        >
                          Captur
                        </Link>{" "}
                        <Link
                          href="/megane"
                          className="text-blue-400 underline"
                        >
                          Mégane
                        </Link>{" "}
                        <Link
                          href="/scenic"
                          className="text-blue-400 underline"
                        >
                          Scénic
                        </Link>{" "}
                        <Link href="/clio" className="text-blue-400 underline">
                          Clio 4
                        </Link>{" "}
                        <Link
                          href="/clio-rs"
                          className="text-blue-400 underline"
                        >
                          Clio RS
                        </Link>{" "}
                        <Link
                          href="/fluence"
                          className="text-blue-400 underline"
                        >
                          Fluence
                        </Link>{" "}
                        se composent principalement :
                      </p>

                      <ul className=" mb-6 text-[15px]">
                        <li>
                          - d&apos;un double embrayage à sec et d&apos;un volant
                          moteur
                        </li>
                        <li>
                          - de 2 petits moteurs d&apos;embrayage et de capteurs
                        </li>
                        <li>- de synchros</li>
                        <li>- d&apos;un calculateur</li>
                      </ul>

                      <p className="text-justify text-[15px]">
                        Ces calculateurs peuvent présenter des défaillances en
                        général en dessous de 120 000 km. De plus, il est
                        fréquent que le{" "}
                        <a className="font-semibold cursor-text text-[#374151]">
                          double embrayage
                        </a>{" "}
                        et le{" "}
                        <a className="font-semibold cursor-text text-[#374151]">
                          volant moteur
                        </a>{" "}
                        commencent à montrer des signes d&apos;usure à partir de
                        150 000 km. Pour anticiper et résoudre ces problèmes,
                        nous avons la possibilité de{" "}
                        <a className="font-semibold cursor-text text-[#374151]">
                          vérifier l&apos;état d&apos;usure de l&apos;embrayage
                        </a>{" "}
                        grâce aux{" "}
                        <a className="font-semibold  cursor-text text-[#374151]">
                          &apos;points de touche&apos;
                        </a>{" "}
                        et / ou{" "}
                        <a className="font-semibold  cursor-text text-[#374151]">
                          &apos;points de friction&apos;.
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/2">
                    <AideenLigneSearch />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MiseEnLigne;
