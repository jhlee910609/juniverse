import type { Metadata } from "next";
import { Exo_2, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer",
  description: "Welcome to my universe - A passionate frontend developer specializing in React, Next.js, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${exo2.variable} ${jetbrainsMono.variable} bg-black text-white antialiased font-sans scroll-smooth`}
      >
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
