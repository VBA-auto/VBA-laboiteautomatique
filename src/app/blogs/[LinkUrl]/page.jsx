"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Correct import for Next.js 13 app directory
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArticlePage = () => {
  const { LinkUrl } = useParams(); // Get dynamic slug from useParams()
  const [article, setArticle] = useState(null);

  // Fetch article based on dynamic `LinkUrl`
  useEffect(() => {
    if (!LinkUrl) return;

    const fetchArticle = async () => {
      try {
        const res = await fetch("/article.json");
        const data = await res.json();
        const foundArticle = data.find((item) => item.LinkUrl === LinkUrl);
        setArticle(foundArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [LinkUrl]);

  // Display loading while data is being fetched
  if (!article) return <div className="text-center my-16">Loading...</div>;

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="article-content">
        <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.excerpt} />
        </Head>
        <div className="container mx-auto">
          <div className="md:w-3/5 mx-auto">
            <Image
              width={500}
              height={500}
              className="w-full mt-8"
              src={article.image}
              alt={article.title}
            />
          </div>
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <h1 className="text-[24px] font-semibold my-3">{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.paragraph }} />

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

export default ArticlePage;
