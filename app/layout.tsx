import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REST Countries API - Free Country Data API",
  description:
    "Get information about countries via a RESTful API. Access data about 250 countries including names, capitals, populations, and more. No API key required.",
  keywords:
    "REST API, countries, country data, free API, geography, population, capitals, flags",
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
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed right-2 bottom-2">
              <ThemeToggle />

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
