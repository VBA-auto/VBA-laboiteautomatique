"use client";

import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Tutoriel et blog pour vous aider à réparer les boites automatique EDC Renault clio 4, clio RS, Captur, megane 3 et scenic 3.";

const Page = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="installation">
        <Head>
          <title>Tutoriel et blog sur les boite automatiques Renault EDC</title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="relative">
          <main className="pt-[60px] pb-[80px]">
            <div className="container mx-auto">
              <div className="md:w-3/5 mx-auto flex justify-between ">
                <div className="w-1/2">
                  <ReturnButton />
                </div>
                <div className="">
                  <p className="md:text-sm text-[12px]">
                    <Link className="text-gray-400" href="/">
                      Home /
                    </Link>{" "}
                    <Link className="text-gray-400" href="/ressource/tutoriels">
                      Ressource /
                    </Link>{" "}
                    <Link className="text-blue-400" href="/ressource/tutoriels">
                      Blog-Tutoriels
                    </Link>{" "}
                  </p>
                </div>
              </div>
              <div className="md:w-[768px] mx-auto mt-8 px-6 md:px-0">
                <div className="">
                  <div className="slider-container">
                    <Slider {...settings}>
                      {/* Static Content 2 */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <h2 className="text-lg text-gray-700 text-center mb-2 font-medium  hover:underline">
                              <Link href="/ressource/blogs/calibrage">
                                Exemple d’information calculateur
                              </Link>
                            </h2>

                            <div className="">
                              <Link href="/ressource/blogs/calibrage">
                                <Image
                                  width={1000}
                                  height={300}
                                  src="/images/blog-calib.webp"
                                  alt="calculateur"
                                  className="rounded-md object-fit"
                                />
                              </Link>
                            </div>
                            <div className="content-container mt-3">
                              <Link href="/ressource/blogs/calibrage">
                                <p>
                                  Vous trouverez ici un exemple où trouver les
                                  informations relatives au calcualteur. <br />{" "}
                                  Version du diag - du logiciel – numéro de
                                  calibrage ou étalonnage...{" "}
                                  <span className="text-blue-500">
                                    lire plus
                                  </span>
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 3 */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <h2 className="text-lg text-gray-700 text-center mb-2 font-medium  hover:underline">
                              <Link href="/ressource/blogs/verification-parametrage">
                                Verification parametrage EDC (DC4)
                              </Link>
                            </h2>

                            <Link href="/ressource/blogs/verification-parametrage">
                              <Image
                                width={1000}
                                height={300}
                                src="/images/BlogVeri.webp"
                                alt="calculateur"
                                className="rounded-md "
                              />
                            </Link>
                            <div className="content-container mt-3 text-start">
                              <Link href="/ressource/blogs/verification-parametrage">
                                <p className=" text-gray-600 ">
                                  La vérification régulière des embrayages du
                                  6DCT250 Renault est essentielle pour garantir
                                  des performances optimales et prévenir des
                                  dysfonctionnements...{" "}
                                  <span className="text-blue-500">
                                    lire plus
                                  </span>
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 4 */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <Link href="/ressource/blogs/adaptation-calibrage">
                              <h2 className="text-lg text-gray-700 text-center mb-2 font-medium  hover:underline">
                                Adaptation / Calibrage des points de touche
                              </h2>
                            </Link>
                            <Link href="/ressource/blogs/adaptation-calibrage">
                              <Image
                                width={1000}
                                height={300}
                                src="/images/BlogAdapt.webp"
                                alt="calculateur"
                                className="rounded-md"
                              />
                            </Link>
                            <div className="content-container mt-3 text-start">
                              <Link href="/ressource/blogs/adaptation-calibrage">
                                <p className=" text-gray-600 ">
                                  Le calibrage des points de touche ou points de
                                  léchage de la boîte EDC (Efficient Dual
                                  Clutch) ou DC4 Renault est une étape
                                  importante pour éviter ...{" "}
                                  <span className="text-blue-500">
                                    lire plus
                                  </span>
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 3 (Video Example) */}

                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <Link href="/ressource/blogs/remplacement-calculateur">
                              {" "}
                              <h2 className="text-lg text-gray-700 text-center mb-2 font-medium  hover:underline">
                                Démontage/Remontage calculateur
                              </h2>
                            </Link>
                            <div className="w-full h-full">
                              <Link href="/ressource/blogs/remplacement-calculateur">
                                <Image
                                  width={900}
                                  height={300}
                                  src="/images/BlogV1.webp"
                                  alt="calculateur"
                                  className="rounded-md"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="content-container mt-3 ">
                            <Link href="/ressource/blogs/remplacement-calculateur">
                              <p className=" text-gray-600">
                                Comment installer un calculateur de boite
                                automatique. Calculateur (boite EDC) pour boite
                                automatique Renault double embrayage DC4
                                (Getrag-6DCT250-continental)...{" "}
                                <span className="text-blue-500">lire plus</span>
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 4 (Video Example) */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <Link href="/ressource/blogs/presentation-vba">
                              {" "}
                              <h2 className="text-lg text-gray-700 text-center mb-2 font-medium  hover:underline">
                                Calculateur boîtes de vitesse automatiques
                              </h2>
                            </Link>
                            <div className="w-full h-full">
                              <Link href="/ressource/blogs/presentation-vba">
                                <Image
                                  width={980}
                                  height={300}
                                  src="/images/BlogV2.webp"
                                  alt="calculateur"
                                  className="rounded-md"
                                />
                              </Link>
                            </div>
                          </div>

                          <div className="content-container mt-2">
                            <Link href="/ressource/blogs/presentation-vba">
                              <p className=" text-gray-600">
                                Spécialiste en programmation et clonage de
                                calculateur boîtes de vitesses automatiques EDC
                                pour Captur, Scénic, Mégane 3, Clio RS et Clio
                                4...{" "}
                                <span className="text-blue-500">lire plus</span>
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 5 (Video Example) */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <Link href="/ressource/blogs/test-embrayage-edc">
                              {" "}
                              <h2 className="text-lg text-gray-700 text-center mb-2 font-medium  hover:underline">
                                Vérifier l’état de l’embrayage EDC
                              </h2>
                            </Link>
                            <div className="w-full h-full">
                              <Link href="/ressource/blogs/test-embrayage-edc">
                                <Image
                                  width={980}
                                  height={300}
                                  src="/images/BlogV3.webp"
                                  alt="calculateur"
                                  className="rounded-md"
                                />
                              </Link>
                            </div>
                          </div>

                          <div className="content-container mt-2">
                            <Link href="/ressource/blogs/test-embrayage-edc">
                              <p className=" text-gray-600">
                                Cette vidéo, disponible sur notre site
                                laboiteautomatique.com, concerne uniquement les
                                boîtes automatiques à double embrayage EDC (ou
                                DC4) équipant...{" "}
                                <span className="text-blue-500">lire plus</span>
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 6 ( Example) */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <Link href="/ressource/blogs/differentes-boites-DC4">
                              {" "}
                              <h2 className="text-lg text-gray-700 text-center mb-2 font-medium  hover:underline">
                                Références des différentes boites DC4
                              </h2>
                            </Link>
                            <div className="w-full h-full">
                              <Link href="/ressource/blogs/differentes-boites-DC4">
                                <Image
                                  width={980}
                                  height={300}
                                  src="/images/blog6.webp"
                                  alt="calculateur"
                                  className="rounded-md"
                                />
                              </Link>
                            </div>
                          </div>

                          <div className="content-container mt-2">
                            <Link href="/ressource/blogs/differentes-boites-DC4">
                              <p className=" text-gray-600">
                                Vous trouverez ci-dessous les différents codes
                                de boites en fonction de leur modèle...
                                <span className="text-blue-500">lire plus</span>
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Add more static content as needed */}
                    </Slider>
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

export default Page;
