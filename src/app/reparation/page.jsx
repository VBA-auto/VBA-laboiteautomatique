import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Main page URLs	https://laboiteautomatique.com/		vente calculateur Renault boite automatique DC4 (EDC) 6DCT250	Société spécialisée dans la vente et la reprogrammation de calculateurs pour boite automatique DC4 (boite EDC) pour Renault clio 4 Captur megane et scenic 																					";
const HeadingText = "Programation calculateur boite automatique Renault";

const Programmation = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="installation">
        <div className="relative">
          <Head>
            <title>
              Programmation et clonage calculateur Renault DC4 (EDC) 6DCT250
            </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
          </Head>
          <div style={{ display: "none" }}>
            <h1>Programation calculateur boite automatique Renault</h1>
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
                <div className="md:w-2/3">
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
                          01 K00 (A2C30743000), 03 K00, 03 K01, 03 K02 et 03 K03
                        </strong>
                        . Si votre calculateur présente des dysfonctionnements,
                        notre équipe se charge de le diagnostiquer et de le
                        réparer. Si vous n&apos;êtes pas certain que le problème
                        provienne du calculateur, nous offrons une 
                        <Link href="/aide-en-ligne" className="underline">
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
                      <button className="buttonCheckBluePro">
                        <span>Contactez-nous</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 ">
                  <div className="">
                    <Image
                      width={365}
                      height={200}
                      className="rounded-md mx-auto w-full md:h-[287px]"
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
