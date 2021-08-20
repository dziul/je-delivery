import { ApolloClient, InMemoryCache } from '@apollo/client'

import link from './link'

// const { NODE_ENV, REACT_APP_ID_NAME, REACT_APP_VERSION } = process.env
const { NODE_ENV } = process.env

const client = new ApolloClient({
  link,
  // name: REACT_APP_ID_NAME,
  // version: REACT_APP_VERSION,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  connectToDevTools: NODE_ENV !== 'production',
})

export default client
