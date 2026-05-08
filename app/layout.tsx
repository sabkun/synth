import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SynthNav } from "@/components/SynthNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synth — Where Creatives Find Each Other",
  description:
    "A visual portfolio and collaboration platform for dancers, directors, musicians, photographers, and every creative in between.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} synth-grain`}>
        <SynthNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
