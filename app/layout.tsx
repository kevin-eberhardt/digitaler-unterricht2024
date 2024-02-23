import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Digitaler Unterricht",
    default: "Digitaler Unterricht",
  },
  description: "Digitaler Unterricht",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col justify-stretch ${inter.className}`}>
        <Header />
        <main className="flex-grow overflow-scroll px-4">{children}</main>
        <Footer />
        </body>
    </html>
  );
}
