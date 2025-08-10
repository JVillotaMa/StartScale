'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieProvider } from "../contexts/CookieContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import CookieBanner from "../components/CookieBanner";
import LanguageToggle from "../components/LanguageToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>StartScale</title>
        <meta name="description" content="StartScale acompaña al cliente en el desarrollo de su producto, desde el inicio hasta el final. Cumplimiento RGPD, datos protegidos, políticas de privacidad transparentes." />
        <meta name="keywords" content="MVP gratuito, desarrollo web, startup, prototipo, RGPD, privacidad" />
        <meta property="og:title" content="StartScale" />
        <meta property="og:description" content="Desarrollo responsable de aplicaciones web con cumplimiento total de normativas de protección de datos" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <CookieProvider>
            {children}
            <CookieBanner />
            <LanguageToggle />
          </CookieProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
