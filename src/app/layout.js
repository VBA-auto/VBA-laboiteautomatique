import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleAnalytics2 from "./components/GoogleAnalytics2";
import GoogleTag from "./components/GoogleTag";
import { Poppins } from "next/font/google"; // Importing Poppins
import ChatWidget from "./components/botLogic/ChatWidget";

export const metadata = {
  title: "VBA Calculateur Renault",
  description: "Vente de calculateur Renault",
  icon: "/favicon.ico",
};
// Load Poppins using `next/font/google`
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets; use 'latin' or others as needed
  variable: "--font-poppins",
});

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

      <body className={`${poppins.variable} antialiased`}>
        {children}
        <GoogleTag />
        {/* <ChatWidget /> */}
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
        <Script
          id="google-ads"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', 'AW-732915422/NLOTCJvL7-YZEN7Nvd0C', {
                'phone_conversion_number': '0145147254'
              });
            `,
          }}
          strategy="afterInteractive"
          async
        />
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
