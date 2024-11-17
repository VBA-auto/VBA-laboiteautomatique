import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://laboiteautomatique.com";

  const referenceCodes = [
    "310F93913R",
    "310322059R",
    "310321994R",
    "310321808R",
    "310321716R",
    "310321706R",
    "310321662R",
    "310321561R",
    "310321354R",
    "310321517R",
    "310321488R",
    "310321306R",
    "310321149R",
    "310321148R",
    "310321109R",
    "310320892R",
    "310320891R",
    "310320841R",
    "310320756R",
    "310320749R",
    "310320721R",
    "310320717R",
    "310320553R",
    "310320192R",
    "310320139R",
    "310320468R",
    "310320408R",
    "A2C53374830",
    "A2C30743000",
  ];

  const staticUrls = [
    {
      loc: `${baseUrl}`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/produits`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/dashboard`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/prestation/programmation`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/prestation/installation`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/prestation/reparation`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/ressource/aide-en-ligne`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/ressource/faq`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/ressource/blogs`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/selectionnez-votre-vehicule`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/captur`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/captur/essence`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/captur/diesel`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/clio`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/clio/essence`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/clio/diesel`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/megane`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/megane/essence`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/megane/diesel`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/scenic`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/scenic/diesel`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/fluence`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/fluence/diesel`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/clio-rs`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/clio-rs/essence`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/reference/310F93913R`,
      lastmod: new Date().toISOString(),
    },
  ];

  const referenceUrls = referenceCodes.map((ref) => ({
    loc: `${baseUrl}/reference/${ref}`,
    lastmod: new Date().toISOString(),
  }));

  const imageUrls = [
    {
      loc: `${baseUrl}/images/03-k01.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/03-K02.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/blog-2.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculateur_DC4_clioRS.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculateur_DC4_Renault_Capture.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculateur_DC4_Renault_CaptureOld.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculateur_DC4_Renault_Clio4.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculateur_DC4_renault-fluence.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculateur_DC4_renault-megane.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/Calculateur_Renault_A2C30743000_01_K00.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-0.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-1.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-2.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-3.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-4.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-5.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-6.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-7.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-7M.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cal-normal-7Ms.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/faqAns.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/logovba.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/plat-1.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/plat-2.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/plat-3.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/plat-4.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/plat-5.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/plat-6.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/productBG.jpg`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/productBG.png`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/programation.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/renault.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/repa.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/searchP1.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/searchP2.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/searchP3.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/searchP4.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/strie-1.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/strie-2.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/strie-3.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/strie-4.webp`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/videohome2.webm`,
      lastmod: new Date().toISOString(),
    },
  ];

  const urls = [...staticUrls, ...referenceUrls, ...imageUrls];

  const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urls
      .map(
        (url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
        </url>
      `
      )
      .join("")}
  </urlset>
`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
