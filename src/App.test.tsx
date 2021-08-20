import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('should exist in the document', () => {
  const { container } = render(<App />)

  expect(container).toBeInTheDocument()
})
