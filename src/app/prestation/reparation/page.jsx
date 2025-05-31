import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Nous pouvons réparer vorte calculateur boite automatique EDC Renault pour clio 4, clio RS, Captur, megane 3, scenic 3.";

const Programmation = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="installation">
        <div className="relative">
          <Head>
            <title>
              Garage, pièce détachées automobile. Test et réparation calculateur
              boite automatique{" "}
            </title>
            <meta name="description" content={pageDescription} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Réparation calculatateur Captur boite automatique EDC </h1>
            <h1>Réparation calculatateur Clio 4 boite automatique EDC </h1>
            <h1>Réparation calculatateur Clio RS boite automatique EDC </h1>
            <h1>Réparation calculatateur Clio RS boite automatique EDC </h1>
            <h1>Réparation calculatateur Megane 3 boite automatique EDC </h1>
            <h1>Réparation calculatateur Scenic 3 boite automatique EDC </h1>
            <h1>Réparation calculatateur Scenic 3 boite automatique EDC </h1>
          </div>
          {/* Texte au-dessus de l'image */}
          <main className="py-[60px]">
            <div className="container mx-auto">
              <div className=" mb-5  text-center">
                <p className="text-[24px] font-semibold text-[#374151]">
                  Réparation
                </p>
              </div>
              <div className="md:flex md:gap-5 gap-5 mt-8 flexdirection">
                <div className="xl:w-2/3">
                  <div className="accent_color p-3 rounded-md">
                    <div className="mb-2 text-lg">
                      <p className="text-justify text-[15px]">
                        Nous intervenons sur la 
                        <strong className="text-blue-400 font-normal">
                          réparation des calculateurs de boîte de vitesse
                          automatique
                        </strong>
                         Renault pour des références telles que 
                        <strong className="text-blue-400 font-normal">
                          01 K00{" "}
                          <Link href="/reference/A2C30743000">A2C30743000</Link>
                          , 03 K00, 03 K01, 03 K02 et 03 K03
                        </strong>
                        . Si votre calculateur présente des dysfonctionnements,
                        notre équipe se charge de le diagnostiquer et de le
                        réparer. Si vous n&apos;êtes pas certain que le problème
                        provienne du calculateur, nous offrons une 
                        <Link
                          href="/ressource/aide-en-ligne"
                          className="underline text-blue-400"
                        >
                          aide en ligne
                        </Link>
                         pour vous guider dans le diagnostic.
                      </p>
                      <p className="text-justify mt-2 text-[15px]">
                        Si vous souhaitez simplement tester le calculateur, nous
                        disposons d’un 
                        <strong className="text-blue-400 font-normal">
                          banc d&apos;essai
                        </strong>
                         dédié pour vérifier son bon fonctionnement. Si la
                        réparation est possible, le processus prend
                        généralement 
                        <strong className="text-blue-400 font-normal">
                          5 à 7 jours
                        </strong>
                         entre l&apos;envoi et la réception. En cas
                        d’impossibilité de réparation, vous serez rapidement
                        informé.
                      </p>
                    </div>

                    <p className="mt-2 text-justify text-[15px]">
                      Nous offrons une garantie de 3 à 6 mois, en fonction du
                      modèle.
                    </p>
                  </div>
                  <div className="text-start mt-5">
                    <Link href="/contact">
                      <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-3 rounded-md hover:bg-[#2C80EF] hover:text-white block">
                        <span>Contactez-nous</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/3 ">
                  <div className="">
                    <Image
                      unoptimized
                      width={365}
                      height={200}
                      className="rounded-md mx-auto w-full xl:h-[287px] md:h-[300px]"
                      src="/images/repa.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Programmation;
