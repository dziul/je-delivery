import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { getKeyOfKeyboard } from './index'

describe('getKeyOfKeyboard test', () => {
  it('should when pressing the space keyboard, return Space', () => {
    let keyCode = ''
    const should = 'Space'

    render(
      <input
        onKeyDown={e => {
          keyCode = getKeyOfKeyboard(e)
        }}
      />
    )

    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: ' ', code: should })

    expect(keyCode).toEqual(should)
  })

  it('should when pressing the ShiftRight keyboard, return Shift', () => {
    let keyCode = ''
    const should = 'Shift'

    render(
      <input
        onKeyDown={e => {
          keyCode = getKeyOfKeyboard(e)
        }}
      />
    )

    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: should, code: 'ShiftRight' })

    expect(keyCode).toEqual(should)
  })
})
