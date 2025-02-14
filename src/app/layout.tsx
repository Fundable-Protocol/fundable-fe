import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Fundable",
  description: "A decentralized funding application built on Starknet",
  icons: {
    icon: "/favicon_io/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${inter.className} antialiased bg-black flex flex-col h-dvh overflow-hidden`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col overflow-auto">{children}</main>
      </body>
    </html>
  );
}
