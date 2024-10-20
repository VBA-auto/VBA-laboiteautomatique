"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReturnButton from "@/components/ReturnButton";
import ResponsiveSlider from "@/components/ResponsiveSlider";

const pageDescription =
  "Article sur les différentes boites automatiques de chez Renault évolution de la boîte à convertisseur à la boîte automatique double embrayage";

const SingleSearchView = ({ params }) => {
  const [SearchSingleView, setSingleSearchView] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("/searchData.json");
        // Consider adding error handling for non-200 responses
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const foundArticle = data.find(
          (article) => article.Numéro_de_pièces === params.title
        );
        // Check if an article was found
        if (!foundArticle) {
          console.log("No article found with the given title");
        }
        setSingleSearchView(foundArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
        // Consider setting an error state here
      }
    };

    fetchArticle();
  }, [params.title]);

  const settings = {
    customPaging: function (i) {
      return (
        <Image
          src={SearchSingleView?.images[i] || "/placeholder-image.jpg"}
          alt={`Thumbnail ${i + 1}`}
          width={100}
          height={100}
          className="h-[40px] border"
        />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="produits">
        <Head>
          <title>Article Renault boite automatique évolution</title>
          <meta name="description" content={pageDescription} />
        </Head>
        {SearchSingleView ? (
          <>
            <div className="container mx-auto">
              <div className="md:w-3/4 mx-auto ">
                <div className="md:w-[820px] mx-auto bg-[#f5f4f4e3] py-2 rounded-md">
                  <p className="px-4 text-[15px]">
                    <Link href="/">Home</Link> &gt;{" "}
                    <span className="text-[#2C80EF]">
                      {SearchSingleView.Marque}
                    </span>{" "}
                    &gt;{" "}
                    <span className="text-[#2C80EF]">
                      {SearchSingleView.Numéro_de_pièces}
                    </span>{" "}
                    &gt;{" "}
                  </p>
                </div>

                <div className="flex  justify-center gap-5 mt-5">
                  <div className="md:w-[400px]  border p-3 rounded-md bg-[#f5f4f4e3]">
                    <ReturnButton />
                    <div className="md:w-full">
                      <div className="md:w-full">
                        <ResponsiveSlider images={SearchSingleView?.images} />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[400px] bg-[#f5f4f4e3]  rounded-md">
                    <div className="p-4">
                      <p className="text-white py-1 text-center bg-[#2aa31fc4] rounded-md flex justify-center items-center gap-2 text-[15px]">
                        <span className="w-[12px] h-[12px] bg-white rounded-full block"></span>
                        En stock: {SearchSingleView.stock}
                      </p>
                    </div>
                    <div className=" ">
                      <div className=" overflow-hidden">
                        <table className="w-full">
                          <tbody>
                            {[
                              {
                                label: "Numéro de pièce",
                                value: SearchSingleView.Numéro_de_pièces,
                              },
                              {
                                label: "L'état technique",
                                value: SearchSingleView.Létat_technique,
                              },
                              { label: "SKU", value: SearchSingleView.SKU },
                              {
                                label: "Nom de la pièce",
                                value: SearchSingleView.Nom_de_la_pièce,
                              },
                              {
                                label: "Garantie",
                                value: SearchSingleView.Garantie,
                              },
                              {
                                label: "Marque",
                                value: SearchSingleView.Marque,
                              },
                              {
                                label: "Maquette",
                                value: SearchSingleView.Maquette,
                              },
                              {
                                label: "Fabriquant",
                                value: SearchSingleView.Fabriquant_de_pièces,
                              },
                              {
                                label: "Attention",
                                value: SearchSingleView.Attention,
                              },
                              {
                                label: "Numéros OE",
                                value: SearchSingleView.Numéros_OE,
                              },
                            ].map((item, index) => (
                              <tr
                                key={item.label}
                                className={
                                  index % 2 === 0
                                    ? "bg-transparent"
                                    : "bg-white/40"
                                }
                              >
                                <td className="w-[160px] ps-4 py-2 font-semibold text-[15px]">
                                  {item.label}:
                                </td>
                                <td className="px-2 py-2 text-[15px]">
                                  {item.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 text-center">
                        <Link href={SearchSingleView?.payLink || "#"}>
                          <button className="bg-[#2aa31fc4] text-white px-5 py-[7px] mb-5 rounded-md hover:bg-white hover:text-[#1FB311]">
                            Commander
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container mx-auto text-center min-h-52 flex justify-center items-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default SingleSearchView;
