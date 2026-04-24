import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { site } from "@/lib/site"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${site.name} | Pool Cleaning & Repair in Houston & Humble, TX`,
    template: `%s | ${site.name}`,
  },
  description:
    "Prime Houston Pools is a locally owned residential pool cleaning, maintenance, and repair company serving Houston and Humble, Texas. Weekly service starting at $200/month.",
  applicationName: site.name,
  generator: "v0.app",
  keywords: [
    "Houston pool service",
    "Humble pool service",
    "weekly pool cleaning",
    "pool repair Houston",
    "salt cell cleaning",
    "green pool cleanup",
    "residential pool maintenance",
  ],
  openGraph: {
    title: `${site.name} | Pool Cleaning & Repair in Houston & Humble, TX`,
    description:
      "Locally owned residential pool cleaning, maintenance, and repair. Serving Houston and Humble, Texas.",
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
