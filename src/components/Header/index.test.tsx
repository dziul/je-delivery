import React from 'react'
import { render, screen } from '@testing-library/react'

import { Provider as ReduxProvider } from 'react-redux'
import store from '~/store'
import { setAddress } from '~/store/user'
import { addProductInCart } from '~/store/products'
import { PocProduct as Product } from '~/http/services/graphql/queries/products'

import Header from './index'
import { act } from 'react-dom/test-utils'

global.console.error = jest.fn()

describe('Test Header component', () => {
  it("should throw the exception if you don't use Provider's redux", () => {
    const handle = () => {
      render(<Header />)
    }

    expect(handle).toThrowError()
  })

  it('should initial cart with 0 and without address', () => {
    const { container } = render(
      <ReduxProvider store={store}>
        <Header />
      </ReduxProvider>
    )

    const countElement = container.querySelector('.c-header__bag-info__count')
    const addressElement = container.querySelector('.c-header__content-left-info-address')

    expect(countElement).toHaveTextContent('0')
    expect(addressElement).not.toBeInTheDocument()
  })

  it('should show info address when store user have address', () => {
    const addressData = {
      place: 'Rua Gustavo Fino',
      coordinates: [0, 0],
    }

    store.dispatch(setAddress(addressData))

    const { container } = render(
      <ReduxProvider store={store}>
        <Header />
      </ReduxProvider>
    )
    const addressElement = container.querySelector('.c-header__content-left-info-address')

    expect(addressElement).toHaveTextContent(addressData.place)
  })

  it('should have info count products and total amount', () => {
    const product = (id: string, price: number): Product => ({
      id: '0',
      images: [{ url: '' }],
      productVariants: [
        {
          price: price,
          productVariantId: id,
          title: 'test 1',
        },
      ],
    })

    store.dispatch(addProductInCart(product('00001', 10)))

    const { container } = render(
      <ReduxProvider store={store}>
        <Header />
      </ReduxProvider>
    )
    const countElement = container.querySelector('.c-header__bag-info__count')

    expect(countElement).toHaveTextContent('1 item')
    expect(countElement).toHaveTextContent('R$ 10,00')

    act(() => {
      store.dispatch(addProductInCart(product('00002', 1.5)))
    })

    expect(countElement).toHaveTextContent('2 itens')
    expect(countElement).toHaveTextContent('R$ 11,50')
  })
})
