import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import { Provider as ReduxProvider } from 'react-redux'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

import Root from './index'

import store from '~/store'
import { act } from 'react-dom/test-utils'

describe('Root Views', () => {
  it('should when not path or accept /product without empty store, redirect to /erro', async () => {
    const history = createMemoryHistory()

    history.push('/no-no-baby')
    render(
      <ReduxProvider store={store}>
        <Router history={history}>
          <Root />
        </Router>
      </ReduxProvider>
    )
    expect(history.location.pathname).toBe('/erro')

    act(() => {
      history.push('/product')
    })

    await waitFor(() => {
      expect(history.location.pathname).toBe('/erro')
    })
  })

  it('should initial in Home', async () => {
    const history = createMemoryHistory()

    render(
      <ReduxProvider store={store}>
        <Router history={history}>
          <Root />
        </Router>
      </ReduxProvider>
    )

    const headerText = await screen.findByText(/bebidas geladas a preço/i)

    expect(headerText).toBeInTheDocument()
    expect(history.location.pathname).toBe('/')
  })
})
