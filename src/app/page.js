import Head from "next/head";
import Hero from "./components/Hero";

const Home = () => {
  const pageDescription =
    "Société spécialisée dans la vente et la reprogrammation de calculateurs pour boite automatique DC4 (boite EDC) pour Renault clio 4 Captur megane et scenic";
  const HeadingText = "Vente et reprogrammation de calculateur Renault DC4";
  const secondaryHeadingText =
    "calculateur boite automatique Renault Captur, calculateur boite automatique Renault Clio 4, calculateur boite automatique Renault Mégane, calculateur boite automatique Renault scénic, calculateur boite automatique Renault fluence, calculateur boite automatique Ford Focus";

  return (
    <>
      <Head>
        <title>
          vente calculateur Renault boite automatique DC4 (EDC) 6DCT250
        </title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
        <meta name="secondaryHeading" content={secondaryHeadingText} />

        {/* Cache Control Meta Tags */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        {/* Optional: Add versioning to prevent caching issues */}
        <meta name="version" content="1.0.2" />
      </Head>
      <div className="sr-only">
        <h1>Vente Calculateur boite automatique EDC Renault neuf</h1>
        <h1>Vente Calculateur boite automatique EDC Renault reconditionné</h1>
        <h1>réparation Calculateur boite automatique EDC Renault</h1>
        <h1>reprogrammation Calculateur boite automatique Renault EDC</h1>
        <h1>boite de vitesse à controler aide en ligne </h1>
        <h2>Calculateur boite automatique EDC Renault Captur</h2>
        <h2>Calculateur boite automatique EDC Renault Clio 4</h2>
        <h2>Calculateur boite automatique EDC Renault Megane 3</h2>
        <h2>Calculateur boite automatique EDC Renault Scenic 3 1.5 diesel</h2>
        <h2>Calculateur boite automatique EDC Renault Clio RS 1.6 essence</h2>
        <h2>Calculateur boite automatique EDC Renault Fluence</h2>

        <h3>Calculateur boite automatique EDC Renault Captur 1.2 Essence</h3>
        <h3>Calculateur boite automatique EDC Renault Captur 1.5 Diesel</h3>
        <h3>Calculateur boite automatique EDC Renault Clio 4 1.2 Essence</h3>
        <h3>Calculateur boite automatique EDC Renault Clio 4 1.5 Diesel</h3>
        <h3>Calculateur boite automatique EDC Renault Megane 3 1.5 Diesel</h3>
        <h3>Calculateur boite automatique EDC Renault Megane 3 1.2 Essence</h3>
      </div>
      <div className="yes">
        <Hero />
      </div>
    </>
  );
};

export default Home;
