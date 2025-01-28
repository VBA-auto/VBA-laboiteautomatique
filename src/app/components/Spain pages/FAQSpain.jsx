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

const FaqSpain = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title:
        "¿Cómo saber si mi calculadora de la caja de cambios automática está defectuosa?",
      content:
        "En general, los códigos de fallo relacionados con una calculadora de caja de cambios automática defectuosa incluyen 'cortocircuito a masa del motor de embrague dos' o 'cortocircuito a masa del motor de embrague uno'. Estos problemas suelen estar relacionados con fallos eléctricos o electrónicos y suelen aparecer con un kilometraje inferior a 120.000 km.",
    },
    {
      title: "¿A partir de cuántos kilómetros puede fallar una calculadora?",
      content:
        "En general, las fallas de la calculadora de la caja de cambios automática suelen aparecer entre 60.000 y 120.000 km según nuestras estadísticas. Sin embargo, no es raro que algunas calculadoras en los modelos Mégane y Scenic funcionen hasta 180.000 km, e incluso 200.000 km.",
    },
    {
      title:
        "¿Es posible probar la calculadora de la caja de cambios automática?",
      content:
        "Sí, a veces es posible probar la calculadora conectando el terminal del vehículo y el terminal de la transmisión sin conectarlo a la caja de cambios. Con una herramienta de diagnóstico, es posible hacer girar los motores uno y dos para verificar su funcionamiento. Sin embargo, estamos equipados con un banco de pruebas especializado que permite probar la calculadora de manera precisa y confiable.",
    },
    {
      title:
        "¿Se puede cambiar solo la calculadora en lugar de reemplazar toda la caja de cambios?",
      content:
        "Sí, por supuesto. En este tipo de caja de cambios, el problema puede provenir de la calculadora. Los motores de embrague ubicados en la parte superior o inferior (ver foto en la 'penúltima pregunta') también pueden ser la causa. Además de la calculadora, también puede deberse al embrague, la horquilla de embrague, los sincronizadores, el drome o el programa. Según los códigos de diagnóstico y el comportamiento del coche, es posible determinar el origen exacto del problema.",
    },
    {
      title:
        "¿Cómo puedo conocer la referencia de mi calculadora de caja de cambios automática?",
      content:
        "Solo necesitamos que nos indique el año y el modelo de su vehículo. Esto nos permitirá encontrar la referencia exacta de su calculadora. En general, la referencia está inscrita directamente en la calculadora. Las referencias comunes suelen ser A2C30743000, A2C53374830 03 K01, A2C30743100 o A2C73768907. <br/>Además, encontrará un código KXX-0X inscrito en la calculadora.",
    },
    {
      title: "No tengo marcha atrás, ¿es un problema de la calculadora?",
      content:
        "Parece que generalmente es un defecto de la calculadora. Sin embargo, a veces puede deberse al motor de embrague ubicado debajo de la caja de cambios.",
    },
    {
      title: "Solo tengo las velocidades pares, ¿es la calculadora?",
      content:
        "Parece que generalmente es un defecto de la calculadora. Sin embargo, a veces puede deberse al motor de embrague ubicado encima de la caja de cambios.",
    },
    {
      title: "¿Qué debo hacer si mi coche no cambia de marcha correctamente?",
      content:
        "Si su coche no cambia de marcha correctamente, es posible que el problema esté relacionado con la calculadora de la caja de cambios. Le recomendamos que realice un diagnóstico con una herramienta especializada para identificar el problema exacto. También puede ser un problema con los sensores o el fluido de la transmisión.",
    },
    {
      title:
        "¿Cuánto tiempo tarda en repararse o reemplazarse una calculadora?",
      content:
        "El tiempo de reparación o reemplazo de una calculadora depende de la disponibilidad de la pieza y la complejidad del trabajo. En general, el proceso puede tardar entre 1 y 3 días laborables. Le recomendamos contactarnos para obtener un tiempo estimado más preciso según su vehículo.",
    },
    {
      title: "¿Ofrecen garantía en las calculadoras reparadas o reemplazadas?",
      content:
        "Sí, ofrecemos una garantía en todas las calculadoras reparadas o reemplazadas. La garantía cubre defectos de fabricación y problemas relacionados con la instalación. Consulte con nuestro equipo para obtener más detalles sobre los términos y condiciones de la garantía.",
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
          <main className="pt-[60px]">
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
    </main>
  );
};

export default FaqSpain;
