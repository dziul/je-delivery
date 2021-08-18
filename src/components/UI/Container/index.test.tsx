import { render, screen } from '@testing-library/react'
import React from 'react'

import Container from './index'

describe('UI/Container test', () => {
  it('should add classname', () => {
    const { container } = render(<Container className='test one' />)
    expect(container.firstChild).toHaveClass('c-ui__container test one')
  })

  it('should exists children', () => {
    render(<Container>Example</Container>)
    expect(screen.getByText('Example')).toBeTruthy()
  })
})
