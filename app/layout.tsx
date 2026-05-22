import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";
import { WhatsappButton } from "@/components/WhatsappButton";
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
        <SiteNav />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
