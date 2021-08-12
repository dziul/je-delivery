import { ApolloClient, InMemoryCache } from '@apollo/client'

import link from './link'

const { NODE_ENV, REACT_APP_NAME, REACT_APP_VERSION } = process.env

const client = new ApolloClient({
  link,
  name: REACT_APP_NAME,
  version: REACT_APP_VERSION,
  cache: new InMemoryCache(),
  connectToDevTools: NODE_ENV !== 'production',
})

export default client
