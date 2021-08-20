import React from 'react'
import { Redirect as RedirectBase } from 'react-router-dom'

import { RouteConfigProps, routesFlat, useAppLocation } from '~/routes'

type RedirectPropTo = string | Partial<ReturnType<typeof useAppLocation>>

const Redirect =
  (to: RedirectPropTo): React.FC =>
  () =>
    <RedirectBase to={to} />

export const routesConfig: RouteConfigProps[] = [
  {
    path: '/produtos',
    state: {
      title: 'Produtos',
    },
    component: React.lazy(() => import('./Products')),
    exact: true,
  },
  {
    path: '/',
    component: React.lazy(() => import('./Home')),
    exact: true,
  },
  {
    path: '/erro',
    component: React.lazy(() => import('./Error')),
  },
  {
    path: '*',
    component: Redirect({
      pathname: '/erro',
      state: {
        error: {
          status: 404,
        },
      },
    }),
  },
]

const routes = routesFlat(routesConfig)

export default routes
