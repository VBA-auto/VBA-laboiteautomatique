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
import { useState, useEffect } from "react";

const pageDescription =
  "bloc, Forum et articles sur les plblèmes rencontrés pour les boites automatiques de Captur, Clio 4, Scénic, Mégane. Article sur les différentes boites automatiques de chez Renault évolution de la boîte à convertisseur à la boîte automatique double embrayage";

const Page = () => {
  const [parts, setparts] = useState([]);

  useEffect(() => {
    fetch("/article.json")
      .then((res) => res.json())
      .then((data) => {
        setparts(data);
      });
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrow: true,
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
          initialSlide: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
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
          <title>
            Forum, blog et articles sur les ploblèmes boite EDC Renault.Article
            Renault boite automatique évolution
          </title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="relative">
          <div style={{ display: "none" }}>
            <h1>Programation calculateur boite automatique Renault</h1>
          </div>
          {/* Texte au-dessus de l'image */}
          <main className="pt-[60px] pb-[80px]">
            <div className="container mx-auto">
              <div className=" mb-5 text-center">
                <p className="text-[24px] font-semibold text-[#374151]">
                  Blogs
                </p>
              </div>
              <div className="mt-8">
                <div className="md:flex justify-center gap-5">
                  <div className="md:w-3/4 slider-container sliderContainerMain">
                    <Slider {...settings}>
                      <div className="rounded-md">
                        <div className="blogsCard">
                          {parts?.map((part, index) => (
                            <div
                              key={index}
                              className="border p-4 rounded-md bg-white shadow-md"
                            >
                              <Link href={`/blogs/${part.title}`}>
                                <Image
                                  width={500}
                                  height={500}
                                  src={part.image}
                                  alt={part.title}
                                  className="rounded-md w-full mb-5"
                                />
                              </Link>
                              <h2 className="text-lg  mt-2 text-gray-700 capitalize font-medium">
                                <Link href={`/blogs/${part.title}`}>
                                  {part.title}
                                </Link>
                              </h2>
                              <p>
                                Les premières BVA montées sur des véhicules
                                Renault remontent aux années 90...
                              </p>

                              <Link href={`/blogs/${part.title}`}>
                                <button className="font-medium underline text-[14px]">
                                  Lire plus
                                </button>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="blogsCard">
                          <div className="border p-4 rounded-md bg-white shadow-md">
                            <div className="mb-5">
                              <iframe
                                className="w-full md:h-[397px] rounded-md "
                                src="https://www.youtube.com/embed/6X72SXZhZ44?si=50iEt0fuIk1i5HeS"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              ></iframe>
                            </div>

                            <h2 className="text-lg  mt-2 text-gray-700 capitalize font-medium">
                              Démontage/Remontage calculateur
                            </h2>
                            <p>
                              Comment installer un calculateur de boite
                              automatique (boite EDC) sur une Renault Clio 4,
                              Captur, Scénic ou Mégane
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="blogsCard">
                          <div className="border p-4 rounded-md bg-white shadow-md">
                            <div className="mb-5">
                              <Image
                                className="w-full md:h-[397px] rounded-md "
                                src="/images/blog-2.webp"
                                alt="bloog-2 iamge"
                                width={500}
                                height={500}
                              />
                            </div>

                            <h2 className="text-lg  mt-2 text-gray-700 capitalize font-medium">
                              Exemple d’information calculateur
                            </h2>
                            <p>
                              Vous trouverez ici un exemple où trouver les
                              informations relatives au calcualteur. Version du
                              diag - du logiciel – numéro de calibrage ou
                              étalonnage
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="blogsCard">
                          <div className="border p-4 rounded-md bg-white shadow-md">
                            <div className="mb-5">
                              <iframe
                                className="w-full md:h-[397px] rounded-md "
                                src="https://www.youtube.com/embed/EmwXs4AmC64?si=OnO4L_2ssu661hkg"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              ></iframe>
                            </div>

                            <h2 className="text-lg  mt-2 text-gray-700 capitalize font-medium">
                              Video présentation
                            </h2>
                            <p>
                              Spécialiste en calculateur boite automatique pour
                              Renault EDC Réparation, programmation, clonage
                            </p>
                          </div>
                        </div>
                      </div>
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
