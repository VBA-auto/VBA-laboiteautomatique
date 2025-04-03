import Head from "next/head";
import Hero from "./components/Hero";

const Home = () => {
  console.log("my vercel");
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
      <div className="yes">
        <Hero />
      </div>
    </>
  );
};

export default Home;
