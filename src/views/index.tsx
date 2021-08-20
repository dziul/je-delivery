import React from 'react'
import { Switch } from 'react-router-dom'

import { Loading, Header, Body, Footer } from '~/components'

import { Route } from '~/routes'
import { useAppSelector } from '~/store'

import routes from './routesConfig'

const Views: React.FC = () => {
  const loading = useAppSelector(state => state.common.loading)

  return (
    <>
      <Header />

      <Body>
        {loading && <Loading />}

        <React.Suspense fallback={<Loading />}>
          <Switch>
            {routes.map(({ component: Component, path, ...restProps }) => (
              <Route key={path} path={path} {...restProps}>
                <Component />
              </Route>
            ))}
          </Switch>
        </React.Suspense>
      </Body>

      <Footer />
    </>
  )
}

export default Views
