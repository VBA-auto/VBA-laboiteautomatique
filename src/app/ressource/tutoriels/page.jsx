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
import { IoEyeOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { useEffect, useState } from "react";

const pageDescription =
  "Tutoriel et blog pour vous aider à réparer les boites automatique EDC Renault clio 4, clio RS, Captur, megane 3 et scenic 3.";

const Page = () => {
  const [blogMeta, setBlogMeta] = useState({});
  const blogSlugs = [
    "calibrage",
    "verification-parametrage",
    "adaptation-calibrage",
    "differentes-boites-DC4",
    "presentation-vba",
    "test-embrayage-edc",
    "remplacement-calculateur",
  ];
  useEffect(() => {
    const fetchBlogMeta = async () => {
      const metaData = {};

      for (const slug of blogSlugs) {
        try {
          const res = await fetch(`/api/blog-meta/${slug}`);
          const data = await res.json();
          metaData[slug] = {
            views: data.views || 0,
            comments: data.comments || 0,
          };
        } catch (e) {
          console.error(`Failed to load meta for ${slug}`);
          metaData[slug] = { views: 0, comments: 0 };
        }
      }

      setBlogMeta(metaData);
    };

    fetchBlogMeta();
  }, []);

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
              <div className="mx-auto flex justify-between ">
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
              <div className="mx-auto mt-8 md:px-0">
                <div className="">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Static Content 1 */}
                    <div className="carousel-item">
                      <div className="blogsCard flex flex-col">
                        <div className="media-container">
                          <div className="">
                            <Link href="/ressource/blogs/calibrage">
                              <Image
                                unoptimized
                                width={1000}
                                height={300}
                                src="/images/blog-calib.webp"
                                alt="calculateur"
                                className="rounded-md object-fit"
                              />
                            </Link>
                          </div>
                          <div className="border  rounded-md p-2">
                            <h2 className="text-normal text-gray-700  my-2  font-medium  hover:underline">
                              <Link href="/ressource/blogs/calibrage">
                                Exemple d’information calculate...
                              </Link>
                            </h2>
                            <div className="content-container  mt-3">
                              <Link href="/ressource/blogs/calibrage">
                                <p className="text-sm">
                                  Vous trouverez ici un exemple où trouver les
                                  informations relatives au...
                                </p>
                                <div className="flex justify-between mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoEyeOutline />
                                    <p className="text-sm text-gray-500">
                                      987 views
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <FaRegComments />
                                    <p className="text-sm text-gray-500">
                                      response{" "}
                                      {blogMeta["calibrage"]?.comments ?? 0}
                                    </p>
                                  </div>
                                  <div className="">
                                    <span className="text-blue-500 text-sm">
                                      lire plus
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Static Content 2 */}
                    <div className="carousel-item">
                      <div className="blogsCard flex flex-col">
                        <div className="media-container">
                          <Link href="/ressource/blogs/verification-parametrage">
                            <Image
                              unoptimized
                              width={1000}
                              height={300}
                              src="/images/BlogVeri.webp"
                              alt="calculateur"
                              className="rounded-md "
                            />
                          </Link>
                          <div className="border  rounded-md p-2">
                            <h2 className="text-normal text-gray-700  my-2  font-medium  hover:underline">
                              <Link href="/ressource/blogs/verification-parametrage">
                                Verification parametrage EDC...
                              </Link>
                            </h2>
                            <div className="content-container mt-3 text-start">
                              <Link href="/ressource/blogs/verification-parametrage">
                                <p className="text-sm">
                                  La vérification régulière des embrayages du
                                  6DCT250 Renault est...{" "}
                                </p>
                              </Link>
                            </div>
                            <div className="flex justify-between mt-3">
                              <div className="flex items-center gap-1">
                                <IoEyeOutline />
                                <p className="text-sm text-gray-500">
                                  489 views
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaRegComments />
                                <p className="text-sm text-gray-500">
                                  response{" "}
                                  {blogMeta["verification-parametrage"]
                                    ?.comments ?? 0}
                                </p>
                              </div>
                              <div className="">
                                <span className="text-blue-500 text-sm">
                                  lire plus
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Static Content 3 */}
                    <div className="carousel-item">
                      <div className="blogsCard flex flex-col">
                        <div className="media-container">
                          <Link href="/ressource/blogs/adaptation-calibrage">
                            <Image
                              unoptimized
                              width={1000}
                              height={300}
                              src="/images/BlogAdapt.webp"
                              alt="calculateur"
                              className="rounded-md"
                            />
                          </Link>
                          <div className="border  rounded-md p-2">
                            <Link href="/ressource/blogs/adaptation-calibrage">
                              <h2 className="text-normal text-gray-700  my-2  font-medium  hover:underline">
                                Adaptation/Calibrage des points...
                              </h2>
                            </Link>
                            <Link href="/ressource/blogs/adaptation-calibrage">
                              <div className="content-container mt-3 text-start">
                                <p className=" text-sm">
                                  Le calibrage des points de touche ou points de
                                  léchage de la boîte...
                                </p>
                              </div>
                              <div className="flex justify-between mt-3">
                                <div className="flex items-center gap-1">
                                  <IoEyeOutline />
                                  <p className="text-sm text-gray-500">
                                    920 views
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaRegComments />
                                  <p className="text-sm text-gray-500">
                                    response{" "}
                                    {blogMeta["adaptation-calibrage"]
                                      ?.comments ?? 0}
                                  </p>
                                </div>
                                <div className="">
                                  <span className="text-blue-500 text-sm">
                                    lire plus
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Static Content 4 (Video Example) */}
                    <div className="carousel-item">
                      <div className="blogsCard flex flex-col">
                        <div className="media-container">
                          <div className="w-full h-full">
                            <Link href="/ressource/blogs/differentes-boites-DC4">
                              <Image
                                unoptimized
                                width={980}
                                height={300}
                                src="/images/blog6.webp"
                                alt="calculateur"
                                className="rounded-md"
                              />
                            </Link>
                          </div>
                          <Link href="/ressource/blogs/differentes-boites-DC4">
                            <div className="border  rounded-md p-2">
                              {" "}
                              <h2 className="text-normal text-gray-700 my-2 font-medium  hover:underline">
                                Références des différentes boites...
                              </h2>
                              <div className="content-container mt-2">
                                <p className="text-sm">
                                  Vous trouverez ci-dessous les différents codes
                                  de boites en fonction de leur...
                                </p>
                              </div>
                              <div className="flex justify-between mt-3.5">
                                <div className="flex items-center gap-1">
                                  <IoEyeOutline />
                                  <p className="text-sm text-gray-500">
                                    1109 views
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaRegComments />
                                  <p className="text-sm text-gray-500">
                                    response{" "}
                                    {blogMeta["differentes-boites-DC4"]
                                      ?.comments ?? 0}
                                  </p>
                                </div>
                                <div className="">
                                  <span className="text-blue-500 text-sm">
                                    lire plus
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Static Content 4 (Video Example) */}
                    <div className="carousel-item">
                      <div className="blogsCard flex flex-col">
                        <div className="media-container">
                          <div className="w-full h-full">
                            <Link href="/ressource/blogs/presentation-vba">
                              <Image
                                unoptimized
                                width={980}
                                height={300}
                                src="/images/BlogV2.webp"
                                alt="calculateur"
                                className="rounded-md"
                              />
                            </Link>
                          </div>
                          <Link href="/ressource/blogs/presentation-vba">
                            <div className="border  rounded-md p-2">
                              {" "}
                              <h2 className="text-normal text-gray-700 my-2 font-medium  hover:underline">
                                Calculateur boîtes de vitesse...
                              </h2>
                              <div className="content-container mt-2">
                                <p className=" text-sm">
                                  Spécialiste en programmation et clonage de
                                  calculateur boîtes de...
                                </p>
                              </div>
                              <div className="flex justify-between mt-3">
                                <div className="flex items-center gap-1">
                                  <IoEyeOutline />
                                  <p className="text-sm text-gray-500">
                                    789 views
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaRegComments />
                                  <p className="text-sm text-gray-500">
                                    response{" "}
                                    {blogMeta["presentation-vba"]?.comments ??
                                      0}
                                  </p>
                                </div>
                                <div className="">
                                  <span className="text-blue-500 text-sm">
                                    lire plus
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Static Content 5 (Video Example) */}
                    <div className="carousel-item">
                      <div className="blogsCard flex flex-col">
                        <div className="media-container">
                          <div className="w-full h-full">
                            <Link href="/ressource/blogs/test-embrayage-edc">
                              <Image
                                unoptimized
                                width={960}
                                height={300}
                                src="/images/BlogV3.webp"
                                alt="calculateur"
                                className="rounded-md"
                              />
                            </Link>
                          </div>
                          <Link href="/ressource/blogs/test-embrayage-edc">
                            <div className="border  rounded-md p-2">
                              {" "}
                              <h2 className="text-normal text-gray-700 my-2 font-medium  hover:underline">
                                Vérifier l’état de l’embrayage EDC
                              </h2>
                              <div className="content-container mt-2">
                                <p className=" text-sm">
                                  Cette vidéo, disponible sur notre site
                                  laboiteautomatique.com, concerne...
                                </p>
                              </div>
                              <div className="flex justify-between mt-3">
                                <div className="flex items-center gap-1">
                                  <IoEyeOutline />
                                  <p className="text-sm text-gray-500">
                                    589 views
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaRegComments />
                                  <p className="text-sm text-gray-500">
                                    response{" "}
                                    {blogMeta["test-embrayage-edc"]?.comments ??
                                      0}
                                  </p>
                                </div>
                                <div className="">
                                  <span className="text-blue-500 text-sm">
                                    lire plus
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Static Content 6 ( Example) */}

                    {/* Add more static content as needed */}

                    <div className="carousel-item">
                      <div className="blogsCard flex flex-col">
                        <div className="media-container">
                          <div className="w-full h-full">
                            <Link href="/ressource/blogs/remplacement-calculateur">
                              <Image
                                unoptimized
                                width={900}
                                height={300}
                                src="/images/BlogV1.webp"
                                alt="calculateur"
                                className="rounded-md"
                              />
                            </Link>
                          </div>
                          <div className="border  rounded-md p-2">
                            <Link href="/ressource/blogs/remplacement-calculateur">
                              {" "}
                              <h2 className="text-normal text-gray-700 my-2 font-medium  hover:underline">
                                Démontage/Remontage calculat...
                              </h2>
                            </Link>
                            <Link href="/ressource/blogs/remplacement-calculateur">
                              <div className="content-container mt-3 ">
                                <p className=" text-sm">
                                  Comment installer un calculateur de boite
                                  automatique. Calculateur...
                                </p>
                              </div>
                              <div className="flex justify-between mt-2.5">
                                <div className="flex items-center gap-1">
                                  <IoEyeOutline />
                                  <p className="text-sm text-gray-500">
                                    989 views
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaRegComments />
                                  <p className="text-sm text-gray-500">
                                    response{" "}
                                    {blogMeta["remplacement-calculateur"]
                                      ?.comments ?? 0}
                                  </p>
                                </div>
                                <div className="">
                                  <span className="text-blue-500 text-sm">
                                    lire plus
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
