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

export const metadata: Metadata = {
  title: "Tanaka Dongo | Software Developer",
  description:
    "Software developer building modern websites, management systems, automation tools and digital platforms for schools, businesses and organizations.",

  keywords: [
    "Software Developer Zimbabwe",
    "Web Developer Zimbabwe",
    "School Management Systems",
    "Next.js Developer",
    "Business Websites",
    "Digital Solutions",
    "Portfolio",
    "Automation Systems",
  ],

  authors: [
    {
      name: "Tanaka Dongo",
    },
  ],

  creator: "Tanaka Dongo",

  openGraph: {
    title: "Tanaka Dongo | Software Developer",
    description:
      "Building modern websites, management systems and digital platforms for schools, businesses and organizations.",
    url: "https://yourdomain.com",
    siteName: "Tanaka Dongo Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tanaka Dongo | Software Developer",
    description:
      "Building modern websites, management systems and digital platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}