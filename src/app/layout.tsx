import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import React from 'react';
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="header">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
            </div>
            <div className="title">
              Youtube Downloader
            </div>
              <ThemeToggle />
            </div>
        {children}
        <footer className="footer">
          Download Youtube videos with ease
        </footer>
      </body>
    </html>
  );
}
