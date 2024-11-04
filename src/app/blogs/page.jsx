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
  "bloc, Forum et articles sur les problèmes rencontrés pour les boites automatiques de Captur, Clio 4, Scénic, Mégane. Article sur les différentes boites automatiques de chez Renault évolution de la boîte à convertisseur à la boîte automatique double embrayage";

const Page = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("/article.json")
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, []);

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
          <title>
            Forum, blog et articles sur les problèmes boite EDC Renault. Article
            Renault boite automatique évolution
          </title>
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
                      {parts.map((part, index) => (
                        <div key={index} className="carousel-item">
                          <div className="blogsCard flex flex-col">
                            <div className="media-container">
                              {part.video ? (
                                <div
                                  className="w-full h-full"
                                  dangerouslySetInnerHTML={{
                                    __html: part.video,
                                  }}
                                ></div>
                              ) : (
                                <Link href={`/blogs/${part.LinkUrl}`}>
                                  <Image
                                    width={500}
                                    height={300}
                                    src={part.image}
                                    alt={part.LinkUrl}
                                    className="rounded-md w-full h-full object-cover"
                                  />
                                </Link>
                              )}
                            </div>
                            <div className="content-container mt-2">
                              <h2 className="text-lg text-gray-700 font-medium capitalize">
                                {part.video ? (
                                  <span>{part.title}</span> // Non-clickable title for videos
                                ) : (
                                  <Link href={`/blogs/${part.LinkUrl}`}>
                                    {part.title}
                                  </Link>
                                )}
                              </h2>
                              <p className=" text-gray-600">{part.excerpt}</p>
                            </div>
                          </div>
                        </div>
                      ))}
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
