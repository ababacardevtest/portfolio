import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Khalifa Ababacar Diadhiou | Développeur web FullStack - Freelance", template: "%s | Khalifa Ababacar Diadhiou" },
  description: "Portfolio et services d'un développeur web fullStack & freelance.",
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}