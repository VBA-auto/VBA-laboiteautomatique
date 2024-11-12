import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CalibragePage = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="article-content">
        {/* <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.excerpt} />
        </Head> */}
        <div className="container mx-auto">
          <div className="md:w-3/5 mx-auto">
            <Image
              width={500}
              height={500}
              className="w-full mt-8 rounded-md"
              src="/images/blog-2.webp"
              alt="calibrage image from VBA"
            />
          </div>
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <h1 className="text-[24px] font-semibold my-3">
              Exemple d’information calculateur
            </h1>
            <p>
              Vous trouverez ici un exemple où trouver les informations
              relatives au calcualteur. <br /> Version du diag - du logiciel –
              numéro de calibrage ou étalonnage
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

export default CalibragePage;
