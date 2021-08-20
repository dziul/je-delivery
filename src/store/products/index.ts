import { createAction, createReducer } from '@reduxjs/toolkit'

import { PocProduct as Product } from '~/http/services/graphql/queries/products'

//types
enum Types {
  AddProductInCart = 'products/AddProductInCart',
  RemoveProductInCart = 'products/RemoveProductInCart',
  ResetProductInCart = 'products/ResetProductInCart',
}

//state

interface StateCartProps {
  amount: number
  data: Product
}

interface State {
  cart: Partial<Record<string, StateCartProps>>
}

const initialState: State = {
  cart: {},
}

//actions
export const addProductInCart = createAction<Product>(Types.AddProductInCart)
export const removeProductInCart = createAction<Product>(Types.RemoveProductInCart)
export const resetProductInCart = createAction<Product>(Types.ResetProductInCart)

//reduces
export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(addProductInCart, (state, { payload: data }) => {
      const productId = data.productVariants[0].productVariantId
      const cartItem = state.cart[productId]
      if (cartItem) {
        state.cart = {
          ...state.cart,
          [productId]: { ...cartItem, amount: cartItem.amount + 1 },
        }
      } else {
        state.cart = {
          ...state.cart,
          [productId]: { data, amount: 1 },
        }
      }
    })
    .addCase(removeProductInCart, (state, { payload: data }) => {
      const productId = data.productVariants[0].productVariantId
      const cartItem = state.cart[productId]
      if (cartItem) {
        const { amount } = cartItem
        state.cart = {
          ...state.cart,
          [productId]: { ...cartItem, amount: amount ? cartItem.amount - 1 : 0 },
        }
      }
    })
    .addCase(resetProductInCart, (state, { payload: data }) => {
      const productId = data.productVariants[0].productVariantId
      const cartItem = state.cart[productId]
      if (cartItem) {
        const { [productId]: _, ...restCart } = { ...state.cart }
        console.log(_)
        state.cart = restCart
      }
    })
})
