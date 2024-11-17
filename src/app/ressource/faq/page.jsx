"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageDescription =
  "Vous trouverez ici les questions fréquentes que l'on peut trouver sur les problemes boites automatiques EDC Renault";

const AccordionItem = ({ title, content, image, isOpen, onClick }) => (
  <div className=" mb-3">
    <button
      className="w-full px-[10px] py-[5px] border border-[#2c80ef96] text-[#2C80EF] rounded-md  text-left flex justify-between items-center focus:outline-none"
      onClick={onClick}
    >
      <p className="py-[5px]">{title}</p>
      <p className="text-xl">{isOpen ? "-" : "+"}</p>
    </button>
    {isOpen && (
      <div className="border-b border-gray-200 py-[10px] px-[10px] text-gray-700">
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        {image ? (
          <Image
            width={800}
            height={500}
            loading="lazy"
            className="my-3 mx-auto"
            src={image && image}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    )}
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title:
        "Comment savoir si mon calculateur de boîte automatique est défectueux ?",
      content:
        "En général, les codes défaut liés à un calculateur de boîte automatique défectueux incluent &quot;court-circuit à la masse moteur embrayage deux&quot; ou &quot;court-circuit à la masse moteur embrayage un&quot;. Ces problèmes sont souvent liés à des pannes électriques ou électroniques et apparaissent généralement avec un kilométrage inférieur à 120 000 km.",
    },
    {
      title:
        "À partir de combien de kilomètres un calculateur peut-il être défectueux ?",
      content:
        "En général, les pannes de calculateur de boîte automatique apparaissent souvent entre 60 000 et 120 000 km selon nos statistiques. Cependant, il n'est pas rare que certains calculateurs sur les modèles Mégane et Scenic fonctionnent jusqu'à 180 000 km, voire 200 000 km.",
    },
    {
      title: "Est-il possible de tester le calculateur de boîte automatique ?",
      content:
        "Oui, il est parfois possible de tester le calculateur en branchant le terminal du véhicule et le terminal de la transmission sans le brancher sur la boîte de vitesses. Avec une valise diagnostic, il est possible de faire tourner les moteurs un et deux pour vérifier leur fonctionnement. Cependant, nous sommes équipés d'un banc d'essai spécialisé qui permet de tester le calculateur de manière précise et fiable.",
    },
    {
      title:
        "peut-on juste changer le calculateur au lieu de remplacer la boite complète ?",
      content:
        "Oui, tout à fait. Sur ce type de boîte de vitesses, le problème peut provenir du calculateur. Les moteurs d'embrayage situés en haut ou en bas (voir photo 'avant derniére question') peuvent également être en cause. En plus du calculateur, cela peut aussi être dû à l'embrayage, la fourchette d'embrayage, les synchros, le drome, ou le programme. En fonction des codes diagnostics et du comportement de la voiture, il est possible de déterminer l'origine précise du problème.",
    },
    {
      title:
        "Comment connaître la référence de mon calculateur de boîte automatique ?",
      content:
        "Il suffit de nous communiquer l'année et le modèle de votre véhicule. Cela nous permettra de trouver la référence exacte de votre calculateur. En général, la référence est inscrite directement sur le calculateur lui-même. Les références courantes sont souvent A2C30743000, A2C53374830 03 K01, A2C30743100, ou A2C73768907. <br/>De plus, vous trouverez un code KXX-0X inscrit sur le calculateur.",
    },
    {
      title:
        "Je n'ai plus de marche arrière, est-ce un problème de calculateur ?",
      content:
        "Il semble que ce soit généralement un défaut du calculateur. Cependant, parfois, cela peut être dû au moteur d'embrayage situé au-dessous de la boîte de vitesses.",
    },
    {
      title: "Quelles sont les références compatibles avec mon véhicule?",
      content: `
      <h2 class="my-2">Ci-dessous un résumé des références et des modèles compatibles pour chaque référence.</h2>
        <table class="w-full border-collapse">
          <thead class="">
            <tr class="bg-[#2c80efdc] text-white text-left">
              <th class="border p-2">Référence</th>
              <th class="border p-2">Modèles Compatibles</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100">
              <td class="border p-2">310F93913R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après)</td>
            </tr>
            <tr>
              <td class="border p-2">310322059R</td>
              <td class="border p-2">Mégane, Clio 4, Captur</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321994R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr>
              <td class="border p-2">310321808R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321793R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après)</td>
            </tr>
            <tr>
              <td class="border p-2">310321716R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321706R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr>
              <td class="border p-2">310321662R</td>
              <td class="border p-2">Aucun modèle identifié</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321561R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après)</td>
            </tr>
            <tr>
              <td class="border p-2">310321524R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après)</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321520R</td>
              <td class="border p-2">Aucun modèle identifié</td>
            </tr>
            <tr>
              <td class="border p-2">310321517R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après), Scénic (2016 et après)</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321488R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr>
              <td class="border p-2">310321421R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321359R</td>
              <td class="border p-2">Aucun modèle identifié</td>
            </tr>
            <tr>
              <td class="border p-2">310321306R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après), Scénic (2016 et après)</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321150R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après)</td>
            </tr>
            <tr>
              <td class="border p-2">310321149R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321148R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr>
              <td class="border p-2">310321109R</td>
              <td class="border p-2">Aucun modèle identifié</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310320892R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr>
              <td class="border p-2">310320891R</td>
              <td class="border p-2">Clio 4, Captur</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310320841R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 et après), Scénic (2016 et après)</td>
            </tr>
            <tr>
              <td class="border p-2">310320756R</td>
              <td class="border p-2">Clio 4, Scénic (2016 et après)</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310320749R</td>
              <td class="border p-2">Scénic (2016 et après)</td>
            </tr>
            <tr>
              <td class="border p-2">310320721R</td>
              <td class="border p-2">Aucun modèle identifié</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310320717R</td>
              <td class="border p-2">Scénic (2016 et après)</td>
            </tr>
            <tr>
              <td class="border p-2">310320553R</td>
              <td class="border p-2">Scénic (2016 et après)</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      title: "Je n'ai que les vitesses paires, est-ce le calculateur ?",
      content:
        "Il semble que ce soit généralement un défaut du calculateur. Cependant, parfois, cela peut être dû au moteur d'embrayage situé au-dessus de la boîte de vitesses.",
    },
    {
      title: "Je n'ai que les vitesses impaires, est-ce le calculateur ?",
      content:
        "Il semble que ce soit généralement un défaut du calculateur. Cependant, parfois, cela peut être dû au moteur d'embrayage situé au-dessus de la boîte de vitesses.",
    },
    {
      title:
        "Quelles sont les différentes références pour le calculateur de boite EDC?",
      content: `Les différentes références qu'il peut y avoir sont les suivantes: <br/>
        310320749R 310320891R 310320756R 310321109R 310321488R 310321517R 310320841R 310320717R 310320892R 310320721R 310321520R 310321561R, A4539006303 310321808R 310321150R 310321421R 310321706R 310321716R 310321793R 310321662R 310321524R 310321994R 310322059R 310F93913R 310321149R 310321306R 310320553R 310321359R, 310321148R, 310321488R.<br/> 
        Vous pourrez les retrouvez sur ce lien : <a class='text-[#2c80ef]' href='https://laboiteautomatique.com/selectionnez-votre-vehicule' target='_blank' rel='noopener noreferrer'>https://laboiteautomatique.com/selectionnez-votre-vehicule</a> <br/> Les références les plus courantes sont <a class='text-[#2c80ef] underline' href='/reference/310321488R'>310321488R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320749R'>310320749R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320721R'>310320721R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320756R'>310320756R</a>, <a class='text-[#2c80ef] underline' href='/reference/310321808R'>310321808R</a>, <a class='text-[#2c80ef] underline' href='/reference/310321306R'>310321306R</a>, <span class='text-[#2c80ef] underline cursor-default'>310320254R</span>.`,
    },
    {
      title: "Cela peut-il être autre chose que le calculateur ?",
      content:
        "Oui, cela peut aussi être dû à d'autres composants. Il faut contrôler l'embrayage, les fourchettes d'embrayage, les deux petits moteurs qui contrôlent le calculateur, les synchros, le sélecteur de vitesse, le capteur de la pédale de frein, ou le capteur du sélecteur.",
      image: "/images/faqAns.webp",
    },
    {
      title:
        "Quels sont les codes défaut pour un calculateur de boîte automatique défectueux ?",
      content:
        "En général, les codes défauts qui indiquent que le calculateur est défectueux incluent des codes liés à des problèmes de programme ou des défauts électriques. Par exemple, vous pourriez voir des codes de court-circuit, des courts-circuits moteur d'embrayage, des codes de court-circuit à la masse moteur embrayage, des défauts électriques moteur embrayage, des codes de pas électrique non identifié, ou des erreurs de calculateur interne. Tous ces codes électriques montrent que c'est bien le calculateur qui est défectueux.",
    },
  ];

  return (
    <main>
      <SubHeader />
      <Header />
      <section className="installation">
        <div className="relative">
          <Head>
            <title>Question frequentes sur les problemes boite EDC</title>
            <meta name="description" content={pageDescription} />
          </Head>
          <div style={{ display: "none" }}>
            {accordionData.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          {/* Texte au-dessus de l'image */}
          <main className="py-[60px]">
            <div className="container mx-auto">
              <div className=" mb-5 text-center">
                <p className="text-[24px] font-semibold text-[#374151]">
                  Foire aux questions
                </p>
              </div>
              <div className="md:flex md:gap-5 gap-5 mt-8 flexdirection">
                <div className="md:w-[78%] mx-auto">
                  {accordionData.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                      image={item.image}
                      isOpen={openIndex === index}
                      onClick={() => toggleAccordion(index)}
                    />
                  ))}
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

export default Faq;
