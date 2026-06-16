import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getSiteConfig } from "@/lib/cms/queries";
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
  icons: {
    icon: "/assets/isotipo-blanco.svg",
    shortcut: "/assets/isotipo-blanco.svg",
  },
};

export const revalidate = 60;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const config = await getSiteConfig();

  return (
    <html lang="es" className={`${jost.variable} ${cormorant.variable}`}>
      <body>
        <GoogleTagManager />
        <AnalyticsTracker />
        <SiteHeader />
        <WhatsAppFloat config={config} />
        {children}
        <SiteFooter config={config} />
      </body>
    </html>
  );
}
