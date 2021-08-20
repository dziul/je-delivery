import { createHttpLink } from '@apollo/client'

const { REACT_APP_GRAPHQL_URL } = process.env

const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_URL,
  credentials: 'same-origin',
})

export default httpLink
