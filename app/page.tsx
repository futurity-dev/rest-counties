"use client"

import { useState } from "react"
import { Globe, Search, Code, MapPin } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ApiPlayground } from "@/components/api-playground"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

interface Country {
  name: {
    common: string
    official: string
  }
  capital?: string[]
  population: number
  region: string
  subregion?: string
  flags: {
    png: string
    svg: string
  }
  currencies?: Record<string, { name: string; symbol: string }>
  languages?: Record<string, string>
  borders?: string[]
}

export default function RestCountriesLanding() {
  const [searchQuery, setSearchQuery] = useState("")
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [activeEndpoint, setActiveEndpoint] = useState("name")
  const [copied, setCopied] = useState(false)

  const searchCountries = async () => {
    if (!searchQuery.trim()) return

    setLoading(true)
    try {
      let url = ""
      switch (activeEndpoint) {
        case "name":
          url = `https://restcountries.com/v3.1/name/${searchQuery}`
          break
        case "capital":
          url = `https://restcountries.com/v3.1/capital/${searchQuery}`
          break
        case "region":
          url = `https://restcountries.com/v3.1/region/${searchQuery}`
          break
        case "code":
          url = `https://restcountries.com/v3.1/alpha/${searchQuery}`
          break
      }

      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setCountries(Array.isArray(data) ? data.slice(0, 6) : [data])
      } else {
        setCountries([])
      }
    } catch (error) {
      setCountries([])
    }
    setLoading(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const endpoints = [
    { id: "name", label: "Name", shortLabel: "Name", example: "germany", icon: Search },
    { id: "capital", label: "Capital", shortLabel: "Capital", example: "berlin", icon: MapPin },
    { id: "region", label: "Region", shortLabel: "Region", example: "europe", icon: Globe },
    { id: "code", label: "Code", shortLabel: "Code", example: "de", icon: Code },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <HeroSection />
      <ApiPlayground
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchCountries={searchCountries}
        loading={loading}
        activeEndpoint={activeEndpoint}
        setActiveEndpoint={setActiveEndpoint}
        copied={copied}
        setCopied={setCopied}
        endpoints={endpoints}
        countries={countries}
      />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  )
}
