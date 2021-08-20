import formatCurrency from './index'

// solução para não precisar adicionar 'full-icu'
const removeSpace = (text: string) => text.replace(/\s/g, '')

describe('formatCurrency', () => {
  it('should return currency BRL using ten', () => {
    const target = removeSpace(formatCurrency(10))
    expect(target).toEqual('R$10,00')
  })
  it('should return currency BRL using thousand', () => {
    const target = removeSpace(formatCurrency(1000))
    expect(target).toEqual('R$1.000,00')
  })
  it('should return currency BRL using fractional number', () => {
    const target = removeSpace(formatCurrency(0.49564))
    expect(target).toEqual('R$0,50')
  })
})
