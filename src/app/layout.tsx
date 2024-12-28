import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: "FOSSCU",
  description: "We at FOSSCU (Free and Open-Source Software Community United) are a Group of individuals who are constantly working to promote Open-Source Culture",
  icons: {
    icon: "/fosscu.png",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "FOSSCU",
    description: "We at FOSSCU (Free and Open-Source Software Community United) are a Group of individuals who are constantly working to promote Open-Source Culture",
    url: "https://fosscu.org",
    siteName: "FOSSCU",
    images: [
      {
        url: "https://fosscu.org/fosscu.png",
      },
    ],
    type: "website",
  },
  other: {
    "google-site-verification": "your-verification-code",
    "itemprop:name": "We ❤️ Open Source",
    "itemprop:description": "We at FOSSCU (Free and Open-Source Software Community United) are a Group of individuals who are constantly working to promote Open-Source Culture",
    "itemprop:image": "https://raw.githubusercontent.com/FOSS-Community/website-fossc/7fb82481a6d40ca5ceacbdeac46da76f9932a31c/src/assets/img/logo/fosscu.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
