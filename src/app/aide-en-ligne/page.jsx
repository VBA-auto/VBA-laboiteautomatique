import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AideenLigneSearch from "@/components/AideenLigneSearch";

const pageDescription =
  "Les différents codes defaults qu&apos;il peut y avoir concernant le calculateur de boite automatique Renault (boite EDC)";
const HeadingText = "Aide en ligne code defaut renault boite automatique";

const MiseEnLigne = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="md:px-0 px-5">
        <div className="">
          {/* Conteneur principal */}
          <div className="relative">
            {/* Configuration de la page */}
            <Head>
              <title>
                Code default boite EDC lié au calcualateur 6DCT250 GETRAG
              </title>
              <meta name="description" content={pageDescription} />
              <meta name="headline" content={HeadingText} />
            </Head>
            <div style={{ display: "none" }}>
              <h1>
                Aide en ligne code defaut renault boite automatique. Moteur /
                tambour embrayage
              </h1>

              <h2>court circuit à la masse moteur embrayage 1</h2>
              <h2>court circuit à la masse moteur embrayage 2</h2>
              <h2>tambour embrayage 1</h2>
              <h2>tambour embrayage 2</h2>
              <h2>défault calculateur interne</h2>
              <h2>court circuit à la masse</h2>
              <h2>panne éléctrique</h2>
            </div>

            {/* Partie gauche - Texte initial */}
            <main className="py-[60px]">
              <div className="container mx-auto">
                <div className=" mb-5  text-center">
                  <p className="text-[24px] font-semibold text-[#374151]">
                    Aide en ligne
                  </p>
                </div>
                <div className="md:flex md:gap-10 gap-5 mt-8 flexdirection">
                  <div className="md:w-1/2">
                    <div className="accent_color p-3 rounded-md">
                      <p className="mb-6 text-justify text-[15px]">
                        Les boites automatiques (modèles DC4 et 6DCT250)
                        couramment installées dans les véhicules
                        <a
                          className="font-bold text-[#374151]"
                          href="/produits"
                        >
                          {" "}
                          Renault Captur, Mégane, Scénic, Clio 4, Fluence{" "}
                        </a>{" "}
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
                        <a className="font-bold cursor-text text-[#374151]">
                          double embrayage
                        </a>{" "}
                        et le{" "}
                        <a className="font-bold cursor-text text-[#374151]">
                          volant moteur
                        </a>{" "}
                        commencent à montrer des signes d&apos;usure à partir de
                        150 000 km. Pour anticiper et résoudre ces problèmes,
                        nous avons la possibilité de{" "}
                        <a className="font-bold cursor-text text-[#374151]">
                          vérifier l&apos;état d&apos;usure de l&apos;embrayage
                        </a>{" "}
                        grâce aux{" "}
                        <a className="font-bold  cursor-text text-[#374151]">
                          &apos;points de touche&apos;
                        </a>{" "}
                        et / ou{" "}
                        <a className="font-bold  cursor-text text-[#374151]">
                          &apos;points de friction&apos;.
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
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
