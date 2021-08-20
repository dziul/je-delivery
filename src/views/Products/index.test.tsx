import React from 'react'
import { render } from '@testing-library/react'

import { Provider as ReduxProvider } from 'react-redux'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

import store from '~/store'

import ProductsView from './index'
describe('Test Products View', () => {
  it('should have redirect to home when empty store product', () => {
    const history = createMemoryHistory()

    history.push('/just_to_know_it_has_actually_changed')

    render(
      <ReduxProvider store={store}>
        <Router history={history}>
          <ProductsView />
        </Router>
      </ReduxProvider>
    )

    expect(history.location.pathname).toBe('/')
  })
})
