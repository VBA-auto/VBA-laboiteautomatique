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

const pageDescription =
  "Tutoriel et blog pour vous aider à réparer les boites automatique EDC Renault clio 4, clio RS, Captur, megane 3 et scenic 3.";

const Page = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
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
              <div className="mb-5 text-center">
                <p className="text-[24px] font-semibold text-[#374151]">
                  Blogs
                </p>
              </div>
              <div className="mt-8">
                <div className="flex justify-center gap-5">
                  <div className="slider-container">
                    <Slider {...settings}>
                      {/* Static Content 1 */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <Link href="/ressource/blogs/renault">
                              <Image
                                width={500}
                                height={300}
                                src="/images/renault.webp"
                                alt="renault"
                                className="rounded-md w-full h-full object-cover"
                              />
                            </Link>
                          </div>
                          <div className="content-container mt-2">
                            <h2 className="text-lg text-gray-700 font-medium">
                              <Link href="/ressource/blogs/renault">
                                Renault
                              </Link>
                            </h2>
                            <p className=" text-gray-600">
                              BVA montées sur des véhicules Renault remontent...
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 2 */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <Link href="/ressource/blogs/calibrage">
                              <Image
                                width={500}
                                height={300}
                                src="/images/blog-2.webp"
                                alt="calculateur"
                                className="rounded-md w-full h-full object-cover"
                              />
                            </Link>
                          </div>
                          <div className="content-container mt-2">
                            <h2 className="text-lg text-gray-700 font-medium">
                              <Link href="/ressource/blogs/calibrage">
                                Exemple d’information calculateur
                              </Link>
                            </h2>
                            <p className=" text-gray-600">
                              Vous trouverez ici un exemple où trouver les
                              informations...
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 3 (Video Example) */}

                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <div className="w-full h-full">
                              <iframe
                                className="w-full md:h-[397px] rounded-md"
                                src="https://www.youtube.com/embed/6X72SXZhZ44?si=50iEt0fuIk1i5HeS"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                          <div className="content-container mt-2">
                            <Link href="/ressource/blogs/remplacement-calculateur">
                              {" "}
                              <h2 className="text-lg text-gray-700 font-medium">
                                Démontage/Remontage calculateur
                              </h2>
                              <p className=" text-gray-600">
                                Comment installer un calculateur de boite
                                automatique...
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 4 (Video Example) */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <div className="w-full h-full">
                              <iframe
                                className="w-full md:h-[397px] rounded-md"
                                src="https://www.youtube.com/embed/EmwXs4AmC64?si=OnO4L_2ssu661hkg"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>

                          <div className="content-container mt-2">
                            <Link href="/ressource/blogs/presentation-vba">
                              {" "}
                              <h2 className="text-lg text-gray-700 font-medium">
                                Calculateur boîtes de vitesse automatiques
                              </h2>
                              <p className=" text-gray-600">
                                Spécialiste en calculateur boite automatique
                                pour...
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Static Content 5 (Video Example) */}
                      <div className="carousel-item">
                        <div className="blogsCard flex flex-col">
                          <div className="media-container">
                            <div className="w-full h-full">
                              <iframe
                                className="w-full md:h-[397px] rounded-md"
                                src="https://www.youtube.com/embed/crmyBO1TaK0?autohide=1&controls=1&showinfo=0"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>

                          <div className="content-container mt-2">
                            <Link href="/ressource/blogs/test-embrayage-edc">
                              {" "}
                              <h2 className="text-lg text-gray-700 font-medium">
                                Vérifier l’état de l’embrayage EDC
                              </h2>
                              <p className=" text-gray-600">
                                Comment vérifier l&apos;état de l&apos;embrayage
                                sur une boite EDC pour...
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
