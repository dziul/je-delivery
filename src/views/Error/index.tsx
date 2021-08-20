import React from 'react'
import { Container } from '~/components'
import { useAppHistory, useAppLocation } from '~/routes'

import './styles.scss'

interface ErrorProp {
  title: string
  description: string
  buttonUrl: string
  buttonLabel: string
}

const ErrorView: React.FC = () => {
  const { state } = useAppLocation()
  const history = useAppHistory()

  const errorData = React.useMemo(() => {
    const { error } = state
    let innerErrorData = {} as Partial<ErrorProp>
    switch (error?.status) {
      case 404:
        innerErrorData = {
          title: 'Página que tentou acessar não existe',
          description: 'Parece que passou da conta, amigo',
          buttonLabel: 'Ir para página principal',
          buttonUrl: '/',
        }
        break

      default:
        break
    }

    return {
      title: 'Deu ruim',
      description: error?.message || 'a cerveja esquentou dessa vez',
      buttonLabel: 'Ir para página principal',
      buttonUrl: '/',
      ...innerErrorData,
    }
  }, [state])

  React.useEffect(() => {
    const { error } = state
    if (!error) {
    }
  }, [state])

  const handleButtonCLick = () => {
    history.replace(errorData.buttonUrl)
  }

  return (
    <div className='c-error'>
      <Container>
        <h2>{errorData.title}</h2>
        <p>{errorData.description}</p>
        <button onClick={handleButtonCLick}>{errorData.buttonLabel}</button>
      </Container>
    </div>
  )
}

export default ErrorView
