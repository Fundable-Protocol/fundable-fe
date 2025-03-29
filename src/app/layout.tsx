import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import WalletProvider from "@/providers/wallet-provider";
import { Slide, ToastContainer } from 'react-toastify';
import ThemeProvider from "@/providers/theme-provider";
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
        className={`${bricolageGrotesque.variable} ${inter.className} antialiased bg-slate-100 dark:bg-black flex flex-col h-dvh overflow-hidden`}
      >
        <main className="flex-1 flex flex-col overflow-auto">
          <ThemeProvider>
            <WalletProvider>
              {children}
              <ToastContainer position="bottom-right" theme="dark" hideProgressBar transition={Slide} />
            </WalletProvider>
          </ThemeProvider>

        </main>
      </body>
    </html>


  );
}
