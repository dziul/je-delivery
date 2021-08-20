interface Properties {
  accuracy: string
}

interface Geometry {
  type: string
  coordinates: number[]
  interpolated?: boolean
}

interface Context {
  id: string
  text_pt: string
  text: string
  wikidata: string
  language_pt: string
  language: string
  short_code: string
}

export interface GeocodingPropFeature {
  id: string
  type: string
  place_type: string[]
  relevance: number
  properties: Properties
  text_pt: string
  place_name_pt: string
  text: string
  place_name: string
  center: number[]
  geometry: Geometry
  address: string
  context: Context[]
}

export interface GeocodingProps {
  type: string
  query: string[]
  features: GeocodingPropFeature[]
  attribution: string
}
