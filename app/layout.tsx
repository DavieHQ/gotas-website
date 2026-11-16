import type { Metadata, Viewport } from "next";
import { ShortlistProvider } from "@/components/Shortlist";
import { Header } from "@/components/Navigation";
import { Footer } from "@/components/Shared";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gotasdiamond.com"),
  title: { default: "Gotas Diamond | Abuja Real Estate", template: "%s | Gotas Diamond" },
  description: "Discover Gotas Diamond's Abuja estates, compare land prices and plot sizes, and arrange an estate inspection.",
  icons: { icon: "/brand/gotas-icon.png", apple: "/brand/gotas-icon.png" },
  openGraph: { siteName: "Gotas Diamond Global Limited", images: ["/media/terrace-medium.webp"] }
};
export const viewport: Viewport = { themeColor: "#192a58" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en-NG"><body><ShortlistProvider>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header/>{children}<Footer/>
  </ShortlistProvider></body></html>;
}
