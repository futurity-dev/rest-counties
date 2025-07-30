interface Id {
  $oid: string
}

export interface Country {
  _id: Id
  id: number
  name: string
  iso3: string
  iso2: string
  numeric_code: number
  phonecode: number
  capital: string
  currency: string
  currency_name: string
  currency_symbol: string
  tld: string
  native: string
  region: string
  region_id: number
  subregion: string
  subregion_id: number
  nationality: string
  timezones: string
  latitude: number
  longitude: number
  emoji: string
  emojiU: string
}

export interface City {
  _id: string
  id: number
  name: string
  state_id: number
  state_code: string
  state_name: string
  country_id: number
  country_code: string
  country_name: string
  latitude: number
  longitude: number
}

export interface Languages {
  _id: string
  name: string
  native: string
  nationality: string
}

export interface State {
  _id: Id
  id: number
  name: string
  country_id: number
  country_code: string
  country_name: string
  state_code: string
  type: string
  latitude: number
  longitude: number
}

export interface Region {
  _id: Id
  id: number
  name: string
  wikiDataId: string
}

export interface ApiResponse<T> {
  statusCode: number
  error: boolean
  data: T[]
  message: string
}

export type ApiDataType = Country | City | Languages | State | Region
