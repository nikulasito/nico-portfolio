import type { Metadata } from "next";
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
