import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageDescription =
  "Article sur les boites automatiques montées sur Renault depuis 1990 jusqu'a maintenant ";

const ArticlePage = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="article-content">
        <Head>
          <title>Les différentes type de boites automatiques Renault</title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="container mx-auto">
          <div className="md:w-3/5 mx-auto">
            <Image
              width={500}
              height={500}
              className="w-full mt-8 rounded-md"
              src="/images/renault.webp"
              alt=""
            />
          </div>
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <h1 className="text-[24px] font-semibold my-3">Renault</h1>
            <p>
              Les premières BVA montées sur des véhicules Renault remontent aux
              années 90 et 2000. On retiendra des modèles fréquents tels que les
              MB1/MB3 ainsi que les DP0 arrivées en 1998. Renault s’est ensuite
              diversifié dans les BVA et a alors équipé ses véhicules de BVA
              d’autres constructeurs comme Aisin et sa TF-80SC ou la 4HP20 de
              ZF. Les BVA montées sur les véhicules Renault diffèrent.
            </p>{" "}
            <p className="my-5">
              En effet, certaines boîtes ne sont pas composées de convertisseur
              de couple hydraulique et on peut voir des doubles embrayages sur
              certains nouveaux modèles (Captur, nouvelle Mégane et Clio par
              exemple). La DPO/AL4 dispose d’un convertisseur de couple
              hydraulique ainsi qu’un embrayage.
            </p>{" "}
            <p>
              {" "}
              Le niveau d’huile de la boîte de vitesses automatique doit être
              contrôlé tous les 60 000 km. Par la suite, il est nécessaire
              d’effectuer la vidange de la BVA. L’huile présente dans la boîte
              automatique doit être vidangée car elle s’use et se pollue ce qui
              affecte le fonctionnement de la boîte de vitesses automatique.{" "}
            </p>{" "}
            <p className="mt-5">
              {" "}
              Certaines BVA sont dotées d&apos;une crépine interne comme la DP0
              (ou AL4 chez Peugeot et Citroën). Il est d’ailleurs fréquent de
              remplacer le bloc de contrôle hydraulique sur cette BVA. La
              DP0/AL4 est constituée d’un embrayage. La BVA EDC à double
              embrayage fait son apparition sur plusieurs modèles (Mégane, Clio,
              Twingo, Captur, Kadjar…) progressivement depuis 2010.
            </p>
            <div className="mt-[35px]">
              <Link href="/contact">
                <button className="buttonCheckBlue">
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

export default ArticlePage;
