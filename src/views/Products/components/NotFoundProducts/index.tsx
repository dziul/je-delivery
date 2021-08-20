import React from 'react'
import { useAppHistory } from '~/routes'
import { useAppDispatch, useAppSelector } from '~/store'
import { resetAddress } from '~/store/user'

import './styles.scss'

const NotFoundProducts: React.FC = () => {
  const place = useAppSelector(state => state.user.address?.place)
  const history = useAppHistory()
  const dispatch = useAppDispatch()

  const handleButtonClick = () => {
    dispatch(resetAddress())
    history.replace('/')
  }

  return (
    <div className='c-products__notFound'>
      <h3>Triste, estamos sem produtos nesse momento para o endereço</h3>
      <address>{place}</address>
      <button onClick={handleButtonClick}>Alterar meu endereço</button>
    </div>
  )
}

export default NotFoundProducts
