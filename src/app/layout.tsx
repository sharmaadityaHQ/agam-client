import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/Header";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../fonts/avenir-medium.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agam - Official Website",
  description: "official website of the Agam band",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased bg-black`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
