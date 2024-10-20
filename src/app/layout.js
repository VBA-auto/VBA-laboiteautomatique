import dynamic from "next/dynamic";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const CookieConsent = dynamic(() => import("./components/CookieConsent"), {
  ssr: false,
});

const GoogleAnalytics = dynamic(() => import("./components/GoogleAnalytics"), {
  ssr: false,
});
const GoogleAnalytics2 = dynamic(
  () => import("./components/GoogleAnalytics2"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "VBA Calculateur Renault",
  description: "Vente de calculateur Renault",
  icon: "/favicon.ico",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} sizes="any" />
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtag/js?id=G-80T20RP4QR"
          as="script"
        />
      </Head>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVVG6XNH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-80T20RP4QR"
          strategy="afterInteractive"
          async
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-80T20RP4QR', { 'debug_mode': true });
            `,
          }}
          strategy="afterInteractive"
          async
        />

        {children}
        <CookieConsent />
        <GoogleAnalytics />
        <GoogleAnalytics2 />
        {/* <script
          type="text/javascript"
          src="//cdn.cookie-script.com/s/b44654ce8adaebd84447bda0400a34b2.js"
          defer
        ></script> */}
      </body>
    </html>
  );
};

export default RootLayout;
