import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const myFont = localFont({ src: '../assets/Brush-Script.ttf', variable: "--font-Brush-Script"})
const myFont2 = localFont({ src: '../assets/DIN-Alternate-Bold.ttf', variable: "--font-DIN-Alternate-Bold"})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

