import type { Metadata } from "next";
import { Unbounded, Space_Grotesk } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-nimbus-heading",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-nimbus-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIMBUS | Marketing & RP - Agencia Integral",
  description: "Nimbus crea comunicación con identidad, carácter y resultados reales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${unbounded.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
