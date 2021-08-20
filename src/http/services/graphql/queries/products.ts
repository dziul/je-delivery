import { gql } from '@apollo/client'

interface PocImage {
  url: string
}
interface PocProductVariant {
  price: number
  title: string
  productVariantId: string
}

export interface PocProduct {
  id: string
  images: PocImage[]
  productVariants: PocProductVariant[]
}

interface Poc {
  id: string
  products: PocProduct[]
}

export interface PocData {
  poc: Poc
}

export const GET_PRODUCTS = gql`
  query Poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        images {
          url
        }
        productVariants {
          price
          title
          productVariantId
        }
      }
    }
  }
`
