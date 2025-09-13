import type { Metadata } from "next";
import { Exo_2, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";
import { SmoothScrollProvider } from "@/app/providers";

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

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-kr",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Juniverse | \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",
  description: "Welcome to my universe - React, Next.js, TypeScript\ub97c \uc804\ubb38\uc73c\ub85c \ud558\ub294 \uc5f4\uc815\uc801\uc778 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${jetbrainsMono.variable} ${notoSansKr.variable} antialiased font-sans scroll-smooth`}
      >
        <SmoothScrollProvider>
          <Header />
          <main className="pt-24 sm:pt-28">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
