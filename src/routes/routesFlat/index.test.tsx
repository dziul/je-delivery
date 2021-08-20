import React from 'react'

import { RouteConfigProps } from '~/routes/types'

import routesFlat from './index'

const ComponentFake: React.FC = () => <div />

describe('Test function routesFlat', () => {
  it('should return a new array with all children flat', () => {
    const routes: RouteConfigProps[] = [
      {
        path: '/one',
        component: ComponentFake,
        children: [
          {
            path: '/two',
            component: ComponentFake,
            children: [
              {
                path: '/:id',
                component: ComponentFake,
              },
            ],
          },
          { path: '/three', component: ComponentFake },
        ],
      },
    ]

    const routesShould: RouteConfigProps[] = [
      {
        path: '/one/two/:id',
        component: ComponentFake,
        state: {},
      },
      {
        path: '/one/two',
        component: ComponentFake,
        state: {},
      },
      { path: '/one/three', component: ComponentFake, state: {} },
      {
        path: '/one',
        component: ComponentFake,
        state: {},
      },
    ]

    expect(routesFlat(routes)).toEqual(routesShould)
  })

  it('should return a new array with all children flat and props concatenated with parent', () => {
    type State = { title?: string; tag?: string }
    const routes: RouteConfigProps<State>[] = [
      {
        path: '/one',
        component: ComponentFake,
        state: { title: 'Title parent', tag: 'Tag parent' },
        exact: true,
        children: [
          {
            path: '/two',
            component: ComponentFake,
            state: { tag: 'Tag child' },
          },
        ],
      },
    ]

    const routesShould: RouteConfigProps<State>[] = [
      {
        path: '/one/two',
        component: ComponentFake,
        state: { title: 'Title parent', tag: 'Tag child' },
        exact: true,
      },
      {
        path: '/one',
        component: ComponentFake,
        state: { title: 'Title parent', tag: 'Tag parent' },
        exact: true,
      },
    ]

    expect(routesFlat(routes)).toEqual(routesShould)
  })
})
