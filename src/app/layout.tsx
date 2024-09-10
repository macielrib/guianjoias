import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from 'next/script'; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GuianJoias",
  description: "Guian Joias oferece joias elegantes e sofisticadas para todas as ocasiões. Descubra anéis, pulseiras e mais, com design impecável e qualidade excepcional. Encontre o presente perfeito na Guian Joias.",
  alternates: {
    canonical: 'https://guianjoias.com.br'
  },
  authors: [{ name: 'Cherry Code', url: "https://cherrycode.com.br" }],
  robots: {
    index: true,
    follow: true
  },
  keywords: [
    "guianjoias",
    "joias guian",
    "guian joias",
    "sua loja de joias",
    "venda de joias",
    "joias de ouro",
    "ouro 18k",
  ],
  openGraph: {
    title: "Guian Joias",
    description: "Guian Joias oferece joias elegantes e sofisticadas para todas as ocasiões. Descubra anéis, pulseiras e mais, com design impecável e qualidade excepcional. Encontre o presente perfeito na Guian Joias.",
    siteName: "Guian Joias",
    url: "https://guianjoias.com.br", 
    locale: "pt_BR",
  },
  twitter: {
    title: "Guian Joias",
    description: "Guian Joias oferece joias elegantes e sofisticadas para todas as ocasiões. Descubra anéis, pulseiras e mais, com design impecável e qualidade excepcional. Encontre o presente perfeito na Guian Joias.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Script
          src="/node_modules/preline/dist/preline.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
