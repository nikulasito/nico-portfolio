import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nico-alumbro.is-a.dev"),
  title: "Nico Alumbro — Developer & Creative Technologist",
  description:
    "Portfolio of Nico Alumbro, a full-stack developer and creative technologist building web platforms, mobile products, operational systems, and visual stories.",
  openGraph: {
    title: "Nico Alumbro — Developer & Creative Technologist",
    description:
      "Web platforms, mobile products, operational systems, and visual stories.",
    type: "website",
    url: "https://nico-alumbro.is-a.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      {googleTagManagerId ? (
        <head>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `}
          </Script>
        </head>
      ) : null}
      <body suppressHydrationWarning>
        {googleTagManagerId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        {children}
      </body>
    </html>
  );
}
