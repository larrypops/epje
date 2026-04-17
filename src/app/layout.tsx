import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "EPJE Construction",
  description:
    "Construction, Rénovation & Carrelage Professionnel au Cameroun. EPJE Construction vous accompagne dans tous vos projets de bâtiment.",
  icons: {
    icon: [{ url: "/images/logo.jpg" }],
    shortcut: [{ url: "/images/logo.jpg" }],
    apple: [{ url: "/images/logo.jpg" }]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
