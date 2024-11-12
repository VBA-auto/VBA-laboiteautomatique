import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RemplacmentPage = () => {
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
          <div className="md:w-3/5 mx-auto mt-8">
            <iframe
              className="w-full md:h-[397px] rounded-md"
              src="https://www.youtube.com/embed/6X72SXZhZ44?si=50iEt0fuIk1i5HeS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <h1 className="text-[24px] font-semibold my-3">
              Remplacer calculateur EDC Renault
            </h1>
            <div className="">
              <p className="mb-5">
                Remplacement d&apos;un calculateur DC4 (boite EDC) GETRAG
                6DCT250.
              </p>

              <p className="mb-5">
                Calculateur (boite EDC) pour boite automatique Renault double
                embrayage DC4 (Getrag-6DCT250-continental)
              </p>

              <p className="mb-5">
                A2C30743000 01 K00 - A2C53374830 03 K01 - A2C30743100 -
                A2C73768907 00 K00
              </p>

              <p className="mb-5">Programmation et clonage</p>

              <p className="mb-5">
                Calculateur Megane, Captur, Clio IV Berlino; Clio IV Estate,
                Scenic IV, Grand Scenic IV Possibilité de venir programmer sur
                place si besoin.
              </p>

              <p className="mb-5">
                Références disponible 310320749R 310320891R 310320756R
                310321109R 310321488R 310321517R 310320841R 310320717R
                310320892R 310320721R 310321520R 310321561R, A4539006303
                310321808R 310321150R 310321421R 310321706R 310321716R
                310321793R 310321662R 310321524R 310321994R 310322059R
                310F93913R 310321149R 310321306R 310320553R 310321359R SP03241,
                DC4016, 310321148R, 310321488R
              </p>

              <p className="mb-5">
                Scenic 1.5 2011, Scenic 1.5 2012, Scenic 1.5 2013, Scenic 1.5
                2014, Scenic 1.5 2015, Megane 1.5 2011, Megane 1.5 2012, Megane
                1.5 2013, Megane 1.5 2014, Megane 1.5 2015
              </p>

              <p className="mb-5">
                Clio 1.5 2011, Clio 1.5 2012, Clio 1.5 2013, Clio 1.5 2014, Clio
                1.5 2015, Clio 1.5 2016
              </p>

              <p className="mb-5">
                Captur 1.5 dci 2011, Captur 1.5 dci 2012, Captur 1.5 dci 2013,
                Captur 1.5 dci 2014, Captur 1.5 2015, Captur 1.5 2016, Captur
                1.5 2017, Captur 1.2 2010, Captur 1.2 2011, Captur 1.2 2012,
                Captur 1.2 2013, Captur 1.2 2014, Captur 1.2 2015, Captur 1.2
                2016, Captur 1.2 2017
              </p>

              <p className="mb-5">
                Clio 4 IV 1.2 2010, Clio 4 IV 1.2 2011, Clio 4 IV 1.2 2012, Clio
                4 IV 1.2 2013, Clio 4 IV 1.2 2014, Clio 4 IV 1.2 2015, Clio 4 IV
                1.2 2016, Clio 4 IV 1.2 2017
              </p>

              <p className="mb-5">
                Clio GT 1.2 2010, Clio GT 1.2 2011, Clio GT 1.2 2012, Clio GT
                1.2 2013, Clio GT 1.2 2014, Clio GT 1.2 2015, Clio GT 1.2 2016,
                Clio GT 1.2 2017, Clio GT 1.2 2018
              </p>

              <p className="mb-5">
                Clio IV Estate 310320891R Unit Elec Programm, calculateur (PA66)
              </p>

              <p className="mb-5">
                Clio IV 310320756R Unit Elec Programm, calculateur (PA.64)
              </p>

              <p className="mb-5">
                Captur, Clio 310321109R Unit Elec Programm H5FTt (D800)
              </p>

              <p className="mb-5">
                Clio 310321488R Unit Elec Programm M5Mt H5FTt K9K
              </p>

              <p className="mb-5">
                310321517R Unit Elec Programm B M5Mt (PA57)
              </p>

              <p className="mb-5">
                310320841R Unit Elec Programm B H5Ft (B600)
              </p>

              <p className="mb-5">
                Captur 310320892R Unit Elec Programm H5Ft (PA.76)
              </p>

              <p className="mb-5">
                Captur 310320721R Unit Elec Programm H5Ft (PA.75)
              </p>

              <p className="mb-5">Clio 310321520R Unit Elec Programm (PA66)</p>

              <p className="mb-5">310321808R MAM Reference B K9K EU6 CMF</p>

              <p className="mb-5">MAM Gen1 C1.9 Renault</p>

              <p className="mb-5">MAM Gen2 C6</p>

              <p className="mb-5">Réf Aluminium: ALSi9Cu3(Fe)(Zn)</p>

              <p className="mb-5">Codes defauts utiles :</p>

              <p className="mb-5">
                DTC174301 Circuit moteur embrayage 1 - Panne electrique non
                identifiée-
              </p>

              <p className="mb-5">
                DTC174311 Circuit moteur embrayage 1 - Court-circuit à la masse
              </p>

              <p className="mb-5">
                DTC174401 Circuit moteur embrayage 2 - Panne eléctrique non
                identifiée-
              </p>

              <p className="mb-5">
                DTC174411 Circuit moteur embrayage 2 - Court-circuit à la masse
              </p>

              <p className="mb-5">DTC17441C Circuit moteur embrayage 2</p>

              <p className="mb-5">
                DTC183892 Tambour de selection de vitesse 1 - Signal hors limite
                basse ou haute
              </p>

              <p className="mb-5">
                DTC185111 Signal moteur embrayage 2 - Court circuit à l masse-
              </p>

              <p className="mb-5">
                DTC185562 Signal moteur embrayage 2 - Signal non plausible-
              </p>

              <p className="mb-5">
                DTC185764 Moteur embrayage 2 - Incohérence signal-
              </p>

              <p className="mb-5">
                DTC189311 Drum 2 moteur - Court circtuit à la masse
              </p>

              <p className="mb-5">
                DTC189412 Circuit moteur tambour de selection vitesse 1-
                Court-circuit au + 12 volts
              </p>

              <p className="mb-5">
                DTC191001 Circuit capteur regime entrée 1 boite - Anomalie
                électronique interne-
              </p>

              <p className="mb-5">
                DTC191211 Circuit capteur regime entrée 1 boite - Court-circuit
                à la masse-
              </p>

              <p className="mb-5">
                DTC191311 Circuit capteur régime entrée 2 boite - Court circuit
                à la masse
              </p>

              <p className="mb-5">
                DTC404086 Info multiplexée pedale de frein uch invalide -
                Contacteur de frein invalide-
              </p>

              <p className="mb-5">
                DTCAAAB47 Calculateur - Anomalie électronique interne
              </p>

              <p className="mb-5">DTCAAB047 Panne electrique interne</p>

              <p className="mb-5">
                DF441 circuit moteur - tambour de sélection vitesses 2 - circuit
                ouvert
              </p>

              <p className="mb-5">
                DF442 circuit moteur tambour de selection vitesse 2 - tension
                d&apos;alimentation hors tolérance
              </p>

              <p className="mb-5">
                DF436 Tambour de selection de vitesse 2 - detection signal hors
                limite basse ou haute
              </p>

              <p className="mb-5">
                DF435 Tambour de selection de vitesses 2 - Detection signal hors
                limite basse ou haute
              </p>

              <p className="mb-5">
                DF232 Calculateur - Anomalie électronique interne
              </p>
            </div>

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

export default RemplacmentPage;
