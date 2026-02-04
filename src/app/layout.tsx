import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SummitRoof Pro | Denver's Premier Roofing Contractor",
  description:
    "Professional roofing services in Denver, CO. Shingle, metal, flat, tile roofing, storm damage repair, and gutter installation. Licensed, insured, and backed by industry-leading warranties. Free inspections available.",
  keywords:
    "roofing contractor Denver, roof repair Denver CO, storm damage roof, metal roofing, shingle roof, gutter installation, free roof inspection",
  openGraph: {
    title: "SummitRoof Pro | Denver's Premier Roofing Contractor",
    description:
      "Protect your home from the top. Professional roofing services with industry-leading warranties.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
