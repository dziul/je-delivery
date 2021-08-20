import { History, createBrowserHistory } from 'history'
import { RouteStateCoreProps } from './types'

type ReadonlyBrowserHistory<S = Partial<RouteStateCoreProps>> = Readonly<History<S>>
const browserHistory: ReadonlyBrowserHistory = createBrowserHistory()

export default browserHistory
