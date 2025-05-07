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
            unoptimized
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

const FaqSpain = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title:
        "¿Cómo saber si mi calculadora de caja automática está defectuosa?",
      content:
        "En general, los códigos de falla relacionados con una calculadora de caja automática defectuosa incluyen 'cortocircuito a masa motor embrague dos' o 'cortocircuito a masa motor embrague uno'. Estos problemas suelen estar relacionados con fallas eléctricas o electrónicas y generalmente aparecen con un kilometraje inferior a 120,000 km.",
    },
    {
      title:
        "¿A partir de cuántos kilómetros puede estar defectuosa una calculadora?",
      content:
        "En general, las fallas de la calculadora de caja automática suelen aparecer entre 60,000 y 120,000 km según nuestras estadísticas. Sin embargo, no es raro que algunas calculadoras en los modelos Mégane y Scenic funcionen hasta 180,000 km, e incluso 200,000 km.",
    },
    {
      title: "¿Es posible probar la calculadora de caja automática?",
      content:
        "Sí, a veces es posible probar la calculadora conectando el terminal del vehículo y el terminal de la transmisión sin conectarlo a la caja de cambios. Con una herramienta de diagnóstico, es posible hacer girar los motores uno y dos para verificar su funcionamiento. Sin embargo, estamos equipados con un banco de pruebas especializado que permite probar la calculadora de manera precisa y confiable.",
    },
    {
      title:
        "¿Se puede cambiar solo la calculadora en lugar de reemplazar la caja completa?",
      content:
        "Sí, por supuesto. En este tipo de caja de cambios, el problema puede provenir de la calculadora. Los motores de embrague ubicados en la parte superior o inferior (ver foto 'penúltima pregunta') también pueden ser la causa. Además de la calculadora, también puede deberse al embrague, la horquilla de embrague, los sincronizadores, el drome o el programa. Según los códigos de diagnóstico y el comportamiento del vehículo, es posible determinar el origen preciso del problema.",
    },
    {
      title:
        "¿Cómo conocer la referencia de mi calculadora de caja automática?",
      content:
        "Solo necesitamos que nos comunique el año y el modelo de su vehículo. Esto nos permitirá encontrar la referencia exacta de su calculadora. En general, la referencia está inscrita directamente en la calculadora misma. Las referencias comunes suelen ser A2C30743000, A2C53374830 03 K01, A2C30743100 o A2C73768907. <br/>Además, encontrará un código KXX-0X inscrito en la calculadora.",
    },
    {
      title: "No tengo marcha atrás, ¿es un problema de la calculadora?",
      content:
        "Parece que generalmente es un defecto de la calculadora. Sin embargo, a veces puede deberse al motor de embrague ubicado debajo de la caja de cambios.",
    },
    {
      title: "¿Cuáles son las referencias compatibles con mi vehículo?",
      content: `
      <h2 class="my-2">A continuación, un resumen de las referencias y los modelos compatibles para cada referencia.</h2>
        <table class="w-full border-collapse">
          <thead class="">
            <tr class="bg-[#2c80efdc] text-white text-left">
              <th class="border p-2">Referencia</th>
              <th class="border p-2">Modelos Compatibles</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100">
              <td class="border p-2">310F93913R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores)</td>
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
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores)</td>
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
              <td class="border p-2">Ningún modelo identificado</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321561R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores)</td>
            </tr>
            <tr>
              <td class="border p-2">310321524R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores)</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321520R</td>
              <td class="border p-2">Ningún modelo identificado</td>
            </tr>
            <tr>
              <td class="border p-2">310321517R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores), Scénic (2016 y posteriores)</td>
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
              <td class="border p-2">Ningún modelo identificado</td>
            </tr>
            <tr>
              <td class="border p-2">310321306R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores), Scénic (2016 y posteriores)</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310321150R</td>
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores)</td>
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
              <td class="border p-2">Ningún modelo identificado</td>
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
              <td class="border p-2">Mégane (2008–2016, 2016 y posteriores), Scénic (2016 y posteriores)</td>
            </tr>
            <tr>
              <td class="border p-2">310320756R</td>
              <td class="border p-2">Clio 4, Scénic (2016 y posteriores)</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310320749R</td>
              <td class="border p-2">Scénic (2016 y posteriores)</td>
            </tr>
            <tr>
              <td class="border p-2">310320721R</td>
              <td class="border p-2">Ningún modelo identificado</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border p-2">310320717R</td>
              <td class="border p-2">Scénic (2016 y posteriores)</td>
            </tr>
            <tr>
              <td class="border p-2">310320553R</td>
              <td class="border p-2">Scénic (2016 y posteriores)</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      title: "Solo tengo las velocidades pares, ¿es la calculadora?",
      content:
        "Parece que generalmente es un defecto de la calculadora. Sin embargo, a veces puede deberse al motor de embrague ubicado en la parte superior de la caja de cambios.",
    },
    {
      title: "Solo tengo las velocidades impares, ¿es la calculadora?",
      content:
        "Parece que generalmente es un defecto de la calculadora. Sin embargo, a veces puede deberse al motor de embrague ubicado en la parte superior de la caja de cambios.",
    },
    {
      title:
        "¿Cuáles son las diferentes referencias para la calculadora de caja EDC?",
      content: `Las diferentes referencias que pueden existir son las siguientes: <br/>
        310320749R 310320891R 310320756R 310321109R 310321488R 310321517R 310320841R 310320717R 310320892R 310320721R 310321520R 310321561R, A4539006303 310321808R 310321150R 310321421R 310321706R 310321716R 310321793R 310321662R 310321524R 310321994R 310322059R 310F93913R 310321149R 310321306R 310320553R 310321359R, 310321148R, 310321488R.<br/> 
        Puede encontrarlas en este enlace: <a class='text-[#2c80ef]' href='https://laboiteautomatique.com/selectionnez-votre-vehicule' target='_blank' rel='noopener noreferrer'>https://laboiteautomatique.com/selectionnez-votre-vehicule</a> <br/> Las referencias más comunes son <a class='text-[#2c80ef] underline' href='/reference/310321488R'>310321488R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320749R'>310320749R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320721R'>310320721R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320756R'>310320756R</a>, <a class='text-[#2c80ef] underline' href='/reference/310321808R'>310321808R</a>, <a class='text-[#2c80ef] underline' href='/reference/310321306R'>310321306R</a>, <span class='text-[#2c80ef] underline cursor-default'>310320254R</span>.`,
    },
    {
      title: "¿Puede ser otra cosa que la calculadora?",
      content:
        "Sí, también puede deberse a otros componentes. Es necesario verificar el embrague, las horquillas de embrague, los dos pequeños motores que controlan la calculadora, los sincronizadores, el selector de velocidades, el sensor del pedal de freno o el sensor del selector.",
      image: "/images/faqAns.webp",
    },
    {
      title:
        "¿Cuáles son los códigos de falla para una calculadora de caja automática defectuosa?",
      content:
        "En general, los códigos de falla que indican que la calculadora está defectuosa incluyen códigos relacionados con problemas de programa o fallas eléctricas. Por ejemplo, podría ver códigos de cortocircuito, cortocircuitos del motor de embrague, códigos de cortocircuito a masa del motor de embrague, fallas eléctricas del motor de embrague, códigos de paso eléctrico no identificado o errores internos de la calculadora. Todos estos códigos eléctricos muestran que es la calculadora la que está defectuosa.",
    },
  ];

  return (
    <main id="FAQ">
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
          <main className="pb-5">
            <div className="container mx-auto">
              <div className="product border accent_color py-4 text-center rounded-md">
                <h1 className="headingText font-semibold  my-1 text-[#374151]">
                  Preguntas Frecuentes
                </h1>
                <p className="font-semibold mt-2 text-[#374151]">
                  Explora respuestas
                </p>
              </div>
              <div className=" mb-5 text-center">
                <p className="text-[24px] font-semibold text-[#374151]"></p>
              </div>
              <div className="">
                <div className=" w-full">
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
    </main>
  );
};

export default FaqSpain;
