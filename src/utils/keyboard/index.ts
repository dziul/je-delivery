import { KeyboardEvent } from 'react'

export const getKeyOfKeyboard = <T extends HTMLElement>({
  key,
  code,
}: KeyboardEvent<T>): string => {
  return key.trim() ? key : code
}
