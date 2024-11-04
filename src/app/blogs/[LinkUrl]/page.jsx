"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const pageDescription =
  "Article sur les différentes boites automatiques de chez Renault évolution de la boîte à convertisseur à la boîte automatique double embrayage";

const ArticlePage = ({ params: paramsPromise }) => {
  const [params, setParams] = useState(null);
  const [article, setArticle] = useState(null);

  // Unwrap the params promise using useEffect
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    };
    unwrapParams();
  }, [paramsPromise]);

  // Fetch the article once params is set
  useEffect(() => {
    if (!params?.LinkUrl) return;

    const fetchArticle = async () => {
      try {
        const response = await fetch("/article.json");
        const data = await response.json();

        // Ensure fetching by LinkUrl
        const foundArticle = data.find(
          (article) => article.LinkUrl === params.LinkUrl
        );
        setArticle(foundArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [params?.LinkUrl]);

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="">
        <Head>
          <title>Article Renault boite automatique évolution</title>
          <meta name="description" content={pageDescription} />
        </Head>
        {article ? (
          <>
            <div className="md:w-3/5 mx-auto">
              <Image
                width={500}
                height={500}
                className="w-full mt-8"
                src={article.image}
                alt={article.title}
              />
            </div>
            <div className="container mx-auto">
              <div className="md:w-2/3 mx-auto mt-8 mb-16">
                <div className="">
                  <h1 className="text-[24px] font-semibold my-3 capitalize">
                    {article.title}
                  </h1>
                  <p dangerouslySetInnerHTML={{ __html: article.paragraph }} />
                  <div className="mt-[35px]">
                    <Link href="/contact">
                      <button className="buttonCheckBlue">
                        <span>Contactez-nous</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center my-16">Loading...</div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default ArticlePage;
