"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Code, MapPin, Globe, Copy, Check } from "lucide-react"

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

export function ApiPlayground() {
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

  const endpoints = [
    { id: "name", label: "Name", shortLabel: "Name", example: "germany", icon: Search },
    { id: "capital", label: "Capital", shortLabel: "Capital", example: "berlin", icon: MapPin },
    { id: "region", label: "Region", shortLabel: "Region", example: "europe", icon: Globe },
    { id: "code", label: "Code", shortLabel: "Code", example: "de", icon: Code },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Try the API Live</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Test different endpoints and see real responses instantly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="mb-6 sm:mb-8 shadow-lg border-0 bg-gradient-to-r from-gray-50 to-blue-50">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                <Code className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                API Playground
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Select an endpoint and enter your search query to test the API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
              <Tabs value={activeEndpoint} onValueChange={setActiveEndpoint}>
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                  {endpoints.map((endpoint) => {
                    const Icon = endpoint.icon
                    return (
                      <TabsTrigger
                        key={endpoint.id}
                        value={endpoint.id}
                        className="flex items-center justify-center p-2 sm:p-3 text-xs sm:text-sm"
                      >
                        <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden sm:inline">{endpoint.label}</span>
                        <span className="sm:hidden">{endpoint.shortLabel}</span>
                      </TabsTrigger>
                    )
                  })}
                </TabsList>

                {endpoints.map((endpoint) => (
                  <TabsContent key={endpoint.id} value={endpoint.id}>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-2 p-2 sm:p-3 bg-gray-100 rounded-lg overflow-x-auto">
                        <code className="text-xs sm:text-sm font-mono flex-1 whitespace-nowrap">
                          https://restcountries.com/v3.1/{endpoint.id === "code" ? "alpha" : endpoint.id}/
                          <span className="text-blue-600">
                            {"{"}query{"}"}
                          </span>
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="flex-shrink-0 h-8 w-8 p-0"
                          onClick={() =>
                            copyToClipboard(
                              `https://restcountries.com/v3.1/${endpoint.id === "code" ? "alpha" : endpoint.id}/`,
                            )
                          }
                        >
                          {copied ? (
                            <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                          ) : (
                            <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                          )}
                        </Button>
                      </div>

                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Input
                          placeholder={`e.g., ${endpoint.example}`}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && searchCountries()}
                          className="flex-1 text-sm sm:text-base"
                        />
                        <Button
                          onClick={searchCountries}
                          disabled={loading}
                          className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-4 sm:px-6"
                        >
                          {loading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              <Search className="mr-2 h-4 w-4" />
                              <span className="hidden sm:inline">Search</span>
                              <span className="sm:hidden">Go</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Results */}
          {countries.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {countries.map((country, index) => (
                <motion.div
                  key={country.name.common}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                    <CardHeader className="pb-3 p-4 sm:p-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={country.flags.png || "/placeholder.svg"}
                          alt={`Flag of ${country.name.common}`}
                          className="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-base sm:text-lg truncate">{country.name.common}</CardTitle>
                          <CardDescription className="text-xs sm:text-sm truncate">
                            {country.name.official}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div>
                          <span className="font-medium text-gray-600">Capital:</span>
                          <p className="text-gray-900 truncate">{country.capital?.[0] || "N/A"}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Region:</span>
                          <p className="text-gray-900 truncate">{country.region}</p>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="font-medium text-gray-600">Population:</span>
                          <p className="text-gray-900">{country.population.toLocaleString()}</p>
                        </div>
                        {country.subregion && (
                          <div className="sm:col-span-2">
                            <span className="font-medium text-gray-600">Subregion:</span>
                            <p className="text-gray-900 truncate">{country.subregion}</p>
                          </div>
                        )}
                      </div>

                      {country.currencies && (
                        <div>
                          <span className="font-medium text-gray-600 text-xs sm:text-sm">Currencies:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {Object.values(country.currencies)
                              .slice(0, 2)
                              .map((currency, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {currency.name} ({currency.symbol})
                                </Badge>
                              ))}
                          </div>
                        </div>
                      )}

                      {country.languages && (
                        <div>
                          <span className="font-medium text-gray-600 text-xs sm:text-sm">Languages:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {Object.values(country.languages)
                              .slice(0, 2)
                              .map((language, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {language}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
