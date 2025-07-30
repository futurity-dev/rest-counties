"use client"
import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import type { Country, Region, State } from "@/types/Country"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"

const ApiPlayground = () => {
  return (
    <section className="max-w-7xl mx-auto min-h-96 flex flex-col gap-2 box-border p-4">
      <Tabs defaultValue="country" className="w-full">
        <TabsList>
          <TabsTrigger value="country">Country</TabsTrigger>
          <TabsTrigger value="regions">Regions</TabsTrigger>
        </TabsList>
        <TabsContent value="country">
          <CountryTab />
        </TabsContent>
        <TabsContent value="regions">
          <RegionTab />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ApiPlayground

const CountryTab = () => {
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState<Country[]>([])
  const [slice, setSlice] = useState(20)

  useEffect(() => {
    setLoading(true)
    fetch("/api/rest-countries/country")
      .then((res) => res.json())
      .then((data) => setCountry(data.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading)
    return (
      <p>
        Loading... <Loader2 className="animate-spin" />
      </p>
    )

  return (
    <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
      {country.slice(0, slice).map((item) => {
        return (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarImage src={`https://flagcdn.com/${item.iso2.toLowerCase()}.svg`} alt={item.name} />
                  <AvatarFallback>{"🏳️"}</AvatarFallback>
                </Avatar>
                <span className="font-bold">{item.name}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                <div>
                  <span className="font-medium text-gray-600">Capital:</span>
                  <p className="text-gray-900 truncate">{item.capital}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Region:</span>
                  <p className="text-gray-900 truncate">{item.region}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Phone Code:</span>
                  <p className="text-gray-900">+{item.phonecode}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Currency:</span>
                  <p className="text-gray-900 truncate">{item.currency_name}</p>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-medium text-gray-600">Nationality:</span>
                  <p className="text-gray-900 truncate">{item.nationality}</p>
                </div>
                <div className="sm:col-span-2 flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    {item.currency_symbol} {item.currency}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {item.iso2} / {item.iso3}
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <StateTab country_id={item.id} country_name={item.name} />
            </CardFooter>
          </Card>
        )
      })}
      <Button onClick={() => setSlice((prev) => prev + 20)}>Load More</Button>
    </div>
  )
}

const RegionTab = () => {
  const [loading, setLoading] = useState(true)
  const [region, setRegion] = useState<Region[]>([])

  useEffect(() => {
    setLoading(true)
    fetch("/api/rest-countries/regions")
      .then((res) => res.json())
      .then((data) => setRegion(data.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading)
    return (
      <p>
        Loading... <Loader2 className="animate-spin" />
      </p>
    )

  return (
    <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
      {region.map((item) => {
        return (
          <Card key={item.id} className="min-h-48">
            <CardContent className="w-full h-full flex flex-col gap-2 items-center justify-center">
              <h2 className="font-bold text-2xl">{item.name}</h2>
              <RegionsCountry region_id={item.id} region_name={item.name} />
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

const RegionsCountry = ({
  region_id,
  region_name,
}: {
  region_id: number
  region_name: string
}) => {
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState<Country[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen && country.length === 0) {
      setLoading(true)
      fetch(`/api/rest-countries/regions/${region_id}`)
        .then((res) => res.json())
        .then((data) => setCountry(data.data))
        .finally(() => setLoading(false))
    }
  }, [isOpen, region_id, country.length])

  return (
    <Drawer onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant={"secondary"}>See Countries</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{region_name}</DrawerTitle>
        </DrawerHeader>
        {loading && (
          <div className="flex items-center justify-center p-4">
            <p className="flex items-center gap-2">
              Loading... <Loader2 className="animate-spin" />
            </p>
          </div>
        )}
        <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-scroll p-4">
          {!loading &&
            country.map((item) => {
              return (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex gap-4 items-center">
                      <Avatar>
                        <AvatarImage src={`https://flagcdn.com/${item.iso2.toLowerCase()}.svg`} alt={item.name} />
                        <AvatarFallback>{"🏳️"}</AvatarFallback>
                      </Avatar>
                      <span className="font-bold">{item.name}</span>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const StateTab = ({
  country_id,
  country_name,
}: {
  country_id: number
  country_name: string
}) => {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<State[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen && state.length === 0) {
      setLoading(true)
      fetch("/api/rest-countries/states", {
        method: "POST",
        body: JSON.stringify({ country_id: country_id }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setState(data.data))
        .finally(() => setLoading(false))
    }
  }, [isOpen, country_id, state.length])

  return (
    <Drawer onOpenChange={setIsOpen}>
      <DrawerTrigger asChild className="w-full">
        <Button variant={"secondary"}>See States</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{country_name} States</DrawerTitle>
        </DrawerHeader>
        <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-scroll p-4">
          {loading && (
            <div className="col-span-full flex items-center justify-center p-4">
              <p className="flex items-center gap-2">
                Loading... <Loader2 className="animate-spin" />
              </p>
            </div>
          )}
          {!loading &&
            state.map((item) => {
              return (
                <Card key={item.id} className="min-h-36">
                  <CardContent className="flex items-center justify-center h-full">
                    <span className="text-center font-medium">{item.name}</span>
                  </CardContent>
                </Card>
              )
            })}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
