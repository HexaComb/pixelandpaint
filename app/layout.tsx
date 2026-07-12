// Design philosophy: Sunny Pixel Workshop — brand metadata and typography should feel joyful, direct, and community-rooted rather than template-derived.
import type { Metadata, Viewport } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel & Paint | Art + Tech for Fresno Youth",
  description:
    "Free art and technology pop-ups for kids in Fresno housing communities—where culture, creativity, and joy collide.",
  metadataBase: new URL("https://pixelandpaint.vercel.app"),
  icons: {
    icon: "/pixelandpaint-logo.jpg",
    apple: "/pixelandpaint-logo.jpg",
  },
  openGraph: {
    title: "Pixel & Paint",
    description: "Free art + tech pop-ups for young creators in Fresno.",
    type: "website",
    images: ["/pixelandpaint-logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC83D",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
