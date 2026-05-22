import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finca La Hermosa | Venue privado en entorno natural",
  description: "Finca para bodas, eventos privados, retiros y experiencias en Isidro Fabela, Estado de México.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jost.variable} ${cormorant.variable}`}>
      <body>
        <SiteHeader />
        <WhatsAppFloat />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
