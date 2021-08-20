import { onError } from '@apollo/client/link/error'

import history from '~/routes/browserHistory'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  let message: string | undefined
  if (graphQLErrors) {
    message = graphQLErrors[0].message
  }

  if (networkError) {
    message = networkError.message
  }

  history.push('/erro', {
    from: history.location,
    error: {
      message,
    },
  })
})

export default errorLink
