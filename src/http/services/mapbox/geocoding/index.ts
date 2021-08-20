import { get } from '../http'

import { GeocodingProps } from './types'

export const searchAddress = async (search: string) => {
  try {
    const { data } = await get<GeocodingProps>(
      `/geocoding/v5/mapbox.places/${search}.json`,
      {
        autocomplete: true,
        country: 'br',
        language: 'pt',
        types: 'address',
        limit: 5,
      }
    )

    return data.features
  } catch (error) {
    return []
  }
}
