import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider as ReduxProvider } from 'react-redux'

import store from '~/store'

import Home from './index'

describe('Test Home View Component', () => {
  it('should only render', () => {
    render(
      <ReduxProvider store={store}>
        <Home />
      </ReduxProvider>
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
