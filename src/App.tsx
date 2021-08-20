import React from 'react'
import { Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { Provider as ReduxProvider } from 'react-redux'

import browserHistory from './routes/browserHistory'
import client from './http/apollo'

import store from './store'

import Views from './views'

import './styles/_index.scss'

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <Router history={browserHistory}>
          <Views />
        </Router>
      </ApolloProvider>
    </ReduxProvider>
  )
}

export default App
