import React from 'react'

import logoSymbol from '~/assets/images/white-logo/symbol.png'
import logoText from '~/assets/images/white-logo/text.png'
import { Container } from '~/components/UI'

import { HiOutlineShoppingBag } from 'react-icons/hi'

import { useAppSelector } from '~/store'
import { formatCurrency } from '~/utils'
import './styles.scss'

const Header: React.FC = () => {
  const usePlace = useAppSelector(state => state.user.address?.place)
  const cart = useAppSelector(state => state.products.cart)

  const totalProducts = React.useMemo(() => {
    return Object.values(cart).reduce((previous, current) => {
      return previous + (current?.amount || 0)
    }, 0)
  }, [cart])

  const totalAmountProducts = React.useMemo(() => {
    return Object.values(cart).reduce((previous, current) => {
      const price = current?.data.productVariants[0].price || 0
      const amount = current?.amount || 0
      return previous + amount * price
    }, 0)
  }, [cart])

  return (
    <div className='c-header'>
      <Container className='c-header__content'>
        <div className='c-header__content-left'>
          <div>
            <img src={logoSymbol} height={60} aria-hidden={true} alt='' />
            <img src={logoText} height={60} alt='Jé Delivery' />
          </div>

          {usePlace && (
            <p className='c-header__content-left-info-address'>
              <small>receba agora em</small>
              <address>{usePlace}</address>
            </p>
          )}
        </div>
        <div className='c-header__content-right'>
          {/* <button>Acessar minha conta</button> */}
          <span className='c-header__bag-info'>
            <span className='c-header__bag-info__icon'>
              <HiOutlineShoppingBag />
            </span>
            <span className='c-header__bag-info__count'>
              {totalProducts +
                (totalProducts > 1 ? ' itens' : totalProducts === 0 ? '' : ' item')}
              {!!totalAmountProducts && (
                <span>{formatCurrency(totalAmountProducts)}</span>
              )}
            </span>
          </span>
        </div>
      </Container>
    </div>
  )
}

export default Header
