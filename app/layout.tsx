import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "REST Countries API - Free Country Data API",
  description:
    "Get information about countries via a RESTful API. Access data about 250 countries including names, capitals, populations, and more. No API key required.",
  keywords: "REST API, countries, country data, free API, geography, population, capitals, flags",
  authors: [{ name: "REST Countries API" }],
  openGraph: {
    title: "REST Countries API - Free Country Data API",
    description:
      "Get information about countries via a RESTful API. Access data about 250 countries including names, capitals, populations, and more.",
    type: "website",
    url: "https://restcountries.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "REST Countries API - Free Country Data API",
    description:
      "Get information about countries via a RESTful API. Access data about 250 countries including names, capitals, populations, and more.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
