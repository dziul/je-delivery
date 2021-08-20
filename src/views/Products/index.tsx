import React from 'react'

import { Container } from '~/components'
import { useAppDispatch, useAppSelector } from '~/store'

import apolloClient from '~/http/apollo'

import './styles.scss'
import {
  GET_ID as GET_DISTRIBUTOR_ID,
  PocSearchOnlyIdData as DistributorData,
} from '~/http/services/graphql/queries/distributor'
import { setLoading } from '~/store/common'
import {
  GET_PRODUCTS,
  PocData as ProductsData,
  PocProduct as Product,
} from '~/http/services/graphql/queries/products'
import ProductList from './components/ProductList'
import { useAppHistory } from '~/routes'
import NotFoundProducts from './components/NotFoundProducts'

const ProductsView: React.FC = () => {
  const [productList, setProductList] = React.useState<Product[]>([])
  const [existsProducts, setExistsProducts] = React.useState(true)

  const history = useAppHistory()

  const address = useAppSelector(state => state.user.address)

  const dispatch = useAppDispatch()

  const fetchProducts = React.useCallback(async (id: string) => {
    const { data } = await apolloClient.query<ProductsData>({
      query: GET_PRODUCTS,
      variables: {
        id,
      },
    })

    return data.poc
  }, [])
  const fetchData = React.useCallback(async () => {
    if (!address) {
      history.replace('/')
      return
    }

    dispatch(setLoading(true))

    const { data } = await apolloClient.query<DistributorData>({
      query: GET_DISTRIBUTOR_ID,
      variables: {
        algorithm: 'NEAREST',
        lat: address.coordinates[1],
        long: address.coordinates[0],
      },
    })

    setExistsProducts(!!data.pocSearch.length)

    data.pocSearch.forEach(async distributorData => {
      const productsData = await fetchProducts(distributorData.id)

      setProductList(previousList => {
        return [...previousList, ...productsData.products]
      })
    })

    dispatch(setLoading(false))
  }, [address, dispatch, fetchProducts, history])

  React.useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className='c-products'>
      {existsProducts ? <ProductList list={productList} /> : <NotFoundProducts />}
    </Container>
  )
}

export default ProductsView
