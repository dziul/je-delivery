import { FunctionComponent } from 'react'
import { RouteProps as RouterDomRouteProps, useLocation } from 'react-router-dom'

interface RouteStateCoreErrorProp {
  message: string
  status: number
}

export interface RouteStateCoreProps {
  title: string
  from: Omit<ReturnType<typeof useLocation>, 'state'> & { state: RouteStateProps }
  error: Partial<RouteStateCoreErrorProp>
}

export type RouteStateProps = Partial<RouteStateCoreProps>

export interface RouteProps<S extends Record<string, any> = RouteStateProps>
  extends Omit<
    RouterDomRouteProps,
    'component' | 'children' | 'path' | 'render' | 'strict' | 'sensitive' | 'location'
  > {
  path: string
  state?: S
}

export interface RouteConfigProps<S = RouteStateProps> extends RouteProps<S> {
  children?: RouteConfigProps<S>[]
  component: FunctionComponent
}
