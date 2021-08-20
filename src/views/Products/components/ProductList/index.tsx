import React from 'react'
import { PocProduct as Product } from '~/http/services/graphql/queries/products'

import { MdAdd, MdRemove } from 'react-icons/md'
import { IoTrashOutline } from 'react-icons/io5'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '~/store'
import {
  addProductInCart,
  removeProductInCart,
  resetProductInCart,
} from '~/store/products'
import { createClassName, formatCurrency } from '~/utils'

interface ProductListProps {
  list: Product[]
}
interface ProductListListProps {
  data: Product
}

const ProductListItem: React.FC<ProductListListProps> = ({ data }) => {
  const cart = useAppSelector(state => state.products.cart)

  const productId = data.productVariants[0].productVariantId
  const amount = cart[productId]?.amount || 0
  const price = data.productVariants[0].price

  const className = createClassName({
    'c-products__list-item': true,
    '--has': !!amount,
  })

  const dispatch = useAppDispatch()

  const handleButtonAdd = () => {
    dispatch(addProductInCart(data))
  }

  const handleButtonRemove = () => {
    dispatch(removeProductInCart(data))
  }

  const handleButtonReset = () => {
    dispatch(resetProductInCart(data))
  }

  return (
    <div className={className}>
      {!!amount && (
        <button
          className='c-products__list-item-button --remove-cart'
          aria-label='remover produto da sacala de compra'
          onClick={handleButtonReset}>
          <IoTrashOutline />
        </button>
      )}

      <div className='c-products__list-item-header'>
        <img
          src={data.images[0].url}
          alt={data.productVariants[0].title}
          className='c-products__list-item-image'
        />
      </div>
      <div className='c-products__list-item-body'>
        <h2 className='c-products__list-item-title'>{data.productVariants[0].title}</h2>
        <span className='c-products__list-item-price'>{formatCurrency(price)}</span>
        <div className='c-products__list-item__action'>
          <button
            className='c-products__list-item-button'
            aria-label='adiciona menos 1'
            onClick={handleButtonRemove}
            disabled={!amount}>
            <MdRemove />
          </button>
          <span className='c-products__list-item-result'>{amount}</span>
          <button
            className='c-products__list-item-button'
            aria-label='adicionar mais 1'
            onClick={handleButtonAdd}>
            <MdAdd />
          </button>

          {!!amount && (
            <span className='c-products__list-item__action-total'>
              {formatCurrency(price * amount)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const ProductList: React.FC<ProductListProps> = ({ list }) => {
  return (
    <div className='c-products__list'>
      {list.map(item => (
        <ProductListItem key={item.productVariants[0].productVariantId} data={item} />
      ))}
    </div>
  )
}

export default ProductList
