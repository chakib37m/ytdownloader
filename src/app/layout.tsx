import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image"
import ThemeToggle from "./components/theme";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youtube Downloader",
  description: "Download Youtube videos with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="header">
          <div className="logo">
            <Image className="logopic" src="next.svg" alt="Logo" width={200} height={40} />
          </div>
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
