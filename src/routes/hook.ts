import { useLocation, useHistory } from 'react-router-dom'

import { RouteStateProps } from './types'

export const useAppLocation = () => useLocation<RouteStateProps>()
export const useAppHistory = () => useHistory<RouteStateProps>()
