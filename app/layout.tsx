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
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      {googleTagId ? (
        <head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTagId}');
            `}
          </Script>
        </head>
      ) : null}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
