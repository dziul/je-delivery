import React, { useMemo, useEffect } from 'react'

import { Route } from 'react-router-dom'
import { useTitleDocument } from '~/utils'

import { RouteProps } from './types'
import { useAppLocation } from './hook'

const RouteComponent: React.FC<RouteProps> = ({ state: stateProp, ...propRest }) => {
  const location = useAppLocation()

  const state = useMemo(() => {
    if (stateProp) {
      return { ...stateProp, ...location.state }
    }
    return location.state
  }, [stateProp, location.state])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useTitleDocument(state.title || document.title, `- ${process.env.REACT_APP_NAME}`)

  return (
    <Route
      {...propRest}
      location={{
        ...location,
        state,
      }}
    />
  )
}

export default RouteComponent
