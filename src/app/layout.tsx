import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import "./globals.css";
const description = "Professional websites, business systems and branding for schools, companies and growing businesses in Zimbabwe. Talk to TPD Digital Solutions about your next project.";
export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: "TPD Digital Solutions | Websites, Systems & Branding",
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Tanaka P. Dongo" }],
  icons: { icon: "/brand/tpd-logo.png", apple: "/brand/tpd-logo.png" },
  openGraph: { title: "TPD Digital Solutions — Design. Build. Grow.", description, url: "/", siteName: brand.name, type: "website", locale: "en_ZW", images: [{url:"/brand/tpd-logo.png",width:1536,height:1024,alt:"TPD Digital Solutions"}] },
  twitter: { card:"summary", title:brand.name, description, images:["/brand/tpd-logo.png"] },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
