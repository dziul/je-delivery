import { gql } from '@apollo/client'

interface PocSearchOnlyId {
  id: string
}

export interface PocSearchOnlyIdData {
  pocSearch: PocSearchOnlyId[]
}

export const GET_ID = gql`
  query PocSearchMethod(
    $now: DateTime
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`
