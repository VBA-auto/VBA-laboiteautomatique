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
    "310320254R",
    "310320721R",
    "310320717R",
    "310320553R",
    "310320728R",
    "310321195R",
    "310321474R",
    "310320192R",
    "310320139R",
    "310320468R",
    "310320408R",
    "310320840R",
    "A2C53374830",
    "A2C30743000",
    "A2C30743002",
    "megane4",
    "310320368R",
    "310321520R",
  ];

  const staticUrls = [
    {
      loc: `${baseUrl}`,
      lastmod: new Date().toISOString(),
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/produits`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/sitemap`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/prestation/programmation`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/prestation/installation`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/prestation/reparation`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/aide-en-ligne`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/faq`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/tutoriels`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/blogs/calibrage`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/blogs/verification-parametrage`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/blogs/differentes-boites-DC4`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/blogs/adaptation-calibrage`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/blogs/remplacement-calculateur`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/blogs/presentation-vba`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/presentation`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/blogs/test-embrayage-edc`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressource/articles`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/selectionnez-votre-vehicule`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/captur`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/captur/essence`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/captur/diesel`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/clio`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/clio-5`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/clio/essence`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/clio-5/essence`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/clio/diesel`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/megane`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/megane-4`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/megane/essence`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/megane-4/diesel`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/megane/diesel`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/scenic`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/scenic/diesel`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/fluence`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/fluence/diesel`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/clio-rs`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/clio-rs/essence`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/dc4_soft`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/twingo-3`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/twingo-3/essence`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/promo`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
  ];

  const referenceUrls = referenceCodes.map((ref) => ({
    loc: `${baseUrl}/reference/${ref}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
  }));

  const urls = [...staticUrls, ...referenceUrls];

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
          <priority>${url.priority}</priority>
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
